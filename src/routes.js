const express = require("express");

const WomenController = require("./controllers/WomenController");

const routes = express.Router();

routes.get("/women", WomenController.index);

routes.post("/women", WomenController.create);

routes.put("/women/:id", WomenController.update);

routes.delete("/women/:id", WomenController.delete);

module.exports = routes;
