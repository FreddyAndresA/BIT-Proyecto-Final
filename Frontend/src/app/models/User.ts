export class User {
    nombre: String;
    generoFavorito: String;
    email: String;
    password: String;

    constructor(nombre: String, generoFavorito: String, email: String, password: String) {
        this.nombre = nombre
        this.generoFavorito = generoFavorito
        this.email = email
        this.password = password
    }
}
