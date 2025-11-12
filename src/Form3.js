import { useState } from 'react';

export default function Form3() { 
  const [person, setPerson] = useState ({ 
    name: 'Niki de Saint Phalle', artwork: { title: 'Blue Nana', city: 'Hamburg', image: 'https://i.imgur.com/Sd1AgUOm.jpg', } }); function handleNameChange(e) ( setPerson (f ...person, name: e.target.value )); 3
function handleTitleChange(e) ( setPerson ( ....person, artwork: ...person.artwork, title: e.target.value
function handleCityChange(e) ( setPerson (f ...person, artwork: ..person.artwork, city: e.target.value ) 1); )
function handleImageChange(e) ( setPerson (f ...person, artwork: S ..person.artwork, image: e.target.value t D);
