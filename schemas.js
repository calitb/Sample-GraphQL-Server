const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Pokemon {
    id: String!
    name: String!
    image: String!
    types: [String!]!
    classification: String!
    nickname: String
  },

  type Query {
    pokemons: [Pokemon!]!
    pokemon(id: ID!): Pokemon
  }
  
  type Mutation {
    addNickname(id: ID!, nickname: String): Pokemon
  }
`;

module.exports = typeDefs;