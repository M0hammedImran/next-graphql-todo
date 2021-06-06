import Head from 'next/head';
import { Provider } from 'next-auth/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { useRef } from 'react';
import '../tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
    const queryClientRef = useRef<QueryClient>();

    if (!queryClientRef.current) {
        queryClientRef.current = new QueryClient();
    }

    return (
        <>
            <Head>
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap'
                    rel='stylesheet'
                />
                <meta charSet='utf-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
                />
                <meta name='description' content='Todo App' />
                <meta
                    name='keywords'
                    content='PWA, todo, progressive web app, india, app, web app'
                />

                <meta name='theme-color' content='#4f46e5' />
            </Head>
            <Provider session={pageProps.session}>
                <QueryClientProvider client={queryClientRef.current}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <Component {...pageProps} />
                    </Hydrate>
                </QueryClientProvider>
            </Provider>
        </>
    );
}

export default MyApp;
