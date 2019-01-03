import {Router} from 'express';
import PersonajeController from '../controllers/personajeController';
import personajeController from '../controllers/personajeController';

class Personaje{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config() : void {
        // añade las diferentes rutass
        this.router.get('/index', PersonajeController.index );
        this.router.post('/',PersonajeController.registro);
        this.router.delete('/:id',PersonajeController.borrar);
        this.router.put('/:id',PersonajeController.actualizar);
        this.router.get('/',PersonajeController.listar);
        this.router.get('/buscar/:id',PersonajeController.buscar);
    }
}

const personaje = new Personaje();
// exporta el router de la clase indexRoutes
export default personaje.router;