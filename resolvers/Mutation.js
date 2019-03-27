const Usuario = require('../model/Usuario')


const CrearUsuario = (_, { usuario }) => Usuario.create(usuario)

const EliminarUsuario = (_, {usuario}) => Usuario.deleteOne(Usuario.findOne({_id: usuario._id}))

module.exports = {
  CrearUsuario,
  EliminarUsuario
}