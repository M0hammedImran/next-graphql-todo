import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

function HomeHead() {
    return (
        <Head>
            <title>Todo App</title>
            <meta name='description' content='todo app made using nextjs' />
            <link rel='icon' href='/logo_white.svg' />
        </Head>
    );
}

export default function Home() {
    const [session, loading] = useSession();
    const router = useRouter();

    if (loading) {
        return (
            <>
                <HomeHead />
                <main className='flex-1 min-h-body flex items-center justify-center px-2 bg-gray-50 p-4'>
                    Loading...
                </main>
            </>
        );
    }

    if (session?.user) {
        router.push(`/todos/${session?.user.email}`);
    }

    return (
        <div className='min-h-screen'>
            <HomeHead />
            <Navbar />
            <main className='min-h-body flex items-center justify-center px-2 bg-gray-50 p-4'>
                {!session?.user && (
                    <div className='flex items-center space-x-4'>
                        <span>Not signed in? </span>
                        <a
                            href='@'
                            className='py-2 px-5 border rounded'
                            onClick={() => signIn()}
                        >
                            Sign in
                        </a>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
