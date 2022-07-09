import React from 'react';
import './css/general.css';
import './css/main.min.css'
//import 'bootstrap/dist/css/bootstrap.min.css'


import NavigationBar from './containers/narbar'
import PageContent from './containers/pageContent.jsx'
import Footer from './containers/footer'

const App = () => {
  return (
    <>
      <NavigationBar/>

      <PageContent/>

      
    </>
  );
}

export default App;
