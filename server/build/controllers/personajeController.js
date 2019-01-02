"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PersonajeController {
    index(req, res) {
        res.send('personajes');
    }
}
const personajeController = new PersonajeController();
exports.default = personajeController;
