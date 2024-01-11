import { CreateOrder, CreateOrderHooks, models } from "@teamkeel/sdk";
import { processOrder } from "../processOrder";

// To learn more about what you can do with hooks,
// visit https://docs.keel.so/functions
const hooks: CreateOrderHooks = {
  beforeWrite: async (ctx, inputs, query) => {
    return processOrder({ query, type: "create", inputs });
  },
};

export default CreateOrder(hooks);
