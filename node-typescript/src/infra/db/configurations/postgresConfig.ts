import { Sequelize } from "sequelize";

const {
    USER_ID_POSTGRES,
    PWD_POSTGRES,
    DATABASE_POSTGRES,
    HOST_POSTGRES
} = process.env;

const database = new Sequelize(
    DATABASE_POSTGRES as string,
    USER_ID_POSTGRES as string,
    PWD_POSTGRES as string,
    {
        host:HOST_POSTGRES as string,
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false,
    }
);

export default database;