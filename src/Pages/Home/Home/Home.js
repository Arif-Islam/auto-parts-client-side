import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Parts from '../Parts/Parts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Parts></Parts>
        </div>
    );
};

export default Home;