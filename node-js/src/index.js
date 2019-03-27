const app = require("./bootstrapper/server");

app.server.get("/", async (req, res) => {
    console.log("req", req.ip);
    res.send("OK");
});

app.server.get('/teste', async (req, res) => {
    let r = await app.database.person.read();
    console.log(r);
    console.log(typeof (r));
    (typeof (r) === Error) ? res.send("erro") : res.send(r);
})
