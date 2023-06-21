import { db } from '../database/models';
import QueryHandling from '../database/models/QueryHandling';

class QueryHandlingService {
    private static instance: QueryHandlingService;

    static getInstance() {
        if (!QueryHandlingService.instance) {
            QueryHandlingService.instance = new QueryHandlingService();
        }

        return QueryHandlingService.instance;
    }

    findAll = async () => {
        const queryHandling: QueryHandling[] = await QueryHandling.findAll();
        return queryHandling;
    };

    findById = async (QID: string) => {
        const existingQueryHandling: QueryHandling | null =
            await QueryHandling.findByPk(QID);

        return existingQueryHandling;
    };

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object).length == 0) {
                throw new Error('Object must contain atleast one property');
            }
            const queryHandling = await QueryHandling.create({ ...object });
            return queryHandling;
        } catch (err) {
            throw err;
        }
    };

    update = async (QID: string, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            );
        }

        let existingQueryHandling = await this.findById(QID);

        if (!existingQueryHandling) {
            throw new Error('queryhandling_not_found');
        }

        try {
            await QueryHandling.update(
                { ...object },

                {
                    where: { QID: QID },
                }
            );

            existingQueryHandling = await this.findById(QID);

            return existingQueryHandling;
        } catch (err) {
            throw err;
        }
    };

    deleteByPrimaryKey = async (QID: string) => {
        let existingQueryHandling = await this.findById(QID);

        if (!existingQueryHandling) {
            throw new Error('queryhandling_not_found');
        }

        try {
            await existingQueryHandling.destroy();
        } catch (err) {
            throw err;
        }
    };
}

export default QueryHandlingService;
