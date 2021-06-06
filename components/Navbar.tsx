import { signIn, signOut, useSession } from 'next-auth/client';

export function Navbar() {
    const [session, loading] = useSession();

    return (
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
                        href='#'
                        className='py-2 px-5 border rounded'
                        onClick={() => signIn()}
                    >
                        Sign in
                    </a>
                </div>
            )}
        </nav>
    );
}
