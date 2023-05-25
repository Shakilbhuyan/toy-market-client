import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SubcategoryTab from '../SubcategoryTab/SubcategoryTab';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  
    AOS.init();
    return (
        <div data-aos="animation_name">
            <Banner></Banner>
            <Gallery></Gallery>
            <SubcategoryTab></SubcategoryTab>
        </div>
    );
};

export default Home;