const { ApolloServer } = require('apollo-server');
// const { ApolloServer } = require('apollo-server-express');
// import { ApolloServer } from "apollo-server-express";
// const express = require('express');
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const { getPayload } = require('./utils');
const db = require('./db');
const config = require('./config');

// const app = express();

const server = new ApolloServer({
  cors: {
    credentials: true,
    origin: true },
  typeDefs,
  resolvers,
  context: ({ req }) => {

    // Connect to DB
    db.connect(config.database, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log("Successfully Connected to MongoDB!")
      }
    })

    // get the user token from the headers
    const token = req.headers.authorization || '';
    // try to retrieve a user with the token
    const { payload: user, loggedIn } = getPayload(token);

    // add the user to the context
    return { user, loggedIn };
  },
});

// server.applyMiddleware({ cors: false });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
