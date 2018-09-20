require('dotenv').config()

const { GraphQLServer } =  require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const  Query = require('./resolvers/Query');
const  Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');

const PRISMA_ENDPOINT = process.env.PRISMA_ENDPOINT || 'https://us1.prisma.sh/juan-manuel-guzman-rodriguez-0b9982/netflix/dev';

const resolvers = {
    Query,
    Mutation, 
    Subscription
}

const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers,
    context: req => ({
        ... req,
        db: new Prisma({
            typeDefs: 'src/generated/prisma.graphql',
            endpoint: PRISMA_ENDPOINT,
            debug: true
        })
    }),
    resolverValidationOptions: {
        requireResolversForResolveType: false
    }
})

//module.exports = server;

//var server = require('../index');


const PORT = process.env.PORT || 4000;

const options = {
    port : PORT
}

server.start(options, () => console.log("Server is running in http://localhost:4000"))
