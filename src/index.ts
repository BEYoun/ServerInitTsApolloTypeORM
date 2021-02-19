import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga'
import { importSchema } from 'graphql-import'
import { createConnection } from "typeorm";
import * as path from 'path';

import { resolvers } from './resolver';
const typeDefs = importSchema(path.join(__dirname, './graphql/schema.graphql'));




const server = new GraphQLServer({ typeDefs, resolvers })

createConnection().then(() => {
    server.start(() => console.log('Server is running on localhost:4000'))
})
