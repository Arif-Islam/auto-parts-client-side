import React from 'react';

const Spinner = () => {
    // console.log('spinner');
    return (
        <div>
            <div className="flex justify-center items-center">
                < div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
        </div>
    );
};

export default Spinner;