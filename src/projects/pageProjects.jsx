import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

import KanjiIcon from './icon/kanji-icon.png';
import ProjectComponent from './componentProject.jsx';

const projects = [
  {
    id:1,
    title: `Kanji Practice`,
    description: `In this project you can practice Japanese Kanji. Select the scholar year you would like 
    to study and hide/show english subtitles or furigana to practice reading. You can also 
    practice writing by hiding the Kanji and write the letter accordingly to the furigana.`,
    icon: KanjiIcon,
    link: `/projects/kanjiPractice`
  }
];

const practiceProjects = [

];



const pageProjects = () => {
  return (
    <Container id="projects">
      <h2 className="py-4 px-2 m-0 text-white font-8bit-title">Projects</h2>
      <Row className="p-0 mx-0 my-2 border-bottom border-top border-2 border-light d-flex justify-content-center">
        {projects.map((project)=>{
          return(
            <ProjectComponent key={project.id} title={project.title} description={project.description}
            icon={project.icon} link={project.link}/>
          )
        })}
      </Row>
      
      <h2 className="py-4 px-2 m-0 text-white font-8bit-title">Practice Projects</h2>
      <Row className="p-0 mx-0 my-2 border-bottom border-top border-2 border-light d-flex justify-content-center">
        {practiceProjects.map((project)=>{
          return(
            <ProjectComponent key={project.id} title={project.title} description={project.description}
            icon={project.icon} link={project.link}/>
          )
        })}
      </Row>
    </Container>
  )
}

export default pageProjects;