import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const linkStyle = {
  textDecoration: "none",
  color: 'rgba(250, 250, 250, 0.8)'
};

const componentProject = (props)=>{
  const {title, description, icon, link} = props

  return(
    <Col xxl={6} xl={7} lg={8} md={11} sm={8} xs={9} xxs={12} className='mx-0 my-4 p-2 '>
      <Row>
        <Col md={6} className="d-flex justify-content-md-between justify-content-center align-items-center">
          <img src={icon} class="img-thumbnail float-start" />
        </Col>
        
        <Col md={6}>
          <h2 className="p-3 m-0 font-8bit-subtitle text-white">{title}</h2>
          <p className='p-3 m-0 text-white'>{description}</p>
          <Button className="m-2" variant='dark'>
            <Link to={link} style={linkStyle}>
              Check Project
            </Link>
          </Button>


        </Col>
      </Row>
    </Col>
  )
}

export default componentProject;