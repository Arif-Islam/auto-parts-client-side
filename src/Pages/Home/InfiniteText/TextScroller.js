import React from 'react';
import InfiniteText from './InfiniteText';

const TextScroller = () => {
    return (
        <>
            <div className='bg-gray-100 py-5 text-2xl font-medium hidden lg:block'>
                <InfiniteText text="World's Best Auto Parts Available. See our products down below!" />
            </div>
            <div className='bg-gray-100 py-5 text-xl font-medium lg:hidden'>
                <InfiniteText text="World's Best Auto Parts Available!" />
            </div>
        </>
    );
};

export default TextScroller;