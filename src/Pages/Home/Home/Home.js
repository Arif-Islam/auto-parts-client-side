import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Contact from '../Contact/Contact';
import TextScroller from '../InfiniteText/TextScroller';
import LatestNews from '../LatestNews';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <TextScroller></TextScroller>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <LatestNews></LatestNews>
            <Contact></Contact>
            <Footer></Footer>
            {/* <button class="btn btn-secondary">Button</button> */}
        </div>
    );
};

export default Home;