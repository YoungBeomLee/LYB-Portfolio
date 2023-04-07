import logo from './logo.svg';
import './App.css';
import React from'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Banner from './component/Banner';
import Aboutme from './component/Aboutme';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Aboutme />
      
    </div>
  );
}

export default App;
