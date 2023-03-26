import logo from './logo.svg';
import './App.css';
import React from'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Banner from './component/Banner';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
