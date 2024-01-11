# Modern Milkman Demo

This repo is just a proof of concept for the [Modern Milkman](https://themodernmilkman.co.uk/) and should not be used in production.

## The Schema

The schema in this project organizes various entities related to a product management system into different models, each with their fields, actions, and permissions. Let's break it down by the main sections: Products, Customers, and Operations.

### Products

1. **`Product` Model**: Represents individual products. Key fields include product details like title, description, price, and special offers. It also relates to order items and product bundles through arrays. Actions include basic CRUD (Create, Read, Update, Delete) operations and listing products. All actions are permitted.

2. **`Bundle` Model**: Represents product bundles. Similar to the Product model in structure, but focused on grouping products into bundles.

3. **`ProductBundle` Model**: Acts as a junction model between products and bundles, establishing a many-to-many relationship. Each entry links a product to a bundle.

### Customers

1. **`Customer` Model**: Manages customer information, including contact details and order history. Actions include listing, retrieving, and creating customers. An additional action, `@on([create], slackmessage)`, suggests a notification (probably on Slack) when a new customer is created.

2. **`Order` Model**: Handles order details, including customer, site, status, and items. The status is an enum with values like 'New', 'Ready to collect', etc. Actions cover the full spectrum of CRUD operations and additional listing functionalities.

3. **`OrderItems` Model**: Focuses on the items within an order. It links an order to its products and includes quantity and price. Actions are primarily for listing and retrieving order items.

### Operations

1. **`Site` Model**: Represents physical locations or sites. Contains fields for name, address, and related storage locations. Actions include creating, listing, and retrieving sites.

2. **`SiteProduct` Model**: Connects products to specific sites. Includes information on price and locations within the site. Actions are geared towards creating, listing, and updating site-specific product information.

3. **`SiteProductLocation` Model**: Details specific locations within a site for a product, including quantity. Actions include creating, listing, updating, and retrieving stock items.

4. **`StorageLocation` Model**: Defines storage locations within a site. Contains fields for name and associated site. Actions focus on creating, listing, and retrieving storage locations.

### Key Observations

- **Relationships**: One-to-many relationships are established using arrays (e.g., `orderItems OrderItems[]` in the Product model), and many-to-many relationships are managed through junction models (e.g., ProductBundle).
- **Permissions**: All models use a simple permission structure (`expression: true`), allowing all specified actions.
- **Enums**: The `OrderStatus` enum is used to define possible states of an order.
- **Actions**: Each model defines actions for interacting with the data, including CRUD operations and specific listings.
- **Special Actions**: Some models have unique actions, like `@on([create], slackmessage)` in the Customer model, indicating custom behaviors or integrations.
