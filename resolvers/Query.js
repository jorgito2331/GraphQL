const mock = require('../mock')
const quoteOfTheDay = () => {
  return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
}

const random = () => {
  return Math.random();
}

const rollThreeDice = () => {
  return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
}

const pruebas = () => mock

const buscar = (_, { name }) => mock.filter((user) => user.name.includes(name))

module.exports = {
  quoteOfTheDay,
  random,
  rollThreeDice,
  pruebas,
  buscar
}