import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express';
import ProductService from '../services/ProductService';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await ProductService.getInstance().findAll();

        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const existingProduct = await ProductService.getInstance().findById(
            String(req.params.id)
        );

        if (existingProduct) {
            res.status(200).json(existingProduct);
        } else {
            res.status(404).json({
                message: `product_not_found ${req.params.id}`,
            });
        }
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = { ...req.body };

        const newProduct = await ProductService.getInstance().save(payload);

        res.status(201).json({ ...newProduct.dataValues });
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const ProdID = String(req.params.id);

        const data = await ProductService.getInstance().update(
            ProdID,

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
        const ProdID = String(req.params.id);

        await ProductService.getInstance().deleteByPrimaryKey(ProdID);

        res.status(200).json({
            message: `product_successfully_deleted: ${ProdID}`,
        });
    } catch (err) {
        next(err);
    }
});

export default router;
