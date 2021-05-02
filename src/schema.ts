import { join } from 'path';
import { makeSchema, mutationType, objectType, queryType } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';

const Todo = objectType({
    name: 'Todo',
    definition: (t) => {
        t.model.id();
        t.model.isCompleted();
        t.model.title();
    },
});

const Query = queryType({
    definition(t) {
        t.crud.todo();
        t.crud.todos({ pagination: true, filtering: true });
    },
});

const Mutation = mutationType({
    definition(t) {
        t.crud.createOneTodo();
        t.crud.updateOneTodo();
        t.crud.deleteOneTodo();
    },
});

export const schema = makeSchema({
    types: {
        Query,
        Todo,
        Mutation,
    },
    outputs: {
        schema: join(process.cwd(), 'schema.graphql'),
        typegen: join(
            process.cwd(),
            'node_modules/@types/nexus-typegen/index.d.ts'
        ),
    },
    contextType: {
        module: join(process.cwd(), 'src/context.ts'),
        export: '*',
        alias: 'Context',
    },
    sourceTypes: {
        modules: [{ module: '.prisma/client', alias: 'PrismaClient' }],
    },
    plugins: [nexusPrisma({ experimentalCRUD: true })],
});
