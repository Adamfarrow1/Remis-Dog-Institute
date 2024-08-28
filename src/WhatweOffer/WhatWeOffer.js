import React, { useState, useEffect } from 'react';
import '../css/CompanyOfferingsPage.css'; // Import the CSS file
import Header from '../Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

const offerings = [
  { title: 'Private Training', description: 'One-on-one training sessions tailored to your dog’s specific needs.' },
  { title: 'Group Classes', description: 'Interactive classes with other dogs to improve socialization and obedience.' },
  { title: 'Production Work', description: 'Specialized training for dogs to perform in films, commercials, and other media.' },
  { title: 'Behavior Modifications', description: 'Addressing behavioral issues like aggression, anxiety, and more.' },
  { title: 'Wedding Pet Care', description: 'Ensuring your pet is part of your special day with dedicated care.' },
  { title: 'AKC Classes', description: 'Training programs focused on preparing dogs for AKC certifications.' },
  { title: 'Virtual Training', description: 'Remote training sessions to help your dog from the comfort of your home.' },
  { title: 'Board & Trains', description: 'Comprehensive training while your dog stays with us for an extended period.' }
];

const WhatWeOffer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="header">Our Offerings</h1>
        <ul className="list">
          {offerings.map((offering, index) => (
            <li
              key={index}
              className="list-item"
              onClick={() => toggleDescription(index)}
              data-aos="fade-in"
              data-aos-delay={`${index * 150}`} // Increment delay by 150ms for each item
            >
              <div className="title-container">
                <h2 className="title">{offering.title}</h2>
                <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>&#9662;</span>
              </div>
              <div
                className={`description ${activeIndex === index ? 'active' : ''}`}
                style={{ maxHeight: activeIndex === index ? '100px' : '0px' }}
              >
                {offering.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WhatWeOffer;
