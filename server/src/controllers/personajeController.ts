import {Request,Response} from 'express';

class PersonajeController {
    public index (req: Request, res:Response){
        res.send('personajes');
    }
}
const personajeController = new PersonajeController();
export default personajeController;