"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personajeController_1 = __importDefault(require("../controllers/personajeController"));
class Personaje {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // añade las diferentes rutass
        this.router.get('/index', personajeController_1.default.index);
        this.router.post('/', personajeController_1.default.registro);
        this.router.delete('/:id', personajeController_1.default.borrar);
        this.router.put('/:id', personajeController_1.default.actualizar);
        this.router.get('/', personajeController_1.default.listar);
        this.router.get('/buscar/:id', personajeController_1.default.buscar);
    }
}
const personaje = new Personaje();
// exporta el router de la clase indexRoutes
exports.default = personaje.router;
