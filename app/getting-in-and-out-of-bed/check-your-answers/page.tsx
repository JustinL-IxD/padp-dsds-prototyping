import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import SummaryList from '@/components/SummaryList';

export const metadata:Metadata = {
    title: 'Check your answers',
};

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const Page:React.FC = function Page() {
    const pageTitle:string = (
        typeof metadata.title === 'string'
            ? metadata.title
            : 'Social Security Scotland'
    );

    const listItems = [
        {
            label: 'Do you have difficulty getting in or out of bed?',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Do you ever use any aids, tools or adaptions to get in or out of bed?',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Tell us any difficulty you have getting in and out of bed.',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
    ];

    return (
        <>
            <Wrapper>
                <PageHeader
                    title={pageTitle}
                />
            </Wrapper>
            <Wrapper>
                <SummaryList
                    items={listItems}
                />
            </Wrapper>
        </>
    );
};

export default Page;
