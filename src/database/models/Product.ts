import { Model, Sequelize, DataTypes } from 'sequelize';
import { ProductAttributes } from '../attributes';

class Product extends Model implements ProductAttributes {
    ProdID!: string;
    ProdName!: string;
    Base_Cost!: number;

    static initModel(sequelize: Sequelize): void {
        Product.init(
            {
                ProdID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: true,
                },
                ProdName: {
                    type: DataTypes.STRING,
                },
                Base_Cost: {
                    type: DataTypes.INTEGER,
                },
            },
            {
                sequelize,
                underscored: false,
                tableName: 'Product',
                timestamps: false,
            }
        );
    }
}

export default Product;
