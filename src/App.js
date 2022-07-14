import React from 'react';
import './css/general.css';
import './css/main.min.css'

import HomePage from './homePage/pageHome';
import ProjectsPage from './projects/pageProjects';
import ErrorPage from './components/pageError';
import InfoPage from './infoPage/pageInfo';

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

        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>

    </>
  );
}

export default App;
