"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
class VehiculoController {
    registro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Vehiculo set ?', [req.body]);
            res.json({ message: 'Vehiculo guardado' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const vehiculo = yield database_1.default.query(`DELETE FROM Vehiculo WHERE id=${id}`);
            res.json({ reposne: 'Vehiculo eliminado' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const vehiculo = yield database_1.default.query(`UPDATE Vehiculo set ? WHERE id= ${id}`, [req.body]);
            res.json({ response: 'Vehiculo actualizado' });
        });
    }
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehiculos = yield database_1.default.query('select*from Vehiculo;');
            res.json(vehiculos);
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const vehiculo = yield database_1.default.query(`SELECT*FROM Vehiculo WHERE id=${id}`);
            console.log(vehiculo);
            if (vehiculo.length > 0)
                return res.json(vehiculo[0]);
            else
                res.status(404).json({ response: 'juego No Existe' });
        });
    }
}
const vehiculoController = new VehiculoController();
exports.default = vehiculoController;
