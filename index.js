const Express = require("express");
const consign = require("consign");
const PORT = 3000;

const app = Express();

consign().include("routes").into(app);

app.listen(PORT, () => {
    console.log(`NTask API - porta ${PORT}`);
})


