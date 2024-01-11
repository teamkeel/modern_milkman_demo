import { UpdateOrder, UpdateOrderHooks, models } from "@teamkeel/sdk";
import { processOrder } from "../processOrder";

// To learn more about what you can do with hooks,
// visit https://docs.keel.so/functions
const hooks: UpdateOrderHooks = {
  beforeWrite: async (ctx, inputs, query) => {
    return processOrder({ query, type: "update", inputs });
  },
};

export default UpdateOrder(hooks);
