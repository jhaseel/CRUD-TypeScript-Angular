import express,{Application} from 'express';
//,{Application} trae de express el tipo de dato
import morgan from 'morgan';
import cors from 'cors';
import vehiculo from './routes/vehiculo';
import personaje from './routes/personaje';
class Server {
 public app: Application; 
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT ||3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
    }
    routes(): void{
        // añade las rutas a usar
        this.app.use('/vehiculos',vehiculo);
        this.app.use('/',personaje);
    }
    start() : void{
        this.app.listen( this.app.get('port')
        ,() =>{
            console.log(`server on port ${this.app.get('port')}`);
        }        
        );  
    }
}

const server = new Server();
server.start();