import {Router} from 'express';

class indexRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config() : void {
        // añade las diferentes rutas
        this.router.get('/', (req, res) =>res.send('hola'));
    }
}

const router = new indexRoutes();
// exporta el router de la clase indexRoutes
export default router.router;