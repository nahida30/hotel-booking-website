// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
// import ServiceNav from './ServiceNav';
// import Hero from './Hero';
// import SearchForm from './SearchForm';
// import TravelPromo from './TravelPromo';

// const Layout = () => {
//     return (
//         <div>
//             <Navbar></Navbar>
//             <ServiceNav></ServiceNav>
//             <Hero></Hero>
//             <SearchForm></SearchForm>
//             <Outlet></Outlet>
//             <TravelPromo></TravelPromo>
//         </div>
//     );
// };

// export default Layout;

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import ServiceNav from "./ServiceNav";
import Hero from "./Hero";
import SearchForm from "./SearchForm";
import TravelPromo from "./TravelPromo";

const Layout = () => {
  const location = useLocation(); // Get current page path
  const isRegisterPage = location.pathname === "/register"; // Check if it's the register page

  return (
    <div>
      <Navbar />
      {/* Hide ServiceNav, Hero, and SearchForm on the Register page */}
      {!isRegisterPage && (
        <>
          <ServiceNav />
          <Hero />
          <SearchForm />
        </>
      )}
      <Outlet />
      <TravelPromo />
    </div>
  );
};

export default Layout;
