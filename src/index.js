import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './footer/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PuppyBasics from './PuppyBasics/PuppyBasics';
import ProductionInfo from './production/production.js';
import ScrollToTop from './customhooks/ScrollToTop';
import BasicObedience from './BasicObedience/BasicObedience';
import WeddingCare from './WeddingCare/WeddingCare';
import Contact from './Contact/Contact';
import EtsyShop from './EtsyShop/EtsyShop';
import Gallery from './gallery/Gallery';
import RemisStory from './About/RemisStory';
import Owner from './About/Owner';
import WhatWeOffer from './WhatweOffer/WhatWeOffer.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
    
        <Routes>
            <Route path="/" index element={ <><ScrollToTop/> <HomePage /></>} />
            <Route path="puppy-basics" index element={<><ScrollToTop/><PuppyBasics/></>} />
            <Route path="basic-obedience" index element={<><ScrollToTop/><BasicObedience/></>} />
            <Route path="weddingcare" index element={<><ScrollToTop/><WeddingCare/></>} />
            <Route path="production" index element={<><ScrollToTop/><ProductionInfo/></>} />
            <Route path="what-we-offer" index element={<><ScrollToTop/><WhatWeOffer/></>} />
            <Route path="contact" index element={<><ScrollToTop/><Contact/></>} />
            <Route path="etsyshop" index element={<><ScrollToTop/><EtsyShop/></>} />
            <Route path="gallery" index element={<><ScrollToTop/><Gallery/></>} />
            <Route path="remis-story" index element={<><ScrollToTop/><RemisStory/></>} />
            <Route path="owners-story" index element={<><ScrollToTop/><Owner/></>} />
            <Route path="what-we-offer" index element={<><ScrollToTop/><WhatWeOffer/></>} />
        </Routes>
        <Footer/>
    </BrowserRouter>

    </>
);

