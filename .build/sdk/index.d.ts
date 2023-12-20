import { Kysely, Generated } from "kysely"
import * as runtime from "@teamkeel/functions-runtime"
import { Headers } from 'node-fetch'

export type SortDirection = "asc" | "desc" | "ASC" | "DESC"
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
export enum OrderStatus {
    New = "New",
    Readytocollect = "Readytocollect",
    Collected = "Collected",
    Cancelled = "Cancelled",
}
export interface OrderStatusWhereCondition {
    equals?: OrderStatus | null;
    oneOf?: OrderStatus[] | null;
}
export interface ProductTable {
    title: string
    description: string
    imageUrl: string
    gtin: string | null
    price: number
    size: string
    unitPrice: string | null
    specialOfferDiscount: number
    specialOffer: boolean
    id: Generated<string>
    createdAt: Generated<Date>
    updatedAt: Generated<Date>
}
export interface Product {
    title: string
    description: string
    imageUrl: string
    gtin: string | null
    price: number
    size: string
    unitPrice: string | null
    specialOfferDiscount: number
    specialOffer: boolean
    id: string
    createdAt: Date
    updatedAt: Date
}
export interface ProductCreateValues {
    title: string
    description: string
    imageUrl: string
    gtin?: string | null
    price: number
    size: string
    unitPrice?: string | null
    specialOfferDiscount: number
    specialOffer: boolean
    id?: string
    createdAt?: Date
    updatedAt?: Date
}
export interface ProductWhereConditions {
    title?: string | runtime.StringWhereCondition | null;
    description?: string | runtime.StringWhereCondition | null;
    imageUrl?: string | runtime.StringWhereCondition | null;
    gtin?: string | runtime.StringWhereCondition | null;
    price?: number | runtime.NumberWhereCondition | null;
    size?: string | runtime.StringWhereCondition | null;
    unitPrice?: string | runtime.StringWhereCondition | null;
    specialOfferDiscount?: number | runtime.NumberWhereCondition | null;
    specialOffer?: boolean | runtime.BooleanWhereCondition | null;
    bundles?: ProductBundleWhereConditions | null;
    id?: string | runtime.IDWhereCondition | null;
    createdAt?: Date | runtime.DateWhereCondition | null;
    updatedAt?: Date | runtime.DateWhereCondition | null;
}
export type ProductOrderBy = {
    title?: SortDirection,
    description?: SortDirection,
    imageUrl?: SortDirection,
    gtin?: SortDirection,
    price?: SortDirection,
    size?: SortDirection,
    unitPrice?: SortDirection,
    specialOfferDiscount?: SortDirection,
    specialOffer?: SortDirection,
    id?: SortDirection,
    createdAt?: SortDirection,
    updatedAt?: SortDirection
}

export interface ProductFindManyParams {
    where?: ProductWhereConditions;
    limit?: number;
    offset?: number;
    orderBy?: ProductOrderBy;
}
export type ProductUniqueConditions = 
    | {bundles: ProductBundleUniqueConditions}
    | {id: string};
export type ProductAPI = {
    /**
    * Create a Product record
    * @example
    ```typescript
    const record = await models.product.create({
        title: '',
        description: '',
        imageUrl: '',
        price: 0,
        size: '',
        specialOfferDiscount: 0,
        specialOffer: false,
        bundles: undefined
    });
    ```
    */
    create(values: ProductCreateValues): Promise<Product>;
    /**
    * Update a Product record
    * @example
    ```typescript
    const product = await models.product.update({ id: "abc" }, { title: XXX }});
    ```
    */
    update(where: ProductUniqueConditions, values: Partial<Product>): Promise<Product>;
    /**
    * Deletes a Product record
    * @example
    ```typescript
    const deletedId = await models.product.delete({ id: 'xxx' });
    ```
    */
    delete(where: ProductUniqueConditions): Promise<string>;
    /**
    * Finds a single Product record
    * @example
    ```typescript
    const product = await models.product.findOne({ id: 'xxx' });
    ```
    */
    findOne(where: ProductUniqueConditions): Promise<Product | null>;
    /**
    * Finds multiple Product records
    * @example
    ```typescript
    const products = await models.product.findMany({ where: { createdAt: { after: new Date(2022, 1, 1) } }, orderBy: { id: 'asc' }, limit: 1000, offset: 50 });
    ```
    */
    findMany(params?: ProductFindManyParams | undefined): Promise<Product[]>;
    /**
    * Creates a new query builder with the given conditions applied
    * @example
    ```typescript
    const records = await models.product.where({ createdAt: { after: new Date(2020, 1, 1) } }).orWhere({ updatedAt: { after: new Date(2020, 1, 1) } }).findMany();
    ```
    */
    where(where: ProductWhereConditions): ProductQueryBuilder;
}
export type ProductQueryBuilderParams = {
    limit?: number;
    offset?: number;
    orderBy?: ProductOrderBy;
}
export type ProductQueryBuilder = {
    where(where: ProductWhereConditions): ProductQueryBuilder;
    orWhere(where: ProductWhereConditions): ProductQueryBuilder;
    findMany(params?: ProductQueryBuilderParams): Promise<Product[]>;
    findOne(params?: ProductQueryBuilderParams): Promise<Product>;
    delete() : Promise<string>;
    update(values: Partial<Product>) : Promise<Product>;
}
export interface BundleTable {
    title: string
    description: string
    imageUrl: string
    gtin: string | null
    price: number
    size: string
    unitPrice: string | null
    specialOfferDiscount: number
    specialOffer: boolean
    id: Generated<string>
    createdAt: Generated<Date>
    updatedAt: Generated<Date>
}
export interface Bundle {
    title: string
    description: string
    imageUrl: string
    gtin: string | null
    price: number
    size: string
    unitPrice: string | null
    specialOfferDiscount: number
    specialOffer: boolean
    id: string
    createdAt: Date
    updatedAt: Date
}
export interface BundleCreateValues {
    title: string
    description: string
    imageUrl: string
    gtin?: string | null
    price: number
    size: string
    unitPrice?: string | null
    specialOfferDiscount: number
    specialOffer: boolean
    id?: string
    createdAt?: Date
    updatedAt?: Date
}
export interface BundleWhereConditions {
    title?: string | runtime.StringWhereCondition | null;
    description?: string | runtime.StringWhereCondition | null;
    imageUrl?: string | runtime.StringWhereCondition | null;
    gtin?: string | runtime.StringWhereCondition | null;
    price?: number | runtime.NumberWhereCondition | null;
    size?: string | runtime.StringWhereCondition | null;
    unitPrice?: string | runtime.StringWhereCondition | null;
    specialOfferDiscount?: number | runtime.NumberWhereCondition | null;
    specialOffer?: boolean | runtime.BooleanWhereCondition | null;
    products?: ProductBundleWhereConditions | null;
    id?: string | runtime.IDWhereCondition | null;
    createdAt?: Date | runtime.DateWhereCondition | null;
    updatedAt?: Date | runtime.DateWhereCondition | null;
}
export type BundleOrderBy = {
    title?: SortDirection,
    description?: SortDirection,
    imageUrl?: SortDirection,
    gtin?: SortDirection,
    price?: SortDirection,
    size?: SortDirection,
    unitPrice?: SortDirection,
    specialOfferDiscount?: SortDirection,
    specialOffer?: SortDirection,
    id?: SortDirection,
    createdAt?: SortDirection,
    updatedAt?: SortDirection
}

