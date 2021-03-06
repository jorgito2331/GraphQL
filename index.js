const { GraphQLServer } = require('graphql-yoga')
const { importSchema } = require('graphql-import')
const { makeExecutableSchema } = require('graphql-tools')
const db = require('./utils/conection')
const typeDefs = importSchema("./schemas.graphql");
const resolvers = require('./resolvers')
// The root provides a resolver function for each API endpoint

const dbConnection = db.connectDb()

dbConnection.then(() => {
  console.log('connected to DB')
}).catch((err) => {
  console.log(err)
})

const schema = makeExecutableSchema({
  typeDefs, resolvers
})

const server = new GraphQLServer({schema})
server.start(() => console.log('Server is running on localhost:4000'))