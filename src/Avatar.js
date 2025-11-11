/*export default function Avatar(){
    return(
        <img
            className="avatar" src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara"
        />
    );
}

export default function Avatar(){
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description ='Gregorio Y. Zara';
    return(
        
        <img
            className="avatar" src={avatar} alt={description}
        />
    );
}

function Avatar () {
    return (
    <img
    className="avatar"
    src="https://i.imgur.com/16XSQHE.jpg"
    alt="Lin Lanying"
    width={100}
    height={100}
    />
    );
}

export default function Profile() {
    return (
        <Avatar 
            person={{ name: 'Lin Lanying', imgeId: '16X50H6'}}
            size={100}
        />
    );
}
Props
export default function Avatar({ person, size = 100 }) {
  return (
    <img
      className="avatar"
      src={person.imageUrl}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
  

*/



function Avatar() {
    return (
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
    );
  }