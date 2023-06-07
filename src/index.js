import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './home/Home.js'
import HomeCarousel from './home/HomeCarousel';
import Footer from './footer/Footer';

import Remishome from './home/Remishome';

import HomePage from './pages/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PuppyBasics from './pages/Training/PuppyBasics';

import ScrollToTop from './customhooks/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
    
    <Header/>
        <Routes>
            <Route path="/" index element={ <><ScrollToTop/> <HomePage /></>} />
            <Route path="puppy-basics" index element={<><ScrollToTop/><PuppyBasics/></>} />
        </Routes>
        <Footer/>
    </BrowserRouter>

    </>
);

