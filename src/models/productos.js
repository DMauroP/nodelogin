const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
  nombre_producto: {
    type: String,
    required: true,
  },
  precio_unitario: {
    type: Number,
    required: true
  },
  cantidad_producto: {
    type: Number,
    required: true

  },
  descripcion: {
    type: String,
    required: true

  },
  id_categoria_producto
: {
    type: Number,
    required: true

  },
  foto: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('Producto', productoSchema);




