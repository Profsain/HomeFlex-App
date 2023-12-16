import React from 'react'
import FeatureCard from './FeatureCard'
import properties from '../mockDataBase/properties'

const Features = () => {
  return (
    <section className='py-5'>
        <h4 className='display-6 text-center fw-semibold'>Featured Properties</h4>
        <div className='d-flex container-lg p-0 justify-content-between mt-5' style={{flexWrap: "wrap"}}>
        {
            properties.map((item) => {
                return (
                    <>
                    <FeatureCard propertyImage={item.propertyImage}  propertyAddress={item.propertyAddress}
                     propertyLocation={item.propertyLocation} propertyType={item.propertyType} price={item.price} />
                    </>
                )
            })
        }
        </div>
    </section>
  )
}

export default Features