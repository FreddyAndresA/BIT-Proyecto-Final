
// -------------------------------------------------------------------------- Creacion del servidor
const express = require('express')
const app = express();

app.listen(4000, () => {
    console.log("----------- Estado del servidor: ARRIBA y CORRIENDO !")
})


// -------------------------------------------------------------------------- Conexión a la base de datos
const conectarDB = require('./config/db')
conectarDB()


// -------------------------------------------------------------------------- Configuracion del Middleware
app.use(express.json());


// -------------------------------------------------------------------------- Manejo del error de CORS
const cors = require('cors')
app.use(cors())


// -------------------------------------------------------------------------- Configuracion de la ruta principal
app.use('/', require('./routes/user'))