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
  const {title, descriptions, icon, link, id} = props

  return(
    <Col xxl={6} xl={7} lg={8} md={11} sm={8} xs={9} xxs={12} className='mx-0 my-4 p-0 border rounded'>
      <Row>
        <Col md={6} className="d-flex justify-content-md-between justify-content-center align-items-center">
          <img src={icon} class="img-thumbnail"/>
        </Col>
        
        <Col md={6}>
          <h2 className="p-3 m-0 font-8bit-subtitle text-white text-center">{title}</h2>
          {
            descriptions.map((description)=>{
              return(
                <p className='p-1 m-0 text-white'>{description}</p>
              )
            })
          }
          <div className='d-flex justify-content-center'>
            <Button className="m-2" variant='dark'>
              <Link to={link} style={linkStyle}>
                Check Project
              </Link>
            </Button>
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default componentProject;