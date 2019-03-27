const usuario = require('../model/Usuario')


const CrearUsuario = (_, { usuario }) => usuarioModel.create(usuario)

module.exports = {
  CrearUsuario
}