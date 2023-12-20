const { sql } = require("kysely")
const runtime = require("@teamkeel/functions-runtime")


const deepFreeze = o => {
	if (o===null || typeof o !== 'object') return o
	return new Proxy(o, {
		get(obj, prop) {
			return deepFreeze(obj[prop])
		},
		set(obj, prop) {
			throw new Error("Input " + JSON.stringify(obj) + " cannot be modified. Did you mean to modify values instead?")
		}
	})
}
	
const permissionFns = {
}
module.exports.permissionFns = permissionFns;
module.exports.OrderStatus = {
    New: "New",
    Readytocollect: "Readytocollect",
    Collected: "Collected",
    Cancelled: "Cancelled",
};
module.exports.Slackmessage = (fn) => fn;
const tableConfigMap = {
    "bundle": {
        "products": {
            "foreignKey": "bundles_id",
            "referencesTable": "product_bundle",
            "relationshipType": "hasMany"
        }
    },
    "order": {
        "customer": {
            "foreignKey": "customer_id",
            "referencesTable": "customer",
            "relationshipType": "belongsTo"
        },
        "items": {
            "foreignKey": "order_id",
            "referencesTable": "order_items",
            "relationshipType": "hasMany"
        },
        "site": {
            "foreignKey": "site_id",
            "referencesTable": "site",
            "relationshipType": "belongsTo"
        }
    },
    "order_items": {
        "order": {
            "foreignKey": "order_id",
            "referencesTable": "order",
            "relationshipType": "belongsTo"
        },
        "product": {
            "foreignKey": "product_id",
            "referencesTable": "product",
            "relationshipType": "belongsTo"
        }
    },
    "product": {
        "bundles": {
            "foreignKey": "products_id",
            "referencesTable": "product_bundle",
            "relationshipType": "hasMany"
        }
    },
    "product_bundle": {
        "bundles": {
            "foreignKey": "bundles_id",
            "referencesTable": "bundle",
            "relationshipType": "belongsTo"
        },
        "products": {
            "foreignKey": "products_id",
            "referencesTable": "product",
            "relationshipType": "belongsTo"
        }
    },
    "site": {
        "storageLocations": {
            "foreignKey": "site_id",
            "referencesTable": "storage_location",
            "relationshipType": "hasMany"
        }
    },
    "site_product": {
        "locations": {
            "foreignKey": "site_product_id",
            "referencesTable": "site_product_location",
            "relationshipType": "hasMany"
        },
        "product": {
            "foreignKey": "product_id",
            "referencesTable": "product",
            "relationshipType": "belongsTo"
        }
    },
    "site_product_location": {
        "location": {
            "foreignKey": "location_id",
            "referencesTable": "storage_location",
            "relationshipType": "belongsTo"
        },
        "siteProduct": {
            "foreignKey": "site_product_id",
            "referencesTable": "site_product",
            "relationshipType": "belongsTo"
        }
    },
    "storage_location": {
        "site": {
            "foreignKey": "site_id",
            "referencesTable": "site",
            "relationshipType": "belongsTo"
        }
    }
};
function createContextAPI({ responseHeaders, meta }) {
    const headers = new runtime.RequestHeaders(meta.headers);
    const response = { headers: responseHeaders }
    const now = () => { return new Date(); };
    const { identity } = meta;
    const isAuthenticated = identity != null;
    const env = {
    };
    const secrets = {
        SLACK_URL: meta.secrets.SLACK_URL || "",
    };
    return { headers, response, identity, env, now, secrets, isAuthenticated };
};
function createJobContextAPI({ meta }) {
    const now = () => { return new Date(); };
    const { identity } = meta;
    const isAuthenticated = identity != null;
    const env = {
    };
    const secrets = {
        SLACK_URL: meta.secrets.SLACK_URL || "",
    };
    return { identity, env, now, secrets, isAuthenticated };
};
function createSubscriberContextAPI({ meta }) {
    const now = () => { return new Date(); };
    const env = {
    };
    const secrets = {
        SLACK_URL: meta.secrets.SLACK_URL || "",
    };
    return { env, now, secrets };
};
function createModelAPI() {
    return {
        product: new runtime.ModelAPI("product", () => ({}), tableConfigMap),
        bundle: new runtime.ModelAPI("bundle", () => ({}), tableConfigMap),
        productBundle: new runtime.ModelAPI("product_bundle", () => ({}), tableConfigMap),
        customer: new runtime.ModelAPI("customer", () => ({}), tableConfigMap),
        order: new runtime.ModelAPI("order", () => ({}), tableConfigMap),
        orderItems: new runtime.ModelAPI("order_items", () => ({}), tableConfigMap),
        site: new runtime.ModelAPI("site", () => ({}), tableConfigMap),
        siteProduct: new runtime.ModelAPI("site_product", () => ({}), tableConfigMap),
        siteProductLocation: new runtime.ModelAPI("site_product_location", () => ({}), tableConfigMap),
        storageLocation: new runtime.ModelAPI("storage_location", () => ({}), tableConfigMap),
        identity: new runtime.ModelAPI("identity", () => ({}), tableConfigMap),
    };
};
function createPermissionApi() {
    return new runtime.Permissions();
};
module.exports.models = createModelAPI();
module.exports.permissions = createPermissionApi();
module.exports.createContextAPI = createContextAPI;
module.exports.createJobContextAPI = createJobContextAPI;
module.exports.createSubscriberContextAPI = createSubscriberContextAPI;
module.exports.useDatabase = runtime.useDatabase;
