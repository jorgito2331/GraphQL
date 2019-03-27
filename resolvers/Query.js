const mock = require('../mock')
const usuarioModel = require('../model/Usuario')

const buscarUsuario = (_, { name }) => mock.filter((user) => user.name.includes(name))

const buscarCasa = (_, {direccion}) => usuarioModel.find()

module.exports = {
  buscarUsuario,
  buscarCasa
}