import {Request,Response} from 'express';

import db from '../database/database';
class PersonajeController {

    public index (req: Request, res:Response){
        db.query('DESCRIBE Personaje');
        res.json({index:'/vehiculos/'});
    }
    //promise<void> se refiere a que el metodo no devolvera nada,
    //entonces puede continuar la ejecucion del metodo
    public async registro(req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO Personaje set ?',[req.body]);
        res.json({message:'juego guardado'});
    }

    public async borrar (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        const personaje = await db.query(`DELETE FROM Personaje WHERE id=${id}`);
        res.json({reposne:'juego eliminado'});
    }

    public async actualizar (req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        const personaje = await db.query(`UPDATE Personaje set ? WHERE id= ${id}`,[req.body]);
        res.json({response:'juego actualizado'});
    }

    public async listar (req: Request, res: Response): Promise<void>{
        const personajes = await db.query('select*from Personaje;');
        res.json(personajes);
    }

    public async buscar (req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const personaje = await db.query(`SELECT*FROM Personaje WHERE id=${id}`);
        console.log(personaje);
        if(personaje.length>0) return res.json(personaje[0]);
            else res.status(404).json({response:'juego No Existe'}); 
    }
}
const personajeController = new PersonajeController();
export default personajeController;