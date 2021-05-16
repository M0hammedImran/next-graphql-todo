import Image from 'next/image';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Todo as todoType } from '.prisma/client';

interface Props {
    todos: todoType[];
}

const Todo: React.FC<Props> = ({ todos }) => {
    return (
        <div className='max-w-2xl pb-8 w-full shadow-lg bg-white p-2 rounded grid place-items-center border min-h-full'>
            <div className='select-none p-0'>
                <Image
                    src={'/logo.svg'}
                    height='50'
                    className='select-none'
                    width='50'
                />
            </div>
            <h2 className='text-lg font-semibold'>Todo list</h2>
            <div className='max-w-md w-full min-h-[60vh] space-y-4'>
                <TodoForm />
                <TodoList todos={todos} />
            </div>
        </div>
    );
};

export default Todo;
