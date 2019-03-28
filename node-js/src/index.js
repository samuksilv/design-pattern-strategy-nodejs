const app = require("./bootstrapper/server");

app.server.get("/", async (req, res) => {
    console.log("req", req.ip);
    res.send("OK");
});

app.server.get('/teste', async (req, res) => {
    try{
        res.send(await app.database.person.read()); 
    }catch(err){  
        console.error(err);
        res.send(err.stack);        
    }
});
