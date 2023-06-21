import { Model, Sequelize, DataTypes } from 'sequelize';
import { QueryHandlingAttributes } from '../attributes';

class QueryHandling extends Model implements QueryHandlingAttributes {
    QID!: string;
    Sub_Date!: number;
    Cust_ID!: string;
    EmpID!: string;
    Res_Date!: number;
    Status!: string;
    Feedback!: number;
    Query_Text!: string;
    Query_Response!: string;

    static initModel(sequelize: Sequelize): void {
        QueryHandling.init(
            {
                QID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: true,
                },
                Sub_Date: {
                    type: DataTypes.DATE,
                },
                Cust_ID: {
                    type: DataTypes.STRING,
                },
                EmpID: {
                    type: DataTypes.STRING,
                },
                Res_Date: {
                    type: DataTypes.DATE,
                },
                Status: {
                    type: DataTypes.STRING,
                },
                Feedback: {
                    type: DataTypes.INTEGER,
                },
                Query_Text: {
                    type: DataTypes.STRING,
                },
                Query_Response: {
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize,
                // underscored: false,
                tableName: 'QueryHandling',
                timestamps: false,
            }
        );
    }
}

export default QueryHandling;
