import Image from 'next/image';

export function Footer() {
    return (
        <footer className='w-full h-16 flex items-center justify-center'>
            <a
                href='https://github.com/m0hammedimran'
                target='_blank'
                rel='noopener noreferrer'
                className='space-x-2 items-center flex text-sm outline-none focus:ring-1 px-6 rounded py-2'
            >
                <span>
                    Made by{' '}
                    <span className='font-bold bg-in'>Mohammed Imran</span> and
                    hosted on
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
    );
}