export interface BundleFindManyParams {
    where?: BundleWhereConditions;
    limit?: number;
    offset?: number;
    orderBy?: BundleOrderBy;
}
export type BundleUniqueConditions = 
    | {products: ProductBundleUniqueConditions}
    | {id: string};
export type BundleAPI = {
    /**
    * Create a Bundle record
    * @example
    ```typescript
    const record = await models.bundle.create({
        title: '',
        description: '',
        imageUrl: '',
        price: 0,
        size: '',
        specialOfferDiscount: 0,
        specialOffer: false,
        products: undefined
    });
    ```
    */
    create(values: BundleCreateValues): Promise<Bundle>;
    /**
    * Update a Bundle record
    * @example
    ```typescript
    const bundle = await models.bundle.update({ id: "abc" }, { title: XXX }});
    ```
    */
    update(where: BundleUniqueConditions, values: Partial<Bundle>): Promise<Bundle>;
    /**
    * Deletes a Bundle record
    * @example
    ```typescript
    const deletedId = await models.bundle.delete({ id: 'xxx' });
    ```
    */
    delete(where: BundleUniqueConditions): Promise<string>;
    /**
    * Finds a single Bundle record
    * @example
    ```typescript
    const bundle = await models.bundle.findOne({ id: 'xxx' });
    ```
    */
    findOne(where: BundleUniqueConditions): Promise<Bundle | null>;
    /**
    * Finds multiple Bundle records
    * @example
    ```typescript
    const bundles = await models.bundle.findMany({ where: { createdAt: { after: new Date(2022, 1, 1) } }, orderBy: { id: 'asc' }, limit: 1000, offset: 50 });
    ```
    */
    findMany(params?: BundleFindManyParams | undefined): Promise<Bundle[]>;
    /**
    * Creates a new query builder with the given conditions applied
    * @example
    ```typescript
    const records = await models.bundle.where({ createdAt: { after: new Date(2020, 1, 1) } }).orWhere({ updatedAt: { after: new Date(2020, 1, 1) } }).findMany();
    ```
    */
    where(where: BundleWhereConditions): BundleQueryBuilder;
}
export type BundleQueryBuilderParams = {
    limit?: number;
    offset?: number;
    orderBy?: BundleOrderBy;
}
export type BundleQueryBuilder = {
    where(where: BundleWhereConditions): BundleQueryBuilder;
    orWhere(where: BundleWhereConditions): BundleQueryBuilder;
    findMany(params?: BundleQueryBuilderParams): Promise<Bundle[]>;
    findOne(params?: BundleQueryBuilderParams): Promise<Bundle>;
    delete() : Promise<string>;
    update(values: Partial<Bundle>) : Promise<Bundle>;
}
export interface ProductBundleTable {
    id: Generated<string>
    createdAt: Generated<Date>
    updatedAt: Generated<Date>
    productsId: string
    bundlesId: string
}
export interface ProductBundle {
    id: string
    createdAt: Date
    updatedAt: Date
    productsId: string
    bundlesId: string
}
export interface ProductBundleCreateValues {
    id?: string
    createdAt?: Date
    updatedAt?: Date
    productsId: string
    bundlesId: string
}
export interface ProductBundleWhereConditions {
    products?: ProductWhereConditions | null;
    bundles?: BundleWhereConditions | null;
    id?: string | runtime.IDWhereCondition | null;
    createdAt?: Date | runtime.DateWhereCondition | null;
    updatedAt?: Date | runtime.DateWhereCondition | null;
    productsId?: string | runtime.IDWhereCondition | null;
    bundlesId?: string | runtime.IDWhereCondition | null;
}
export type ProductBundleOrderBy = {
    id?: SortDirection,
    createdAt?: SortDirection,
    updatedAt?: SortDirection,
    productsId?: SortDirection,
    bundlesId?: SortDirection
}

export interface ProductBundleFindManyParams {
    where?: ProductBundleWhereConditions;
    limit?: number;
    offset?: number;
    orderBy?: ProductBundleOrderBy;
}
export type ProductBundleUniqueConditions = 
    | {id: string};
