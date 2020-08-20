(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./common/ark-counterfeit-common/index.ts":
/*!************************************************!*\
  !*** ./common/ark-counterfeit-common/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./src/models */ "./common/ark-counterfeit-common/src/models.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./src/transactions/transactions */ "./common/ark-counterfeit-common/src/transactions/transactions.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./src/builders/builders */ "./common/ark-counterfeit-common/src/builders/builders.ts"), exports);
//export * from './src/handlers/handlers';


/***/ }),

/***/ "./common/ark-counterfeit-common/src/builders/builders.ts":
/*!****************************************************************!*\
  !*** ./common/ark-counterfeit-common/src/builders/builders.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var registerManufacturerBuilder_1 = __webpack_require__(/*! ./registerManufacturerBuilder */ "./common/ark-counterfeit-common/src/builders/registerManufacturerBuilder.ts");
exports.RegisterManufacturerBuilder = registerManufacturerBuilder_1.RegisterManufacturerBuilder;
var registerProductBuilder_1 = __webpack_require__(/*! ./registerProductBuilder */ "./common/ark-counterfeit-common/src/builders/registerProductBuilder.ts");
exports.RegisterProductBuilder = registerProductBuilder_1.RegisterProductBuilder;
var transferProductBuilder_1 = __webpack_require__(/*! ./transferProductBuilder */ "./common/ark-counterfeit-common/src/builders/transferProductBuilder.ts");
exports.TransferProductBuilder = transferProductBuilder_1.TransferProductBuilder;
var receiveProductBuilder_1 = __webpack_require__(/*! ./receiveProductBuilder */ "./common/ark-counterfeit-common/src/builders/receiveProductBuilder.ts");
exports.ReceiveProductBuilder = receiveProductBuilder_1.ReceiveProductBuilder;


/***/ }),

/***/ "./common/ark-counterfeit-common/src/builders/receiveProductBuilder.ts":
/*!*****************************************************************************!*\
  !*** ./common/ark-counterfeit-common/src/builders/receiveProductBuilder.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const crypto_1 = __webpack_require__(/*! @arkecosystem/crypto */ "./node_modules/@arkecosystem/crypto/dist/index.bundled.js");
const const_1 = __webpack_require__(/*! ../const */ "./common/ark-counterfeit-common/src/const.ts");
class ReceiveProductBuilder extends crypto_1.Transactions.TransactionBuilder {
    constructor() {
        super();
        this.data.type = const_1.RECEIVE_PRODUCT_TYPE;
        this.data.typeGroup = const_1.ANTICOUNTERFEIT_TRANSACTIONS_TYPE_GROUP;
        this.data.version = 2;
        this.data.recipientId = "";
        this.data.vendorField = const_1.VENDOR_FIELD;
        this.data.fee = crypto_1.Utils.BigNumber.make("100000000");
        this.data.amount = crypto_1.Utils.BigNumber.ZERO;
        this.data.asset = { AnticounterfeitReceiveProductTransaction: {} };
    }
    product(productId, recipientAddressId) {
        const element = {
            ProductId: productId,
            RecipientAddressId: recipientAddressId
        };
        this.data.asset.AnticounterfeitReceiveProductTransaction = element;
        return this;
    }
    getStruct() {
        const struct = super.getStruct();
        struct.vendorField = this.data.vendorField;
        struct.amount = this.data.amount;
        struct.asset = this.data.asset;
        return struct;
    }
    instance() {
        return this;
    }
}
exports.ReceiveProductBuilder = ReceiveProductBuilder;


/***/ }),

/***/ "./common/ark-counterfeit-common/src/builders/registerManufacturerBuilder.ts":
/*!***********************************************************************************!*\
  !*** ./common/ark-counterfeit-common/src/builders/registerManufacturerBuilder.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const crypto_1 = __webpack_require__(/*! @arkecosystem/crypto */ "./node_modules/@arkecosystem/crypto/dist/index.bundled.js");
const const_1 = __webpack_require__(/*! ../const */ "./common/ark-counterfeit-common/src/const.ts");
class RegisterManufacturerBuilder extends crypto_1.Transactions.TransactionBuilder {
    constructor() {
        super();
        this.data.type = const_1.REGISTER_MANUFACTURER_TYPE;
        this.data.typeGroup = const_1.ANTICOUNTERFEIT_TRANSACTIONS_TYPE_GROUP;
        this.data.version = 2;
        this.data.recipientId = "";
        this.data.vendorField = const_1.VENDOR_FIELD;
        this.data.fee = crypto_1.Utils.BigNumber.make("100000000");
        this.data.amount = crypto_1.Utils.BigNumber.ZERO;
        this.data.asset = { AnticounterfeitRegisterManufacturerTransaction: {} };
    }
    manufacturer(prefixId, companyName, fiscalCode, registrationContract) {
        const element = {
            ProductPrefixId: prefixId,
            CompanyName: companyName,
            CompanyFiscalCode: fiscalCode,
            RegistrationContract: registrationContract
        };
        this.data.asset.AnticounterfeitRegisterManufacturerTransaction = element;
        return this;
    }
    getStruct() {
        const struct = super.getStruct();
        struct.recipientId = this.data.recipientId;
        struct.vendorField = this.data.vendorField;
        struct.amount = this.data.amount;
        struct.asset = this.data.asset;
        return struct;
    }
    instance() {
        return this;
    }
}
exports.RegisterManufacturerBuilder = RegisterManufacturerBuilder;


/***/ }),

/***/ "./common/ark-counterfeit-common/src/builders/registerProductBuilder.ts":
/*!******************************************************************************!*\
  !*** ./common/ark-counterfeit-common/src/builders/registerProductBuilder.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const crypto_1 = __webpack_require__(/*! @arkecosystem/crypto */ "./node_modules/@arkecosystem/crypto/dist/index.bundled.js");
const const_1 = __webpack_require__(/*! ../const */ "./common/ark-counterfeit-common/src/const.ts");
class RegisterProductBuilder extends crypto_1.Transactions.TransactionBuilder {
    constructor() {
        super();
        this.data.type = const_1.REGISTER_PRODUCT_TYPE;
        this.data.typeGroup = const_1.ANTICOUNTERFEIT_TRANSACTIONS_TYPE_GROUP;
        this.data.version = 2;
        this.data.recipientId = "";
        this.data.vendorField = const_1.VENDOR_FIELD;
        this.data.fee = crypto_1.Utils.BigNumber.make("100000000");
        this.data.amount = crypto_1.Utils.BigNumber.ZERO;
        this.data.asset = { AnticounterfeitRegisterProductTransaction: {} };
    }
    product(productId, description, manufacturerAddressId, metadata) {
        const element = {
            ProductId: productId,
            Description: description,
            ManufacturerAddressId: manufacturerAddressId,
            Metadata: metadata
        };
        this.data.asset.AnticounterfeitRegisterProductTransaction = element;
        return this;
    }
    getStruct() {
        const struct = super.getStruct();
        struct.vendorField = this.data.vendorField;
        struct.amount = this.data.amount;
        struct.asset = this.data.asset;
        return struct;
    }
    instance() {
        return this;
    }
}
exports.RegisterProductBuilder = RegisterProductBuilder;


/***/ }),

/***/ "./common/ark-counterfeit-common/src/builders/transferProductBuilder.ts":
/*!******************************************************************************!*\
  !*** ./common/ark-counterfeit-common/src/builders/transferProductBuilder.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const crypto_1 = __webpack_require__(/*! @arkecosystem/crypto */ "./node_modules/@arkecosystem/crypto/dist/index.bundled.js");
const const_1 = __webpack_require__(/*! ../const */ "./common/ark-counterfeit-common/src/const.ts");
class TransferProductBuilder extends crypto_1.Transactions.TransactionBuilder {
    constructor() {
        super();
        this.data.type = const_1.TRANSFER_PRODUCT_TYPE;
        this.data.typeGroup = const_1.ANTICOUNTERFEIT_TRANSACTIONS_TYPE_GROUP;
        this.data.version = 2;
        this.data.recipientId = "";
        this.data.vendorField = const_1.VENDOR_FIELD;
        this.data.fee = crypto_1.Utils.BigNumber.make("100000000");
        this.data.amount = crypto_1.Utils.BigNumber.ZERO;
        this.data.asset = { AnticounterfeitTransferProductTransaction: {} };
    }
    product(productId, senderAddressId, recipientAddressId) {
        const element = {
            ProductId: productId,
            SenderAddressId: senderAddressId,
            RecipientAddressId: recipientAddressId
        };
        this.data.asset.AnticounterfeitTransferProductTransaction = element;
        return this;
    }
    getStruct() {
        const struct = super.getStruct();
        struct.vendorField = this.data.vendorField;
        struct.amount = this.data.amount;
        struct.asset = this.data.asset;
        return struct;
    }
    instance() {
        return this;
    }
}
exports.TransferProductBuilder = TransferProductBuilder;


/***/ }),

/***/ "./common/ark-counterfeit-common/src/const.ts":
/*!****************************************************!*\
  !*** ./common/ark-counterfeit-common/src/const.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
exports.ANTICOUNTERFEIT_TRANSACTIONS_TYPE_GROUP = 2001;
exports.REGISTER_MANUFACTURER_TYPE = 201;
exports.REGISTER_PRODUCT_TYPE = 202;
exports.TRANSFER_PRODUCT_TYPE = 203;
exports.RECEIVE_PRODUCT_TYPE = 204;
exports.VENDOR_FIELD = "UniMi-AnticounterfeitProject";
exports.ENABLED_WALLET_TO_MANUFACTURER_REGISTRATION_PKEY = "03287bfebba4c7881a0509717e71b34b63f31e40021c321f89ae04f84be6d6ac37";


/***/ }),

/***/ "./common/ark-counterfeit-common/src/models.ts":
/*!*****************************************************!*\
  !*** ./common/ark-counterfeit-common/src/models.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
class AnticounterfeitRegisterManufacturerTransaction {
}
exports.AnticounterfeitRegisterManufacturerTransaction = AnticounterfeitRegisterManufacturerTransaction;
class AnticounterfeitRegisterProductTransaction {
}
exports.AnticounterfeitRegisterProductTransaction = AnticounterfeitRegisterProductTransaction;
class AnticounterfeitTransferProductTransaction {
}
exports.AnticounterfeitTransferProductTransaction = AnticounterfeitTransferProductTransaction;
class AnticounterfeitReceiveProductTransaction {
}
exports.AnticounterfeitReceiveProductTransaction = AnticounterfeitReceiveProductTransaction;


/***/ }),

/***/ "./common/ark-counterfeit-common/src/transactions/receiveProductTransaction.ts":
/*!*************************************************************************************!*\
  !*** ./common/ark-counterfeit-common/src/transactions/receiveProductTransaction.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const crypto_1 = __webpack_require__(/*! @arkecosystem/crypto */ "./node_modules/@arkecosystem/crypto/dist/index.bundled.js");
const const_1 = __webpack_require__(/*! ../const */ "./common/ark-counterfeit-common/src/const.ts");
const bytebuffer_1 = tslib_1.__importDefault(__webpack_require__(/*! bytebuffer */ "./node_modules/bytebuffer/dist/bytebuffer.js"));
const { schemas } = crypto_1.Transactions;
class ReceiveProductTransaction extends crypto_1.Transactions.Transaction {
    static getSchema() {
        return schemas.extend(schemas.transactionBaseSchema, {
            $id: "AnticounterfeitReceiveProductTransaction",
            required: ["asset", "type", "typeGroup", "vendorField"],
            properties: {
                type: { transactionType: const_1.RECEIVE_PRODUCT_TYPE },
                typeGroup: { const: const_1.ANTICOUNTERFEIT_TRANSACTIONS_TYPE_GROUP },
                amount: { bignumber: { minimum: 0, maximum: 0 } },
                vendorField: { type: "string" },
                asset: {
                    type: "object",
                    required: ["AnticounterfeitReceiveProductTransaction"],
                    properties: {
                        AnticounterfeitReceiveProductTransaction: {
                            type: "object",
                            required: ["ProductId", "RecipientAddressId"],
                            properties: {
                                ProductId: {
                                    type: "string",
                                    minLength: 18,
                                    maxLength: 18,
                                },
                                RecipientAddressId: {
                                    type: "string",
                                    minLength: 34,
                                    maxLength: 34,
                                }
                            },
                        },
                    },
                },
            },
        });
    }
    serialize() {
        const { data } = this;
        const vendorFieldBytes = Buffer.from(data.vendorField, "utf8");
        const element = data.asset.AnticounterfeitReceiveProductTransaction;
        const productIdBytes = Buffer.from(element.ProductId, "utf8");
        const recipientAddressBytes = Buffer.from(element.RecipientAddressId, "utf8");
        const buffer = new bytebuffer_1.default(vendorFieldBytes.length +
            productIdBytes.length +
            recipientAddressBytes.length + (1 + 2), true);
        buffer.writeUint8(vendorFieldBytes.length);
        buffer.append(vendorFieldBytes, "hex");
        buffer.writeUint8(productIdBytes.length);
        buffer.append(productIdBytes, "hex");
        buffer.writeUint8(recipientAddressBytes.length);
        buffer.append(recipientAddressBytes, "hex");
        return buffer;
    }
    deserialize(buf) {
        const { data } = this;
        const AnticounterfeitReceiveProductTransaction = {};
        const vendorFieldLength = buf.readUint8();
        const vendorField = buf.readString(vendorFieldLength);
        const productIdLength = buf.readUint8();
        AnticounterfeitReceiveProductTransaction.ProductId = buf.readString(productIdLength);
        const recipientAddressIdLength = buf.readUint8();
        AnticounterfeitReceiveProductTransaction.RecipientAddressId = buf.readString(recipientAddressIdLength);
        data.amount = crypto_1.Utils.BigNumber.ZERO;
        data.vendorField = vendorField;
        data.asset = {
            AnticounterfeitReceiveProductTransaction
        };
    }
}
ReceiveProductTransaction.typeGroup = const_1.ANTICOUNTERFEIT_TRANSACTIONS_TYPE_GROUP;
ReceiveProductTransaction.type = const_1.RECEIVE_PRODUCT_TYPE;
ReceiveProductTransaction.key = "receive_product_transaction";
ReceiveProductTransaction.defaultStaticFee = crypto_1.Utils.BigNumber.make("100000000");
exports.ReceiveProductTransaction = ReceiveProductTransaction;


/***/ }),

/***/ "./common/ark-counterfeit-common/src/transactions/registerManufacturerTransaction.ts":
/*!*******************************************************************************************!*\
  !*** ./common/ark-counterfeit-common/src/transactions/registerManufacturerTransaction.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const crypto_1 = __webpack_require__(/*! @arkecosystem/crypto */ "./node_modules/@arkecosystem/crypto/dist/index.bundled.js");
