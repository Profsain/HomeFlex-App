import Carousel from 'react-bootstrap/Carousel'; //DON'T FORGET TO USE OLA IMAGE IF YOU CAN
function Body() {
  return (
    <>
    <div className='flex-container d-flex border-0 p-0 mx-auto p-0' style={{marginTop: "100px", width: "85%",}}>
       <div className='col-7 flex-item1'>
                <Carousel interval={null}  id='CarouselExample'>
                    <Carousel.Item>
                        <img src="/img4.jpg" alt="room1"  className='img-fluid'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/img6.jpg" alt="room2" className='img-fluid'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/img7.jpg" alt="room3"  className='img-fluid'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/img1.jpg" alt="room4"  className='img-fluid'/>
                    </Carousel.Item>
                </Carousel>
       </div>
        <div className='flex-item2 d-flex flex-column col-5' style={{gap: "10px"}}>
          <h2 className='ms-4'>35 Pond St, New York</h2>
          <p className="ms-4 mb-0 text-muted" style={{lineHeight: "25px", width: "90%"}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dignissimos sequi, 
            eveniet libero rerum atque. Ipsa rem temporibus sint perferendis dictanatus.</p>
          <h5 className='ms-4 mb-0'>Features</h5>
        <div className='d-flex w-50 justify-content-between ms-4 flex-item3' >
            <div className='d-flex flex-column' style={{gap: "10px"}}>
                <span>
                    <img src="/checkbox.png.png" alt="" width="17px" height="15px"/>
                    <small className='fw-bold text-muted ms-2'>Sprinklers</small>
                </span>
                <span>
                   <img src="/checkbox.png.png" alt="" width="17px" height="15px"/>
                    <small className='fw-bold text-muted ms-2'>Basketball Court</small>
                </span>
                <span>
                    <img src="/checkbox.png.png" alt="" width="17px" height="15px"/> 
                    <small className='fw-bold text-muted ms-2'>Private Space</small>
                </span>
                <span>
                    <img src="/checkbox.png.png" alt="" width="17px" height="15px"/>
                    <small className='fw-bold text-muted ms-2'>Lawn</small>
                </span>
                </div>
                <div className='d-flex flex-column ms' style={{gap: "10px"}}>
                    <span>
                        <img src="/checkbox.png.png" alt="" width="17px" height="15px"/>
                        <small className='fw-bold text-muted ms-2'>Gym</small>
                    </span>
                    <span>
                        <img src="./checkbox.png.png" alt="" width="17px" height="15px"/>
                        <small className='fw-bold text-muted ms-2'>Fireplace</small>
                    </span>
                    <span>
                        <img src="/checkbox.png.png" alt="" width="17px" height="15px"/>
                        <small className='fw-bold text-muted ms-2'>Balcony</small>
                    </span>
                    <span>
                        <img src="/checkbox.png.png" alt="" width="17px" height="15px"/>
                        <small className='fw-bold text-muted ms-2'>Laundry</small>
                    </span>
                </div>
            </div>
            <div className="d-flex flex-column ms-4" style={{width: "95%"}}>
                    <div>
                        <h5>Prices start at</h5>
                    </div>
                    <div>
                        <span>
                            <small className='lead dollar'>$</small>
                            <h1 className='d-inline fw-bold display-4 nine'>99</h1>
                            <h4 className='d-inline-block'>/per night</h4>
                        </span>
                    </div>
                    <div className='d-flex justify-content-between flex-item4'>
                        <div className='d-flex'>
                             <div>
                                <img src="/bedroom.png" alt="bedroom" className='me-2'/>
                             </div>
                             <div className='d-flex align-items-center'>
                                <span>One single bed</span>
                             </div>
                        </div>
                        <div className='d-flex'>
                            <div>
                               <img src="/swimming.png" alt="swimming pool"/>
                            </div>       
                             <div className='d-flex align-items-center'>
                                <span>Swimming Pool</span>
                             </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between flex-item5'>
                        <div className='d-flex'>
                            <div>
                               <img src='/bathroom.png' alt='bathroom' className='me-2'/>
                            </div>                 
                            <div className='d-flex align-items-center'>
                                <span>Shower and hair dryer</span>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div>
                               <img src="/restroom.png" alt="restroom" />
                            </div>
                            <div className='d-flex align-items-center'>
                                <span className='d-flex align-items-center'>One single toilet</span>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
       </div>
    </>
  );
}

export default Body;