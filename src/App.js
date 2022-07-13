import React from 'react';
import './css/general.css';
import './css/main.min.css'

import HomePage from './containers/pageHome';
import ProjectsPage from './containers/pageProjects';
import PageStudies from './containers/pageStudies';
import ErrorPage from './containers/pageError'
import NavigationBar from './containers/narbar';
import Footer from './containers/footer';

import {HashRouter as Router, Routes , Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <NavigationBar/>

      <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/studies" element={<PageStudies/>}/>

            <Route path='*' element={<ErrorPage/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
