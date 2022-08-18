import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Contacts from '../Contacts';
import Hero from '../Hero';

function Home() {
    return(
        <>
            <Hero />
            <Cards />
            <Contacts />
            <footer>
                &copy; Copyright All Rights Reserved 2021, Nicholas Sidharta
            </footer>
        </>
    );
}

export default Home;