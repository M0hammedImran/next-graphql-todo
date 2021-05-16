import Head from 'next/head';
import Todo from 'Components/Todo';
import { GetServerSideProps } from 'next';
import { Navbar } from 'Components/Navbar';
import { Todo as todoType } from '.prisma/client';
import { PrismaClient } from '@prisma/client';
import { serialize } from 'superjson';
import { QueryFunctionContext, useQuery } from 'react-query';
import { request, gql } from 'graphql-request';
import { useGQLQuery } from 'hooks/useGQLQuery';
import { useState } from 'react';

const GET_TODOS = gql`
    query todos($email: String) {
        todos(where: { author: { email: { equals: $email } } }) {
            id
            title
            isCompleted
            authorId
            createdAt
        }
    }
`;

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async (context) => {
    const email = context.params.email as string;
    const { json: todos } = serialize(
        await prisma.todo.findMany({
            where: {
                author: { email: { equals: email } },
            },
        })
    );

    console.log(todos);
    return {
        props: { todos, email },
    };
};

interface Props {
    todos: todoType[];
    email: string;
}

export default function Todos({ todos: Todos, email }: Props) {
    const [todos, setTodos] = useState(Todos);
    useGQLQuery<{ todos: todoType[] }>({
        key: ['todos'],
        variables: { email },
        options: {
            initialData: { todos: Todos },
            staleTime: 1000 * 5,
            onSuccess: ({ todos }) => {
                setTodos(todos);
            },
        },
        query: GET_TODOS,
    });

    return (
        <>
            <Head>
                <title>Todo App</title>
                <meta name='description' content='todo app made using nextjs' />
                <link rel='icon' href='/logo_white.svg' />
            </Head>
            <Navbar />
            <main className='flex-1 min-h-body flex items-center justify-center px-2 bg-gray-50 p-4'>
                <Todo todos={todos} />
            </main>
        </>
    );
}
