import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Parts from '../Parts/Parts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;