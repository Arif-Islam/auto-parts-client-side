import React from 'react';
import error404 from '../../images/error-404.png';
import Navbar from '../../Shared/Navbar/Navbar';

const NotFound = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className='flex justify-center mt-10 lg:mt-20'>
                <img className='' src={error404} alt="" />
            </div>
        </div>
    );
};

export default NotFound;