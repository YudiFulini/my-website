import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import SkillItem from './skillItem';

import HTML5Icon from './icons/html5-icon.png'
import CSS3Icon from './icons/css3-icon.png'
import JavascriptIcon from './icons/javascript-icon.png'
import ReactIcon from './icons/react-icon.png'
import BootstraptIcon from './icons/bootstrap-icon.png'
import ArduinoIcon from './icons/arduino-icon.png'
import MatlabIcon from './icons/matlab-icon.png'
import BrazilIcon from './icons/brazil-icon.png'
import USAIcon from './icons/usa-icon.png'
import JapanIcon from './icons/japan-icon.png'
import PythonIcon from './icons/python-icon.png'

const skills = [
  {
    name:'HTML',
    level:'',
    img: HTML5Icon
  },
  {
    name:'CSS',
    level:'',
    img: CSS3Icon
  },
  {
    name:'Javascript',
    level:'',
    img: JavascriptIcon
  },
  {
    name:'React',
    level:'',
    img: ReactIcon
  },
  {
    name:'Bootstrap',
    level:'',
    img: BootstraptIcon
  },
  {
    name:'Python',
    level:'',
    img: PythonIcon
  },
  {
    name:'Arduino/',
    level:'Microcontrollers',
    img: ArduinoIcon
  },
  {
    name:'Matlab',
    level:'',
    img: MatlabIcon
  },
]

const languages = [
  {
    name:'Portuguese',
    level:'Native',
    img: BrazilIcon
  },
  {
    name:'English',
    level:'Fluent',
    img: USAIcon
  },
  {
    name:'Japanese',
    level:'Intermediate',
    img: JapanIcon
  },
]


const skillContainer = ()=>{
  return(
    <Container fluid className="py-2 bg-dark">
      <h2 className="mt-2 text-white text-center font-8bit-title">Skills</h2>

      <Container fluid='lg'>
        <h5 className="my-3 font-8bit-subtitle text-light">Engineering / Programming</h5>
        <Row className="d-flex justify-content-center align-items-center">
          {
            skills.map((skill)=>{
              return(<SkillItem skillName={skill.name} skillLevel={skill.level} skillImg={skill.img}/>)
            })
          }
        </Row>

        <h5 className="my-3 font-8bit-subtitle text-light text-">Languages</h5>
        <Row className="d-flex mb-3 justify-content-center align-items-center">
          {
            languages.map((language)=>{
              return(<SkillItem skillName={language.name + ':'} skillLevel={language.level} skillImg={language.img}/>)
            })
          }
        </Row>
      </Container>

    </Container>
  );
}

export default skillContainer;