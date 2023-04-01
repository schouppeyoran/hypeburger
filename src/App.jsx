import React from 'react';

import {Navbar, Hero, Footer, About, Featured, Testimonials, CTA} from './components';

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Featured/>
            <Testimonials/>
            <CTA/>
            <Footer/>
        </>
    )
}

export default App