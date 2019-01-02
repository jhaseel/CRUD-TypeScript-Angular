import express,{Application} from 'express';
//,{Application} trae de express el tipo de dato
import routes from './routes/routes';
class Server {
 public app: Application; 
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT ||3000);
    }
    routes(): void{
        // añade las rutas a usar
        this.app.use(routes);
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