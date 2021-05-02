import Image from 'next/image';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo: React.FC = () => {
    return (
        <div className='max-w-lg w-full shadow-md p-2 rounded grid place-items-center'>
            <div className='select-none p-0'>
                <Image
                    src={'/logo.svg'}
                    height='50'
                    className='select-none'
                    width='50'
                />
            </div>
            <h2 className='text-lg font-semibold'>Todo list</h2>
            <div className='max-w-md w-full min-h-[60vh] max-h-[1024px] space-y-4'>
                <TodoForm />
                <TodoList />
            </div>
        </div>
    );
};

export default Todo;
