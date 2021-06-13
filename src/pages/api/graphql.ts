import { ApolloServer } from 'apollo-server-micro';
import { createContext } from '@/context';
import { schema } from '@/schema';

const server = new ApolloServer({
    schema,
    context: createContext(),
    tracing: true,
});

const handler = server.createHandler({ path: '/api/graphql' });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
