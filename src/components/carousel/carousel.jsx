import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './carousel.css';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={item.image} alt={item.title} width={450} height={350} />
            <div className="carousel-content">
                <h2 className="carousel-title">{item.title}</h2>
                <p className="carousel-description">{item.description}</p>
                <a className="carousel-link" href={item.link}>Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  ).isRequired
};

export default Carousel;