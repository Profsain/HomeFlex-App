import React, { useEffect, useState } from 'react'
import './Slider.css'

const slides =[
    {
        image:'https://ld-wt73.template-help.com/tf/estancy_v1/images/home-05-370x290.jpg',
        text: 'New Home',
    },
    {
        image:'https://ld-wt73.template-help.com/tf/estancy_v1/images/home-01-370x290.jpg',
        text: 'New Property',
    },
    {
        image:'https://ld-wt73.template-help.com/tf/estancy_v1/images/home-02-370x290.jpg',
        text: 'Your Home',
    },
]

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
          }, 3000);

          return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      };

  return (
    <div>
    <div className='slider-with-text'>
        <button className="slider-button" onClick={prevSlide}>&lt;</button>
        <div className="slider-content">
            <img className="slider-image" src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
            <div className="text-overlay">
          <h3>{slides[currentIndex].text}</h3>
        </div>
      </div>
      <button className="slider-button" onClick={nextSlide}>&gt;</button>
    </div>
    <div className="homecard">
        <div className="location">
            <h2>Find Your Property</h2>
            <select name="location" id="location" className='location-select'>
                <option value="ikeja">Ikeja</option>
                <option value="lekki">Lekki</option>
                <option value="yaba">Yaba</option>
                <option value="berger">Berger</option>
                <option value="ajah">Ajah</option>
            </select>
            <select name="location" id="location" className='location-select'>
                <option value="mini">Mini Flat</option>
                <option value="self">Self Contained</option>
                <option value="bedroom">3 Bedroom</option>
                <option value="bungalow">Bungalow</option>
                <option value="shared">Shared Apartment</option>
            </select>
            <select name="location" id="location" className='location-select'>
                <option value="ground">Ground Floor</option>
                <option value="1story">1 Story</option>
                <option value="2story">2 Stories</option>
                <option value="3stories">3 Stories</option>
                <option value="others">Others</option>
            </select>
            <button className='bttn'>Search</button>
        </div>
    </div>
    </div>
  );
};

export default Slider