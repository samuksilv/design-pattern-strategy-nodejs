import * as App from './bootstrapper/server';
import { Request, Response } from 'express';
require("dotenv").config();

App.server.get("/", async (req:Request, res: Response) => {
  console.log("req", req.ip);
  res.send("OK");
});