const const_1 = __webpack_require__(/*! ../const */ "./common/ark-counterfeit-common/src/const.ts");
const bytebuffer_1 = tslib_1.__importDefault(__webpack_require__(/*! bytebuffer */ "./node_modules/bytebuffer/dist/bytebuffer.js"));
const { schemas } = crypto_1.Transactions;
class RegisterManufacturerTransaction extends crypto_1.Transactions.Transaction {
    static getSchema() {
        return schemas.extend(schemas.transactionBaseSchema, {
            $id: "AnticounterfeitRegisterManufacturerTransaction",
            required: ["asset", "type", "typeGroup", "recipientId", "vendorField"],
            properties: {
                type: { transactionType: const_1.REGISTER_MANUFACTURER_TYPE },
                typeGroup: { const: const_1.ANTICOUNTERFEIT_TRANSACTIONS_TYPE_GROUP },
                amount: { bignumber: { minimum: 0, maximum: 0 } },
                recipientId: { type: "string" },
                vendorField: { type: "string" },
                asset: {
                    type: "object",
                    required: ["AnticounterfeitRegisterManufacturerTransaction"],
                    properties: {
                        AnticounterfeitRegisterManufacturerTransaction: {
                            type: "object",
                            required: ["ProductPrefixId", "CompanyName", "CompanyFiscalCode", "RegistrationContract"],
                            properties: {
                                ProductPrefixId: {
                                    type: "string",
                                    minLength: 5,
                                    maxLength: 15,
                                },
                                CompanyName: {
                                    type: "string",
                                    minLength: 0,
                                    maxLength: 128,
                                },
                                CompanyFiscalCode: {
                                    type: "string",
                                    minLength: 0,
                                    maxLength: 56,
                                },
                                // used to match a base64 string
                                RegistrationContract: {
                                    type: "string",
                                    pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
                                }
                            },
                        },
                    },
                },
            },
        });
    }
    serialize() {
        const { data } = this;
        // const { addressBuffer, addressError } = Identities.Address.toBuffer(data.recipientId);
        // options.addressError = addressError;
        const recipientIdBytes = Buffer.from(data.recipientId, "utf8");
        const vendorFieldBytes = Buffer.from(data.vendorField, "utf8");
        const element = data.asset.AnticounterfeitRegisterManufacturerTransaction;
        const prefixIdBytes = Buffer.from(element.ProductPrefixId, "utf8");
        const companyNameBytes = Buffer.from(element.CompanyName, "utf8");
        const fiscalCodeBytes = Buffer.from(element.CompanyFiscalCode, "utf8");
        const registrationContractBytes = Buffer.from(element.RegistrationContract, "utf8");
        const buffer = new bytebuffer_1.default(recipientIdBytes.length +
            vendorFieldBytes.length +
            prefixIdBytes.length +
            companyNameBytes.length +
            fiscalCodeBytes.length +
            registrationContractBytes.length + (1 + 5), true);
        // buffer.writeUint8(addressBuffer.length);
        // buffer.append(addressBuffer);
        buffer.writeUint8(recipientIdBytes.length);
        buffer.append(recipientIdBytes, "hex");
        buffer.writeUint8(vendorFieldBytes.length);
        buffer.append(vendorFieldBytes, "hex");
        buffer.writeUint8(prefixIdBytes.length);
        buffer.append(prefixIdBytes, "hex");
        buffer.writeUint8(companyNameBytes.length);
        buffer.append(companyNameBytes, "hex");
        buffer.writeUint8(fiscalCodeBytes.length);
        buffer.append(fiscalCodeBytes, "hex");
        buffer.writeUint8(registrationContractBytes.length);
        buffer.append(registrationContractBytes, "hex");
        return buffer;
    }
    deserialize(buf) {
        const { data } = this;
        const AnticounterfeitRegisterManufacturerTransaction = {};
        const recipientIdLength = buf.readUint8();
        const recipientId = buf.readString(recipientIdLength); //Identities.Address.fromBuffer(buf.readBytes(recipientIdLength).toBuffer());
        const vendorFieldLength = buf.readUint8();
        const vendorField = buf.readString(vendorFieldLength);
        const prefixIdLength = buf.readUint8();
        AnticounterfeitRegisterManufacturerTransaction.ProductPrefixId = buf.readString(prefixIdLength);
        const companyNameLength = buf.readUint8();
        AnticounterfeitRegisterManufacturerTransaction.CompanyName = buf.readString(companyNameLength);
        const fiscalCodeLength = buf.readUint8();
        AnticounterfeitRegisterManufacturerTransaction.CompanyFiscalCode = buf.readString(fiscalCodeLength);
        const registrationContractLength = buf.readUint8();
        AnticounterfeitRegisterManufacturerTransaction.RegistrationContract = buf.readString(registrationContractLength);
        data.amount = crypto_1.Utils.BigNumber.ZERO;
        data.recipientId = recipientId;
        data.vendorField = vendorField;
        data.asset = {
            AnticounterfeitRegisterManufacturerTransaction
        };
    }
}
RegisterManufacturerTransaction.typeGroup = const_1.ANTICOUNTERFEIT_TRANSACTIONS_TYPE_GROUP;
RegisterManufacturerTransaction.type = const_1.REGISTER_MANUFACTURER_TYPE;
RegisterManufacturerTransaction.key = "register_manufacturer_transaction";
RegisterManufacturerTransaction.defaultStaticFee = crypto_1.Utils.BigNumber.make("100000000");
exports.RegisterManufacturerTransaction = RegisterManufacturerTransaction;


/***/ }),

/***/ "./common/ark-counterfeit-common/src/transactions/registerProductTransaction.ts":
/*!**************************************************************************************!*\
  !*** ./common/ark-counterfeit-common/src/transactions/registerProductTransaction.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const crypto_1 = __webpack_require__(/*! @arkecosystem/crypto */ "./node_modules/@arkecosystem/crypto/dist/index.bundled.js");
const const_1 = __webpack_require__(/*! ../const */ "./common/ark-counterfeit-common/src/const.ts");
const bytebuffer_1 = tslib_1.__importDefault(__webpack_require__(/*! bytebuffer */ "./node_modules/bytebuffer/dist/bytebuffer.js"));
const { schemas } = crypto_1.Transactions;
class RegisterProductTransaction extends crypto_1.Transactions.Transaction {
    static getSchema() {
        return schemas.extend(schemas.transactionBaseSchema, {
            $id: "AnticounterfeitRegisterProductTransaction",
            required: ["asset", "type", "typeGroup", "vendorField"],
            properties: {
                type: { transactionType: const_1.REGISTER_PRODUCT_TYPE },
                typeGroup: { const: const_1.ANTICOUNTERFEIT_TRANSACTIONS_TYPE_GROUP },
                amount: { bignumber: { minimum: 0, maximum: 0 } },
                vendorField: { type: "string" },
                asset: {
                    type: "object",
                    required: ["AnticounterfeitRegisterProductTransaction"],
                    properties: {
                        AnticounterfeitRegisterProductTransaction: {
                            type: "object",
                            required: ["ProductId", "Description", "ManufacturerAddressId", "Metadata"],
                            properties: {
                                ProductId: {
                                    type: "string",
                                    minLength: 18,
                                    maxLength: 18,
                                },
                                ManufacturerAddressId: {
                                    type: "string",
                                    minLength: 34,
                                    maxLength: 34,
                                },
                                CompanyFiscalCode: {
                                    type: "string",
                                    minLength: 0,
                                    maxLength: 56,
                                },
                                Metadata: {
                                    type: "array"
                                }
                            },
                        },
                    },
                },
            },
        });
    }
    serialize() {
        const { data } = this;
        const vendorFieldBytes = Buffer.from(data.vendorField, "utf8");
        const element = data.asset.AnticounterfeitRegisterProductTransaction;
        const productIdBytes = Buffer.from(element.ProductId, "utf8");
        const descriptionBytes = Buffer.from(element.Description, "utf8");
        const manufacturerAddressIdBytes = Buffer.from(element.ManufacturerAddressId, "utf8");
        const metadataBytes = Buffer.from(JSON.stringify(element.Metadata), "utf8");
        const buffer = new bytebuffer_1.default(vendorFieldBytes.length +
            productIdBytes.length +
            descriptionBytes.length +
            manufacturerAddressIdBytes.length +
            metadataBytes.length + (1 + 4), true);
        buffer.writeUint8(vendorFieldBytes.length);
        buffer.append(vendorFieldBytes, "hex");
        buffer.writeUint8(productIdBytes.length);
        buffer.append(productIdBytes, "hex");
        buffer.writeUint8(descriptionBytes.length);
        buffer.append(descriptionBytes, "hex");
        buffer.writeUint8(manufacturerAddressIdBytes.length);
        buffer.append(manufacturerAddressIdBytes, "hex");
        buffer.writeUint8(metadataBytes.length);
        buffer.append(metadataBytes, "hex");
        return buffer;
    }
    deserialize(buf) {
        const { data } = this;
        const AnticounterfeitRegisterProductTransaction = {};
        const vendorFieldLength = buf.readUint8();
        const vendorField = buf.readString(vendorFieldLength);
        const productIdLength = buf.readUint8();
        AnticounterfeitRegisterProductTransaction.ProductId = buf.readString(productIdLength);
        const descriptionLength = buf.readUint8();
        AnticounterfeitRegisterProductTransaction.Description = buf.readString(descriptionLength);
        const manufacturerAddressIdLength = buf.readUint8();
        AnticounterfeitRegisterProductTransaction.ManufacturerAddressId = buf.readString(manufacturerAddressIdLength);
        const metadataLength = buf.readUint8();
        AnticounterfeitRegisterProductTransaction.Metadata = JSON.parse(buf.readString(metadataLength));
        data.amount = crypto_1.Utils.BigNumber.ZERO;
        data.vendorField = vendorField;
        data.asset = {
            AnticounterfeitRegisterProductTransaction
        };
    }
}
RegisterProductTransaction.typeGroup = const_1.ANTICOUNTERFEIT_TRANSACTIONS_TYPE_GROUP;
RegisterProductTransaction.type = const_1.REGISTER_PRODUCT_TYPE;
RegisterProductTransaction.key = "register_product_transaction";
RegisterProductTransaction.defaultStaticFee = crypto_1.Utils.BigNumber.make("100000000");
exports.RegisterProductTransaction = RegisterProductTransaction;


/***/ }),

/***/ "./common/ark-counterfeit-common/src/transactions/transactions.ts":
/*!************************************************************************!*\
  !*** ./common/ark-counterfeit-common/src/transactions/transactions.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var registerManufacturerTransaction_1 = __webpack_require__(/*! ./registerManufacturerTransaction */ "./common/ark-counterfeit-common/src/transactions/registerManufacturerTransaction.ts");
exports.RegisterManufacturerTransaction = registerManufacturerTransaction_1.RegisterManufacturerTransaction;
var registerProductTransaction_1 = __webpack_require__(/*! ./registerProductTransaction */ "./common/ark-counterfeit-common/src/transactions/registerProductTransaction.ts");
exports.RegisterProductTransaction = registerProductTransaction_1.RegisterProductTransaction;
var transferProductTransaction_1 = __webpack_require__(/*! ./transferProductTransaction */ "./common/ark-counterfeit-common/src/transactions/transferProductTransaction.ts");
exports.TransferProductTransaction = transferProductTransaction_1.TransferProductTransaction;
var receiveProductTransaction_1 = __webpack_require__(/*! ./receiveProductTransaction */ "./common/ark-counterfeit-common/src/transactions/receiveProductTransaction.ts");
exports.ReceiveProductTransaction = receiveProductTransaction_1.ReceiveProductTransaction;


/***/ }),

/***/ "./common/ark-counterfeit-common/src/transactions/transferProductTransaction.ts":
/*!**************************************************************************************!*\
  !*** ./common/ark-counterfeit-common/src/transactions/transferProductTransaction.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const crypto_1 = __webpack_require__(/*! @arkecosystem/crypto */ "./node_modules/@arkecosystem/crypto/dist/index.bundled.js");
const const_1 = __webpack_require__(/*! ../const */ "./common/ark-counterfeit-common/src/const.ts");
const bytebuffer_1 = tslib_1.__importDefault(__webpack_require__(/*! bytebuffer */ "./node_modules/bytebuffer/dist/bytebuffer.js"));
const { schemas } = crypto_1.Transactions;
class TransferProductTransaction extends crypto_1.Transactions.Transaction {
    static getSchema() {
        return schemas.extend(schemas.transactionBaseSchema, {
            $id: "AnticounterfeitTransferProductTransaction",
            required: ["asset", "type", "typeGroup", "vendorField"],
            properties: {
                type: { transactionType: const_1.TRANSFER_PRODUCT_TYPE },
                typeGroup: { const: const_1.ANTICOUNTERFEIT_TRANSACTIONS_TYPE_GROUP },
                amount: { bignumber: { minimum: 0, maximum: 0 } },
                vendorField: { type: "string" },
                asset: {
                    type: "object",
                    required: ["AnticounterfeitTransferProductTransaction"],
                    properties: {
                        AnticounterfeitTransferProductTransaction: {
                            type: "object",
                            required: ["ProductId", "SenderAddressId", "RecipientAddressId"],
                            properties: {
                                ProductId: {
                                    type: "string",
                                    minLength: 18,
                                    maxLength: 18,
                                },
                                SenderAddressId: {
                                    type: "string",
                                    minLength: 34,
                                    maxLength: 34,
                                },
                                RecipientAddressId: {
                                    type: "string",
                                    minLength: 34,
                                    maxLength: 34,
                                }
                            },
                        },
                    },
                },
            },
        });
    }
    serialize() {
        const { data } = this;
        const vendorFieldBytes = Buffer.from(data.vendorField, "utf8");
        const element = data.asset.AnticounterfeitTransferProductTransaction;
        const productIdBytes = Buffer.from(element.ProductId, "utf8");
        const senderAddressBytes = Buffer.from(element.SenderAddressId, "utf8");
        const recipientAddressBytes = Buffer.from(element.RecipientAddressId, "utf8");
        const buffer = new bytebuffer_1.default(vendorFieldBytes.length +
            productIdBytes.length +
            senderAddressBytes.length +
            recipientAddressBytes.length + (1 + 3), true);
        buffer.writeUint8(vendorFieldBytes.length);
        buffer.append(vendorFieldBytes, "hex");
        buffer.writeUint8(productIdBytes.length);
        buffer.append(productIdBytes, "hex");
        buffer.writeUint8(senderAddressBytes.length);
        buffer.append(senderAddressBytes, "hex");
        buffer.writeUint8(recipientAddressBytes.length);
        buffer.append(recipientAddressBytes, "hex");
        return buffer;
    }
    deserialize(buf) {
        const { data } = this;
        const AnticounterfeitTransferProductTransaction = {};
        const vendorFieldLength = buf.readUint8();
        const vendorField = buf.readString(vendorFieldLength);
        const productIdLength = buf.readUint8();
        AnticounterfeitTransferProductTransaction.ProductId = buf.readString(productIdLength);
        const senderAddressIdLength = buf.readUint8();
        AnticounterfeitTransferProductTransaction.SenderAddressId = buf.readString(senderAddressIdLength);
        const recipientAddressIdLength = buf.readUint8();
        AnticounterfeitTransferProductTransaction.RecipientAddressId = buf.readString(recipientAddressIdLength);
        data.amount = crypto_1.Utils.BigNumber.ZERO;
        data.vendorField = vendorField;
        data.asset = {
            AnticounterfeitTransferProductTransaction
        };
    }
}
TransferProductTransaction.typeGroup = const_1.ANTICOUNTERFEIT_TRANSACTIONS_TYPE_GROUP;
TransferProductTransaction.type = const_1.TRANSFER_PRODUCT_TYPE;
TransferProductTransaction.key = "transfer_product_transaction";
TransferProductTransaction.defaultStaticFee = crypto_1.Utils.BigNumber.make("100000000");
exports.TransferProductTransaction = TransferProductTransaction;


