import { ApolloServer } from 'apollo-server-micro';
import { createContext } from 'src/context';
import { schema } from 'src/schema';

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
