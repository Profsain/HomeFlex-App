import React from 'react'

const Newsletter = () => {
  return (
    <div className='container-fluid bg-danger' style={{marginTop: "100px", padding: "80px"}}>
        <div className="news container-lg d-flex flex-sm-column flex-lg-row p-0">
             <div className='col-sm-12 col-md-10 col-lg-5 d-flex flex-column'>
               <h3 className='fw-semibold text-white'>Sign Up for our Newsletter...</h3>
               <h5 className='text-white'>...AND NEVER MISS OUR SPECIAL OFFERS AND NEWS!</h5>
             </div>
             <div className='col-sm-12 col-md-10 col-lg-7 d-flex align-items-center' style={{gap: "10px"}}>
              <input type="email" className='col-9 rounded-0 bg-body-tertiary mb-0 border-0 ps-4 ms-auto' 
              placeholder='Enter your e-mail' style={{padding: "9px"}}/>
              <button className='btn btn-danger col-md-3 col-lg-2 rounded-0 border'>
                <small className='fw-semibold'>Subscribe!</small>
              </button>
             </div>
        </div>
    </div>
  )
}

export default Newsletter