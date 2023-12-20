import sdk from "@teamkeel/sdk"
const { useDatabase, models } = sdk;
import { ActionExecutor, JobExecutor, SubscriberExecutor, sql } from "@teamkeel/testing-runtime";

export { models };
export const actions = new ActionExecutor({});
export const jobs = new JobExecutor({});
export const subscribers = new SubscriberExecutor({});
export async function resetDatabase() {
    const db = useDatabase();
    await sql`TRUNCATE TABLE keel_audit,"product","bundle","product_bundle","customer","order","order_items","site","site_product","site_product_location","storage_location","identity" CASCADE`.execute(db);
}