/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
		"common",
		0
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		"common",
		1
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		"common",
		2
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		"common",
		3
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		"common",
		4
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		"common",
		5
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		"common",
		6
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		"common",
		7
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		"common",
		8
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		"common",
		9
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		"common",
		10
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		11
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		12
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		"common",
		13
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		"common",
		14
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		"common",
		15
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		"common",
		16
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		"common",
		17
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		"common",
		18
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		"common",
		19
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		"common",
		20
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		21
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		"common",
		22
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		"common",
		23
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		"common",
		24
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		"common",
		25
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		26
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		"common",
		27
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		"common",
		28
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		"common",
		29
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		"common",
		30
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		"common",
		31
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		"common",
		32
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		"common",
		33
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		"common",
		34
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		"common",
		35
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		"common",
		36
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
		"common",
		37
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
		"common",
		38
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		"common",
		39
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		"common",
		40
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js",
		"common",
		41
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		"common",
		42
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		"common",
		43
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		"common",
		44
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		"common",
		45
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		"common",
		46
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		"common",
		47
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		"common",
		48
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		"common",
		49
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		"common",
		50
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		"common",
		51
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		"common",
		52
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		"common",
		53
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		54
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		55
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		"common",
		56
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		"common",
		57
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		"common",
		58
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		"common",
		59
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		"common",
		60
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		"common",
		61
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		62
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		63
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		64
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		65
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		66
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		"common",
		67
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		"common",
		68
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		69
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		70
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		"common",
		71
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		"common",
		72
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		"common",
		73
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		"common",
		74
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		"common",
		75
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		"common",
		76
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		77
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid class=\"body\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"div-txt\">\n        <h1 class=\"title\">Login</h1>\n        <p class=\"description\">Inserisci username e parola chiave</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <!--FORM LOGIN-->\n      <ion-col size=\"12\" class=\"div-form\">\n        <form class=\"form-login\">\n          <img src=\"../../assets/imgs/bg.jpg\" />\n          <ion-item lines=\"none\">\n            <ion-input type=\"text\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"Username\" required class=\"password-field\">\n              <ion-icon name=\"person\"></ion-icon>\n            </ion-input>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-input type=\"password\" name=\"passphrase\" [(ngModel)]=\"passphrase\" placeholder=\"Passphrase\" required class=\"password-field\">\n              <ion-icon name=\"key\"></ion-icon>\n            </ion-input>\n          </ion-item>\n          <!-- [routerLink]=\"['/tabs/tab1']\"-->\n          <ion-button expand=\"block\" class=\"btn\" shape=\"round\" (click)=\"Login()\">Login</ion-button>\n          <a href=\"#\" class=\"create\" [routerLink]=\"['/sign']\">Crea un nuovo wallet</a>\n          <div class=\"spacer\"></div>\n        </form>\n      </ion-col>\n      <!-- END FORM LOGIN -->\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mine/mine.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mine/mine.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scrollX=\"true\" scrollY=\"true\" color=\"medium\">\n  <ion-grid>\n    <ion-row class=\"light\">\n      <ion-col size=\"10\">\n        <div>\n          <h1>I tuoi prodotti</h1>\n        </div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div>\n          <ion-icon name=\"grid-outline\" slot=\"start\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"products.length === 0\">\n      <ion-col size=\"11\" class=\"ion-col-chall\">\n        <ion-list lines=\"none\">\n          <ion-item class=\"col-dos\">\n            <ion-label>\n              \n              <p class=\"txt-card\">\n                Nessun prodotto in possesso.\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let p of products\">\n      <ion-col size=\"11\" class=\"ion-col-chall\">\n        <ion-list lines=\"none\">\n          <ion-item class=\"col-dos\">\n            <ion-label>\n              <h3 class=\"title-card\">{{ p.ProductId }}</h3>\n              <p class=\"txt-card\">\n                {{ p.Description }}<br />\n                <strong>Proprietario:</strong><br />{{ p.CurrentOwnerAddressId }}\n              </p>\n            </ion-label>\n            <!-- <img src=\"../../assets/imgs/product.png\" class=\"img-avatar\" /> -->\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <!-- <ion-col size=\"11\" class=\"ion-col-chall\">\n        <ion-list lines=\"none\">\n          <ion-item class=\"col-dos\">\n            <ion-label>\n              <h3 class=\"title-card\">Read 5 books on April</h3>\n              <p class=\"txt-card\">\n                Start Challenge\n              </p>\n            </ion-label>\n            <img src=\"../../assets/imgs/img3.png\" class=\"img-avatar\" />\n          </ion-item>\n        </ion-list>\n      </ion-col> -->\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/receive/receive.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/receive/receive.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scrollX=\"true\" scrollY=\"true\" color=\"medium\">\n  <ion-row class=\"light\">\n    <ion-col size=\"10\">\n      <div>\n        <h1>Ricevi</h1>\n      </div>\n    </ion-col>\n    <ion-col size=\"2\">\n      <div>\n        <ion-icon name=\"pricetags\" slot=\"start\"></ion-icon>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-grid>\n    <ion-row class=\"col-uno\">\n      <ion-col size=\"8\">\n        <ion-list lines=\"none\">\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img src=\"../../assets/imgs/product.png\" />\n            </ion-avatar>\n            <ion-label>\n              <h3>Codice prodotto</h3>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-input type=\"text\" name=\"codiceprodotto\" [(ngModel)]=\"codiceProdotto\" required>\n            </ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"4\" class=\"btn-swap\">\n        <ion-button expand=\"full\" shape=\"round\" color=\"warning\" class=\"btn-card\" (click)=\"Receive()\">\n          Ricevi\n        </ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/send/send.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/send/send.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scrollX=\"true\" scrollY=\"true\" color=\"medium\">\n  <ion-row class=\"light\">\n    <ion-col size=\"10\">\n      <div>\n        <h1>Invia</h1>\n      </div>\n    </ion-col>\n    <ion-col size=\"2\">\n      <div>\n        <ion-icon name=\"send\" slot=\"start\"></ion-icon>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-grid>\n    <ion-row class=\"col-uno\">\n      <ion-col size=\"8\">\n        <ion-list lines=\"none\">\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img src=\"../../assets/imgs/product.png\" />\n            </ion-avatar>\n            <ion-label>\n              <h3>Codice prodotto</h3>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-input type=\"text\" name=\"codiceprodotto\" placeholder=\"Barcode\" [(ngModel)]=\"codiceProdotto\" required>\n            </ion-input>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-input type=\"text\" name=\"indirizzoDestinatario\" placeholder=\"AddressId - Destinatario\" [(ngModel)]=\"indirizzoDestinatario\" required>\n            </ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"4\" class=\"btn-swap\">\n        <ion-button expand=\"full\" shape=\"round\" color=\"warning\" class=\"btn-card\" (click)=\"Send()\">\n          Invia\n        </ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid class=\"body\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"div-txt\">\n        <h1 class=\"title\">Registrazione</h1>\n        <p class=\"description\">Benvenuto, crea un nuovo wallet gratuitamente!</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <!--FORM LOGIN-->\n      <ion-col size=\"12\" class=\"div-form\">\n        <form class=\"form-login\">\n          <img src=\"../../assets/imgs/bg.jpg\" />\n          <ion-item lines=\"none\">\n            <ion-input type=\"text\" name=\"username\" placeholder=\"Scegli uno username\" [(ngModel)]=\"username\" required>\n              <ion-icon name=\"person\"></ion-icon>\n            </ion-input>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-input type=\"text\" name=\"passprase\" [(ngModel)]=\"generatedPassphrase\" readonly>\n              <ion-icon name=\"key\"></ion-icon>\n            </ion-input>\n          </ion-item>\n\n          <ion-button expand=\"block\" class=\"btn\" shape=\"round\" (click)=\"CreaWallet()\">Crea wallet</ion-button>\n          <label class=\"create-account\">Ritorna alla login</label>\n          <a href=\"#\" class=\"create\" [routerLink]=\"['/login']\">Login</a>\n          <div class=\"spacer\"></div>\n        </form>\n      </ion-col>\n      <!-- END FORM LOGIN -->\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scrollX=\"true\" scrollY=\"true\" color=\"medium\">\n  <ion-grid>\n    <ion-row class=\"light\">\n      <ion-col size=\"10\">\n        <div>\n          <h1>Aziende</h1>\n          <!-- <ion-button shape=\"round\" style=\"margin-bottom: -4%;\">Add book</ion-button> -->\n        </div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div>\n          <ion-icon name=\"business\" slot=\"start\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"col-uno\" *ngFor=\"let m of manufacturers\">\n      <ion-col size=\"8\">\n        <ion-list lines=\"none\">\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img src=\"../../assets/imgs/manufacturer.png\" />\n            </ion-avatar>\n            <ion-label>\n              <h3>{{ m.CompanyFiscalCode }} / {{ m.ProductPrefixId }}</h3>\n              <p>{{ m.CompanyName }}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"4\" class=\"btn-swap\">\n        <ion-button expand=\"full\" shape=\"round\" color=\"warning\" class=\"btn-card\" [routerLink]=\"['/tabs/tab2']\" [queryParams]=\"{ addressId: m.AddressId }\">\n          Prodotti\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-label>\n            <p>Address: {{ m.AddressId }}</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <!-- <ion-col size=\"12\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <img src=\"../../assets/imgs/book2.png\" class=\"img-avatar\" />\n            <ion-label>\n              <h3 class=\"title-card\">Harry potter y la piedra filosofal</h3>\n              <p class=\"txt-card\">\n                I feel the good in you, the conflict lorem...\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col> -->\n    </ion-row>\n\n    <!--\n  \n    <ion-row class=\"col-uno\">\n      <ion-col size=\"12\">\n        <ion-list lines=\"none\">\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img\n                src=\"https://img.icons8.com/bubbles/50/000000/writer-female.png\"\n              />\n            </ion-avatar>\n            <ion-label>\n              <h3>Luke Jacobs</h3>\n              <p>I feel the good in you, the conflict...</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <img src=\"../../assets/imgs/book2.png\" class=\"img-avatar\" />\n            <ion-label>\n              <h3 class=\"title-card\">Harry potter y la piedra filosofal</h3>\n              <p class=\"txt-card\">\n                I feel the good in you, the conflict lorem...\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"col-uno\">\n      <ion-col size=\"8\">\n        <ion-list lines=\"none\">\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img src=\"https://img.icons8.com/bubbles/50/000000/user.png\" />\n            </ion-avatar>\n            <ion-label>\n              <h3>Luke Jacobs</h3>\n              <p>I feel the good in you, the conflict...</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"4\" class=\"btn-swap\">\n        <ion-button\n          expand=\"full\"\n          shape=\"round\"\n          color=\"primary\"\n          class=\"btn-card\"\n          [routerLink]=\"['/single']\"\n        >\n          Buy\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <img src=\"../../assets/imgs/book2.png\" class=\"img-avatar\" />\n            <ion-label>\n              <h3 class=\"title-card\">Harry potter y la piedra filosofal</h3>\n              <p class=\"txt-card\">\n                I feel the good in you, the conflict lorem...\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"col-uno\">\n      <ion-col size=\"8\">\n        <ion-list lines=\"none\">\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img src=\"https://img.icons8.com/bubbles/50/000000/user.png\" />\n            </ion-avatar>\n            <ion-label>\n              <h3>Luke Jacobs</h3>\n              <p>I feel the good in you, the conflict...</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"4\" class=\"btn-swap\">\n        <ion-button\n          expand=\"full\"\n          shape=\"round\"\n          color=\"danger\"\n          class=\"btn-card\"\n          [routerLink]=\"['/single']\"\n        >\n          Swap\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <img src=\"../../assets/imgs/book2.png\" class=\"img-avatar\" />\n            <ion-label>\n              <h3 class=\"title-card\">Harry potter y la piedra filosofal</h3>\n              <p class=\"txt-card\">\n                I feel the good in you, the conflict lorem...\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"col-uno\">\n      <ion-col size=\"8\">\n        <ion-list lines=\"none\">\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img src=\"https://img.icons8.com/bubbles/50/000000/user.png\" />\n            </ion-avatar>\n            <ion-label>\n              <h3>Luke Jacobs</h3>\n              <p>I feel the good in you, the conflict...</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"4\" class=\"btn-swap\">\n        <ion-button\n          expand=\"full\"\n          shape=\"round\"\n          color=\"success\"\n          class=\"btn-card\"\n          [routerLink]=\"['/single']\"\n        >\n          Swap\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <img src=\"../../assets/imgs/book2.png\" class=\"img-avatar\" />\n            <ion-label>\n              <h3 class=\"title-card\">Harry potter y la piedra filosofal</h3>\n              <p class=\"txt-card\">\n                I feel the good in you, the conflict lorem...\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n   \n   \n    </ion-row>\n\n  -->\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scrollX=\"true\" scrollY=\"true\" color=\"medium\">\n  <ion-grid>\n    <ion-row class=\"light\">\n      <ion-col size=\"10\">\n        <div>\n          <h1>Prodotti</h1>\n        </div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div>\n          <ion-icon name=\"grid-outline\" slot=\"start\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"products.length === 0\">\n      <ion-col size=\"11\" class=\"ion-col-chall\">\n        <ion-list lines=\"none\">\n          <ion-item class=\"col-dos\">\n            <ion-label>\n              \n              <p class=\"txt-card\">\n                Nessun prodotto registrato dal produttore.\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let p of products\">\n      <ion-col size=\"11\" class=\"ion-col-chall\">\n        <ion-list lines=\"none\">\n          <ion-item class=\"col-dos\">\n            <ion-label>\n              <h3 class=\"title-card\">{{ p.ProductId }}</h3>\n              <p class=\"txt-card\">\n                {{ p.Description }}<br />\n                <strong>Proprietario:</strong><br />{{ p.CurrentOwnerAddressId }}\n              </p>\n            </ion-label>\n            <!-- <img src=\"../../assets/imgs/product.png\" class=\"img-avatar\" /> -->\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <!-- <ion-col size=\"11\" class=\"ion-col-chall\">\n        <ion-list lines=\"none\">\n          <ion-item class=\"col-dos\">\n            <ion-label>\n              <h3 class=\"title-card\">Read 5 books on April</h3>\n              <p class=\"txt-card\">\n                Start Challenge\n              </p>\n            </ion-label>\n            <img src=\"../../assets/imgs/img3.png\" class=\"img-avatar\" />\n          </ion-item>\n        </ion-list>\n      </ion-col> -->\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"business\"></ion-icon>\n      <ion-label>Aziende</ion-label>\n      <!-- <ion-badge color=\"primary\">6</ion-badge> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"send\">\n      <ion-icon name=\"send\"></ion-icon>\n      <ion-label>Invia</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"receive\">\n      <ion-icon name=\"pricetags\"></ion-icon>\n      <ion-label>Ricevi</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"mine\">\n      <ion-icon name=\"grid\"></ion-icon>\n      <ion-label>Miei prodotti</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"login\">\n      <ion-icon name=\"key\"></ion-icon>\n      <ion-label>Logout</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path: '',
        loadChildren: () => Promise.resolve().then(() => tslib_1.__importStar(__webpack_require__(/*! ./tabs/tabs.module */ "./src/app/tabs/tabs.module.ts"))).then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.resolve().then(() => tslib_1.__importStar(__webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts"))).then(m => m.LoginPageModule)
    },
    {
        path: 'sign',
        loadChildren: () => Promise.resolve().then(() => tslib_1.__importStar(__webpack_require__(/*! ./sign/sign.module */ "./src/app/sign/sign.module.ts"))).then(m => m.SignPageModule)
    },
    {
        path: 'send',
        loadChildren: () => Promise.resolve().then(() => tslib_1.__importStar(__webpack_require__(/*! ./send/send.module */ "./src/app/send/send.module.ts"))).then(m => m.SendPageModule)
    },
    {
        path: 'receive',
        loadChildren: () => Promise.resolve().then(() => tslib_1.__importStar(__webpack_require__(/*! ./receive/receive.module */ "./src/app/receive/receive.module.ts"))).then(m => m.ReceivePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
const ngx_1 = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
const ngx_2 = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: angular_1.Platform },
    { type: ngx_1.SplashScreen },
    { type: ngx_2.StatusBar }
];
AppComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-root',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [angular_1.Platform,
        ngx_1.SplashScreen,
        ngx_2.StatusBar])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const restService_1 = __webpack_require__(/*! ./services/restService */ "./src/app/services/restService.ts");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
