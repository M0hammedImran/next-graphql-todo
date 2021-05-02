import Head from 'next/head';
import Image from 'next/image';
import Todo from 'Components/Todo';

export default function Home() {
    return (
        <div className='min-h-screen'>
            <Head>
                <title>Todo App</title>
                <meta name='description' content='todo app made using nextjs' />
                <link rel='icon' href='/logo_white.svg' />
            </Head>

            <main className='flex-1 min-h-body flex items-center justify-center px-2'>
                <Todo />
            </main>

            <footer className='w-full h-16 flex items-center justify-center'>
                <a
                    href='https://github.com/m0hammedimran'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='space-x-2 items-center flex text-sm'
                >
                    <span>
                        Made by{' '}
                        <span className='font-bold bg-in'>Mohammed Imran</span>{' '}
                        and hosted on
                    </span>
                    <span className='flex items-center'>
                        <Image
                            src='/vercel.svg'
                            alt='Vercel'
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}
