import postgresDatabase from "../configurations/postgresConfig";
import * as Sequelize from "sequelize";

const personMapping = postgresDatabase.define(
    "person",
    {
        id: {
            type: Sequelize.UUID, required: true, primaryKey: true, autoIncrement: true
        },
    });