import React from 'react';
import imgA from './images/1.jpg';
import imgB from './images/2.jpg';
import imgC from './images/3.jpg';
import imgD from './images/4.jpg';
import imgE from './images/5.jpg';

function Food({name, image}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <img src={image} alt={name} />
    </div>
      );
}

const foodLink = [
  {
    id: 1,
    name : '김치',
    image : imgA,
    altText: '햄버거를 먹는 모습'
  },
  {
    id: 2,
    name: '햄버거',
    image : imgb,
    altText: '햄버거를 먹는 모습'
  },
  {
    id: 3,
    name: '피자',
    image : imgC,
    altText: '햄버거를 먹는 모습'
  },
  {
    id: 4,
    name: '피자',
    image : imgD,
    altText: '햄버거를 먹는 모습'
  },
  {
    id: 5,
    name: '피자',
    image : imgE,
    altText: '햄버거를 먹는 모습'
  }
];



function App() {
  
  return (
  <div>
    {foodLink.map(dish => (<Food key={dish.id} name = {dish.name} image={dish.image}/>))}
  </div>
  );
}

export default App;