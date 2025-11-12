import { useState } from 'react';

export default function Form3() { 
  const [person, setPerson] = useState ({ 
    name: 'Niki de Saint Phalle', 
    artwork: { 
      title: 'Blue Nana', 
      city: 'Hamburg', 
      image: 'https://i.imgur.com/Sd1AgUOm.jpg', 
    } 
  }); 
  function handleNameChange(e) { 
    setPerson ({ 
      ...person, 
      name: e.target.value }); 
  }
  function handleTitleChange(e) { 
    setPerson ({
      ....person, 
      artwork: {
        ...person.artwork, 
        title: e.target.value }});
}
function handleCityChange(e) { 
  setPerson ({ 
    ...person, 
    artwork: {
      ...person.artwork, 
      city: e.target.value } });
}
function handleImageChange(e) { 
  setPerson ({ 
    ...person, 
    artwork: { 
      ...person.artwork, 
      image: e.target.value }});
}
