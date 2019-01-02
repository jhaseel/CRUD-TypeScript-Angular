"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//,{Application} trae de express el tipo de dato
const vehiculo_1 = __importDefault(require("./routes/vehiculo"));
const personaje_1 = __importDefault(require("./routes/personaje"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
    }
    routes() {
        // añade las rutas a usar
        this.app.use('/vehiculos', vehiculo_1.default);
        this.app.use('/personaje', personaje_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port ${this.app.get('port')}`);
        });
    }
}
const server = new Server();
server.start();
