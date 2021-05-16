const TodoForm: React.FC = () => {
    return (
        <div className='flex'>
            <input
                type='text'
                name='todo'
                id='todo'
                className='w-full rounded-tl rounded-bl'
            />
            <button className='flex items-center px-5 py-2 rounded-tr rounded-br bg-indigo-600 text-white focus:outline-none focus:ring-1 ring-yellow-600'>
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
