import {
  CreateOrderInput,
  UpdateOrderInput,
  UpdateOrderValues,
  models,
} from "@teamkeel/sdk";

type Options =
  | { type: "create"; query: CreateOrderInput; inputs: CreateOrderInput }
  | { type: "update"; query: UpdateOrderValues; inputs: UpdateOrderInput };

export const processOrder = async ({ query, type, inputs }: Options) => {
  // Get the coupon code and the rest of the result to continue the query
  // See hooks docs about this: https://docs.keel.so/functions#hooks
  const { couponCode: maybeCouponCode, ...result } = { ...query };
  const couponCode =
    type === "create" ? maybeCouponCode : inputs.values.couponCode;

  // Get the original/updated items depending on the type of query.
  const items = type === "create" ? query.items : inputs.values.items;

  // Initialize our numbers
  let totalPrice = 0;
  let totalDiscount = 0;

  // We're going to be fetching products, so be sure to fetch them only once.
  const productCache = new Map();

  for (const item of items) {
    let product = productCache.get(item.product.id);

    // If a cache miss, fetch the product and cache it.
    // Important, since this is happening in a loop and
    // we may have the same product multiple times.
    if (!product) {
      product = await models.product.findOne({ id: item.product.id });
      productCache.set(item.product.id, product);
    }

    // Compute the price x quantity.
    totalPrice += (product?.price ?? 0) * item.quantity;
  }

  if (couponCode?.id) {
    const code = await models.couponCode.findOne({
      id: couponCode.id,
    });

    // A good opportunity to check if the coupon code is valid.
    // For now, let's just apply the discount.
    totalDiscount = ((code?.discount ?? 0) / 100) * totalPrice;
    totalPrice = totalPrice - totalDiscount;
  }

  return {
    ...result,
    couponCodeId: couponCode?.id ?? null,
    totalPrice,
    totalDiscount,
  };
};
