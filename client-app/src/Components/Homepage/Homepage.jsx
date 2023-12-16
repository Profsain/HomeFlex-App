import React from 'react'
import Slider from '../Slider/Slider'
import Cards from '../../Testimonial/Cards'
import Newsletter from '../Newsletter/Newsletter'
import Body from '../SingleProperty/Body'
import Header from '../SingleProperty/Header'
import Welcome from './Welcome'
import Features from './Features'


const Homepage = () => {
  return (
    <div>
        
        <Slider />
        <Welcome />
        <Features />
        <Cards />
        <Header />
        <Newsletter />
        
    </div>
  )
}

export default Homepage