export type ProductBundleAPI = {
    /**
    * Create a ProductBundle record
    * @example
    ```typescript
    const record = await models.productBundle.create({
        products: undefined,
        bundles: undefined,
        productsId: undefined,
        bundlesId: undefined
    });
    ```
    */
    create(values: ProductBundleCreateValues): Promise<ProductBundle>;
    /**
    * Update a ProductBundle record
    * @example
    ```typescript
    const productBundle = await models.productBundle.update({ id: "abc" }, { products: XXX }});
    ```
    */
    update(where: ProductBundleUniqueConditions, values: Partial<ProductBundle>): Promise<ProductBundle>;
    /**
    * Deletes a ProductBundle record
    * @example
    ```typescript
    const deletedId = await models.productBundle.delete({ id: 'xxx' });
    ```
    */
    delete(where: ProductBundleUniqueConditions): Promise<string>;
    /**
    * Finds a single ProductBundle record
    * @example
    ```typescript
    const productBundle = await models.productBundle.findOne({ id: 'xxx' });
    ```
    */
    findOne(where: ProductBundleUniqueConditions): Promise<ProductBundle | null>;
    /**
    * Finds multiple ProductBundle records
    * @example
    ```typescript
    const productBundles = await models.productBundle.findMany({ where: { createdAt: { after: new Date(2022, 1, 1) } }, orderBy: { id: 'asc' }, limit: 1000, offset: 50 });
    ```
    */
    findMany(params?: ProductBundleFindManyParams | undefined): Promise<ProductBundle[]>;
    /**
    * Creates a new query builder with the given conditions applied
    * @example
    ```typescript
    const records = await models.productBundle.where({ createdAt: { after: new Date(2020, 1, 1) } }).orWhere({ updatedAt: { after: new Date(2020, 1, 1) } }).findMany();
    ```
    */
    where(where: ProductBundleWhereConditions): ProductBundleQueryBuilder;
}
export type ProductBundleQueryBuilderParams = {
    limit?: number;
    offset?: number;
    orderBy?: ProductBundleOrderBy;
}
export type ProductBundleQueryBuilder = {
    where(where: ProductBundleWhereConditions): ProductBundleQueryBuilder;
    orWhere(where: ProductBundleWhereConditions): ProductBundleQueryBuilder;
    findMany(params?: ProductBundleQueryBuilderParams): Promise<ProductBundle[]>;
    findOne(params?: ProductBundleQueryBuilderParams): Promise<ProductBundle>;
    delete() : Promise<string>;
    update(values: Partial<ProductBundle>) : Promise<ProductBundle>;
}
export interface CustomerTable {
    firstName: string
    lastName: string
    email: string
    phone: string
    marketingConsent: boolean
    deliveryAddress: string
    id: Generated<string>
    createdAt: Generated<Date>
    updatedAt: Generated<Date>
    identityId: string
}
export interface Customer {
    firstName: string
    lastName: string
    email: string
    phone: string
    marketingConsent: boolean
    deliveryAddress: string
    id: string
    createdAt: Date
    updatedAt: Date
    identityId: string
}
export interface CustomerCreateValues {
    firstName: string
    lastName: string
    email: string
    phone: string
    marketingConsent: boolean
    deliveryAddress: string
    id?: string
    createdAt?: Date
    updatedAt?: Date
    identityId: string
}
export interface CustomerWhereConditions {
    identity?: IdentityWhereConditions | null;
    firstName?: string | runtime.StringWhereCondition | null;
    lastName?: string | runtime.StringWhereCondition | null;
    email?: string | runtime.StringWhereCondition | null;
    phone?: string | runtime.StringWhereCondition | null;
    marketingConsent?: boolean | runtime.BooleanWhereCondition | null;
    deliveryAddress?: string | runtime.StringWhereCondition | null;
    id?: string | runtime.IDWhereCondition | null;
    createdAt?: Date | runtime.DateWhereCondition | null;
    updatedAt?: Date | runtime.DateWhereCondition | null;
    identityId?: string | runtime.IDWhereCondition | null;
}
export type CustomerOrderBy = {
    firstName?: SortDirection,
    lastName?: SortDirection,
    email?: SortDirection,
    phone?: SortDirection,
    marketingConsent?: SortDirection,
    deliveryAddress?: SortDirection,
    id?: SortDirection,
    createdAt?: SortDirection,
    updatedAt?: SortDirection,
    identityId?: SortDirection
}

export interface CustomerFindManyParams {
    where?: CustomerWhereConditions;
    limit?: number;
    offset?: number;
    orderBy?: CustomerOrderBy;
}
export type CustomerUniqueConditions = 
    | {id: string};
export type CustomerAPI = {
    /**
    * Create a Customer record
    * @example
    ```typescript
    const record = await models.customer.create({
        identity: undefined,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        marketingConsent: false,
        deliveryAddress: '',
        identityId: undefined
    });
    ```
    */
    create(values: CustomerCreateValues): Promise<Customer>;
    /**
    * Update a Customer record
    * @example
    ```typescript
    const customer = await models.customer.update({ id: "abc" }, { identity: XXX }});
    ```
    */
    update(where: CustomerUniqueConditions, values: Partial<Customer>): Promise<Customer>;
    /**
    * Deletes a Customer record
    * @example
    ```typescript
    const deletedId = await models.customer.delete({ id: 'xxx' });
    ```
    */
    delete(where: CustomerUniqueConditions): Promise<string>;
    /**
    * Finds a single Customer record
    * @example
    ```typescript
    const customer = await models.customer.findOne({ id: 'xxx' });
    ```
    */
    findOne(where: CustomerUniqueConditions): Promise<Customer | null>;
    /**
    * Finds multiple Customer records
    * @example
    ```typescript
    const customers = await models.customer.findMany({ where: { createdAt: { after: new Date(2022, 1, 1) } }, orderBy: { id: 'asc' }, limit: 1000, offset: 50 });
    ```
    */
    findMany(params?: CustomerFindManyParams | undefined): Promise<Customer[]>;
    /**
    * Creates a new query builder with the given conditions applied
    * @example
    ```typescript
    const records = await models.customer.where({ createdAt: { after: new Date(2020, 1, 1) } }).orWhere({ updatedAt: { after: new Date(2020, 1, 1) } }).findMany();
    ```
    */
    where(where: CustomerWhereConditions): CustomerQueryBuilder;
}
export type CustomerQueryBuilderParams = {
    limit?: number;
    offset?: number;
    orderBy?: CustomerOrderBy;
}
export type CustomerQueryBuilder = {
    where(where: CustomerWhereConditions): CustomerQueryBuilder;
    orWhere(where: CustomerWhereConditions): CustomerQueryBuilder;
    findMany(params?: CustomerQueryBuilderParams): Promise<Customer[]>;
    findOne(params?: CustomerQueryBuilderParams): Promise<Customer>;
    delete() : Promise<string>;
    update(values: Partial<Customer>) : Promise<Customer>;
}
export interface OrderTable {
    status: Generated<OrderStatus>
    id: Generated<string>
    createdAt: Generated<Date>
    updatedAt: Generated<Date>
    customerId: string
    siteId: string
}
export interface Order {
    status: OrderStatus
    id: string
    createdAt: Date
    updatedAt: Date
    customerId: string
    siteId: string
}
export interface OrderCreateValues {
    status?: OrderStatus
    id?: string
    createdAt?: Date
    updatedAt?: Date
    customerId: string
    siteId: string
}
export interface OrderWhereConditions {
    customer?: CustomerWhereConditions | null;
    site?: SiteWhereConditions | null;
    status?: OrderStatus | OrderStatusWhereCondition | null;
    items?: OrderItemsWhereConditions | null;
    id?: string | runtime.IDWhereCondition | null;
    createdAt?: Date | runtime.DateWhereCondition | null;
    updatedAt?: Date | runtime.DateWhereCondition | null;
    customerId?: string | runtime.IDWhereCondition | null;
    siteId?: string | runtime.IDWhereCondition | null;
}
export type OrderOrderBy = {
    status?: SortDirection,
    id?: SortDirection,
    createdAt?: SortDirection,
    updatedAt?: SortDirection,
    customerId?: SortDirection,
    siteId?: SortDirection
}

