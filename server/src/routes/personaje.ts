import {Router} from 'express';
import PersonajeController from '../controllers/personajeController';

class Personaje{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config() : void {
        // añade las diferentes rutas
        this.router.get('/', PersonajeController.index );
    }
}

const personaje = new Personaje();
// exporta el router de la clase indexRoutes
export default personaje.router;