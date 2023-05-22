import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SubcategoryTab from '../SubcategoryTab/SubcategoryTab';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SubcategoryTab></SubcategoryTab>
        </div>
    );
};

export default Home;