const ngx_1 = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
const ngx_2 = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
const app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const storageService_1 = __webpack_require__(/*! ./services/storageService */ "./src/app/services/storageService.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        entryComponents: [],
        imports: [platform_browser_1.BrowserModule, angular_1.IonicModule.forRoot(), app_routing_module_1.AppRoutingModule, http_1.HttpClientModule],
        providers: [
            ngx_2.StatusBar,
            ngx_1.SplashScreen,
            { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
            restService_1.RestService,
            storageService_1.StorageService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const login_page_1 = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
const routes = [
    {
        path: '',
        component: login_page_1.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], LoginPageRoutingModule);
exports.LoginPageRoutingModule = LoginPageRoutingModule;


/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
const login_routing_module_1 = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
const login_page_1 = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule,
            login_routing_module_1.LoginPageRoutingModule
        ],
        declarations: [login_page_1.LoginPage]
    })
], LoginPageModule);
exports.LoginPageModule = LoginPageModule;


/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*================================== MEDIA QUERIES, FOR ONLY DESKTOPS ==============================*/\n.item-md {\n  padding-left: 0px;\n}\n.div-txt {\n  margin-top: 0%;\n}\n.title {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 45px;\n  font-weight: 600;\n  color: #001848;\n}\nion-input {\n  background-color: #fff !important;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 30px;\n  padding-right: 30px;\n  margin-bottom: 20px;\n  box-shadow: 10px 10px 5px 0px #f5f2f2;\n}\n.description {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  margin-top: 0px;\n  color: #001848;\n}\n.div-form {\n  padding-bottom: 0%;\n}\n.item-ios {\n  padding-left: 0px !important;\n}\n.form-login {\n  width: 60%;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: block;\n  margin: 0px auto;\n}\n.icon {\n  font-size: 60px;\n  padding: 10px;\n}\n.spacer {\n  margin-bottom: 0% !important;\n}\n.create-account {\n  text-align: center;\n  display: block;\n  margin-top: 15px;\n  font-family: \"Poppins\";\n  font-size: 15px;\n}\n.create {\n  text-align: center;\n  display: block;\n  color: #ff8993;\n  font-weight: 600;\n  font-family: \"Poppins\";\n  font-size: 15px;\n  text-decoration: none;\n}\n/*================================== END MEDIA QUERIES, FOR ONLY DESKTOPS ==============================*/\n/*================================== MEDIA QUERIES, FOR ONLY IPHONE, ANDROID, ETC.. ==============================*/\n@media only screen and (min-width: 320px) and (max-width: 812px) {\n  .div-txt {\n    margin-top: 0px;\n  }\n\n  ion-icon {\n    font-size: 30px;\n    color: #001848;\n    margin-right: 5%;\n  }\n\n  .title {\n    text-align: center;\n    font-family: \"Poppins\", sans-serif;\n    font-size: 45px;\n    font-weight: 600;\n    color: #001848;\n  }\n\n  :host ion-input {\n    box-shadow: 10px 10px 5px 0px #f5f2f2;\n    --padding-top: 20px;\n    --padding-bottom: 20px;\n    --placeholder-color: #001848 !important;\n    --placeholder-font-style: \"Popins\";\n    --placeholder-font-weight: 600;\n  }\n  :host ion-item {\n    --padding-start: 0px !important;\n  }\n  :host ion-button {\n    --background: #001848 !important;\n    --background-activated: #fff !important;\n    --color-activated: #001848 !important;\n    --border-color: #001848 !important;\n  }\n\n  .description {\n    text-align: center;\n    font-family: \"Poppins\", sans-serif;\n    font-size: 16px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    color: #001848;\n  }\n\n  .div-form {\n    padding-bottom: 0%;\n  }\n\n  .item-ios {\n    padding-left: 0px !important;\n  }\n\n  .form-login {\n    width: 100%;\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .icon {\n    font-size: 60px;\n    padding: 10px;\n  }\n\n  .btn {\n    margin-top: 30px;\n    font-family: \"Poppins\";\n    font-size: 20px;\n    font-weight: 600;\n    box-shadow: none;\n    width: 100%;\n  }\n\n  .spacer {\n    margin-bottom: 40% !important;\n  }\n\n  .create-account {\n    text-align: center;\n    display: block;\n    margin-top: 15px;\n    font-family: \"Poppins\";\n    font-size: 15px;\n    color: #001848;\n  }\n\n  .create {\n    text-align: center;\n    display: block;\n    color: #001848;\n    font-weight: 600;\n    font-family: \"Poppins\";\n    font-size: 15px;\n    text-decoration: none;\n  }\n}\n/*================================== END MEDIA QUERIES, FOR ONLY IPHONE, ANDROID, ETC ==============================*/\n/*================================== MEDIA QUERIES, FOR ONLY TABLETS ==============================*/\n@media only screen and (min-width: 768px) and (max-width: 900px) {\n  .div-txt {\n    margin-top: 340px;\n  }\n\n  .body {\n    margin-top: -23%;\n    background-position: fixed;\n    background-size: auto;\n    background-repeat: no-repeat;\n  }\n\n  .form-login {\n    width: 70%;\n    padding-left: 20px;\n    padding-right: 20px;\n    display: block;\n    margin: 0px auto;\n  }\n\n  .div-form {\n    padding-bottom: 22%;\n  }\n}\n.password-field {\n  height: 65px;\n}\n/*================================== END MEDIA QUERIES, FOR ONLY TABLETS ==============================*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxHSU9WQU5OSVxcRG9jdW1lbnRzXFxHaXRIdWJcXGFyay1jb3VudGVyZmVpdC1hcHAvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxR0FBQTtBQUVBO0VBQ0UsaUJBQUE7QUNBRjtBREdBO0VBQ0UsY0FBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FGO0FER0E7RUFDRSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0FDQUY7QURHQTtFQUNFLDRCQUFBO0FDQUY7QURHQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDQUY7QURJQTtFQUNFLDRCQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDREY7QURJQSx5R0FBQTtBQUVBLG1IQUFBO0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUNGRjs7RURLQTtJQUNFLGVBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUNGRjs7RURLQTtJQUNFLGtCQUFBO0lBQ0Esa0NBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDRkY7O0VETUU7SUFDRSxxQ0FBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSx1Q0FBQTtJQUNBLGtDQUFBO0lBQ0EsOEJBQUE7RUNISjtFRE9FO0lBQ0UsK0JBQUE7RUNMSjtFRFFFO0lBQ0UsZ0NBQUE7SUFDQSx1Q0FBQTtJQUNBLHFDQUFBO0lBQ0Esa0NBQUE7RUNOSjs7RURVQTtJQUNFLGtCQUFBO0lBQ0Esa0NBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQ1BGOztFRFVBO0lBQ0Usa0JBQUE7RUNQRjs7RURVQTtJQUNFLDRCQUFBO0VDUEY7O0VEVUE7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ1BGOztFRFVBO0lBQ0UsZUFBQTtJQUNBLGFBQUE7RUNQRjs7RURVQTtJQUNFLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUNQRjs7RURVQTtJQUNFLDZCQUFBO0VDUEY7O0VEVUE7SUFDRSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7RUNQRjs7RURVQTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0VDUEY7QUFDRjtBRFVBLHFIQUFBO0FBRUEsb0dBQUE7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUNURjs7RURZQTtJQUNFLGdCQUFBO0lBQ0EsMEJBQUE7SUFDQSxxQkFBQTtJQUNBLDRCQUFBO0VDVEY7O0VEWUE7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQ1RGOztFRFlBO0lBQ0UsbUJBQUE7RUNURjtBQUNGO0FEYUE7RUFDRSxZQUFBO0FDWEY7QURjQSx3R0FBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNRURJQSBRVUVSSUVTLCBGT1IgT05MWSBERVNLVE9QUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4uaXRlbS1tZCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uZGl2LXR4dCB7XG4gIG1hcmdpbi10b3A6IDAlO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMTg0ODtcbn1cblxuaW9uLWlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgyNDUsIDI0MiwgMjQyLCAxKTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBjb2xvcjogIzAwMTg0ODtcbn1cblxuLmRpdi1mb3JtIHtcbiAgcGFkZGluZy1ib3R0b206IDAlO1xufVxuXG4uaXRlbS1pb3Mge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1sb2dpbiB7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5cbi5zcGFjZXIge1xuICBtYXJnaW4tYm90dG9tOiAwJSAhaW1wb3J0YW50O1xufVxuXG4uY3JlYXRlLWFjY291bnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNyZWF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmY4OTkzO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRU5EIE1FRElBIFFVRVJJRVMsIEZPUiBPTkxZIERFU0tUT1BTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNRURJQSBRVUVSSUVTLCBGT1IgT05MWSBJUEhPTkUsIEFORFJPSUQsIEVUQy4uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogODEycHgpIHtcbiAgLmRpdi10eHQge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMwMDE4NDg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwMTg0ODtcbiAgfVxuXG4gIDpob3N0IHtcbiAgICBpb24taW5wdXQge1xuICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgyNDUsIDI0MiwgMjQyLCAxKTtcbiAgICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMTg0OCAhaW1wb3J0YW50O1xuICAgICAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBcIlBvcGluc1wiO1xuICAgICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNjAwO1xuXG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzAwMTg0OCAhaW1wb3J0YW50O1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGNvbG9yOiAjMDAxODQ4O1xuICB9XG5cbiAgLmRpdi1mb3JtIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCU7XG4gIH1cblxuICAuaXRlbS1pb3Mge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZm9ybS1sb2dpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuYnRuIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNwYWNlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY3JlYXRlLWFjY291bnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICMwMDE4NDg7XG4gIH1cblxuICAuY3JlYXRlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICMwMDE4NDg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRU5EIE1FRElBIFFVRVJJRVMsIEZPUiBPTkxZIElQSE9ORSwgQU5EUk9JRCwgRVRDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNRURJQSBRVUVSSUVTLCBGT1IgT05MWSBUQUJMRVRTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmRpdi10eHQge1xuICAgIG1hcmdpbi10b3A6IDM0MHB4O1xuICB9XG5cbiAgLmJvZHkge1xuICAgIG1hcmdpbi10b3A6IC0yMyU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cblxuICAuZm9ybS1sb2dpbiB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG5cbiAgLmRpdi1mb3JtIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjIlO1xuICB9XG5cbn1cblxuLnBhc3N3b3JkLWZpZWxkIHtcbiAgaGVpZ2h0OiA2NXB4O1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRU5EIE1FRElBIFFVRVJJRVMsIEZPUiBPTkxZIFRBQkxFVFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki8iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTUVESUEgUVVFUklFUywgRk9SIE9OTFkgREVTS1RPUFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi5pdGVtLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5kaXYtdHh0IHtcbiAgbWFyZ2luLXRvcDogMCU7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAxODQ4O1xufVxuXG5pb24taW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCAjZjVmMmYyO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiAjMDAxODQ4O1xufVxuXG4uZGl2LWZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG59XG5cbi5pdGVtLWlvcyB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWxvZ2luIHtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDYwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zcGFjZXIge1xuICBtYXJnaW4tYm90dG9tOiAwJSAhaW1wb3J0YW50O1xufVxuXG4uY3JlYXRlLWFjY291bnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNyZWF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmY4OTkzO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRU5EIE1FRElBIFFVRVJJRVMsIEZPUiBPTkxZIERFU0tUT1BTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTUVESUEgUVVFUklFUywgRk9SIE9OTFkgSVBIT05FLCBBTkRST0lELCBFVEMuLiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5kaXYtdHh0IHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAjMDAxODQ4O1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gIH1cblxuICAudGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMwMDE4NDg7XG4gIH1cblxuICA6aG9zdCBpb24taW5wdXQge1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4ICNmNWYyZjI7XG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IFwiUG9waW5zXCI7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNjAwO1xuICB9XG4gIDpob3N0IGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIDpob3N0IGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzAwMTg0OCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzAwMTg0OCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZGVzY3JpcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgY29sb3I6ICMwMDE4NDg7XG4gIH1cblxuICAuZGl2LWZvcm0ge1xuICAgIHBhZGRpbmctYm90dG9tOiAwJTtcbiAgfVxuXG4gIC5pdGVtLWlvcyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mb3JtLWxvZ2luIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5pY29uIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5idG4ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc3BhY2VyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jcmVhdGUtYWNjb3VudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzAwMTg0ODtcbiAgfVxuXG4gIC5jcmVhdGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzAwMTg0ODtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRU5EIE1FRElBIFFVRVJJRVMsIEZPUiBPTkxZIElQSE9ORSwgQU5EUk9JRCwgRVRDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTUVESUEgUVVFUklFUywgRk9SIE9OTFkgVEFCTEVUUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5kaXYtdHh0IHtcbiAgICBtYXJnaW4tdG9wOiAzNDBweDtcbiAgfVxuXG4gIC5ib2R5IHtcbiAgICBtYXJnaW4tdG9wOiAtMjMlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG5cbiAgLmZvcm0tbG9naW4ge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuXG4gIC5kaXYtZm9ybSB7XG4gICAgcGFkZGluZy1ib3R0b206IDIyJTtcbiAgfVxufVxuLnBhc3N3b3JkLWZpZWxkIHtcbiAgaGVpZ2h0OiA2NXB4O1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRU5EIE1FRElBIFFVRVJJRVMsIEZPUiBPTkxZIFRBQkxFVFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki8iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const restService_1 = __webpack_require__(/*! ../services/restService */ "./src/app/services/restService.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const storageService_1 = __webpack_require__(/*! ../services/storageService */ "./src/app/services/storageService.ts");
const crypto_1 = __webpack_require__(/*! @arkecosystem/crypto */ "./node_modules/@arkecosystem/crypto/dist/index.bundled.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
let LoginPage = class LoginPage {
    constructor(restService, storageService, router, alertCtrl) {
        this.restService = restService;
        this.storageService = storageService;
        this.router = router;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
    }
    async Login() {
        // username: gio3
        // password: flat health urge window citizen thing shock pudding wire flower apple engage
        const addressId = crypto_1.Identities.Address.fromPassphrase(this.passphrase);
        const result = await this.restService.Login(this.username, addressId);
        if (result.Data === true) {
            this.storageService.LoginPassphrase = this.passphrase;
            this.router.navigateByUrl('/tabs/tab1');
        }
        else {
            const alert = await this.alertCtrl.create({
                header: 'Errore',
                subHeader: 'Errore durante il login, username of passphrase non validi.',
                buttons: ['Dismiss']
            });
            alert.present();
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: restService_1.RestService },
    { type: storageService_1.StorageService },
    { type: router_1.Router },
    { type: angular_1.AlertController }
];
LoginPage = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-login',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [restService_1.RestService,
        storageService_1.StorageService,
        router_1.Router,
        angular_1.AlertController])
], LoginPage);
exports.LoginPage = LoginPage;


