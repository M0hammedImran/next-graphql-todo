import { gql } from 'graphql-request';
import { useGQLMutation } from 'hooks/useGQLMutation';
import { useSession } from 'next-auth/client';
import { useState } from 'react';

const CREATE_TODO = gql`
    mutation CreateTodo($todo: String!, $email: String!) {
        createOneTodo(
            data: {
                title: $todo
                isCompleted: false
                author: { connect: { email: $email } }
            }
        ) {
            title
            isCompleted
        }
    }
`;

const TodoForm: React.FC = () => {
    const [session] = useSession();

    const [todo, setTodo] = useState('');
    const { mutate } = useGQLMutation({ key: 'createTodo' });

    const createTodo = () => {
        if (!todo) {
            return;
        }

        mutate({
            query: CREATE_TODO,
            variables: {
                todo,
                email: session.user.email,
            },
        });
    };

    return (
        <div className='flex'>
            <input
                type='text'
                name='todo'
                id='todo'
                className='w-full rounded-tl rounded-bl'
                value={todo}
                onChange={({ target: { value } }) => setTodo(value)}
            />
            <button
                className='flex items-center px-5 py-2 rounded-tr rounded-br bg-indigo-600 text-white focus:outline-none focus:ring-1 ring-yellow-600'
                onClick={createTodo}
            >
                <span>Add</span>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path
                        fillRule='evenodd'
                        d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                        clipRule='evenodd'
                    />
                </svg>
            </button>
        </div>
    );
};

export default TodoForm;
