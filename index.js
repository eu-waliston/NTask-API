const Express = require("express");
const consign = require("consign");

const app = Express();

consign()
    .include("db.js")
    .then("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app)
