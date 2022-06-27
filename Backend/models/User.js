
// -------------------------------------------------------------------------- Creacion del modelo de datos para creacion de usuario

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    generoFavorito: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
},{
    versionKey: false,
})

module.exports = mongoose.model('User', UserSchema)