import SequelizeConnection from '../configuration';

import Employees from './Employees';

import Product from './Product';

import QueryHandling from './QueryHandling';

const sequelize = SequelizeConnection.getInstance();

// Initialize Models

Employees.initModel(sequelize);
Product.initModel(sequelize);
QueryHandling.initModel(sequelize);

export const db = {
    sequelize,

    Employees,

    Product,

    QueryHandling,
};
