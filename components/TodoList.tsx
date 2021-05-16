import { Children } from 'react';
import { Todo as todoType } from '.prisma/client';

interface Props {
    todos: todoType[];
}

export default function TodoList({ todos }: Props) {
    return (
        <div className='text-base text-gray-700'>
            <ol type='1' className='space-y-2'>
                {Children.toArray(
                    todos?.map((todo) => (
                        <li className='space-x-4'>
                            <input
                                type='checkbox'
                                name='completed'
                                id={todo.id.toString()}
                                className='rounded text-indigo-600'
                            />
                            <label htmlFor={todo.id.toString()}>
                                {todo.title}
                            </label>
                        </li>
                    ))
                )}
            </ol>
        </div>
    );
}
