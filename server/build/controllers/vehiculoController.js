"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VehiculoController {
    index(req, res) {
        res.send('vehiculos');
    }
}
const vehiculoController = new VehiculoController();
exports.default = vehiculoController;
