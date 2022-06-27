
// -------------------------------------------------------------------------- Configuracion de conexión a la base de datos

const mongoose = require('mongoose')

require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false
        })
        console.log('----------- Estado de la base de datos: CONECTADA !')
    }catch (error){
        console.log(error);
        process.exit(1); //Detenemos la app
    }
}

module.exports = conectarDB;