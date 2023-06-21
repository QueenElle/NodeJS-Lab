"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryHandlingRoute = exports.productRoute = exports.employeesRoute = exports.gtgRouter = void 0;
const gtgRoute_1 = __importDefault(require("./gtgRoute"));
exports.gtgRouter = gtgRoute_1.default;
const employeesRoute_1 = __importDefault(require("./employeesRoute"));
exports.employeesRoute = employeesRoute_1.default;
const productRoute_1 = __importDefault(require("./productRoute"));
exports.productRoute = productRoute_1.default;
const queryHandlingRoute_1 = __importDefault(require("./queryHandlingRoute"));
exports.queryHandlingRoute = queryHandlingRoute_1.default;
