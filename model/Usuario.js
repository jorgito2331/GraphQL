const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: String
})

module.exports = mongoose.model('usuario', UsuarioSchema)