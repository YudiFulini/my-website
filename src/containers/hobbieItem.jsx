import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const hobbieItem=(props)=>{
  const {hobbieTitle, hobbieDescription, hobbiePhoto} = props;

  return (
    <Row className="py-3 d-flex align-items-center justify-content-center">
      <Col md={4}>
        <img src={hobbiePhoto} className="rounded img-fluid"/>
      </Col>
      <Col md={6}>
        <h5 className="py-2 text-white">{hobbieTitle}</h5>
        <p className="py-1 text-white">{hobbieDescription}</p>
      </Col>
    </Row>
  );
}

export default hobbieItem;