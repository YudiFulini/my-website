import React from "react";
import Col from 'react-bootstrap/Col';

const iconSize = 35;

const skillItem = (props)=>{
  const {skillName, skillImg, skillLevel} = props;
  return (
    <Col className="d-flex flex-column align-items-center">
      <img src={skillImg} height={iconSize}/>
      <p className="text-light text-center p-0 m-0">{skillName}</p>
      <p className="text-light text-center p-0 m-0">{skillLevel}</p>
    </Col>
  );
}

export default skillItem;