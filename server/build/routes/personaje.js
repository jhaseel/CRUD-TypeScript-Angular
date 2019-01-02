"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Personaje {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // añade las diferentes rutas
        this.router.get('/', (req, res) => res.send('personajes'));
    }
}
const personaje = new Personaje();
// exporta el router de la clase indexRoutes
exports.default = personaje.router;