export interface OrderFindManyParams {
    where?: OrderWhereConditions;
    limit?: number;
    offset?: number;
    orderBy?: OrderOrderBy;
}
export type OrderUniqueConditions = 
    | {items: OrderItemsUniqueConditions}
    | {id: string};
export type OrderAPI = {
    /**
    * Create a Order record
    * @example
    ```typescript
    const record = await models.order.create({
        customer: undefined,
        site: undefined,
        items: undefined,
        customerId: undefined,
        siteId: undefined
    });
    ```
    */
    create(values: OrderCreateValues): Promise<Order>;
    /**
    * Update a Order record
    * @example
    ```typescript
    const order = await models.order.update({ id: "abc" }, { customer: XXX }});
    ```
    */
    update(where: OrderUniqueConditions, values: Partial<Order>): Promise<Order>;
    /**
    * Deletes a Order record
    * @example
    ```typescript
    const deletedId = await models.order.delete({ id: 'xxx' });
    ```
    */
    delete(where: OrderUniqueConditions): Promise<string>;
    /**
    * Finds a single Order record
    * @example
    ```typescript
    const order = await models.order.findOne({ id: 'xxx' });
    ```
    */
    findOne(where: OrderUniqueConditions): Promise<Order | null>;
    /**
    * Finds multiple Order records
    * @example
    ```typescript
    const orders = await models.order.findMany({ where: { createdAt: { after: new Date(2022, 1, 1) } }, orderBy: { id: 'asc' }, limit: 1000, offset: 50 });
    ```
    */
    findMany(params?: OrderFindManyParams | undefined): Promise<Order[]>;
    /**
    * Creates a new query builder with the given conditions applied
    * @example
    ```typescript
    const records = await models.order.where({ createdAt: { after: new Date(2020, 1, 1) } }).orWhere({ updatedAt: { after: new Date(2020, 1, 1) } }).findMany();
    ```
    */
    where(where: OrderWhereConditions): OrderQueryBuilder;
}
export type OrderQueryBuilderParams = {
    limit?: number;
    offset?: number;
    orderBy?: OrderOrderBy;
}
export type OrderQueryBuilder = {
    where(where: OrderWhereConditions): OrderQueryBuilder;
    orWhere(where: OrderWhereConditions): OrderQueryBuilder;
    findMany(params?: OrderQueryBuilderParams): Promise<Order[]>;
    findOne(params?: OrderQueryBuilderParams): Promise<Order>;
    delete() : Promise<string>;
    update(values: Partial<Order>) : Promise<Order>;
}
export interface OrderItemsTable {
    quantity: number
    price: number
    id: Generated<string>
    createdAt: Generated<Date>
    updatedAt: Generated<Date>
    orderId: string
    productId: string
}
export interface OrderItems {
    quantity: number
    price: number
    id: string
    createdAt: Date
    updatedAt: Date
    orderId: string
    productId: string
}
export interface OrderItemsCreateValues {
    quantity: number
    price: number
    id?: string
    createdAt?: Date
    updatedAt?: Date
    orderId: string
    productId: string
}
export interface OrderItemsWhereConditions {
    order?: OrderWhereConditions | null;
    product?: ProductWhereConditions | null;
    quantity?: number | runtime.NumberWhereCondition | null;
    price?: number | runtime.NumberWhereCondition | null;
    id?: string | runtime.IDWhereCondition | null;
    createdAt?: Date | runtime.DateWhereCondition | null;
    updatedAt?: Date | runtime.DateWhereCondition | null;
    orderId?: string | runtime.IDWhereCondition | null;
    productId?: string | runtime.IDWhereCondition | null;
}
export type OrderItemsOrderBy = {
    quantity?: SortDirection,
    price?: SortDirection,
    id?: SortDirection,
    createdAt?: SortDirection,
    updatedAt?: SortDirection,
    orderId?: SortDirection,
    productId?: SortDirection
}

export interface OrderItemsFindManyParams {
    where?: OrderItemsWhereConditions;
    limit?: number;
    offset?: number;
    orderBy?: OrderItemsOrderBy;
}
export type OrderItemsUniqueConditions = 
    | {id: string};
