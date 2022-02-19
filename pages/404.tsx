import React from 'react';
import Head from 'next/head';

export default function Custom404(): JSX.Element {
    return (
        <>
            <div className="container">
                <Head>
                    <title>404</title>
                    <meta name="description" content={'404'} />
                </Head>
                404
            </div>
        </>
    );
}
