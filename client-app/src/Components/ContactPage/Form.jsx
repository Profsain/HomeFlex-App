import React from 'react'
import './Contact.css'
const Form = () => {
  return (
      <div className='Info d-flex flex-sm-column flex-md-row container-lg px-0' style={{marginTop: "80px"}} >
        <div className='Address d-flex flex-column col-sm-12 col-md-5 col-lg-4' style={{gap: "30px", flexWrap: "wrap"}}>
          <div className='d-flex flex-column'>
            <h3 className='mb-3 fw-semibold'>Address: </h3>
            <h6 className='text-muted'>410 S Missouri St, Indianapolis, IN 46225, USA</h6>
          </div>
          <div className='d-flex flex-column'>
              <h3 className='mb-3 fw-semibold'>General enquires: </h3>
              <h6> <a href="#" style={{color: "red"}}>mail@demolink.org</a></h6>
              <h6 className='text-muted'>Toll Free phone number: <a href="#"></a></h6>
          </div>
          <div className='d-flex flex-column'>
             <h3 className='mb-3 fw-semibold'>Other enquires: </h3>
              <h6> <a href="#" style={{color: "red"}}>info@demolink.org</a></h6>
              <h6 className='text-muted'>Toll Free phone number: <a href="#">+1.777.999.5000</a></h6>
              <h6 className='text-muted'>Fax:+ 1.777.999.5051</h6>
          </div>
        </div>
        <div className='Touch d-flex flex-column mt-sm-5 mt-md-0 col-sm-12 col-md-7 col-lg-8'>
        <h3 className='fw-semibold'>Get In Touch</h3>
        <small className='mb-1'>Required fields are followed by *</small>
         <form action="" className='d-flex flex-column'>
            <label htmlFor="name">
                <small className='fw-semibold text-muted'>First Name: *</small>
            </label>
            <input type="text" className='form-control rounded-0 bg-body-tertiary border-0' placeholder='First name'/>
            <label htmlFor="name">
              <small className='fw-semibold text-muted'>Last Name: *</small>
            </label>
            <input type="text" className='form-control rounded-0 bg-body-tertiary border-0'  placeholder='Last Name'/>
            <label htmlFor="email">
              <small className='fw-semibold text-muted'>Email: *</small>
            </label>
            <input type="email" className='form-control  rounded-0 bg-body-tertiary border-0' placeholder='E-mail' />
            <label htmlFor="email">
              <small className='fw-semibold text-muted'>Phone: *</small> 
            </label>
            <input type="text" className='form-control  rounded-0 bg-body-tertiary ' placeholder='Phone' />
            <label htmlFor="message">
              <small className='fw-semibold text-muted'>Message: *</small>  
            </label>
            <textarea name="" id="" cols="30" rows="10" className='bg-body-tertiary border-0'></textarea>
            <button className='btn btn-danger rounded-0 p-2 fw-bold mt-5' style={{width: "30%"}}>
                <small>Submit</small>
            </button>
         </form>
        </div>
    </div>
  )
}

export default Form