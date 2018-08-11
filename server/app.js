const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/library');
mongoose.connection.once('open', async () => {
    await console.log('MongoDB connected.');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('App is running on port 4000');
});