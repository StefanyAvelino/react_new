function Card({ children }) {
    return (
      <div className="card">
        {children}
      </div>
    );
  }
  
  function Avatar() {
    return (
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
    );
  }
  
  export default function Profile() {
    return (
      <Card>
        <Avatar />
      </Card>
    );
  }
  