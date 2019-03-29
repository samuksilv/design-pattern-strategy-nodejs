import express, { Request, Response } from "express";
import * as App from '../../bootstrapper/server';
import Person from "../../domain/entities/Person";

const route = express.Router();

route.get("/person", (req: Request, res: Response) => {
    let persons = App.database.person.read();
    res.status(200).send(persons);
});
route.get("person/:id", (req: Request, res: Response) => {
    let person = App.database.person.find(req.params.id);
    res.status(200).send(person);
});

route.post("/person", (req: Request, res: Response) => {
    let person = new Person(req.body.name);
    let response = App.database.person.create(person);
    res.status(201).send(response);
});

route.put("/person/:id", (req: Request, res: Response) => {
    let person = new Person(req.body.name);
    let response = App.database.person.update(person, req.params.id);
    res.status(200).send(response);
});

route.delete("/person:id", (req: Request, res: Response) => {    
    let response = App.database.person.delete( req.params.id);
    res.status(204).send();
});
