import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Cards from './components/Cards'
import './App.css';
import image1 from "./images/image1.png";
import wedding from "./images/wedding.png";
import mountain from "./images/mountain.png";
import guitar from './images/guitar.png';
import sing from './images/sing.png';
import dance from './images/dance.png';
import swim from './images/swim.png';


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
        country="Israel"
        avail="SOLD OUT"
      />

      <Cards 
        img= {mountain}
        rating= '4.5'
        lesson="Learn Wedding Photography"
        reviews='2'
        price='112'
        country="Bali"
      />
      <Cards 
        img= {wedding}
        rating= '4.8'
        lesson="Group Mountian Biking"
        reviews='2'
        price='149'
        country="Vietnam"
      />
      <Cards 
        img= {guitar}
        rating= '4.9'
        lesson="Guitar Lessons"
        reviews="7"
        price='130'
        country="USA"
      />
      
      <Cards 
        img= {sing}
        rating= '4.6'
        lesson="Singing Class"
        reviews="4"
        price='110'
        country="India"
      />
      <Cards 
        img= {dance}
        rating= '4.7'
        lesson="Dance Class"
        reviews="11"
        price='170'
        country="Austria"
      />
      <Cards 
        img= {swim}
        rating= '4.9'
        lesson="Swimming Class"
        reviews="18"
        price='160'
        country="Netherlands"
      />
      
      </div>
      
    </div>
  );
}

export default App;