/***/ }),

/***/ "./src/app/mine/mine.module.ts":
/*!*************************************!*\
  !*** ./src/app/mine/mine.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const mine_page_1 = __webpack_require__(/*! ./mine.page */ "./src/app/mine/mine.page.ts");
let MinePageModule = class MinePageModule {
};
MinePageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            angular_1.IonicModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([{ path: '', component: mine_page_1.MinePage }])
        ],
        declarations: [mine_page_1.MinePage]
    })
], MinePageModule);
exports.MinePageModule = MinePageModule;


/***/ }),

/***/ "./src/app/mine/mine.page.scss":
/*!*************************************!*\
  !*** ./src/app/mine/mine.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 30px;\n  color: #001848;\n  font-weight: 600;\n}\n\nion-grid {\n  --ion-grid-padding: 0px !important;\n}\n\n.light {\n  background: #fff;\n  padding-bottom: 10%;\n}\n\nbody {\n  background: #ddd;\n}\n\nion-icon {\n  font-size: 30px;\n  margin-top: 20px;\n  color: #001848;\n}\n\n.img-avatar {\n  width: 35%;\n}\n\nh3 {\n  color: #001848 !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.title-card {\n  padding-left: 5%;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.txt-card {\n  padding-left: 5%;\n}\n\np {\n  color: #001848 !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.icon-one {\n  color: #fff !important;\n  font-size: 20px !important;\n  margin-top: -2%;\n}\n\n.btn-swap {\n  padding-right: 20px;\n}\n\n.btn-card {\n  padding-left: 0px !important;\n  margin-top: 20%;\n}\n\nh5 {\n  margin-top: 34px !important;\n  font-family: \"Poppins\" !important;\n}\n\n.p-txt-chall {\n  font-family: \"Poppins\";\n  font-size: 15px;\n  text-align: center;\n  font-weight: 600;\n  color: #9b9da5 !important;\n  padding-top: 5%;\n}\n\n.h2-chall {\n  color: #001848;\n  font-family: \"Poppins\";\n  text-align: left;\n  padding-left: 4%;\n  padding-bottom: 5%;\n  padding-top: 5%;\n  font-weight: 800;\n}\n\n.col-dos {\n  padding-top: 10%;\n  background: #fff;\n  padding: 5%;\n}\n\n.img-chall {\n  display: block;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.ion-col-chall {\n  display: block;\n  margin: 0px auto;\n}\n\n:host ion-button {\n  margin-top: 15%;\n  --background: #001848 !important;\n  --background-activated: #fff !important;\n  --color-activated: #001848 !important;\n  --border-color: #001848 !important;\n  font-family: \"Poppins\" !important;\n}\n\n:host .list-ios {\n  border: 1px solid #fff !important;\n  border-radius: 10px;\n}\n\n:host ion-item {\n  --border-color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluZS9DOlxcVXNlcnNcXEdJT1ZBTk5JXFxEb2N1bWVudHNcXEdpdEh1YlxcYXJrLWNvdW50ZXJmZWl0LWFwcC9zcmNcXGFwcFxcbWluZVxcbWluZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21pbmUvbWluZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUVJLFVBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNESjs7QURJQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FDREo7O0FETUE7RUFDSSwyQkFBQTtFQUNBLGlDQUFBO0FDSEo7O0FETUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURRSTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FDTFI7O0FEUUk7RUFDSSxpQ0FBQTtFQUNBLG1CQUFBO0FDTlI7O0FEU0k7RUFDSSwrQkFBQTtBQ1BSIiwiZmlsZSI6InNyYy9hcHAvbWluZS9taW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzAwMTg0ODtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuXG4ubGlnaHQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGNvbG9yOiAjMDAxODQ4O1xufVxuXG4uaW1nLWF2YXRhciB7XG5cbiAgICB3aWR0aDogMzUlO1xufVxuXG5oMyB7XG4gICAgY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRpdGxlLWNhcmQge1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50eHQtY2FyZCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxucCB7XG4gICAgY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmljb24tb25lIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IC0yJTtcbn1cblxuLmJ0bi1zd2FwIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uYnRuLWNhcmQge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG4jY29sLWNoYWxsZW5nZXMge31cblxuaDUge1xuICAgIG1hcmdpbi10b3A6IDM0cHggIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIgIWltcG9ydGFudDtcbn1cblxuLnAtdHh0LWNoYWxsIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjOWI5ZGE1ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4uaDItY2hhbGwge1xuICAgIGNvbG9yOiAjMDAxODQ4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogNCU7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4uY29sLWRvcyB7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDUlO1xufVxuXG4uaW1nLWNoYWxsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaW9uLWNvbC1jaGFsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuOmhvc3Qge1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmxpc3QtaW9zIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG59IiwiaDEge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzAwMTg0ODtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiAjMDAxODQ4O1xufVxuXG4uaW1nLWF2YXRhciB7XG4gIHdpZHRoOiAzNSU7XG59XG5cbmgzIHtcbiAgY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUtY2FyZCB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnR4dC1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxucCB7XG4gIGNvbG9yOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmljb24tb25lIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0yJTtcbn1cblxuLmJ0bi1zd2FwIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmJ0bi1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG5oNSB7XG4gIG1hcmdpbi10b3A6IDM0cHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiICFpbXBvcnRhbnQ7XG59XG5cbi5wLXR4dC1jaGFsbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOWI5ZGE1ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLmgyLWNoYWxsIHtcbiAgY29sb3I6ICMwMDE4NDg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA0JTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5jb2wtZG9zIHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5pbWctY2hhbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pb24tY29sLWNoYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbjpob3N0IGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIC0tYmFja2dyb3VuZDogIzAwMTg0OCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmxpc3QtaW9zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/mine/mine.page.ts":
/*!***********************************!*\
  !*** ./src/app/mine/mine.page.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const crypto_1 = __webpack_require__(/*! @arkecosystem/crypto */ "./node_modules/@arkecosystem/crypto/dist/index.bundled.js");
const storageService_1 = __webpack_require__(/*! ./../services/storageService */ "./src/app/services/storageService.ts");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const restService_1 = __webpack_require__(/*! ../services/restService */ "./src/app/services/restService.ts");
let MinePage = class MinePage {
    constructor(route, router, restService, storageService) {
        this.route = route;
        this.router = router;
        this.restService = restService;
        this.storageService = storageService;
        this.products = [];
    }
    ngOnInit() {
        const addressId = crypto_1.Identities.Address.fromPassphrase(this.storageService.LoginPassphrase);
        this.restService.GetProductsByOwner(addressId).then(data => {
            this.products = data;
        });
    }
};
MinePage.ctorParameters = () => [
    { type: router_1.ActivatedRoute },
    { type: router_1.Router },
    { type: restService_1.RestService },
    { type: storageService_1.StorageService }
];
MinePage = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-mine',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./mine.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mine/mine.page.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./mine.page.scss */ "./src/app/mine/mine.page.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        restService_1.RestService,
        storageService_1.StorageService])
], MinePage);
exports.MinePage = MinePage;


/***/ }),

/***/ "./src/app/receive/receive-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/receive/receive-routing.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const receive_page_1 = __webpack_require__(/*! ./receive.page */ "./src/app/receive/receive.page.ts");
const routes = [
    {
        path: '',
        component: receive_page_1.ReceivePage
    }
];
let ReceiveRoutingModule = class ReceiveRoutingModule {
};
ReceiveRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], ReceiveRoutingModule);
exports.ReceiveRoutingModule = ReceiveRoutingModule;


/***/ }),

/***/ "./src/app/receive/receive.module.ts":
/*!*******************************************!*\
  !*** ./src/app/receive/receive.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
const receive_routing_module_1 = __webpack_require__(/*! ./receive-routing.module */ "./src/app/receive/receive-routing.module.ts");
const receive_page_1 = __webpack_require__(/*! ./receive.page */ "./src/app/receive/receive.page.ts");
let ReceivePageModule = class ReceivePageModule {
};
ReceivePageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule,
            receive_routing_module_1.ReceiveRoutingModule
        ],
        declarations: [receive_page_1.ReceivePage]
    })
], ReceivePageModule);
exports.ReceivePageModule = ReceivePageModule;


/***/ }),

/***/ "./src/app/receive/receive.page.scss":
/*!*******************************************!*\
  !*** ./src/app/receive/receive.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 30px;\n  color: #001848;\n  font-weight: 600;\n}\n\nion-grid {\n  --ion-grid-padding: 0px !important;\n}\n\n.col-uno {\n  margin-top: 8%;\n  background: #fff;\n}\n\n.light {\n  background: #fff;\n}\n\nbody {\n  background: #ddd;\n}\n\nion-icon {\n  font-size: 30px;\n  margin-top: 20px;\n  color: #001848;\n}\n\n.icon-sin {\n  font-size: 25px;\n}\n\n.img-avatar {\n  width: 45%;\n}\n\nh3 {\n  color: #001848 !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n  font-size: 18px !important;\n}\n\nh2 {\n  color: #001848;\n  font-weight: 800;\n  font-family: \"Poppins\";\n  font-size: 18px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.p-txt-syno {\n  color: #9b9da5 !important;\n  padding: 20px;\n  text-align: justify;\n}\n\n.h3-txt-sin {\n  color: #001848 !important;\n  margin-top: 27% !important;\n  margin-bottom: 0px !important;\n  margin-left: 10%;\n}\n\n.p-txt-sin {\n  color: #9b9da5 !important;\n  margin-bottom: 0px !important;\n  margin-left: 10%;\n}\n\n.title-card {\n  padding-left: 5%;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.txt-card {\n  padding-left: 5%;\n}\n\np {\n  color: #001848 !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.icon-one {\n  color: #fff !important;\n  font-size: 20px !important;\n  margin-top: -2%;\n}\n\n.btn-swap {\n  padding-right: 20px;\n}\n\n.btn-card {\n  padding-left: 0px !important;\n  margin-top: 20%;\n}\n\n:host ion-button {\n  height: 35px;\n  padding-left: 20px;\n}\n\n:host .list-ios {\n  border: 1px solid #fff !important;\n}\n\n:host ion-item {\n  --border-color: #fff !important;\n}\n\nion-input {\n  background-color: #fff !important;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 30px;\n  padding-right: 30px;\n  margin-bottom: 20px;\n  box-shadow: 10px 10px 5px 0px #f5f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWl2ZS9DOlxcVXNlcnNcXEdJT1ZBTk5JXFxEb2N1bWVudHNcXEdpdEh1YlxcYXJrLWNvdW50ZXJmZWl0LWFwcC9zcmNcXGFwcFxccmVjZWl2ZVxccmVjZWl2ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlY2VpdmUvcmVjZWl2ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUVJLFVBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FDQUo7O0FES0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNGUjs7QURLSTtFQUNJLGlDQUFBO0FDSFI7O0FETUk7RUFDSSwrQkFBQTtBQ0pSOztBRFFBO0VBQ0ksaUNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3JlY2VpdmUvcmVjZWl2ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMwMDE4NDg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWdyaWQge1xuICAgIC0taW9uLWdyaWQtcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtdW5vIHtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubGlnaHQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBjb2xvcjogIzAwMTg0ODtcbn1cblxuLmljb24tc2luIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5pbWctYXZhdGFyIHtcblxuICAgIHdpZHRoOiA0NSU7XG59XG5cbmgzIHtcbiAgICBjb2xvcjogIzAwMTg0OCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG5oMiB7XG4gICAgY29sb3I6ICMwMDE4NDg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ucC10eHQtc3lubyB7XG4gICAgY29sb3I6ICM5YjlkYTUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5oMy10eHQtc2luIHtcbiAgICBjb2xvcjogIzAwMTg0OCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDI3JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5wLXR4dC1zaW4ge1xuICAgIGNvbG9yOiAjOWI5ZGE1ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLnRpdGxlLWNhcmQge1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50eHQtY2FyZCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxucCB7XG4gICAgY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmljb24tb25lIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IC0yJTtcbn1cblxuLmJ0bi1zd2FwIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uYnRuLWNhcmQge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG46aG9zdCB7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLmxpc3QtaW9zIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgyNDUsIDI0MiwgMjQyLCAxKTtcbiAgfSIsImgxIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICMwMDE4NDg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbC11bm8ge1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogIzAwMTg0ODtcbn1cblxuLmljb24tc2luIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaW1nLWF2YXRhciB7XG4gIHdpZHRoOiA0NSU7XG59XG5cbmgzIHtcbiAgY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuaDIge1xuICBjb2xvcjogIzAwMTg0ODtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLnAtdHh0LXN5bm8ge1xuICBjb2xvcjogIzliOWRhNSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uaDMtdHh0LXNpbiB7XG4gIGNvbG9yOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDI3JSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLnAtdHh0LXNpbiB7XG4gIGNvbG9yOiAjOWI5ZGE1ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4udGl0bGUtY2FyZCB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnR4dC1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxucCB7XG4gIGNvbG9yOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmljb24tb25lIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0yJTtcbn1cblxuLmJ0bi1zd2FwIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmJ0bi1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG46aG9zdCBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG46aG9zdCAubGlzdC1pb3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4ICNmNWYyZjI7XG59Il19 */");

