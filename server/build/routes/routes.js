"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class indexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // añade las diferentes rutas
        this.router.get('/', (req, res) => res.send('hola'));
    }
}
const router = new indexRoutes();
// exporta el router de la clase indexRoutes
exports.default = router.router;
