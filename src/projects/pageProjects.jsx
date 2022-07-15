import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

import KanjiIcon from './icon/kanji-icon.png';

const projects = [
  {
    title: `Kanji Practice`,
    description: `In this project you can practice Japanese Kanji. Select the scholar year you would like 
    to study and hide/show english subtitles or furigana to practice reading. You can also 
    practice writing by hiding the Kanji and write the letter accordingly to the furigana.`,
    icon: KanjiIcon,
    link: `/projects/kanjiPractice`
  }
]

const linkStyle = {
  textDecoration: "none",
  color: 'rgba(250, 250, 250, 0.8)'
};

const pageProjects = () => {
  return (
    <Container fluid="md" id="projects">
      <h2 className="py-4 px-2 m-0 text-white font-8bit-title">Projects</h2>
      <Row className="mb-5 border-bottom border-top border-2 border-light d-flex">
        {projects.map((project)=>{
          return(
            <Col className="md-6 m-3 d-flex justify-content-center">
              <Card style={{ width: '250px' }}>
                <Card.Img variant="top" src={project.icon} />
                <Card.Body>
                  <Card.Title class="font-8bit-subtitle">{project.title}</Card.Title>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                  <Button variant="dark">
                    <Link to={project.link} style={linkStyle}>
                      Check Project
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
      
      <h2 className="py-4 px-2 m-0 text-white font-8bit-title">Practice Projects</h2>
      <Row className="mb-5 border-bottom border-top border-2 border-light d-flex">
        {projects.map((project)=>{
          return(
            <Col className="md-6 m-3 d-flex justify-content-center">
              <Card style={{ width: '250px' }}>
                <Card.Img variant="top" src={project.icon} />
                <Card.Body>
                  <Card.Title class="font-8bit-subtitle">{project.title}</Card.Title>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                  <Button variant="dark">
                    <Link to={project.link} style={linkStyle}>
                      Check Project
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default pageProjects;