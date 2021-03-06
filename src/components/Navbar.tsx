/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useSession } from 'next-auth/client';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export function Navbar() {
    const [session] = useSession();
    return (
        <nav className='bg-gray-800'>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-16'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'></div>

                    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex-shrink-0 flex items-center'>
                            <img
                                className='block lg:hidden h-8 w-auto'
                                src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                                alt='Workflow'
                            />

                            <img
                                className='hidden lg:block h-8 w-auto'
                                src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                                alt='Workflow'
                            />
                        </div>
                    </div>

                    <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                        {/* Profile dropdown */}
                        <Menu as='div' className='ml-3 relative'>
                            {({ open }) => (
                                <>
                                    <div>
                                        <Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                                            <span className='sr-only'>
                                                Open user menu
                                            </span>
                                            <img
                                                className='h-8 w-8 rounded-full'
                                                src={session?.user?.image || ''}
                                                alt=''
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        enter='transition ease-out duration-100'
                                        enterFrom='transform opacity-0 scale-95'
                                        enterTo='transform opacity-100 scale-100'
                                        leave='transition ease-in duration-75'
                                        leaveFrom='transform opacity-100 scale-100'
                                        leaveTo='transform opacity-0 scale-95'
                                    >
                                        <Menu.Items
                                            static
                                            className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href='#'
                                                        className={classNames(
                                                            active
                                                                ? 'bg-gray-100'
                                                                : '',
                                                            'block px-4 py-2 text-sm text-gray-700'
                                                        )}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </nav>
    );
}
