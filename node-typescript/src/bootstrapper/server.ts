import express from "express";
import ContextStrategy from "../infra/strategy";
import RepositoryMongoDb from "../infra/repositoryMongoDb";
import Pessoa from "../domain/entities/Pessoa";

const server= express();

server.get("/",(req, res)=>{
    console.log("req", req.ip);    
    res.send("OK");
});

const database = {
    pessoa: new ContextStrategy(new RepositoryMongoDb<Pessoa>())
};

export  {
    server , database
};