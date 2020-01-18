// data from https://github.com/lucasbento/graphql-pokemon


const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schemas.js');
const resolvers = require('./resolvers.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 80 }, () =>
  console.log(`🚀 Server ready at http://localhost:80`),
).on('error', (err) => {
  console.log("Error", err) }
);