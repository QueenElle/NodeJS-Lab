import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express';

import EmployeesService from '../services/employeesService';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employees = await EmployeesService.getInstance().findAll();

        res.status(200).json(employees);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const existingEmployees = await EmployeesService.getInstance().findById(
            String(req.params.id)
        );

        if (existingEmployees) {
            res.status(200).json(existingEmployees);
        } else {
            res.status(404).json({
                message: `employee_not_found ${req.params.id}`,
            });
        }
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = { ...req.body };

        const newEmployees = await EmployeesService.getInstance().save(payload);

        res.status(201).json({ ...newEmployees.dataValues });
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const EmpID = String(req.params.id);

        const data = await EmployeesService.getInstance().update(
            EmpID,

            {
                ...req.body,
            }
        );

        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const EmpID = String(req.params.id);

        await EmployeesService.getInstance().deleteByPrimaryKey(EmpID);

        res.status(200).json({
            message: `employee_successfully_deleted: ${EmpID}`,
        });
    } catch (err) {
        next(err);
    }
});

export default router;
