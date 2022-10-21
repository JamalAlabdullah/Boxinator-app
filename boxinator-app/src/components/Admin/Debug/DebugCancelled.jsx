import React, { useEffect } from 'react';
import { usePackage } from "./../../../context/PackageContext"
import { fetchCancelledPackage } from '../../../api/PackageService';
import { Col, Container,Row } from 'react-bootstrap';


const DebugCancelled = () => {

  const { packages, setPackage } = usePackage();


   // GET all completed packages
   useEffect(() => {

    const init = async () => {
        const packages = await fetchCancelledPackage();
        setPackage(packages);
    };

    init();
    
}, []);

if (!packages) return null;


  return (
    <div>
      <h1>All the cancelled packages</h1>

    <Container>

    {packages.shipments && packages.shipments.map(({
        id, receiver_name, color, weight, country, date, totalSum, status}) => (
          <Row  key={id} className="justify-content-md-center"> 
          <Col>02.03.2022</Col>  
           <Col>{receiver_name}</Col>
           <Col>{weight}</Col>
           <Col>{color}</Col>
           <Col>{country}</Col>
           <Col>{totalSum}</Col> 
           <Col>{status}</Col> 
          </Row>
      ))}
    
     
     
    </Container>

 

     
    </div>
  )

}

export default DebugCancelled