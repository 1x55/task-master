  const express = require('express');
  const colors = require('colors')
  require('dotenv').config();
  
  const { graphqlHTTP } = require('express-graphql');
  const schema = require('./schema/schema');
  const connectDB = require('./config/db');
  const port = process.env.PORT || 5002;

  const app = express();
  //connect to DB
  connectDB();

  // GraphiQL is useful during testing and development but should be disabled in production by default. If you are using express-graphql, you can toggle it based on the NODE_ENV environment variable:
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  }));

  console.log(`Using port: ${port}`); 
  app.listen(port, console.log(`server running on port ${port}`));
  