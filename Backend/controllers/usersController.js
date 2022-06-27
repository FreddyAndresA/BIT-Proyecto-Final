
const User = require("../models/User");


// -------------------------------------------------------------------------- Registro
exports.signUp = async(req,res) => {
    const { email } = req.body
    const user = await User.findOne({ email })
    
    if(user){
        return res.status(404).json({mensaje: "Usuario ya registrado !"})
    }

    try {
        let user = new User(req.body)
        await user.save()
        return res.status(200).json({mensaje: "Usuario registrado exitosamente !"})
    } catch(error){
        console.log(error)
        res.status(500).send("Houston, tenemos un problema !")
    }
}

// -------------------------------------------------------------------------- Iniciar sesion
exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        
        if(!user) {
            return res.status(401).json({mensaje: 'Usuario no registrado. Por favor registrate para iniciar sesion !'})
        }
        if(user.password == password) {
            res.json({
                email: user.email,
                generoFavorito: user.generoFavorito,
                nombre: user.nombre
            })
            
        } else {
            return res.status(401).json({mensaje: 'La contraseña no es valida !'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error')
    }
}
































































const Producto = require("../models/User");

exports.crearProducto = async (req, res) => {
    try {
        let producto
        //Creamos nuestro producto
        producto = new Producto(req.body);
        await producto.save()
        res.send(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error')
    }
}


exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find()
        res.json(productos)

    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error')
    }

}


exports.actualizarProducto = async (req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body
        let producto = await Producto.findById(req.params.id)

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        producto.nombre = nombre
        producto.categoria = categoria
        producto.ubicacion = ubicacion
        producto.precio = precio

        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true } )
        res.json(producto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error')
    }
}


exports.obtenerProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id)

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        res.json(producto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error')
    }
}


exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id)

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        await Producto.findByIdAndRemove({ _id: req.params.id })

        res.json({msg: 'Producto eliminado con exito !'})

    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error')
    }
}
