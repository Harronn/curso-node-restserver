const express = require('express')

class Server {
    constructor () {
        this.app = express();
        this.PORT = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de aplicacion
        this.routes();
    }

middlewares() {

    //cors 
    //this.app.use( cors());

    //Lectura y parseo del body
    this.app.use( express.json() );

    //Directorio publico
    this.app.use( express.static('public'));


}



    routes() {
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'));  
   
}

listen() {
  
    this.app.listen(this.PORT, () => {
        console.log('Servidor corriendo en puerto', process.env.PORT);
    });
}


}

 

module.exports = Server;
