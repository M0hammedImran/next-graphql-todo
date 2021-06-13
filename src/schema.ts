import { join } from 'path';
import { makeSchema, mutationType, objectType, queryType } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';

const Todo = objectType({
    name: 'Todo',
    definition: (t) => {
        t.model.id();
        t.model.isCompleted();
        t.model.title();
        t.model.authorId();
        t.model.createdAt();
        t.model.updatedAt();
    },
});

const User = objectType({
    name: 'User',
    definition: (t) => {
        t.model.id();
        t.model.email();
        t.model.name();
        t.model.image();
    },
});

const Query = queryType({
    definition(t) {
        t.crud.todo();
        t.crud.todos({ pagination: true, filtering: true });
        t.crud.users({ pagination: true, filtering: true });
        t.crud.user();
    },
});

const Mutation = mutationType({
    definition(t) {
        t.crud.createOneTodo();
        t.crud.updateOneTodo();
        t.crud.deleteOneTodo();
        t.crud.createOneUser();
        t.crud.updateOneUser();
    },
});

export const schema = makeSchema({
    types: {
        Query,
        Todo,
        User,
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
        modules: [
            {
                module: '.prisma/client/index.d.ts',
                alias: 'prisma',
            },
        ],
    },
    plugins: [nexusPrisma({ experimentalCRUD: true })],
});
