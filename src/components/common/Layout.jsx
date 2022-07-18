import React from 'react';
import NavbarComp from './NavbarComp';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <NavbarComp />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Layout;