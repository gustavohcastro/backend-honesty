// @ts-ignore
import express from "express";
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
// const workersControllers = require("./controllers/workersControllers.js");
// const personsController = require("./controllers/personsController.js");
// const incidentsController = require("./controllers/incidentsController.js");

// Rotas o honesty bar
routes.get('/get-products', ProductController.index)
// routes.post('/auth', usersController.auth)
// routes.put('/update', usersController.update)
// routes.get('/user/:username', usersController.findOne)
// routes.get('/users', usersController.index);
//Rota raiz

module.exports = routes;
