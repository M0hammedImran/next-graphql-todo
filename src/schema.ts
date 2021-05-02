import { join } from 'path';
import { makeSchema, queryType } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';

const Query = queryType({
    definition(t) {
        t.string('lastName', {
            resolve() {
                return 'imran';
            },
        });
        t.string('name', {
            resolve() {
                return 'mohammed imran';
            },
        });
    },
});

export const schema = makeSchema({
    types: {
        Query,
    },
    outputs: {
        schema: join(process.cwd(), 'schema.graphql'),
        typegen: join(
            process.cwd(),
            'node_modules/@types/nexus-typegen/index.d.ts'
        ),
    },
    contextType: {
        module: join(process.cwd(), 'context.ts'),
        export: 'Context',
    },
    plugins: [nexusPrisma()],
});
