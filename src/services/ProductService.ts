import { db } from '../database/models';
import Product from '../database/models/Product';

class ProductService {
    private static instance: ProductService;

    static getInstance() {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }

        return ProductService.instance;
    }

    findAll = async () => {
        const product: Product[] = await Product.findAll();
        return product;
    };

    findById = async (ProdID: string) => {
        const existingProduct: Product | null = await Product.findByPk(ProdID);

        return existingProduct;
    };

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object).length == 0) {
                throw new Error('Object must contain atleast one property');
            }
            const product = await Product.create({ ...object });
            return product;
        } catch (err) {
            throw err;
        }
    };

    update = async (ProdID: string, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            );
        }

        let existingProduct = await this.findById(ProdID);

        if (!existingProduct) {
            throw new Error('product_not_found');
        }

        try {
            await Product.update(
                { ...object },

                {
                    where: { ProdID: ProdID },
                }
            );

            existingProduct = await this.findById(ProdID);

            return existingProduct;
        } catch (err) {
            throw err;
        }
    };

    deleteByPrimaryKey = async (ProdID: string) => {
        let existingProduct = await this.findById(ProdID);

        if (!existingProduct) {
            throw new Error('product_not_found');
        }

        try {
            await existingProduct.destroy();
        } catch (err) {
            throw err;
        }
    };
}

export default ProductService;
