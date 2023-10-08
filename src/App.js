import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Cards from './components/Cards'
import './App.css';
import image1 from "./image1.png";
import wedding from "./wedding.png";
import mountain from "./mountain.png"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <div className='cards'>
      <Cards className="cards"
        img= {image1}
        rating= '5.0'
        lesson="Life lessons with Katie Zaferes"
        reviews='6'
        price='137'
      />

      <Cards 
        img= {mountain}
        rating= '4.5'
        lesson="Life lessons with Katie Zaferes"
        reviews='2'
        price='112'
      />
      <Cards 
        img= {wedding}
        rating= '4.8'
        lesson="Life lessons with Katie Zaferes"
        reviews='2'
        price='149'

      />
      <Cards 
        img= {image1}
        rating= '5'
        lesson="Life lessons with Katie Zaferes"

      />
      
      
      
      </div>
      
    </div>
  );
}

export default App;
