import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./components/Header";
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <head>Header Lorem Ipsum</head>
      <header className="App-header">
        <Header />
        <Gallery />

      </header>
    </div>
  );
}

export default App;
