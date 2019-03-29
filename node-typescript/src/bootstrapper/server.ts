import express from "express";
import ContextStrategy from "../infra/strategy";
import RepositoryMongoDb from "../infra/db/repositories/repositoryMongoDb";
import Person from "../domain/entities/Person";

const server = express();
server.listen(3000, async () => {
    console.log(`[SERVER] Running at http://localhost:3000`);
});

const database = {
    person: new ContextStrategy(new RepositoryMongoDb<Person>())
};

export {
    server, database
};