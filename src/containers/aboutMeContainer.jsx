import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyPhoto from './photos/my-photo.jpg'

const aboutMe = `Hello everyone, thank you for visiting my personal web-page, my name is Felipe Yudi Fulini, born in Toyokawa-Japan in 1996.
I moved to Brazil when 9 years old and lived most of my life there!
I am reserved and quiet but pretty friendly.`;
const myTimeline = [
  {
    year: `2022/9 - Currently`,
    description: `I am a master's student at Shibaura Institute of Technology, 
    studying the course of Electrical Engineering and Computer Science. 
    Sponsored by MEXT (Ministry of Education, Culture, Sports, Science and Technology) scholarship.`
  },
  {
    year: `2021/12`,
    description: `Graduate in Control and Automation Engineering at 
    Federal University of Technology Paraná (UTFPR-CP), in Brazil.`
  },
  {
    year: `2021/1 - 2021/12`,
    description:`Internship program at Siemens Infrastructure and Industry.`    
  },
  {
    year: `2019/9 - 2020/7`,
    description: `Research Exchange Program at Shibaura Institute of Technology (SIT-Japan).`
  }  
];


const aboutMeContainer= ()=>{
  return (
  <Container fluid="lg">
    <Row className="align-items-center my-3">
      <Col className="d-flex justify-content-center justify-content-md-end" md={6}>
        <img src={MyPhoto} className="img-fluid rounded-circle"/>
      </Col>
      <Col md={6}>
        <h2 className="py-2 text-white font-8bit-title">About me</h2>
        <p className="text-white">{aboutMe}</p>
        <h2 className="py-2 text-white font-8bit-title">My timeline</h2>
        <Container className="border-start m-0 p-0">
        {
          myTimeline.map((timeline, i)=>{
            return (
              <>
              <h6 className="text-white my-0 p-0 font-8bit-timeline">&#9658; {timeline.year} </h6>
              <p key={i} className="text-white px-5 mt-2 mb-4">{timeline.description}</p>
              </>
              
            )
          })
        }
        </Container>
        
      </Col>
    </Row>
  </Container>
  );
}

export default aboutMeContainer;