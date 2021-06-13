import { Todo } from '.prisma/client';
import { useGQLMutation } from '@/hooks/useGQLMutation';
import { gql } from 'graphql-request';

const UPDATE_TODO = gql`
    mutation UpdateTodo($id: Int, $isCompleted: Boolean!) {
        updateOneTodo(
            data: { isCompleted: { set: $isCompleted } }
            where: { id: $id }
        ) {
            title
            isCompleted
        }
    }
`;

interface Props {
    todo: Todo;
}

export default function TodoItem({ todo }: Props) {
    const { mutate } = useGQLMutation({ key: 'updateTodo' });

    const updateTodo = ({
        id,
        isCompleted,
    }: {
        id: number;
        isCompleted: boolean;
    }) => {
        mutate({
            query: UPDATE_TODO,
            variables: {
                id,
                isCompleted,
            },
        });
    };

    return (
        <li
            className='w-full inline-flex justify-between items-center relative'
            onClick={() =>
                updateTodo({
                    id: todo.id,
                    isCompleted: !todo.isCompleted,
                })
            }
        >
            {/* <div className='p-1 rounded-full bg-indigo-600 text-white absolute top-0 right-0'>
              
            </div> */}
            <div className='space-x-4 inline-flex items-start cursor-pointer flex-1'>
                <span
                    className={`inline-block w-6 h-6 min-w-[24px] mt-px max-w-[24px] rounded transition duration-200 ring-1 ring-gray-300 ${
                        todo.isCompleted ? 'bg-indigo-600' : ''
                    } `}
                ></span>
                <p className='border-none w-full capitalize font-medium text-lg whitespace-pre-wrap pr-8'>
                    {todo.title}
                </p>
                <button className='flex p-2 rounded-full items-center justify-center bg-indigo-500 text-white'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 cursor-pointer'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                    </svg>
                </button>
            </div>
        </li>
    );
}
