"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const configuration_1 = __importDefault(require("../configuration"));
const Employees_1 = __importDefault(require("./Employees"));
const Product_1 = __importDefault(require("./Product"));
const QueryHandling_1 = __importDefault(require("./QueryHandling"));
const sequelize = configuration_1.default.getInstance();
// Initialize Models
Employees_1.default.initModel(sequelize);
Product_1.default.initModel(sequelize);
QueryHandling_1.default.initModel(sequelize);
exports.db = {
    sequelize,
    Employees: Employees_1.default,
    Product: Product_1.default,
    QueryHandling: QueryHandling_1.default,
};
