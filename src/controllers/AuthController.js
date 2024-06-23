const Usuario = require('../models/usuarios');

async function iniciarSesion(email, contraseña) {
    try {
        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return { message: "Correo electrónico incorrecto" };
        }

        if (usuario.password !== contraseña) {
            return { message: "Contraseña incorrecta" };
        }

        return { 
            message: `¡Bienvenido, eres ${usuario.role}!`,
            role: usuario.role
        };
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        return { message: "Ocurrió un error al iniciar sesión" };
    }
}

module.exports = {
    iniciarSesion
};
