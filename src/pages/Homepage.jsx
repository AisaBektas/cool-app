import React from 'react';
import Footer from '../components/Footer';
import FourthPart from '../components/FourthPart';
import Intro from '../components/Intro';
import SecondPart from '../components/SecondPart'
import ThirdPart from '../components/ThirdPart';
const Homepage = () => {
    return (
        <div>
            <Intro/>
            <SecondPart/>
            <ThirdPart/>
            <FourthPart/>
            <Footer/>
        </div>
    )
}
export default Homepage;