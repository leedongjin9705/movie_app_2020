import React from 'react';
import ProTypes from 'prop-types';
import imgA from './images/1.jpg';
import imgB from './images/2.jpg';
import imgC from './images/3.jpg';
import imgD from './images/4.jpg';
import imgE from './images/5.jpg';

function Food({name, image, altText, rating}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={altText}></img>
    </div>
      );
}

const foodLink = [
  {
    id: 1,
    name : '만두',
    image : imgA,
    altText: '만두를 먹는 모습',
    rating: 5
  },
  {
    id: 2,
    name: '삼계탕',
    image : imgB,
    altText: '삼계탕을 먹는 모습',
    rating: 5
  },
  {
    id: 3,
    name: '오코노미야끼',
    image : imgC,
    altText: '오코노미야끼를 먹는 모습',
    rating: 5
  },
  {
    id: 4,
    name: '감튀',
    image : imgD,
    altText: '감튀을 먹는 모습',
    rating: 5
  },
  {
    id: 5,
    name: '미국아침',
    image : imgE,
    altText: '미국 아침을 먹는 모습',
    rating: 2.5
  }
];



function App() {
  console.log(foodLink.map(dish => (<Food key={dish.id} name = {dish.name} picture={dish.image} altText={dish.altText}/>)));
  return (
  <div>
    {foodLink.map(dish => (
      <Food key={dish.id} name = {dish.name} image={dish.image} rating={dish.rating}/>
    ))}
  </div>
  );
}

Food.proTypes = {
  name: ProTypes.string.isRequired,
  image: ProTypes.string.isRequired,
  rating: ProTypes.number
}

export default App;