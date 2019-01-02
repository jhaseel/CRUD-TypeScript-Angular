import {Router} from 'express';
import VehiculoController from '../controllers/vehiculoController';
import vehiculoController from '../controllers/vehiculoController';

class Vehiculo{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config() : void {
        // añade las diferentes rutas
        this.router.get('/',vehiculoController.index);
    }
}

const vehiculo = new Vehiculo();
// exporta el router de la clase indexRoutes
export default vehiculo.router;