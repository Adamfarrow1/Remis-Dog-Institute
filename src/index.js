import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './home/Home.js'
import HomeCarousel from './home/HomeCarousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Header/>
    <Home/>
    <HomeCarousel/>
    </>
);

