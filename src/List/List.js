import React from 'react';

const List = () => {
  const features = [
    {
      icon: '👰',
      title: 'Walking down the aisle',
      description: 'Make your grand entrance and shine on your special day.',
    },
    {
      icon: '🌼',
      title: 'Carrying a special something',
      description: 'Hold a beautiful basket of flowers to add charm to your wedding.',
    },
    {
      icon: '📸',
      title: 'Being a part of the wedding photos',
      description: 'Capture memories with you at the heart of every snapshot.',
    },
    {
      icon: '✨',
      title: 'And More!',
      description: 'Discover a world of possibilities to make your wedding unique.',
    },
  ];

  return (
    <div className="product-features text-center font-fm">
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
