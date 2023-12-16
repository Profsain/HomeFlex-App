import Card from 'react-bootstrap/Card';

function FeatureCard({propertyImage, propertyType, propertyLocation, propertyAddress, price}) {
  return (
    <>
      <Card style={{width: "30%", flexWrap: "wrap"}} className='mt-5 border-0 rounded-0'>
        <div className='bg-warning d-flex justify-content-center' style={{position: "absolute", width: "141px"}}>
          <span className='text-white'style={{padding: "10px 0px"}}> 
          <small className='fw-bold'>{price}</small>
          </span>
        </div>
        <Card.Img variant="top" src={propertyImage}  height={"300px"} className='rounded-0'/>
        <Card.Body style={{backgroundColor: "#F2F3F2"}} className='p-4'>
          <Card.Text>
            <h5 className='lead fw-semibold'>{propertyType}</h5>
          </Card.Text>
          <Card.Text>
            <p>{propertyLocation}</p>
          </Card.Text>
          <Card.Text>
            <small className='text-muted'>{propertyAddress}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default FeatureCard;