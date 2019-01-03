import {Request,Response} from 'express';
import db from '../database/database';

class VehiculoController {
    public async registro(req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO Vehiculo set ?',[req.body]);
        res.json({message:'Vehiculo guardado'});
    }

    public async borrar (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        const vehiculo = await db.query(`DELETE FROM Vehiculo WHERE id=${id}`);
        res.json({reposne:'Vehiculo eliminado'});
    }

    public async actualizar (req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        const vehiculo = await db.query(`UPDATE Vehiculo set ? WHERE id= ${id}`,[req.body]);
        res.json({response:'Vehiculo actualizado'});
    }

    public async listar (req: Request, res: Response): Promise<void>{
        const vehiculos = await db.query('select*from Vehiculo;');
        res.json(vehiculos);
    }

    public async buscar (req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const vehiculo = await db.query(`SELECT*FROM Vehiculo WHERE id=${id}`);
        console.log(vehiculo);
        if(vehiculo.length>0) return res.json(vehiculo[0]);
            else res.status(404).json({response:'juego No Existe'}); 
    }    
}

const vehiculoController = new VehiculoController();
export default vehiculoController;