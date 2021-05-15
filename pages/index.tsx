import Head from 'next/head';
import Image from 'next/image';
import Todo from 'Components/Todo';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
    const [session, loading] = useSession();
    console.log(`🚀 | file: index.tsx | line 8 | session`, session);

    return (
        <div className='min-h-screen'>
            <Head>
                <title>Todo App</title>
                <meta name='description' content='todo app made using nextjs' />
                <link rel='icon' href='/logo_white.svg' />
            </Head>
            <nav className='flex items-center justify-end px-8 h-14 bg-indigo-600 text-white'>
                {loading ? (
                    'loading...'
                ) : session ? (
                    <div className='flex items-center space-x-4'>
                        <span>Signed in as {session.user.email}</span>
                        <button
                            className='py-2 px-5 border rounded'
                            onClick={() => signOut()}
                        >
                            Sign out
                        </button>
                    </div>
                ) : (
                    <div className='flex items-center space-x-4'>
                        <span>Not signed in</span>
                        <a
                            href='@'
                            className='py-2 px-5 border rounded'
                            onClick={() => signIn()}
                        >
                            Sign in
                        </a>
                    </div>
                )}
            </nav>
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
