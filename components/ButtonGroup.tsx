import React from 'react';

import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';

/**
 * @param {React.AllHTMLAttributes<HTMLDivElement>} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ButtonGroup:React.FC<React.AllHTMLAttributes<HTMLDivElement>> = function ButtonGroup({
    className,
    children,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_button-group',
                className,
            )}
            {...props}
        >
            { React.Children.map(children, (child) => (
                <>
                    { child }
                    {' '}
                </>
            )) }
        </WrapperTag>
    );
};

export default ButtonGroup;
