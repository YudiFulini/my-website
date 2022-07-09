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

const skillContainer = ()=>{
  return(
    <Container fluid className="py-2 bg-dark">
      <h2 className="mt-2 text-white text-center">Skills</h2>

      <Container fluid='lg'>
        <h5 className="my-3 text-light">Engineering / Programming</h5>
        <Row className="d-flex justify-content-center align-items-center">
          <SkillItem skillName='HTML' skillImg={HTML5Icon}/>
          <SkillItem skillName='CSS' skillImg={CSS3Icon}/>
          <SkillItem skillName='Javascript' skillImg={JavascriptIcon}/>
          <SkillItem skillName='React' skillImg={ReactIcon}/>
          <SkillItem skillName='Bootstrap' skillImg={BootstraptIcon}/>
          <SkillItem skillName={'Arduino/\nMicrocontrollers'} skillImg={ArduinoIcon}/>
          <SkillItem skillName='Matlab' skillImg={MatlabIcon}/>
        </Row>

        <h5 className="my-3 text-light text-">Languages</h5>
        <Row className="d-flex justify-content-center align-items-center">
          <SkillItem skillName='Portuguese: Native' skillImg={BrazilIcon}/>
          <SkillItem skillName='English: Fluent' skillImg={USAIcon}/>
          <SkillItem skillName='Japanese: Intermediate' skillImg={JapanIcon}/>
        </Row>
      </Container>

    </Container>
  );
}

export default skillContainer;