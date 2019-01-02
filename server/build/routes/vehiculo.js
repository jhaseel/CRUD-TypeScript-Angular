"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Vehiculo {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // añade las diferentes rutas
        this.router.get('/', (req, res) => res.send('vehiculos'));
    }
}
const vehiculo = new Vehiculo();
// exporta el router de la clase indexRoutes
exports.default = vehiculo.router;