export type OrderItemsAPI = {
    /**
    * Create a OrderItems record
    * @example
    ```typescript
    const record = await models.orderItems.create({
        order: undefined,
        product: undefined,
        quantity: 0,
        price: 0,
        orderId: undefined,
        productId: undefined
    });
    ```
    */
    create(values: OrderItemsCreateValues): Promise<OrderItems>;
    /**
    * Update a OrderItems record
    * @example
    ```typescript
    const orderItems = await models.orderItems.update({ id: "abc" }, { order: XXX }});
    ```
    */
    update(where: OrderItemsUniqueConditions, values: Partial<OrderItems>): Promise<OrderItems>;
    /**
    * Deletes a OrderItems record
    * @example
    ```typescript
    const deletedId = await models.orderItems.delete({ id: 'xxx' });
    ```
    */
    delete(where: OrderItemsUniqueConditions): Promise<string>;
    /**
    * Finds a single OrderItems record
    * @example
    ```typescript
    const orderItems = await models.orderItems.findOne({ id: 'xxx' });
    ```
    */
    findOne(where: OrderItemsUniqueConditions): Promise<OrderItems | null>;
    /**
    * Finds multiple OrderItems records
    * @example
    ```typescript
    const orderItemss = await models.orderItems.findMany({ where: { createdAt: { after: new Date(2022, 1, 1) } }, orderBy: { id: 'asc' }, limit: 1000, offset: 50 });
    ```
    */
    findMany(params?: OrderItemsFindManyParams | undefined): Promise<OrderItems[]>;
    /**
    * Creates a new query builder with the given conditions applied
    * @example
    ```typescript
    const records = await models.orderItems.where({ createdAt: { after: new Date(2020, 1, 1) } }).orWhere({ updatedAt: { after: new Date(2020, 1, 1) } }).findMany();
    ```
    */
    where(where: OrderItemsWhereConditions): OrderItemsQueryBuilder;
}
export type OrderItemsQueryBuilderParams = {
    limit?: number;
    offset?: number;
    orderBy?: OrderItemsOrderBy;
}
export type OrderItemsQueryBuilder = {
    where(where: OrderItemsWhereConditions): OrderItemsQueryBuilder;
    orWhere(where: OrderItemsWhereConditions): OrderItemsQueryBuilder;
    findMany(params?: OrderItemsQueryBuilderParams): Promise<OrderItems[]>;
    findOne(params?: OrderItemsQueryBuilderParams): Promise<OrderItems>;
    delete() : Promise<string>;
    update(values: Partial<OrderItems>) : Promise<OrderItems>;
}
export interface SiteTable {
    title: string
    addressLine1: string
    addressLine2: string
    addressCity: string
    addressCountry: string
    currency: string | null
    id: Generated<string>
    createdAt: Generated<Date>
    updatedAt: Generated<Date>
}
export interface Site {
    title: string
    addressLine1: string
    addressLine2: string
    addressCity: string
    addressCountry: string
    currency: string | null
    id: string
    createdAt: Date
    updatedAt: Date
}
export interface SiteCreateValues {
    title: string
    addressLine1: string
    addressLine2: string
    addressCity: string
    addressCountry: string
    currency?: string | null
    id?: string
    createdAt?: Date
    updatedAt?: Date
}
export interface SiteWhereConditions {
    title?: string | runtime.StringWhereCondition | null;
    addressLine1?: string | runtime.StringWhereCondition | null;
    addressLine2?: string | runtime.StringWhereCondition | null;
    addressCity?: string | runtime.StringWhereCondition | null;
    addressCountry?: string | runtime.StringWhereCondition | null;
    storageLocations?: StorageLocationWhereConditions | null;
    currency?: string | runtime.StringWhereCondition | null;
    id?: string | runtime.IDWhereCondition | null;
    createdAt?: Date | runtime.DateWhereCondition | null;
    updatedAt?: Date | runtime.DateWhereCondition | null;
}
export type SiteOrderBy = {
    title?: SortDirection,
    addressLine1?: SortDirection,
    addressLine2?: SortDirection,
    addressCity?: SortDirection,
    addressCountry?: SortDirection,
    currency?: SortDirection,
    id?: SortDirection,
    createdAt?: SortDirection,
    updatedAt?: SortDirection
}

export interface SiteFindManyParams {
    where?: SiteWhereConditions;
    limit?: number;
    offset?: number;
    orderBy?: SiteOrderBy;
}
export type SiteUniqueConditions = 
    | {storageLocations: StorageLocationUniqueConditions}
    | {id: string};
export type SiteAPI = {
    /**
    * Create a Site record
    * @example
    ```typescript
    const record = await models.site.create({
        title: '',
        addressLine1: '',
        addressLine2: '',
        addressCity: '',
        addressCountry: '',
        storageLocations: undefined
    });
    ```
    */
    create(values: SiteCreateValues): Promise<Site>;
    /**
    * Update a Site record
    * @example
    ```typescript
    const site = await models.site.update({ id: "abc" }, { title: XXX }});
    ```
    */
    update(where: SiteUniqueConditions, values: Partial<Site>): Promise<Site>;
    /**
    * Deletes a Site record
    * @example
    ```typescript
    const deletedId = await models.site.delete({ id: 'xxx' });
    ```
    */
    delete(where: SiteUniqueConditions): Promise<string>;
    /**
    * Finds a single Site record
    * @example
    ```typescript
    const site = await models.site.findOne({ id: 'xxx' });
    ```
    */
    findOne(where: SiteUniqueConditions): Promise<Site | null>;
    /**
    * Finds multiple Site records
    * @example
    ```typescript
    const sites = await models.site.findMany({ where: { createdAt: { after: new Date(2022, 1, 1) } }, orderBy: { id: 'asc' }, limit: 1000, offset: 50 });
    ```
    */
    findMany(params?: SiteFindManyParams | undefined): Promise<Site[]>;
    /**
    * Creates a new query builder with the given conditions applied
    * @example
    ```typescript
    const records = await models.site.where({ createdAt: { after: new Date(2020, 1, 1) } }).orWhere({ updatedAt: { after: new Date(2020, 1, 1) } }).findMany();
    ```
    */
    where(where: SiteWhereConditions): SiteQueryBuilder;
}
export type SiteQueryBuilderParams = {
    limit?: number;
    offset?: number;
    orderBy?: SiteOrderBy;
}
export type SiteQueryBuilder = {
    where(where: SiteWhereConditions): SiteQueryBuilder;
    orWhere(where: SiteWhereConditions): SiteQueryBuilder;
    findMany(params?: SiteQueryBuilderParams): Promise<Site[]>;
    findOne(params?: SiteQueryBuilderParams): Promise<Site>;
    delete() : Promise<string>;
    update(values: Partial<Site>) : Promise<Site>;
}
export interface SiteProductTable {
    price: number
    id: Generated<string>
    createdAt: Generated<Date>
    updatedAt: Generated<Date>
    productId: string
}
export interface SiteProduct {
    price: number
    id: string
    createdAt: Date
    updatedAt: Date
    productId: string
}
export interface SiteProductCreateValues {
    price: number
    id?: string
    createdAt?: Date
    updatedAt?: Date
    productId: string
}
export interface SiteProductWhereConditions {
    product?: ProductWhereConditions | null;
    locations?: SiteProductLocationWhereConditions | null;
    price?: number | runtime.NumberWhereCondition | null;
    id?: string | runtime.IDWhereCondition | null;
    createdAt?: Date | runtime.DateWhereCondition | null;
    updatedAt?: Date | runtime.DateWhereCondition | null;
    productId?: string | runtime.IDWhereCondition | null;
}
export type SiteProductOrderBy = {
    price?: SortDirection,
    id?: SortDirection,
    createdAt?: SortDirection,
    updatedAt?: SortDirection,
    productId?: SortDirection
}

