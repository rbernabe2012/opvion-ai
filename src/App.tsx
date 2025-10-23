import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { PoweredByAI } from './components/PoweredByAI';
import { Industries } from './components/Industries';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileMenu } from './components/MobileMenu';

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Solutions />
                <PoweredByAI />
                <Industries />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
