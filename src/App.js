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
import Lottie from './component/Lottie';
import History from './component/History';



function App() {
  return (
    <div className="App">
      <Header />
      <Lottie/>
      <Banner />
      <Aboutme />
      <History/>
      <Portfolio />
      <Skills/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
