import React from 'react';
import './css/kanjiProject.css';
import './css/general.css';
import './css/main.min.css'

import HomePage from './homePage/pageHome';
import ProjectsPage from './projects/pageProjects';
import ErrorPage from './components/pageError';
import InfoPage from './infoPage/pageInfo';
import Kanjipage from './projects/kanjiPractice/kanjiPage'

import NavigationBar from './components/navbar.jsx';
import Footer from './components/footer';

import {HashRouter as Router, Routes , Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <NavigationBar/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path='/info' element={<InfoPage/>}/>
        <Route path='/projects/kanjiPractice' element={<Kanjipage/>}/>

        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>

    </>
  );
}

export default App;
