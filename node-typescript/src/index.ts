import * as App from './bootstrapper/server';
import { Request, Response } from 'express';

App.server.get("/", async (req, res) => {
  console.log("req", req.ip);
  res.send("OK");
});

App.server.get('/teste', async (request:Request, response: Response)=>{  
  response.send( App.database.person.read());
})

