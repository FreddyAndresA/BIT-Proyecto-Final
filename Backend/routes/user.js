
// -------------------------------------------------------------------------- Rutas para los metodos HTTP

const express = require('express')
const router = express.Router();
const userController = require('../controllers/usersController')


// Ruta para registrarse verbo POST -- /signup
router.post('/signup', userController.signUp)

// Ruta para iniciar sesion verbo POST -- /signin
router.post('/signin', userController.signIn)


module.exports = router;