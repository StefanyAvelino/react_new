import { useState } from 'react';

export default function Form() { 
  const [to, setTo] = useState('Alice'); 
  const [message, setMessage] = useState('Hello');
  function handleSubmit(e) {
    e.preventDefault(); 
    setTimeout (() => { 
      alert(`You said ${message} to ${to}`); 
    }, 5000);
return (
<form onSubmit=[handleSubmit)> <label> To:t' <select value-[to]
onChange=fe => setTo(e.target.value)>> <option value="Alice">Alice</option> <option value="Bob">Bob</option>
</select>
</label>
<textarea
placeholder="Message"
value=[message)
onChange=fe => setMessage(e.target.value)) |7
<button type="submit">Send</button>
</form>
);
}
