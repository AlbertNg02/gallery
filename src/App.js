import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./components/Header";
import Gallery from './components/Gallery';
import Example from "./components/Example"

function App() {
  return (
    <div className="App">
      <head>Header Lorem Ipsum</head>
      <header className="App-header">
        <Header />
        {/* <Gallery /> */}
        <Example />


      </header>
    </div>
  );
}

export default App;
