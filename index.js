const Express = require("express")

const PORT = 3000;
const app = Express();

app.get("/", (req, res) => {
    res.json({status: "NTask API"})
})

app.get("/tasks", (req, res) => {
    res.json({
        tasks: [
            {title: "Fazer compras"},
            {title: "Concertar o pc"}
        ]
    });
});

app.listen(PORT, () => {
    console.log(`NTask API - porta ${PORT}`);
})


