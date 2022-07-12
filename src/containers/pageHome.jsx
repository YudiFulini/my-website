import React from "react";

import AboutMeContainer from './aboutMeContainer';
import SkillContainer from './skillContainer.jsx';
import HobbiesContainer from './hobbiesContainer.jsx';

const homePage = () => {
  return (
    <div id="home">
      <AboutMeContainer/>

      <SkillContainer/>

      <HobbiesContainer/>
    </div>
  )
}

export default homePage;