/***/ }),

/***/ "./src/app/receive/receive.page.ts":
/*!*****************************************!*\
  !*** ./src/app/receive/receive.page.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const restService_1 = __webpack_require__(/*! ../services/restService */ "./src/app/services/restService.ts");
const storageService_1 = __webpack_require__(/*! ../services/storageService */ "./src/app/services/storageService.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
const crypto_1 = __webpack_require__(/*! @arkecosystem/crypto */ "./node_modules/@arkecosystem/crypto/dist/index.bundled.js");
let ReceivePage = class ReceivePage {
    constructor(restService, storageService, router, alertCtrl) {
        this.restService = restService;
        this.storageService = storageService;
        this.router = router;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
    }
    async Receive() {
        await this.restService.ReceiveProduct(this.storageService.LoginPassphrase, {
            ProductId: this.codiceProdotto,
            RecipientAddressId: crypto_1.Identities.Address.fromPassphrase(this.storageService.LoginPassphrase)
        }).then(async (data) => {
            if (data.IsSuccess) {
                const alert = await this.alertCtrl.create({
                    header: 'OK',
                    subHeader: 'Ricezione del prodotto ' + this.codiceProdotto + ' avvenuta con successo.',
                    buttons: ['Dismiss']
                });
                alert.present();
            }
            else {
                const alert = await this.alertCtrl.create({
                    header: 'Errore',
                    subHeader: 'Errore durante la ricezione del prodotto: ' + JSON.stringify(data.Data),
                    buttons: ['Dismiss']
                });
                alert.present();
            }
        });
    }
};
ReceivePage.ctorParameters = () => [
    { type: restService_1.RestService },
    { type: storageService_1.StorageService },
    { type: router_1.Router },
    { type: angular_1.AlertController }
];
ReceivePage = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-singlebook',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./receive.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/receive/receive.page.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./receive.page.scss */ "./src/app/receive/receive.page.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [restService_1.RestService,
        storageService_1.StorageService,
        router_1.Router,
        angular_1.AlertController])
], ReceivePage);
exports.ReceivePage = ReceivePage;


/***/ }),

/***/ "./src/app/send/send-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/send/send-routing.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const send_page_1 = __webpack_require__(/*! ./send.page */ "./src/app/send/send.page.ts");
const routes = [
    {
        path: '',
        component: send_page_1.SendPage
    }
];
let SendRoutingModule = class SendRoutingModule {
};
SendRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], SendRoutingModule);
exports.SendRoutingModule = SendRoutingModule;


/***/ }),

/***/ "./src/app/send/send.module.ts":
/*!*************************************!*\
  !*** ./src/app/send/send.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
const send_routing_module_1 = __webpack_require__(/*! ./send-routing.module */ "./src/app/send/send-routing.module.ts");
const send_page_1 = __webpack_require__(/*! ./send.page */ "./src/app/send/send.page.ts");
let SendPageModule = class SendPageModule {
};
SendPageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule,
            send_routing_module_1.SendRoutingModule
        ],
        declarations: [send_page_1.SendPage]
    })
], SendPageModule);
exports.SendPageModule = SendPageModule;


/***/ }),

/***/ "./src/app/send/send.page.scss":
/*!*************************************!*\
  !*** ./src/app/send/send.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 30px;\n  color: #001848;\n  font-weight: 600;\n}\n\nion-grid {\n  --ion-grid-padding: 0px !important;\n}\n\n.col-uno {\n  margin-top: 8%;\n  background: #fff;\n}\n\n.light {\n  background: #fff;\n}\n\nbody {\n  background: #ddd;\n}\n\nion-icon {\n  font-size: 30px;\n  margin-top: 20px;\n  color: #001848;\n}\n\n.icon-sin {\n  font-size: 25px;\n}\n\n.img-avatar {\n  width: 45%;\n}\n\nh3 {\n  color: #001848 !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n  font-size: 18px !important;\n}\n\nh2 {\n  color: #001848;\n  font-weight: 800;\n  font-family: \"Poppins\";\n  font-size: 18px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.p-txt-syno {\n  color: #9b9da5 !important;\n  padding: 20px;\n  text-align: justify;\n}\n\n.h3-txt-sin {\n  color: #001848 !important;\n  margin-top: 27% !important;\n  margin-bottom: 0px !important;\n  margin-left: 10%;\n}\n\n.p-txt-sin {\n  color: #9b9da5 !important;\n  margin-bottom: 0px !important;\n  margin-left: 10%;\n}\n\n.title-card {\n  padding-left: 5%;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.txt-card {\n  padding-left: 5%;\n}\n\np {\n  color: #001848 !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.icon-one {\n  color: #fff !important;\n  font-size: 20px !important;\n  margin-top: -2%;\n}\n\n.btn-swap {\n  padding-right: 20px;\n}\n\n.btn-card {\n  padding-left: 0px !important;\n  margin-top: 20%;\n}\n\n:host ion-button {\n  height: 35px;\n  padding-left: 20px;\n}\n\n:host .list-ios {\n  border: 1px solid #fff !important;\n}\n\n:host ion-item {\n  --border-color: #fff !important;\n}\n\nion-input {\n  background-color: #fff !important;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 30px;\n  padding-right: 30px;\n  margin-bottom: 20px;\n  box-shadow: 10px 10px 5px 0px #f5f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC9DOlxcVXNlcnNcXEdJT1ZBTk5JXFxEb2N1bWVudHNcXEdpdEh1YlxcYXJrLWNvdW50ZXJmZWl0LWFwcC9zcmNcXGFwcFxcc2VuZFxcc2VuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlbmQvc2VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUVJLFVBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FDQUo7O0FES0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNGUjs7QURLSTtFQUNJLGlDQUFBO0FDSFI7O0FETUk7RUFDSSwrQkFBQTtBQ0pSOztBRFFBO0VBQ0ksaUNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3NlbmQvc2VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMwMDE4NDg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWdyaWQge1xuICAgIC0taW9uLWdyaWQtcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtdW5vIHtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubGlnaHQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBjb2xvcjogIzAwMTg0ODtcbn1cblxuLmljb24tc2luIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5pbWctYXZhdGFyIHtcblxuICAgIHdpZHRoOiA0NSU7XG59XG5cbmgzIHtcbiAgICBjb2xvcjogIzAwMTg0OCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG5oMiB7XG4gICAgY29sb3I6ICMwMDE4NDg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ucC10eHQtc3lubyB7XG4gICAgY29sb3I6ICM5YjlkYTUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5oMy10eHQtc2luIHtcbiAgICBjb2xvcjogIzAwMTg0OCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDI3JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5wLXR4dC1zaW4ge1xuICAgIGNvbG9yOiAjOWI5ZGE1ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLnRpdGxlLWNhcmQge1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50eHQtY2FyZCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxucCB7XG4gICAgY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmljb24tb25lIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IC0yJTtcbn1cblxuLmJ0bi1zd2FwIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uYnRuLWNhcmQge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG46aG9zdCB7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLmxpc3QtaW9zIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgyNDUsIDI0MiwgMjQyLCAxKTtcbiAgfSIsImgxIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICMwMDE4NDg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbC11bm8ge1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogIzAwMTg0ODtcbn1cblxuLmljb24tc2luIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaW1nLWF2YXRhciB7XG4gIHdpZHRoOiA0NSU7XG59XG5cbmgzIHtcbiAgY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuaDIge1xuICBjb2xvcjogIzAwMTg0ODtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLnAtdHh0LXN5bm8ge1xuICBjb2xvcjogIzliOWRhNSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uaDMtdHh0LXNpbiB7XG4gIGNvbG9yOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDI3JSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLnAtdHh0LXNpbiB7XG4gIGNvbG9yOiAjOWI5ZGE1ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4udGl0bGUtY2FyZCB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnR4dC1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxucCB7XG4gIGNvbG9yOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmljb24tb25lIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0yJTtcbn1cblxuLmJ0bi1zd2FwIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmJ0bi1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG46aG9zdCBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG46aG9zdCAubGlzdC1pb3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4ICNmNWYyZjI7XG59Il19 */");

/***/ }),

/***/ "./src/app/send/send.page.ts":
/*!***********************************!*\
  !*** ./src/app/send/send.page.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const crypto_1 = __webpack_require__(/*! @arkecosystem/crypto */ "./node_modules/@arkecosystem/crypto/dist/index.bundled.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const restService_1 = __webpack_require__(/*! ../services/restService */ "./src/app/services/restService.ts");
const storageService_1 = __webpack_require__(/*! ../services/storageService */ "./src/app/services/storageService.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
let SendPage = class SendPage {
    constructor(restService, storageService, router, alertCtrl) {
        this.restService = restService;
        this.storageService = storageService;
        this.router = router;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
    }
    async Send() {
        await this.restService.TransferProduct(this.storageService.LoginPassphrase, {
            ProductId: this.codiceProdotto,
            RecipientAddressId: this.indirizzoDestinatario,
            SenderAddressId: crypto_1.Identities.Address.fromPassphrase(this.storageService.LoginPassphrase)
        }).then(async (data) => {
            if (data.IsSuccess) {
                const alert = await this.alertCtrl.create({
                    header: 'OK',
                    subHeader: 'Prodotto ' + this.codiceProdotto + ' trasferito correttamente all\'indirizzo: ' + this.indirizzoDestinatario + '.',
                    buttons: ['Dismiss']
                });
                alert.present();
            }
            else {
                const alert = await this.alertCtrl.create({
                    header: 'Errore',
                    subHeader: 'Errore durante il trasferimento del prodotto: ' + JSON.stringify(data.Data),
                    buttons: ['Dismiss']
                });
                alert.present();
            }
        });
    }
};
SendPage.ctorParameters = () => [
    { type: restService_1.RestService },
    { type: storageService_1.StorageService },
    { type: router_1.Router },
    { type: angular_1.AlertController }
];
SendPage = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-singlebook',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./send.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/send/send.page.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./send.page.scss */ "./src/app/send/send.page.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [restService_1.RestService,
        storageService_1.StorageService,
        router_1.Router,
        angular_1.AlertController])
], SendPage);
exports.SendPage = SendPage;


/***/ }),

/***/ "./src/app/services/restService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/restService.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const ark_counterfeit_common_1 = __webpack_require__(/*! common/ark-counterfeit-common */ "./common/ark-counterfeit-common/index.ts");
const const_1 = __webpack_require__(/*! common/ark-counterfeit-common/src/const */ "./common/ark-counterfeit-common/src/const.ts");
const crypto_1 = __webpack_require__(/*! @arkecosystem/crypto */ "./node_modules/@arkecosystem/crypto/dist/index.bundled.js");
let RestService = class RestService {
    constructor(http) {
        this.http = http;
        this.network = 'testnet';
        // private baseUri: string = 'http://80.211.134.204:8090/api/';
        this.baseUri = 'http://127.0.0.1:8090/api/';
        this.initCrypto = async () => {
            crypto_1.Managers.configManager.setFromPreset(this.network);
            crypto_1.Managers.configManager.setHeight(1632); //await this.getLatestBlockHeight());
            crypto_1.Transactions.TransactionRegistry.registerTransactionType(ark_counterfeit_common_1.RegisterProductTransaction);
            crypto_1.Transactions.TransactionRegistry.registerTransactionType(ark_counterfeit_common_1.TransferProductTransaction);
            crypto_1.Transactions.TransactionRegistry.registerTransactionType(ark_counterfeit_common_1.ReceiveProductTransaction);
        };
        this.initCrypto();
    }
    async GetNextNonce(addressId) {
        return await this.http.get(this.baseUri + 'manufacturer/nonce/' + addressId).toPromise();
    }
    async RegisterProduct(model) {
        // const manufacturerAddressId: string = "AR96ntq6d7PkE1Ws3EKcQRK8QNqgVpMudz";
        const manufacturerPassphrase = 'boat dizzy people marriage where betray yard oval split twice arm shove';
        const nonceResponse = await this.GetNextNonce(model.ManufacturerAddressId);
        console.log(JSON.stringify(nonceResponse));
        const nonce = nonceResponse.Data;
        const builder = new ark_counterfeit_common_1.RegisterProductBuilder();
        const transaction = builder
            .nonce(nonce.toString())
            .product(model.ProductId, model.Description, model.ManufacturerAddressId, model.Metadata)
            .vendorField(const_1.VENDOR_FIELD)
            .recipientId(model.ManufacturerAddressId)
            .sign(manufacturerPassphrase)
            .getStruct();
        const response = await this.http.post(this.baseUri + 'products', {
            Asset: model,
            Nonce: nonce.toString(),
            SenderPublicKey: transaction.senderPublicKey,
            Signature: transaction.signature,
            TransactionId: transaction.id
        }).toPromise();
        return response;
    }
    async TransferProduct(senderPassphrase, model) {
        const nonceResponse = await this.GetNextNonce(model.SenderAddressId);
        console.log(JSON.stringify(nonceResponse));
        const nonce = nonceResponse.Data;
        const builder = new ark_counterfeit_common_1.TransferProductBuilder();
        const transaction = builder
            .nonce(nonce.toString())
            .product(model.ProductId, model.SenderAddressId, model.RecipientAddressId)
            .vendorField(const_1.VENDOR_FIELD)
            .recipientId(model.SenderAddressId)
            .sign(senderPassphrase)
            .getStruct();
        const response = await this.http.post(this.baseUri + 'products/transfer', {
            Asset: model,
            Nonce: nonce.toString(),
            SenderPublicKey: transaction.senderPublicKey,
            Signature: transaction.signature,
            TransactionId: transaction.id
        }).toPromise();
        return response;
    }
    async ReceiveProduct(senderPassphrase, model) {
        const nonceResponse = await this.GetNextNonce(model.RecipientAddressId);
        console.log(JSON.stringify(nonceResponse));
        const nonce = nonceResponse.Data;
        const builder = new ark_counterfeit_common_1.ReceiveProductBuilder();
        const transaction = builder
            .nonce(nonce.toString())
            .product(model.ProductId, model.RecipientAddressId)
            .vendorField(const_1.VENDOR_FIELD)
            .recipientId(model.RecipientAddressId)
            .sign(senderPassphrase)
            .getStruct();
        const response = await this.http.post(this.baseUri + 'products/receive', {
            Asset: model,
            Nonce: nonce.toString(),
            SenderPublicKey: transaction.senderPublicKey,
            Signature: transaction.signature,
            TransactionId: transaction.id
        }).toPromise();
        return response;
    }
    async Login(username, addressId) {
        return await this.http.post(this.baseUri + 'account/login', {
            Username: username,
            AddressId: addressId
        }).toPromise();
    }
    async CreateWallet(username) {
        return await this.http.post(this.baseUri + 'account', {
            Username: username
        }).toPromise();
    }
    async UsernameExists(username) {
        const result = await this.http.get(this.baseUri + 'account/' + username + '/exists').toPromise();
        return result.Data;
    }
    async GetManufacturers() {
        const result = await this.http.get(this.baseUri + 'manufacturer').toPromise();
        return result.Data;
    }
    async GetProductsByManufacturer(addressId) {
        const result = await this.http.get(this.baseUri + 'products/manufacturer/' + addressId).toPromise();
        return result.Data;
    }
    async GetProductsByOwner(addressId) {
        const result = await this.http.get(this.baseUri + 'products/owner/' + addressId).toPromise();
        return result.Data;
    }
};
RestService.ctorParameters = () => [
    { type: http_1.HttpClient }
];
RestService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
], RestService);
exports.RestService = RestService;


