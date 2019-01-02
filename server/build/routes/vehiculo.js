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
        this.router.get('/', vehiculoController_1.default.index);
    }
}
const vehiculo = new Vehiculo();
// exporta el router de la clase indexRoutes
exports.default = vehiculo.router;
