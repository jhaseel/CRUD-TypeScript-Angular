import {Request,Response} from 'express';

class VehiculoController {
    public index (req: Request, res:Response){
        res.send('vehiculos');
    }
}

const vehiculoController = new VehiculoController();
export default vehiculoController;