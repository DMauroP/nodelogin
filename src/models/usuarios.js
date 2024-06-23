const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'cliente'], // Definir los roles permitidos
    default: 'cliente' // Asignar el rol por defecto
  }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
