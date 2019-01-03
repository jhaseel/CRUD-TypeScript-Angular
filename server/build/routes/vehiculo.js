"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehiculoController_1 = __importDefault(require("../controllers/vehiculoController"));
class Vehiculo {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // añade las diferentes rutas
        this.router.post('/', vehiculoController_1.default.registro);
        this.router.delete('/:id', vehiculoController_1.default.borrar);
        this.router.put('/:id', vehiculoController_1.default.actualizar);
        this.router.get('/', vehiculoController_1.default.listar);
        this.router.get('/buscar/:id', vehiculoController_1.default.buscar);
    }
}
const vehiculo = new Vehiculo();
// exporta el router de la clase indexRoutes
exports.default = vehiculo.router;
