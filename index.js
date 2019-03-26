const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `

  type User {
    id: String
    name: String
  }

  type Users {
    cedula: String
    datos: User
  }

  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
    pruebas: Users
  }
`;

let fakeDatabase = {
  cedula: '1000409003',
  datos: {
    id: 'a',
    name: 'alice'
  },
  cedula: '1000409004',
  datos: {
    id: 'b',
    name: 'bob'
  },
  cedula: '1000409005',
  datos: {
    id: 'c',
    name: 'carlos'
  }
};

// The root provides a resolver function for each API endpoint
const resolvers = {

  Query: {
    quoteOfTheDay: () => {
      return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
    },
    random: () => {
      return Math.random();
    },
    rollThreeDice: () => {
      return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
    },
    pruebas: () => {
      return fakeDatabase;
    }

  },
};

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))