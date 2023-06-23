// import React, { useEffect } from 'react';

// import React from "react";
import Header from './components/features/Header';
import TopNav from './components/features/TopNav';
import GlobalNav from './components/features/GlobalNav';
import SideBar from './components/sideBar';
import Footer from './components/Footer';
import Copyright from './components/features/Copyright';
import { Outlet } from "react-router-dom";
// import productApi from '../api/productApi';
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/megamenu.css'
import './assets/font-awesome/css/font-awesome.css'

export default function Shop() {
    return (
        <>
            <TopNav />
            <div className="container">
                <div id="togotop">
                    <Header />
                    <GlobalNav />
                    <div className="row">
                        <SideBar />
                        <div className="span9">
                            <Outlet />
                        </div>
                    </div>
                    <Footer />
                </div>
                <Copyright />
            </div>
        </>

    )
}