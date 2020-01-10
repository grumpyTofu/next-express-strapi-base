import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Query from '../components/query';
import POSTS_QUERY from '../apollo/queries/posts/posts';

export default props => {
    return (
        <Container>
            <Typography variant="h4">Welcome to a new <em>Modern Experience</em></Typography>
            <Typography variant="body1">This app uses Next.js, powered by Express.js, styled with Material-UI</Typography>
            <Query query={POSTS_QUERY}>
                {({ data: { posts } }) => {
                    return <p>{JSON.stringify(posts)}</p>
                }}
            </Query>
        </Container>
    );
}
