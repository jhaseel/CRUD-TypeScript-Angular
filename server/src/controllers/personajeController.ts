import {Request,Response} from 'express';

import db from '../database/database';
class PersonajeController {
    public index (req: Request, res:Response){
        db.query('DESCRIBE Personaje');
        res.json({text:'/vehiculos/'});
    }

}
const personajeController = new PersonajeController();
export default personajeController;