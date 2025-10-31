import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function HomePage() {
    return ( 
        <>
            
            <Hero />
            <Awards/> 
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            

        </>
     );
}

