import {Router} from 'express';

class Vehiculo{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config() : void {
        // añade las diferentes rutas
        this.router.get('/', (req, res) =>res.send('vehiculos'));
    }
}

const vehiculo = new Vehiculo();
// exporta el router de la clase indexRoutes
export default vehiculo.router;