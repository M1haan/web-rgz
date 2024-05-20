import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Nav from '../nav/nav';
import './wrapper.scss';

function Wrapper (): JSX.Element {
    return (
        <>
        <Nav />
        <div className="wrapper">
            <Outlet />
        </div>
        <Footer />
        </>
    );
}

export default Wrapper;