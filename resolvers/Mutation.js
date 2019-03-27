const usuario = require('../model/Usuario')

const CrearUsuario = (_, {data}) => {
  const{nombre, apellido} = data
  return usuario.create({nombre, apellido})
  .then((usuarios) => {
    return usuarios
  })
  .catch((err) => {
    console.log(err)
  })
}

module.exports = {
  CrearUsuario
}