export interface SiteProductFindManyParams {
    where?: SiteProductWhereConditions;
    limit?: number;
    offset?: number;
    orderBy?: SiteProductOrderBy;
}
export type SiteProductUniqueConditions = 
    | {locations: SiteProductLocationUniqueConditions}
    | {id: string};
export type SiteProductAPI = {
    /**
    * Create a SiteProduct record
    * @example
    ```typescript
    const record = await models.siteProduct.create({
        product: undefined,
        locations: undefined,
        price: 0,
        productId: undefined
    });
    ```
    */
    create(values: SiteProductCreateValues): Promise<SiteProduct>;
    /**
    * Update a SiteProduct record
    * @example
    ```typescript
    const siteProduct = await models.siteProduct.update({ id: "abc" }, { product: XXX }});
    ```
    */
    update(where: SiteProductUniqueConditions, values: Partial<SiteProduct>): Promise<SiteProduct>;
    /**
    * Deletes a SiteProduct record
    * @example
    ```typescript
    const deletedId = await models.siteProduct.delete({ id: 'xxx' });
    ```
    */
    delete(where: SiteProductUniqueConditions): Promise<string>;
    /**
    * Finds a single SiteProduct record
    * @example
    ```typescript
    const siteProduct = await models.siteProduct.findOne({ id: 'xxx' });
    ```
    */
    findOne(where: SiteProductUniqueConditions): Promise<SiteProduct | null>;
    /**
    * Finds multiple SiteProduct records
    * @example
    ```typescript
    const siteProducts = await models.siteProduct.findMany({ where: { createdAt: { after: new Date(2022, 1, 1) } }, orderBy: { id: 'asc' }, limit: 1000, offset: 50 });
    ```
    */
    findMany(params?: SiteProductFindManyParams | undefined): Promise<SiteProduct[]>;
    /**
    * Creates a new query builder with the given conditions applied
    * @example
    ```typescript
    const records = await models.siteProduct.where({ createdAt: { after: new Date(2020, 1, 1) } }).orWhere({ updatedAt: { after: new Date(2020, 1, 1) } }).findMany();
    ```
    */
    where(where: SiteProductWhereConditions): SiteProductQueryBuilder;
}
export type SiteProductQueryBuilderParams = {
    limit?: number;
    offset?: number;
    orderBy?: SiteProductOrderBy;
}
export type SiteProductQueryBuilder = {
    where(where: SiteProductWhereConditions): SiteProductQueryBuilder;
    orWhere(where: SiteProductWhereConditions): SiteProductQueryBuilder;
    findMany(params?: SiteProductQueryBuilderParams): Promise<SiteProduct[]>;
    findOne(params?: SiteProductQueryBuilderParams): Promise<SiteProduct>;
    delete() : Promise<string>;
    update(values: Partial<SiteProduct>) : Promise<SiteProduct>;
}
export interface SiteProductLocationTable {
    quantity: number
    id: Generated<string>
    createdAt: Generated<Date>
    updatedAt: Generated<Date>
    locationId: string
    siteProductId: string
}
export interface SiteProductLocation {
    quantity: number
    id: string
    createdAt: Date
    updatedAt: Date
    locationId: string
    siteProductId: string
}
export interface SiteProductLocationCreateValues {
    quantity: number
    id?: string
    createdAt?: Date
    updatedAt?: Date
    locationId: string
    siteProductId: string
}
export interface SiteProductLocationWhereConditions {
    location?: StorageLocationWhereConditions | null;
    quantity?: number | runtime.NumberWhereCondition | null;
    siteProduct?: SiteProductWhereConditions | null;
    id?: string | runtime.IDWhereCondition | null;
    createdAt?: Date | runtime.DateWhereCondition | null;
    updatedAt?: Date | runtime.DateWhereCondition | null;
    locationId?: string | runtime.IDWhereCondition | null;
    siteProductId?: string | runtime.IDWhereCondition | null;
}
export type SiteProductLocationOrderBy = {
    quantity?: SortDirection,
    id?: SortDirection,
    createdAt?: SortDirection,
    updatedAt?: SortDirection,
    locationId?: SortDirection,
    siteProductId?: SortDirection
}

export interface SiteProductLocationFindManyParams {
    where?: SiteProductLocationWhereConditions;
    limit?: number;
    offset?: number;
    orderBy?: SiteProductLocationOrderBy;
}
export type SiteProductLocationUniqueConditions = 
    | {id: string};
