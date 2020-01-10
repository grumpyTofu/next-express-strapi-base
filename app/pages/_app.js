import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../utils/apollo';
import Navbar from '../components/Navbar';

const App = ({ Component, pageProps, apollo }) => {
    return(
        <ApolloProvider client={apollo}>
            <Head>
                <title>Clin One</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

// Wraps all components in the tree with the data provider
export default withData(App);