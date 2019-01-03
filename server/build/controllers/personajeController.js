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
class PersonajeController {
    index(req, res) {
        database_1.default.query('DESCRIBE Personaje');
        res.json({ index: '/vehiculos/' });
    }
    //promise<void> se refiere a que el metodo no devolvera nada,
    //entonces puede continuar la ejecucion del metodo
    registro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Personaje set ?', [req.body]);
            res.json({ message: 'juego guardado' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personaje = yield database_1.default.query(`DELETE FROM Personaje WHERE id=${id}`);
            res.json({ reposne: 'juego eliminado' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personaje = yield database_1.default.query(`UPDATE Personaje set ? WHERE id= ${id}`, [req.body]);
            res.json({ response: 'juego actualizado' });
        });
    }
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const personajes = yield database_1.default.query('select*from Personaje;');
            res.json(personajes);
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personaje = yield database_1.default.query(`SELECT*FROM Personaje WHERE id=${id}`);
            console.log(personaje);
            if (personaje.length > 0)
                return res.json(personaje[0]);
            else
                res.status(404).json({ response: 'juego No Existe' });
        });
    }
}
const personajeController = new PersonajeController();
exports.default = personajeController;
