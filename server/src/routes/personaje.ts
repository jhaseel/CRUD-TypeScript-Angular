import {Router} from 'express';

class Personaje{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config() : void {
        // añade las diferentes rutas
        this.router.get('/', (req, res) =>res.send('personajes'));
    }
}

const personaje = new Personaje();
// exporta el router de la clase indexRoutes
export default personaje.router;