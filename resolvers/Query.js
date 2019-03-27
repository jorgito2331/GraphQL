const mock = require('../mock')
const usuarioModel = require('../model/Usuario')

const buscarUsuario = (_, { nombre }) => usuarioModel.find({nombre: nombre})

const Usuarios = (_, {direccion}) => usuarioModel.find()

module.exports = {
  buscarUsuario,
  Usuarios
}