export type SiteProductLocationAPI = {
    /**
    * Create a SiteProductLocation record
    * @example
    ```typescript
    const record = await models.siteProductLocation.create({
        location: undefined,
        quantity: 0,
        siteProduct: undefined,
        locationId: undefined,
        siteProductId: undefined
    });
    ```
    */
    create(values: SiteProductLocationCreateValues): Promise<SiteProductLocation>;
    /**
    * Update a SiteProductLocation record
    * @example
    ```typescript
    const siteProductLocation = await models.siteProductLocation.update({ id: "abc" }, { location: XXX }});
    ```
    */
    update(where: SiteProductLocationUniqueConditions, values: Partial<SiteProductLocation>): Promise<SiteProductLocation>;
    /**
    * Deletes a SiteProductLocation record
    * @example
    ```typescript
    const deletedId = await models.siteProductLocation.delete({ id: 'xxx' });
    ```
    */
    delete(where: SiteProductLocationUniqueConditions): Promise<string>;
    /**
    * Finds a single SiteProductLocation record
    * @example
    ```typescript
    const siteProductLocation = await models.siteProductLocation.findOne({ id: 'xxx' });
    ```
    */
    findOne(where: SiteProductLocationUniqueConditions): Promise<SiteProductLocation | null>;
    /**
    * Finds multiple SiteProductLocation records
    * @example
    ```typescript
    const siteProductLocations = await models.siteProductLocation.findMany({ where: { createdAt: { after: new Date(2022, 1, 1) } }, orderBy: { id: 'asc' }, limit: 1000, offset: 50 });
    ```
    */
    findMany(params?: SiteProductLocationFindManyParams | undefined): Promise<SiteProductLocation[]>;
    /**
    * Creates a new query builder with the given conditions applied
    * @example
    ```typescript
    const records = await models.siteProductLocation.where({ createdAt: { after: new Date(2020, 1, 1) } }).orWhere({ updatedAt: { after: new Date(2020, 1, 1) } }).findMany();
    ```
    */
    where(where: SiteProductLocationWhereConditions): SiteProductLocationQueryBuilder;
}
export type SiteProductLocationQueryBuilderParams = {
    limit?: number;
    offset?: number;
    orderBy?: SiteProductLocationOrderBy;
}
export type SiteProductLocationQueryBuilder = {
    where(where: SiteProductLocationWhereConditions): SiteProductLocationQueryBuilder;
    orWhere(where: SiteProductLocationWhereConditions): SiteProductLocationQueryBuilder;
    findMany(params?: SiteProductLocationQueryBuilderParams): Promise<SiteProductLocation[]>;
    findOne(params?: SiteProductLocationQueryBuilderParams): Promise<SiteProductLocation>;
    delete() : Promise<string>;
    update(values: Partial<SiteProductLocation>) : Promise<SiteProductLocation>;
}
export interface StorageLocationTable {
    title: string
    id: Generated<string>
    createdAt: Generated<Date>
    updatedAt: Generated<Date>
    siteId: string
}
export interface StorageLocation {
    title: string
    id: string
    createdAt: Date
    updatedAt: Date
    siteId: string
}
export interface StorageLocationCreateValues {
    title: string
    id?: string
    createdAt?: Date
    updatedAt?: Date
    siteId: string
}
export interface StorageLocationWhereConditions {
    title?: string | runtime.StringWhereCondition | null;
    site?: SiteWhereConditions | null;
    id?: string | runtime.IDWhereCondition | null;
    createdAt?: Date | runtime.DateWhereCondition | null;
    updatedAt?: Date | runtime.DateWhereCondition | null;
    siteId?: string | runtime.IDWhereCondition | null;
}
export type StorageLocationOrderBy = {
    title?: SortDirection,
    id?: SortDirection,
    createdAt?: SortDirection,
    updatedAt?: SortDirection,
    siteId?: SortDirection
}

export interface StorageLocationFindManyParams {
    where?: StorageLocationWhereConditions;
    limit?: number;
    offset?: number;
    orderBy?: StorageLocationOrderBy;
}
export type StorageLocationUniqueConditions = 
    | {id: string};
