import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const hobbieItem=(props)=>{
  const {hobbieTitle, hobbieDescription, hobbiePhoto} = props;

  return (
    <Row className="py-4 mx-0 d-flex align-items-center justify-content-center border-top border-bottom border-dark">
      <Col xl={4} lg={5} md={6}>
        <img src={hobbiePhoto} className="img-fluid rounded"/>
      </Col>
      <Col md={6}>
        <h5 className="py-1 m-0 text-white font-8bit-subtitle">{hobbieTitle}</h5>
        <p className="py-1 m-0 text-white">{hobbieDescription}</p>
      </Col>
    </Row>
  );
}

export default hobbieItem;