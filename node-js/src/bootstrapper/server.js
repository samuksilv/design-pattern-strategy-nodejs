const express= require("express");
const ContextStrategy = require("../infra/strategy");
const MongoDB = require("../infra/repositoryMongoDb");
const server= express();

server.listen('3000', async () => {
    console.log(`[SERVER] Running at http://localhost:3000`);
});


database= {person: new ContextStrategy(new MongoDB())};

console.log(database.person);

module.exports ={
    server, database
}