export type StorageLocationAPI = {
    /**
    * Create a StorageLocation record
    * @example
    ```typescript
    const record = await models.storageLocation.create({
        title: '',
        site: undefined,
        siteId: undefined
    });
    ```
    */
    create(values: StorageLocationCreateValues): Promise<StorageLocation>;
    /**
    * Update a StorageLocation record
    * @example
    ```typescript
    const storageLocation = await models.storageLocation.update({ id: "abc" }, { title: XXX }});
    ```
    */
    update(where: StorageLocationUniqueConditions, values: Partial<StorageLocation>): Promise<StorageLocation>;
    /**
    * Deletes a StorageLocation record
    * @example
    ```typescript
    const deletedId = await models.storageLocation.delete({ id: 'xxx' });
    ```
    */
    delete(where: StorageLocationUniqueConditions): Promise<string>;
    /**
    * Finds a single StorageLocation record
    * @example
    ```typescript
    const storageLocation = await models.storageLocation.findOne({ id: 'xxx' });
    ```
    */
    findOne(where: StorageLocationUniqueConditions): Promise<StorageLocation | null>;
    /**
    * Finds multiple StorageLocation records
    * @example
    ```typescript
    const storageLocations = await models.storageLocation.findMany({ where: { createdAt: { after: new Date(2022, 1, 1) } }, orderBy: { id: 'asc' }, limit: 1000, offset: 50 });
    ```
    */
    findMany(params?: StorageLocationFindManyParams | undefined): Promise<StorageLocation[]>;
    /**
    * Creates a new query builder with the given conditions applied
    * @example
    ```typescript
    const records = await models.storageLocation.where({ createdAt: { after: new Date(2020, 1, 1) } }).orWhere({ updatedAt: { after: new Date(2020, 1, 1) } }).findMany();
    ```
    */
    where(where: StorageLocationWhereConditions): StorageLocationQueryBuilder;
}
export type StorageLocationQueryBuilderParams = {
    limit?: number;
    offset?: number;
    orderBy?: StorageLocationOrderBy;
}
export type StorageLocationQueryBuilder = {
    where(where: StorageLocationWhereConditions): StorageLocationQueryBuilder;
    orWhere(where: StorageLocationWhereConditions): StorageLocationQueryBuilder;
    findMany(params?: StorageLocationQueryBuilderParams): Promise<StorageLocation[]>;
    findOne(params?: StorageLocationQueryBuilderParams): Promise<StorageLocation>;
    delete() : Promise<string>;
    update(values: Partial<StorageLocation>) : Promise<StorageLocation>;
}
export interface IdentityTable {
    email: string | null
    emailVerified: Generated<boolean>
    password: any | null
    externalId: string | null
    issuer: string | null
    id: Generated<string>
    createdAt: Generated<Date>
    updatedAt: Generated<Date>
}
export interface Identity {
    email: string | null
    emailVerified: boolean
    password: any | null
    externalId: string | null
    issuer: string | null
    id: string
    createdAt: Date
    updatedAt: Date
}
export interface IdentityCreateValues {
    email?: string | null
    emailVerified?: boolean
    password?: any | null
    externalId?: string | null
    issuer?: string | null
    id?: string
    createdAt?: Date
    updatedAt?: Date
}
export interface IdentityWhereConditions {
    email?: string | runtime.StringWhereCondition | null;
    emailVerified?: boolean | runtime.BooleanWhereCondition | null;
    password?: any | any | null;
    externalId?: string | runtime.StringWhereCondition | null;
    issuer?: string | runtime.StringWhereCondition | null;
    id?: string | runtime.IDWhereCondition | null;
    createdAt?: Date | runtime.DateWhereCondition | null;
    updatedAt?: Date | runtime.DateWhereCondition | null;
}
export type IdentityOrderBy = {
    email?: SortDirection,
    emailVerified?: SortDirection,
    externalId?: SortDirection,
    issuer?: SortDirection,
    id?: SortDirection,
    createdAt?: SortDirection,
    updatedAt?: SortDirection
}

export interface IdentityFindManyParams {
    where?: IdentityWhereConditions;
    limit?: number;
    offset?: number;
    orderBy?: IdentityOrderBy;
}
export type IdentityUniqueConditions = 
    | {email: string}
    | {issuer: string}
    | {id: string};
export type IdentityAPI = {
    /**
    * Create a Identity record
    * @example
    ```typescript
    const record = await models.identity.create({
    });
    ```
    */
    create(values: IdentityCreateValues): Promise<Identity>;
    /**
    * Update a Identity record
    * @example
    ```typescript
    const identity = await models.identity.update({ id: "abc" },  {}});
    ```
    */
    update(where: IdentityUniqueConditions, values: Partial<Identity>): Promise<Identity>;
    /**
    * Deletes a Identity record
    * @example
    ```typescript
    const deletedId = await models.identity.delete({ id: 'xxx' });
    ```
    */
    delete(where: IdentityUniqueConditions): Promise<string>;
    /**
    * Finds a single Identity record
    * @example
    ```typescript
    const identity = await models.identity.findOne({ id: 'xxx' });
    ```
    */
    findOne(where: IdentityUniqueConditions): Promise<Identity | null>;
    /**
    * Finds multiple Identity records
    * @example
    ```typescript
    const identitys = await models.identity.findMany({ where: { createdAt: { after: new Date(2022, 1, 1) } }, orderBy: { id: 'asc' }, limit: 1000, offset: 50 });
    ```
    */
    findMany(params?: IdentityFindManyParams | undefined): Promise<Identity[]>;
    /**
    * Creates a new query builder with the given conditions applied
    * @example
    ```typescript
    const records = await models.identity.where({ createdAt: { after: new Date(2020, 1, 1) } }).orWhere({ updatedAt: { after: new Date(2020, 1, 1) } }).findMany();
    ```
    */
    where(where: IdentityWhereConditions): IdentityQueryBuilder;
}
export type IdentityQueryBuilderParams = {
    limit?: number;
    offset?: number;
    orderBy?: IdentityOrderBy;
}
export type IdentityQueryBuilder = {
    where(where: IdentityWhereConditions): IdentityQueryBuilder;
    orWhere(where: IdentityWhereConditions): IdentityQueryBuilder;
    findMany(params?: IdentityQueryBuilderParams): Promise<Identity[]>;
    findOne(params?: IdentityQueryBuilderParams): Promise<Identity>;
    delete() : Promise<string>;
    update(values: Partial<Identity>) : Promise<Identity>;
}
interface database {
    product: ProductTable;
    bundle: BundleTable;
    product_bundle: ProductBundleTable;
    customer: CustomerTable;
    order: OrderTable;
    order_items: OrderItemsTable;
    site: SiteTable;
    site_product: SiteProductTable;
    site_product_location: SiteProductLocationTable;
    storage_location: StorageLocationTable;
    identity: IdentityTable;
}
export declare function useDatabase(): Kysely<database>;
export type ModelsAPI = {
    product: ProductAPI;
    bundle: BundleAPI;
    productBundle: ProductBundleAPI;
    customer: CustomerAPI;
    order: OrderAPI;
    orderItems: OrderItemsAPI;
    site: SiteAPI;
    siteProduct: SiteProductAPI;
    siteProductLocation: SiteProductLocationAPI;
    storageLocation: StorageLocationAPI;
    identity: IdentityAPI;
}
export declare const models: ModelsAPI;
export declare const permissions: runtime.Permissions;
type Environment = {
}
type Secrets = {
}

export interface ContextAPI extends runtime.ContextAPI {
    secrets: Secrets;
    env: Environment;
    identity?: Identity;
    now(): Date;
}
export interface JobContextAPI {
    secrets: Secrets;
    env: Environment;
    identity?: Identity;
    now(): Date;
}
export interface SubscriberContextAPI {
    secrets: Secrets;
    env: Environment;
    now(): Date;
}
