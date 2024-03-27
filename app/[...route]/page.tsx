import React from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// import handleSubmit from './submit-handler';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Details from '@/components/Details';

import { getData } from '@/lib/routeAction';

import Form from './form';

interface PageRoute {
    params: {
        route: string[],
    },
}

/**
 * @param {PageRoute} props - The page route parameters
 * @returns {Promise<Metadata>}
 */
export function generateMetadata({
    params: {
        route,
    },
}:PageRoute):Promise<Metadata> {
    return getData(route).then((data) => ({
        title: data.title.title,
    })).catch(() => notFound());
}

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const Page:React.FC<PageRoute> = async function Page({
    params: {
        route,
    },
}) {
    const data = await getData(route).catch(() => notFound());
    const { title } = data;

    return (
        <>
            <Wrapper>
                <PageHeader {...title} />
            </Wrapper>
            <Wrapper>
                <Form {...data} />

                <Details label="View page details">
                    <pre>
                        <code
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(data, undefined, 4),
                            }}
                        />
                    </pre>
                </Details>
            </Wrapper>
        </>
    );
};

export default Page;
