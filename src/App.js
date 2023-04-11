import logo from './logo.svg';
import './App.css';
import React from'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Banner from './component/Banner';
import Aboutme from './component/Aboutme';
import Footer from './component/Footer';
import Portfolio from './component/Portfolio';
import Skills from './component/Skils';
import ContactMe from './component/ContactMe';



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Aboutme />
      <Portfolio />
      <Skills/>
      <ContactMe/>
    </div>
  );
}

export default App;
