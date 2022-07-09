import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyPhoto from './photos/my-photo.jpg'

const introductions = [
  `Hello everyone, thank you for visiting my personal web-page, my name is Felipe Yudi Fulini, born in Toyokawa-Japan in 1996.
  I moved to Brazil when 9 years old and lived most of my life there!
  I am reserved and quiet but pretty friendly.`,
  `- I graduate in Control and Automation Engineering at 
  Federal University of Technology Paraná (UTFPR-Brazil) in 2021`,
  `- I was an intern at Siemens Infrastructure and Industry during 2021.`,
  `- I came to Shibaura Institute of Technology (SIT-Japan) as a 
  research exchange student from 2019/9 to 2020/7.`,
  `- Currently, I am a graduate student at Shibaura Institute of Technology 
  studying the course of Electrical Engineering and Computer Science to get my master's degree. 
  Sponsored by MEXT (Ministry of Education, Culture, Sports, Science and Technology) scholarship.`
];


const aboutMeContainer= ()=>{
  return (
  <Container fluid="lg" id="home" className="mt-5 py-3 ">
    <Row className="align-items-center my-3">
      <Col className="d-flex justify-content-center justify-content-md-end" md={6}>
        <img src={MyPhoto} className="img-fluid rounded-circle"/>
      </Col>
      <Col md={6}>
        <h2 className="py-2 text-white">About me</h2>
        {
          introductions.map((intro, i)=>{
            return (<p key={i} className="text-light">{intro}</p>)
          })
        }
      </Col>
    </Row>
  </Container>
  );
}

export default aboutMeContainer;