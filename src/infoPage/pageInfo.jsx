import React from "react";
import Container from 'react-bootstrap/Container';

const aboutThisPage = 
  `I've made this webpage as a way to share a little bit about myself, 
  practice web-development and post the projects I have been working on to the public.`;

const madeUsing = [
  'React',
  'Bootstrap',
  'Javascript',
  'HTML',
  'CSS',
]

const iconsAttributions =
  `I didn't make the icons used to build this page. All the rights are reserved to the following:`;


const pageInfo = () => {
  return (
    <Container className = "container-md" id="info">
      <h2 className="py-4 px-2 m-0 text-white font-8bit-title">About This Page</h2>
      <p className="px-2 m-0 text-white">{aboutThisPage}</p>

      <h2 className="py-4 px-2 m-0 text-white font-8bit-title">Made using</h2>
      {
        madeUsing.map((tool) => {
          return(<p className="px-2 m-0 text-white">{"- " + tool}</p>)
        })
      }

      <h2 className="pt-5 px-2 m-0 text-white font-8bit-title">Attributions </h2>
      <h4 className="d-inline-flex ps-2 m-0 text-white font-8bit-subtitle">- Icons: </h4>
      <p className="d-inline-flex ps-2 m-0 text-white">{iconsAttributions}</p>
      <a className="d-block my-0 mx-3 font-8bit-subtitle" href="https://www.flaticon.com/" title="FlatIcons">Flaticon</a>
      
    </Container>
  )
}

export default pageInfo;