/***/ }),

/***/ "./src/app/services/storageService.ts":
/*!********************************************!*\
  !*** ./src/app/services/storageService.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
class StorageService {
    get LoginPassphrase() {
        return localStorage.getItem('LoginPassphrase');
    }
    set LoginPassphrase(value) {
        localStorage.setItem('LoginPassphrase', value);
    }
}
exports.StorageService = StorageService;


/***/ }),

/***/ "./src/app/sign/sign-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sign/sign-routing.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const sign_page_1 = __webpack_require__(/*! ./sign.page */ "./src/app/sign/sign.page.ts");
const routes = [
    {
        path: '',
        component: sign_page_1.SignPage
    }
];
let SignPageRoutingModule = class SignPageRoutingModule {
};
SignPageRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    })
], SignPageRoutingModule);
exports.SignPageRoutingModule = SignPageRoutingModule;


/***/ }),

/***/ "./src/app/sign/sign.module.ts":
/*!*************************************!*\
  !*** ./src/app/sign/sign.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
const sign_routing_module_1 = __webpack_require__(/*! ./sign-routing.module */ "./src/app/sign/sign-routing.module.ts");
const sign_page_1 = __webpack_require__(/*! ./sign.page */ "./src/app/sign/sign.page.ts");
let SignPageModule = class SignPageModule {
};
SignPageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule,
            sign_routing_module_1.SignPageRoutingModule
        ],
        declarations: [sign_page_1.SignPage]
    })
], SignPageModule);
exports.SignPageModule = SignPageModule;


/***/ }),

/***/ "./src/app/sign/sign.page.scss":
/*!*************************************!*\
  !*** ./src/app/sign/sign.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*================================== MEDIA QUERIES, FOR ONLY DESKTOPS ==============================*/\n.item-md {\n  padding-left: 0px;\n}\n.div-txt {\n  margin-top: 0%;\n}\n.title {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 45px;\n  font-weight: 600;\n  color: #001848;\n}\nion-input {\n  background-color: #fff !important;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 30px;\n  padding-right: 30px;\n  margin-bottom: 20px;\n  box-shadow: 10px 10px 5px 0px #f5f2f2;\n}\n.description {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  margin-top: 0px;\n  color: #001848;\n}\n.div-form {\n  padding-bottom: 0%;\n}\n.item-ios {\n  padding-left: 0px !important;\n}\n.form-login {\n  width: 60%;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: block;\n  margin: 0px auto;\n}\n.icon {\n  font-size: 60px;\n  padding: 10px;\n}\n.spacer {\n  margin-bottom: 0% !important;\n}\n.create-account {\n  text-align: center;\n  display: block;\n  margin-top: 15px;\n  font-family: \"Poppins\";\n  font-size: 15px;\n}\n.create {\n  text-align: center;\n  display: block;\n  color: #ff8993;\n  font-weight: 600;\n  font-family: \"Poppins\";\n  font-size: 15px;\n  text-decoration: none;\n}\n/*================================== END MEDIA QUERIES, FOR ONLY DESKTOPS ==============================*/\n/*================================== MEDIA QUERIES, FOR ONLY IPHONE, ANDROID, ETC.. ==============================*/\n@media only screen and (min-width: 320px) and (max-width: 812px) {\n  .div-txt {\n    margin-top: 0px;\n  }\n\n  ion-icon {\n    font-size: 30px;\n    color: #001848;\n    margin-right: 5%;\n  }\n\n  .title {\n    text-align: center;\n    font-family: \"Poppins\", sans-serif;\n    font-size: 45px;\n    font-weight: 600;\n    color: #001848;\n  }\n\n  :host ion-input {\n    box-shadow: 10px 10px 5px 0px #f5f2f2;\n    --padding-top: 20px;\n    --padding-bottom: 20px;\n    --placeholder-color: #001848 !important;\n    --placeholder-font-style: \"Popins\";\n    --placeholder-font-weight: 600;\n  }\n  :host ion-button {\n    --background: #001848 !important;\n    --background-activated: #fff !important;\n    --color-activated: #001848 !important;\n    --border-color-activated: #001848 !important;\n  }\n  :host ion-item {\n    --padding-start: 0px !important;\n  }\n\n  .description {\n    text-align: center;\n    font-family: \"Poppins\", sans-serif;\n    font-size: 16px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    color: #001848;\n  }\n\n  .div-form {\n    padding-bottom: 0%;\n  }\n\n  .item-ios {\n    padding-left: 0px !important;\n  }\n\n  .form-login {\n    width: 100%;\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .icon {\n    font-size: 60px;\n    padding: 10px;\n  }\n\n  .spacer {\n    margin-bottom: 40% !important;\n  }\n\n  .create-account {\n    text-align: center;\n    display: block;\n    margin-top: 15px;\n    font-family: \"Poppins\";\n    font-size: 15px;\n    color: #001848;\n  }\n\n  .create {\n    text-align: center;\n    display: block;\n    color: #001848;\n    font-weight: 600;\n    font-family: \"Poppins\";\n    font-size: 15px;\n    text-decoration: none;\n  }\n}\n/*================================== END MEDIA QUERIES, FOR ONLY IPHONE, ANDROID, ETC ==============================*/\n/*================================== MEDIA QUERIES, FOR ONLY TABLETS ==============================*/\n@media only screen and (min-width: 768px) and (max-width: 900px) {\n  .div-txt {\n    margin-top: 340px;\n  }\n\n  .body {\n    margin-top: -23%;\n    background-position: fixed;\n    background-size: auto;\n    background-repeat: no-repeat;\n  }\n\n  .form-login {\n    width: 70%;\n    padding-left: 20px;\n    padding-right: 20px;\n    display: block;\n    margin: 0px auto;\n  }\n\n  .div-form {\n    padding-bottom: 22%;\n  }\n}\n/*================================== END MEDIA QUERIES, FOR ONLY TABLETS ==============================*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi9DOlxcVXNlcnNcXEdJT1ZBTk5JXFxEb2N1bWVudHNcXEdpdEh1YlxcYXJrLWNvdW50ZXJmZWl0LWFwcC9zcmNcXGFwcFxcc2lnblxcc2lnbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ24vc2lnbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUdBQUE7QUFFQTtFQUNJLGlCQUFBO0FDQUo7QURHQTtFQUNJLGNBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBSjtBREdBO0VBQ0ksaUNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FKO0FER0E7RUFDSSxrQkFBQTtBQ0FKO0FER0E7RUFDSSw0QkFBQTtBQ0FKO0FER0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQ0FKO0FES0E7RUFDSSw0QkFBQTtBQ0ZKO0FES0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FES0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0ZKO0FES0EseUdBQUE7QUFFQSxtSEFBQTtBQUNBO0VBQ0k7SUFDSSxlQUFBO0VDSE47O0VETUU7SUFDSSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDSE47O0VETUU7SUFDSSxrQkFBQTtJQUNBLGtDQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ0hOOztFRE9NO0lBQ0kscUNBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUNBQUE7SUFDQSxrQ0FBQTtJQUNBLDhCQUFBO0VDSlY7RURPTTtJQUNJLGdDQUFBO0lBQ0EsdUNBQUE7SUFDQSxxQ0FBQTtJQUNBLDRDQUFBO0VDTFY7RURRTTtJQUNJLCtCQUFBO0VDTlY7O0VEVUU7SUFDSSxrQkFBQTtJQUNBLGtDQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUNQTjs7RURVRTtJQUNJLGtCQUFBO0VDUE47O0VEVUU7SUFDSSw0QkFBQTtFQ1BOOztFRFVFO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUNQTjs7RURVRTtJQUNJLGVBQUE7SUFDQSxhQUFBO0VDUE47O0VEV0U7SUFDSSw2QkFBQTtFQ1JOOztFRFdFO0lBQ0ksa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VDUk47O0VEV0U7SUFDSSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtFQ1JOO0FBQ0Y7QURXQSxxSEFBQTtBQUVBLG9HQUFBO0FBQ0E7RUFDSTtJQUNJLGlCQUFBO0VDVk47O0VEYUU7SUFDSSxnQkFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7SUFDQSw0QkFBQTtFQ1ZOOztFRGFFO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUNWTjs7RURhRTtJQUNJLG1CQUFBO0VDVk47QUFDRjtBRGNBLHdHQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbi9zaWduLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNRURJQSBRVUVSSUVTLCBGT1IgT05MWSBERVNLVE9QUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4uaXRlbS1tZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5kaXYtdHh0IHtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbn1cblxuLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMDAxODQ4O1xufVxuXG5pb24taW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMjQ1LCAyNDIsIDI0MiwgMSk7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGNvbG9yOiAjMDAxODQ4O1xufVxuXG4uZGl2LWZvcm0ge1xuICAgIHBhZGRpbmctYm90dG9tOiAwJTtcbn1cblxuLml0ZW0taW9zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1sb2dpbiB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cblxuXG4uc3BhY2VyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwJSAhaW1wb3J0YW50O1xufVxuXG4uY3JlYXRlLWFjY291bnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5jcmVhdGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI2ZmODk5MztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRU5EIE1FRElBIFFVRVJJRVMsIEZPUiBPTkxZIERFU0tUT1BTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNRURJQSBRVUVSSUVTLCBGT1IgT05MWSBJUEhPTkUsIEFORFJPSUQsIEVUQy4uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogODEycHgpIHtcbiAgICAuZGl2LXR4dCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgY29sb3I6ICMwMDE4NDg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMwMDE4NDg7XG4gICAgfVxuXG4gICAgOmhvc3Qge1xuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgyNDUsIDI0MiwgMjQyLCAxKTtcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMTg0OCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBcIlBvcGluc1wiO1xuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvci1hY3RpdmF0ZWQ6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgY29sb3I6ICMwMDE4NDg7XG4gICAgfVxuXG4gICAgLmRpdi1mb3JtIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAlO1xuICAgIH1cblxuICAgIC5pdGVtLWlvcyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmZvcm0tbG9naW4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuXG4gICAgLnNwYWNlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jcmVhdGUtYWNjb3VudCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogIzAwMTg0ODtcbiAgICB9XG5cbiAgICAuY3JlYXRlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICMwMDE4NDg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRU5EIE1FRElBIFFVRVJJRVMsIEZPUiBPTkxZIElQSE9ORSwgQU5EUk9JRCwgRVRDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNRURJQSBRVUVSSUVTLCBGT1IgT05MWSBUQUJMRVRTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAuZGl2LXR4dCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDM0MHB4O1xuICAgIH1cblxuICAgIC5ib2R5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIzJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG5cbiAgICAuZm9ybS1sb2dpbiB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgfVxuXG4gICAgLmRpdi1mb3JtIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIyJTtcbiAgICB9XG5cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEVORCBNRURJQSBRVUVSSUVTLCBGT1IgT05MWSBUQUJMRVRTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1FRElBIFFVRVJJRVMsIEZPUiBPTkxZIERFU0tUT1BTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4uaXRlbS1tZCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uZGl2LXR4dCB7XG4gIG1hcmdpbi10b3A6IDAlO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMTg0ODtcbn1cblxuaW9uLWlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggI2Y1ZjJmMjtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBjb2xvcjogIzAwMTg0ODtcbn1cblxuLmRpdi1mb3JtIHtcbiAgcGFkZGluZy1ib3R0b206IDAlO1xufVxuXG4uaXRlbS1pb3Mge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1sb2dpbiB7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc3BhY2VyIHtcbiAgbWFyZ2luLWJvdHRvbTogMCUgIWltcG9ydGFudDtcbn1cblxuLmNyZWF0ZS1hY2NvdW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5jcmVhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmODk5MztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEVORCBNRURJQSBRVUVSSUVTLCBGT1IgT05MWSBERVNLVE9QUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1FRElBIFFVRVJJRVMsIEZPUiBPTkxZIElQSE9ORSwgQU5EUk9JRCwgRVRDLi4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuZGl2LXR4dCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzAwMTg0ODtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMDAxODQ4O1xuICB9XG5cbiAgOmhvc3QgaW9uLWlucHV0IHtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCAjZjVmMmYyO1xuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBcIlBvcGluc1wiO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICA6aG9zdCBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvci1hY3RpdmF0ZWQ6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgfVxuICA6aG9zdCBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBjb2xvcjogIzAwMTg0ODtcbiAgfVxuXG4gIC5kaXYtZm9ybSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAlO1xuICB9XG5cbiAgLml0ZW0taW9zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZvcm0tbG9naW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLnNwYWNlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY3JlYXRlLWFjY291bnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICMwMDE4NDg7XG4gIH1cblxuICAuY3JlYXRlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICMwMDE4NDg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEVORCBNRURJQSBRVUVSSUVTLCBGT1IgT05MWSBJUEhPTkUsIEFORFJPSUQsIEVUQyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1FRElBIFFVRVJJRVMsIEZPUiBPTkxZIFRBQkxFVFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuZGl2LXR4dCB7XG4gICAgbWFyZ2luLXRvcDogMzQwcHg7XG4gIH1cblxuICAuYm9keSB7XG4gICAgbWFyZ2luLXRvcDogLTIzJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxuXG4gIC5mb3JtLWxvZ2luIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cblxuICAuZGl2LWZvcm0ge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMiU7XG4gIH1cbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBFTkQgTUVESUEgUVVFUklFUywgRk9SIE9OTFkgVEFCTEVUUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qLyJdfQ== */");

/***/ }),

