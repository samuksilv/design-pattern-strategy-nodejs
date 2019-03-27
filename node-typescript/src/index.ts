import * as App from './bootstrapper/server';
import { Request, Response } from 'express';

App.server.listen(3000, () => {
  console.log(`[SERVER] Running at http://localhost:3000`);
});


App.server.get('/teste', (request:Request, response: Response)=>{  
  response.send( App.database.pessoa.read());
})

