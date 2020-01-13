import React from 'react';

import { useRouter } from 'next/router';

import { useQuery } from "@apollo/react-hooks";

import Query from '../components/query';
import GET_SECTION from '../apollo/queries/sections/section';

export default props => {

    const router = useRouter();

    const { data, loading, error } = useQuery(GET_SECTION, {
        variables: { sectionId: parseInt(router.query.section) }
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;
    if (data) console.log(data);

    return (
        <>
            {data.section &&
                <h3>Testing new Page: {data.section.title}</h3>
            }
        </>
    );
}