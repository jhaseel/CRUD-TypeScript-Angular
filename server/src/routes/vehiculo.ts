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
        this.router.post('/',vehiculoController.registro);
        this.router.delete('/:id',vehiculoController.borrar);
        this.router.put('/:id', vehiculoController.actualizar);
        this.router.get('/',vehiculoController.listar);
        this.router.get('/buscar/:id',vehiculoController.buscar);
    }
}

const vehiculo = new Vehiculo();
// exporta el router de la clase indexRoutes
export default vehiculo.router;