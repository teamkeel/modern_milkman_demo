import * as sdk from "@teamkeel/sdk";
import * as runtime from "@teamkeel/functions-runtime";
import "@teamkeel/testing-runtime";

export interface GetProductInput {
    id: string;
}
export interface CreateProductInput {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    size: string;
    specialOfferDiscount: number;
    specialOffer: boolean;
}
export interface ListProductsWhere {
}
export interface ListProductsInput {
    where?: ListProductsWhere;
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface UpdateProductWhere {
    id: string;
}
export interface UpdateProductValues {
    title?: string;
    description?: string;
    imageUrl?: string;
    gtin?: string | null;
}
export interface UpdateProductInput {
    where: UpdateProductWhere;
    values?: UpdateProductValues;
}
export interface DeleteProductInput {
    id: string;
}
export interface StringQueryInput {
    equals?: string | null;
    notEquals?: string | null;
    startsWith?: string;
    endsWith?: string;
    contains?: string;
    oneOf?: string[];
}
export interface ListCustomerWhere {
    firstName: StringQueryInput;
    lastName: StringQueryInput;
    email: StringQueryInput;
    phone: StringQueryInput;
}
export interface ListCustomerInput {
    where: ListCustomerWhere;
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface CreateCustomerInput {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    marketingConsent: boolean;
    deliveryAddress: string;
}
export interface CreateOrderInput {
    customer: CreateOrderCustomerInput;
    site: CreateOrderSiteInput;
    items: CreateOrderItemsInput[];
    status: OrderStatus;
}
export interface CreateOrderCustomerInput {
    id: string;
}
export interface CreateOrderSiteInput {
    id: string;
}
export interface CreateOrderItemsInput {
    product: CreateOrderItemsProductInput;
    quantity: number;
    price: number;
}
export interface CreateOrderItemsProductInput {
    id: string;
}
export interface UpdateOrderWhere {
    id: string;
}
export interface UpdateOrderValues {
    customer: UpdateOrderCustomerInput;
    site: UpdateOrderSiteInput;
    items: UpdateOrderItemsInput[];
    status: OrderStatus;
}
export interface UpdateOrderCustomerInput {
    id: string;
}
export interface UpdateOrderSiteInput {
    id: string;
}
export interface UpdateOrderItemsInput {
    product: UpdateOrderItemsProductInput;
    quantity: number;
    price: number;
}
export interface UpdateOrderItemsProductInput {
    id: string;
}
export interface UpdateOrderInput {
    where: UpdateOrderWhere;
    values: UpdateOrderValues;
}
export interface CreateSiteProductInput {
    product: CreateSiteProductProductInput;
    locations: CreateSiteProductLocationsInput[];
    price: number;
}
export interface CreateSiteProductProductInput {
    id: string;
}
export interface CreateSiteProductLocationsInput {
    location: CreateSiteProductLocationsLocationInput;
}
export interface CreateSiteProductLocationsLocationInput {
    id: string;
}
export interface ListSiteProductWhere {
}
export interface ListSiteProductInput {
    where?: ListSiteProductWhere;
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface UpdateSiteProductWhere {
    id: string;
}
export interface UpdateSiteProductValues {
    price: number;
}
export interface UpdateSiteProductInput {
    where: UpdateSiteProductWhere;
    values: UpdateSiteProductValues;
}
export interface ListSiteProductLocationWhere {
}
export interface ListSiteProductLocationInput {
    where?: ListSiteProductLocationWhere;
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface UpdateSiteProductLocationWhere {
    id: string;
}
export interface UpdateSiteProductLocationValues {
    quantity: number;
}
export interface UpdateSiteProductLocationInput {
    where: UpdateSiteProductLocationWhere;
    values: UpdateSiteProductLocationValues;
}
export interface EmailPasswordInput {
    email: string;
    password: string;
}
export interface AuthenticateInput {
    createIfNotExists?: boolean;
    emailPassword: EmailPasswordInput;
}
export interface AuthenticateResponse {
    identityCreated: boolean;
    token: string;
}
export interface RequestPasswordResetInput {
    email: string;
    redirectUrl: string;
}
export interface RequestPasswordResetResponse {
}
export interface ResetPasswordInput {
    token: string;
    password: string;
}
export interface ResetPasswordResponse {
}
export type SlackmessageEvent = (SlackmessageCustomerCreatedEvent);
export interface SlackmessageCustomerCreatedEvent {
    eventName: "customer.created";
    occurredAt: Date;
    identityId?: string;
    target: SlackmessageCustomerCreatedEventTarget;
}
export interface SlackmessageCustomerCreatedEventTarget {
    id: string;
    type: string;
    data: sdk.Customer;
}
declare class ActionExecutor {
    withIdentity(identity: sdk.Identity): ActionExecutor;
    withAuthToken(token: string): ActionExecutor;
    getProduct(i: GetProductInput): Promise<sdk.Product | null>;
    createProduct(i: CreateProductInput): Promise<sdk.Product>;
    listProducts(i?: ListProductsInput): Promise<{results: sdk.Product[], pageInfo: runtime.PageInfo}>;
    updateProduct(i: UpdateProductInput): Promise<sdk.Product>;
    deleteProduct(i: DeleteProductInput): Promise<string>;
    listCustomer(i: ListCustomerInput): Promise<{results: sdk.Customer[], pageInfo: runtime.PageInfo}>;
    createCustomer(i: CreateCustomerInput): Promise<sdk.Customer>;
    createOrder(i: CreateOrderInput): Promise<sdk.Order>;
    updateOrder(i: UpdateOrderInput): Promise<sdk.Order>;
    createSiteProduct(i: CreateSiteProductInput): Promise<sdk.SiteProduct>;
    listSiteProduct(i?: ListSiteProductInput): Promise<{results: sdk.SiteProduct[], pageInfo: runtime.PageInfo}>;
    updateSiteProduct(i: UpdateSiteProductInput): Promise<sdk.SiteProduct>;
    listSiteProductLocation(i?: ListSiteProductLocationInput): Promise<{results: sdk.SiteProductLocation[], pageInfo: runtime.PageInfo}>;
    updateSiteProductLocation(i: UpdateSiteProductLocationInput): Promise<sdk.SiteProductLocation>;
    authenticate(i: AuthenticateInput): Promise<AuthenticateResponse>;
    requestPasswordReset(i: RequestPasswordResetInput): Promise<RequestPasswordResetResponse>;
    resetPassword(i: ResetPasswordInput): Promise<ResetPasswordResponse>;
}
declare class SubscriberExecutor {
    slackmessage(e: SlackmessageEvent): Promise<void>;
}
export declare const subscribers: SubscriberExecutor;
export declare const actions: ActionExecutor;
export declare const models: sdk.ModelsAPI;
export declare function resetDatabase(): Promise<void>;
