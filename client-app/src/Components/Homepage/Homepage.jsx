import React from 'react'
import Slider from '../Slider/Slider'
import Cards from '../../Testimonial/Cards'
import Newsletter from '../Newsletter/Newsletter'
import Body from '../SingleProperty/Body'
import Header from '../SingleProperty/Header'


const Homepage = () => {
  return (
    <div>
        
        <Slider />
        <Cards />
        <Header />
        <Body />
        <Newsletter />
        
    </div>
  )
}

export default Homepage