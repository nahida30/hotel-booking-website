import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ServiceNav from './ServiceNav';
import Hero from './Hero';
import SearchForm from './SearchForm';
import TravelPromo from './TravelPromo';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ServiceNav></ServiceNav>
            <Hero></Hero>
            <SearchForm></SearchForm>
            <Outlet></Outlet>
            <TravelPromo></TravelPromo>
        </div>
    );
};

export default Layout;