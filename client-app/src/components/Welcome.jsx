import React from 'react'

const Welcome = () => {
  return (
    <div>
        <section className='d-flex flex-column align-items-center p-5' style={{gap: "25px", backgroundColor: "#F2F3F2"}}>
           <div>
            <h5 style={{fontWeight: "400"}}>WELCOME TO THE</h5>
           </div>
           <div>
            <h2>Best Real Estate Agency</h2>
           </div>
           <div className='d-flex justify-content-center' style={{width: "70%"}}>
            <p className='text-muted' style={{textAlign: "center"}}>
            Estancy is a full-service, luxury real estate brokerage and lifestyle company representing clients worldwide in a broad spectrum of classes, including residential, new development, resort real estate, residential leasing and luxury vacation rentals. Since our inception in 2011, we have redefined the business of real estate, modernizing and advancing the industry by fostering a culture of partnership, in which all clients and listings are represented by our agents.
            </p>
           </div>
            <button className='btn btn-danger rounded-0 p-2 fw-bold' style={{width: "15%"}}>
                <small>More About us</small>
            </button>
        </section>
    </div>
  )
}

export default Welcome