import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Cards from './components/Cards'
import './App.css';
// import image1 from "./images/image1.png";
// import wedding from "./images/wedding.png";
// import mountain from "./images/mountain.png";
// import guitar from './images/guitar.png';
// import sing from './images/sing.png';
// import dance from './images/dance.png';
// import swim from './images/swim.png';
import data from './data';


function App() {
  const dataelements=data.map(item=> {
    return <Cards className="cards"
    img= {item.img} 
    rating={item.rating}
    lesson={item.lesson}
    reviews={item.reviews}
    price={item.price}
    country={item.country}
  />
  })
  return (
    <div className="App">
      <NavBar />
      <Main />
      <div className='cards'>
        {dataelements}
// long method
      {/* <Cards className="cards"
        img= {image1} 
        rating={data.rating}
        lesson={data.lesson}
        reviews={data.reviews}
        price={data.price}
        country={data.country}
      /> */}

      {/* <Cards 
        img= {mountain}
        rating= '4.5'
        lesson="Learn Wedding Photography"
        reviews={2}
        price='112'
        country="Bali"
      />
      <Cards 
        img= {wedding}
        rating= '4.8'
        lesson="Group Mountian Biking"
        reviews={2}
        price='149'
        country="Vietnam"
      />
      <Cards 
        img= {guitar}
        rating= '4.9'
        lesson="Guitar Lessons"
        reviews={7}
        price='130'
        country="USA"
      />
      
      <Cards 
        img= {sing}
        rating= '4.6'
        lesson="Singing Class"
        reviews={4}
        price='110'
        country="India"
      />
      <Cards 
        img= {dance}
        rating= '4.7'
        lesson="Dance Class"
        reviews={11}
        price='170'
        country="Austria"
      />
      <Cards 
        img= {swim}
        rating= '4.9'
        lesson="Swimming Class"
        reviews={18}
        price='160'
        country="Netherlands"
      /> */}
      
      </div>
      
    </div>
  );
}

export default App;