/***/ "./src/app/sign/sign.page.ts":
/*!***********************************!*\
  !*** ./src/app/sign/sign.page.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const restService_1 = __webpack_require__(/*! ../services/restService */ "./src/app/services/restService.ts");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
let SignPage = class SignPage {
    constructor(restService, alertCtrl, ngZone) {
        this.restService = restService;
        this.alertCtrl = alertCtrl;
        this.ngZone = ngZone;
        this.generatedPassphrase = 'Passphrase generata (readonly)';
    }
    ngOnInit() {
    }
    async CreaWallet() {
        if (!this.username) {
            const alert = await this.alertCtrl.create({
                header: 'Errore',
                subHeader: 'Inserisci un nome utente.',
                buttons: ['Dismiss']
            });
            alert.present();
            return;
        }
        const usernameExists = await this.restService.UsernameExists(this.username);
        if (usernameExists === true) {
            const alert = await this.alertCtrl.create({
                header: 'Errore',
                subHeader: 'L\'utente esiste già.',
                buttons: ['Dismiss']
            });
            alert.present();
            return;
        }
        this.ngZone.run(() => this.generatedPassphrase = 'Generazione in corso...');
        const registerWalletResponse = await this.restService.CreateWallet(this.username);
        this.ngZone.run(() => this.generatedPassphrase = registerWalletResponse.Data.Passphrase);
    }
};
SignPage.ctorParameters = () => [
    { type: restService_1.RestService },
    { type: angular_1.AlertController },
    { type: core_1.NgZone }
];
SignPage = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-sign',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./sign.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.page.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./sign.page.scss */ "./src/app/sign/sign.page.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [restService_1.RestService, angular_1.AlertController, core_1.NgZone])
], SignPage);
exports.SignPage = SignPage;


/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const tab1_page_1 = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            angular_1.IonicModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([{ path: '', component: tab1_page_1.Tab1Page }])
        ],
        declarations: [tab1_page_1.Tab1Page]
    })
], Tab1PageModule);
exports.Tab1PageModule = Tab1PageModule;


/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 30px;\n  color: #001848;\n  font-weight: 600;\n}\n\nion-grid {\n  --ion-grid-padding: 0px !important;\n}\n\n.col-uno {\n  margin-top: 8%;\n  background: #fff;\n}\n\n.light {\n  background: #fff;\n}\n\nbody {\n  background: #ddd;\n}\n\nion-icon {\n  font-size: 30px;\n  margin-top: 20px;\n  color: #001848;\n}\n\n.img-avatar {\n  width: 20%;\n}\n\nh3 {\n  color: #001848 !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.title-card {\n  padding-left: 5%;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.txt-card {\n  padding-left: 5%;\n}\n\np {\n  color: #001848 !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.icon-one {\n  color: #fff !important;\n  font-size: 20px !important;\n  margin-top: -2%;\n}\n\n.btn-swap {\n  padding-right: 20px;\n}\n\n.btn-card {\n  padding-left: 0px !important;\n  margin-top: 20%;\n}\n\n:host ion-button {\n  height: 35px;\n  padding-left: 20px;\n  --background: #001848 !important;\n  --background-activated: #fff !important;\n  --color-activated: #001848 !important;\n  --border-color: #001848 !important;\n}\n\n:host .list-ios {\n  border: 1px solid #fff !important;\n}\n\n:host ion-item {\n  --border-color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXEdJT1ZBTk5JXFxEb2N1bWVudHNcXEdpdEh1YlxcYXJrLWNvdW50ZXJmZWl0LWFwcC9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUVFLFVBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDQUY7O0FES0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtBQ0ZKOztBREtFO0VBQ0UsaUNBQUE7QUNISjs7QURNRTtFQUNFLCtCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICMwMDE4NDg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbC11bm8ge1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogIzAwMTg0ODtcbn1cblxuLmltZy1hdmF0YXIge1xuXG4gIHdpZHRoOiAyMCU7XG59XG5cbmgzIHtcbiAgY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUtY2FyZCB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnR4dC1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxucCB7XG4gIGNvbG9yOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmljb24tb25lIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0yJTtcbn1cblxuLmJ0bi1zd2FwIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmJ0bi1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG46aG9zdCB7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogIzAwMTg0OCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxpc3QtaW9zIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxufSIsImgxIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICMwMDE4NDg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbC11bm8ge1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogIzAwMTg0ODtcbn1cblxuLmltZy1hdmF0YXIge1xuICB3aWR0aDogMjAlO1xufVxuXG5oMyB7XG4gIGNvbG9yOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRpdGxlLWNhcmQge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50eHQtY2FyZCB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbnAge1xuICBjb2xvcjogIzAwMTg0OCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uLW9uZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMiU7XG59XG5cbi5idG4tc3dhcCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5idG4tY2FyZCB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cblxuOmhvc3QgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAtLWJhY2tncm91bmQ6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzAwMTg0OCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogIzAwMTg0OCAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmxpc3QtaW9zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const restService_1 = __webpack_require__(/*! ../services/restService */ "./src/app/services/restService.ts");
const storageService_1 = __webpack_require__(/*! ../services/storageService */ "./src/app/services/storageService.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
let Tab1Page = class Tab1Page {
    constructor(restService, storageService, router, alertCtrl) {
        this.restService = restService;
        this.storageService = storageService;
        this.router = router;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
        this.restService.GetManufacturers().then(data => {
            this.manufacturers = data;
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: restService_1.RestService },
    { type: storageService_1.StorageService },
    { type: router_1.Router },
    { type: angular_1.AlertController }
];
Tab1Page = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-tab1',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [restService_1.RestService,
        storageService_1.StorageService,
        router_1.Router,
        angular_1.AlertController])
], Tab1Page);
exports.Tab1Page = Tab1Page;


/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const tab2_page_1 = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            angular_1.IonicModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([{ path: '', component: tab2_page_1.Tab2Page }])
        ],
        declarations: [tab2_page_1.Tab2Page]
    })
], Tab2PageModule);
exports.Tab2PageModule = Tab2PageModule;


/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 30px;\n  color: #001848;\n  font-weight: 600;\n}\n\nion-grid {\n  --ion-grid-padding: 0px !important;\n}\n\n.light {\n  background: #fff;\n  padding-bottom: 10%;\n}\n\nbody {\n  background: #ddd;\n}\n\nion-icon {\n  font-size: 30px;\n  margin-top: 20px;\n  color: #001848;\n}\n\n.img-avatar {\n  width: 35%;\n}\n\nh3 {\n  color: #001848 !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.title-card {\n  padding-left: 5%;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.txt-card {\n  padding-left: 5%;\n}\n\np {\n  color: #001848 !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.icon-one {\n  color: #fff !important;\n  font-size: 20px !important;\n  margin-top: -2%;\n}\n\n.btn-swap {\n  padding-right: 20px;\n}\n\n.btn-card {\n  padding-left: 0px !important;\n  margin-top: 20%;\n}\n\nh5 {\n  margin-top: 34px !important;\n  font-family: \"Poppins\" !important;\n}\n\n.p-txt-chall {\n  font-family: \"Poppins\";\n  font-size: 15px;\n  text-align: center;\n  font-weight: 600;\n  color: #9b9da5 !important;\n  padding-top: 5%;\n}\n\n.h2-chall {\n  color: #001848;\n  font-family: \"Poppins\";\n  text-align: left;\n  padding-left: 4%;\n  padding-bottom: 5%;\n  padding-top: 5%;\n  font-weight: 800;\n}\n\n.col-dos {\n  padding-top: 10%;\n  background: #fff;\n  padding: 5%;\n}\n\n.img-chall {\n  display: block;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.ion-col-chall {\n  display: block;\n  margin: 0px auto;\n}\n\n:host ion-button {\n  margin-top: 15%;\n  --background: #001848 !important;\n  --background-activated: #fff !important;\n  --color-activated: #001848 !important;\n  --border-color: #001848 !important;\n  font-family: \"Poppins\" !important;\n}\n\n:host .list-ios {\n  border: 1px solid #fff !important;\n  border-radius: 10px;\n}\n\n:host ion-item {\n  --border-color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXEdJT1ZBTk5JXFxEb2N1bWVudHNcXEdpdEh1YlxcYXJrLWNvdW50ZXJmZWl0LWFwcC9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUVJLFVBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNESjs7QURJQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FDREo7O0FETUE7RUFDSSwyQkFBQTtFQUNBLGlDQUFBO0FDSEo7O0FETUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURRSTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FDTFI7O0FEUUk7RUFDSSxpQ0FBQTtFQUNBLG1CQUFBO0FDTlI7O0FEU0k7RUFDSSwrQkFBQTtBQ1BSIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzAwMTg0ODtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuXG4ubGlnaHQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGNvbG9yOiAjMDAxODQ4O1xufVxuXG4uaW1nLWF2YXRhciB7XG5cbiAgICB3aWR0aDogMzUlO1xufVxuXG5oMyB7XG4gICAgY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRpdGxlLWNhcmQge1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50eHQtY2FyZCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxucCB7XG4gICAgY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmljb24tb25lIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IC0yJTtcbn1cblxuLmJ0bi1zd2FwIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uYnRuLWNhcmQge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG4jY29sLWNoYWxsZW5nZXMge31cblxuaDUge1xuICAgIG1hcmdpbi10b3A6IDM0cHggIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIgIWltcG9ydGFudDtcbn1cblxuLnAtdHh0LWNoYWxsIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjOWI5ZGE1ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4uaDItY2hhbGwge1xuICAgIGNvbG9yOiAjMDAxODQ4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogNCU7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4uY29sLWRvcyB7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDUlO1xufVxuXG4uaW1nLWNoYWxsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaW9uLWNvbC1jaGFsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuOmhvc3Qge1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmxpc3QtaW9zIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG59IiwiaDEge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzAwMTg0ODtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiAjMDAxODQ4O1xufVxuXG4uaW1nLWF2YXRhciB7XG4gIHdpZHRoOiAzNSU7XG59XG5cbmgzIHtcbiAgY29sb3I6ICMwMDE4NDggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUtY2FyZCB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnR4dC1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxucCB7XG4gIGNvbG9yOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmljb24tb25lIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0yJTtcbn1cblxuLmJ0bi1zd2FwIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmJ0bi1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG5oNSB7XG4gIG1hcmdpbi10b3A6IDM0cHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiICFpbXBvcnRhbnQ7XG59XG5cbi5wLXR4dC1jaGFsbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOWI5ZGE1ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLmgyLWNoYWxsIHtcbiAgY29sb3I6ICMwMDE4NDg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA0JTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5jb2wtZG9zIHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5pbWctY2hhbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pb24tY29sLWNoYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbjpob3N0IGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIC0tYmFja2dyb3VuZDogIzAwMTg0OCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDAxODQ4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmxpc3QtaW9zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const restService_1 = __webpack_require__(/*! ../services/restService */ "./src/app/services/restService.ts");
let Tab2Page = class Tab2Page {
    constructor(route, router, restService) {
        this.route = route;
        this.router = router;
        this.restService = restService;
        this.products = [];
    }
    ngOnInit() {
        this.route.queryParams
            //.filter(params => params.order)
            .subscribe(params => {
            console.log(params); // { order: "popular" }
            const addressId = params.addressId;
            //console.log(this.order); // popular
            this.restService.GetProductsByManufacturer(addressId).then(data => {
                this.products = data;
            });
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: router_1.ActivatedRoute },
    { type: router_1.Router },
    { type: restService_1.RestService }
];
Tab2Page = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-tab2',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        restService_1.RestService])
], Tab2Page);
exports.Tab2Page = Tab2Page;


/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const tabs_page_1 = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
const routes = [
    {
        path: 'tabs',
        component: tabs_page_1.TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve().then(() => tslib_1.__importStar(__webpack_require__(/*! ../tab1/tab1.module */ "./src/app/tab1/tab1.module.ts"))).then(m => m.Tab1PageModule)
                    }
                ]
            }, {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve().then(() => tslib_1.__importStar(__webpack_require__(/*! ../tab2/tab2.module */ "./src/app/tab2/tab2.module.ts"))).then(m => m.Tab2PageModule)
                    }
                ]
            },
            {
                path: 'send',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve().then(() => tslib_1.__importStar(__webpack_require__(/*! ../send/send.module */ "./src/app/send/send.module.ts"))).then(m => m.SendPageModule)
                    }
                ]
            },
            {
                path: 'receive',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve().then(() => tslib_1.__importStar(__webpack_require__(/*! ../receive/receive.module */ "./src/app/receive/receive.module.ts"))).then(m => m.ReceivePageModule)
                    }
                ]
            },
            {
                path: 'mine',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve().then(() => tslib_1.__importStar(__webpack_require__(/*! ../mine/mine.module */ "./src/app/mine/mine.module.ts"))).then(m => m.MinePageModule)
                    }
                ]
            },
            {
                path: 'login',
                redirectTo: '/login'
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], TabsPageRoutingModule);
exports.TabsPageRoutingModule = TabsPageRoutingModule;


/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const angular_1 = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const tabs_routing_module_1 = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
const tabs_page_1 = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            angular_1.IonicModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            tabs_routing_module_1.TabsPageRoutingModule
        ],
        declarations: [tabs_page_1.TabsPage]
    })
], TabsPageModule);
exports.TabsPageModule = TabsPageModule;


/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-tab-bar {\n  padding: 20px;\n  border: none;\n  --background: #001848;\n  --color: #fff;\n  --color-selected: #ddd;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXEdJT1ZBTk5JXFxEb2N1bWVudHNcXEdpdEh1YlxcYXJrLWNvdW50ZXJmZWl0LWFwcC9zcmNcXGFwcFxcdGFic1xcdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tdGFiLWJhciB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDAxODQ4O1xuICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgICAgICAtLWNvbG9yLXNlbGVjdGVkOiAjZGRkO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgICB9XG59IiwiOmhvc3QgaW9uLXRhYi1iYXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogIzAwMTg0ODtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1jb2xvci1zZWxlY3RlZDogI2RkZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-tabs',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TabsPage);
exports.TabsPage = TabsPage;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\GIOVANNI\Documents\GitHub\ark-counterfeit-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2017.js.map