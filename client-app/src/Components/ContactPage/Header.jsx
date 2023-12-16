import React from 'react'

const Header = () => {
  return (
    <div className='container-fluid bg-body-tertiary' style={{padding: "12px"}}>
        <div className="d-flex container-lg p-0">
        <small className='text-muted'><a href="#" className='me-4'>Home</a>|</small> 
        <small className='text-muted'>
          <a href="#" className='ms-4'>Contact</a></small>
        </div>
    </div>
  )
}
export default Header