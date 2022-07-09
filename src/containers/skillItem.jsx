import React from "react";
import Col from 'react-bootstrap/Col';

const iconSize = 35;

const skillItem = (props)=>{
  const {skillName, skillImg} = props;
  return (
    <Col className="d-flex flex-column align-items-center">
      <img src={skillImg} height={iconSize}/>
      <p className="text-light text-center">{skillName}</p>
    </Col>
  );
}

export default skillItem;