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
const Employees_1 = __importDefault(require("../database/models/Employees"));
class EmployeesService {
    constructor() {
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const employees = yield Employees_1.default.findAll();
            return employees;
        });
        this.findById = (EmpID) => __awaiter(this, void 0, void 0, function* () {
            const existingEmployees = yield Employees_1.default.findByPk(EmpID);
            return existingEmployees;
        });
        this.save = (object) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!object && Object.keys(object).length == 0) {
                    throw new Error('Object must contain atleast one property');
                }
                const employees = yield Employees_1.default.create(Object.assign({}, object));
                return employees;
            }
            catch (err) {
                throw err;
            }
        });
        this.update = (EmpID, object) => __awaiter(this, void 0, void 0, function* () {
            if (!object && Object.keys(object).length == 0) {
                throw new Error('Object to be updated must contain at least one property.');
            }
            let existingEmployee = yield this.findById(EmpID);
            if (!existingEmployee) {
                throw new Error('employee_not_found');
            }
            try {
                yield Employees_1.default.update(Object.assign({}, object), {
                    where: { EmpID: EmpID },
                });
                existingEmployee = yield this.findById(EmpID);
                return existingEmployee;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteByPrimaryKey = (EmpID) => __awaiter(this, void 0, void 0, function* () {
            let existingDepartment = yield this.findById(EmpID);
            if (!existingDepartment) {
                throw new Error('employee_not_found');
            }
            try {
                yield existingDepartment.destroy();
            }
            catch (err) {
                throw err;
            }
        });
    }
    static getInstance() {
        if (!EmployeesService.instance) {
            EmployeesService.instance = new EmployeesService();
        }
        return EmployeesService.instance;
    }
}
exports.default = EmployeesService;
