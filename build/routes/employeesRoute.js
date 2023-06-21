"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeesService_1 = __importDefault(require("../services/employeesService"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield employeesService_1.default.getInstance().findAll();
        res.status(200).json(employees);
    }
    catch (err) {
        next(err);
    }
}));
router.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingEmployees = yield employeesService_1.default.getInstance().findById(String(req.params.id));
        if (existingEmployees) {
            res.status(200).json(existingEmployees);
        }
        else {
            res.status(404).json({
                message: `employee_not_found ${req.params.id}`,
            });
        }
    }
    catch (err) {
        next(err);
    }
}));
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = Object.assign({}, req.body);
        const newEmployees = yield employeesService_1.default.getInstance().save(payload);
        res.status(201).json(Object.assign({}, newEmployees.dataValues));
    }
    catch (err) {
        next(err);
    }
}));
router.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const EmpID = String(req.params.id);
        const data = yield employeesService_1.default.getInstance().update(EmpID, Object.assign({}, req.body));
        res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
}));
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const EmpID = String(req.params.id);
        yield employeesService_1.default.getInstance().deleteByPrimaryKey(EmpID);
        res.status(200).json({
            message: `employee_successfully_deleted: ${EmpID}`,
        });
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
