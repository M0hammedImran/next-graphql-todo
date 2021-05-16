import { Children } from 'react';
import { Todo as todoType } from '.prisma/client';
import TodoItem from './TodoItem';
interface Props {
    todos: todoType[];
}

export default function TodoList({ todos }: Props) {
    return (
        <div className='text-base text-gray-700 p-2'>
            <ol type='1' className='space-y-8 flex flex-col p-2 items-start'>
                {Children.toArray(
                    todos?.map((todo) => <TodoItem todo={todo} />)
                )}
            </ol>
        </div>
    );
}
