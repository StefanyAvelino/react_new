/*function Item({ name, isPacked }) { 
  return <li className="item">{name}</li>;
}
export default function PackingList() {
  return (
<section>
 <h1>Sally Ride's Packing List</hl> 
    <ul>
      <Item
         isPacked={true} 
         name="Space suit"
      />
      <Item
         isPacked={true}
         name="Helmet with a golden leaf"
      /> 
      <Item
         isPacked={false}
         name="Photo of Tam"
      />
    </ul>
</section>
);
}
 »————————————————«
function Item({ name, isPacked }) {
     if (isPacked) {
        return <li className="item">{name} ✔️</li>;}
        return <li className="item">{name}</li>; 
}
export default function PackingList() { 
  return (
<section>
<h1>Sally Ride's Packing List</hl> 
    <ul>
       <Item
        isPacked={true}
        name="Space suit"
       />
      <Item
        isPacked={true}
        name="Helmet with a golden leaf"
      />
      <Item
        isPacked={false}
        name="Photo of Tam"
      />
    </ul>
</section>
  );
}
 »————————————————«
function Item({ name, isPacked }) {
     if (isPacked) {
        return null;}
        return <li className="item">{name}</li>; 
}
export default function PackingList() { 
  return (
<section>
<h1>Sally Ride's Packing List</hl> 
    <ul>
       <Item
        isPacked={true}
        name="Space suit"
       />
      <Item
        isPacked={true}
        name="Helmet with a golden leaf"
      />
      <Item
        isPacked={false}
        name="Photo of Tam"
      />
    </ul>
</section>
  );
}
 »————————————————«
function Item({ name, isPacked }) {
     return ( 
       <li className="item"> 
           {isPacked ? ( 
           <del> 
             {name+'✔️'} 
           </del> 
          ) :( 
             name 
            )}
        </li> 
     );
}
export default function PackingList() { 
  return (
<section>
<h1>Sally Ride's Packing List</hl> 
    <ul>
       <Item
        isPacked={true}
        name="Space suit"
       />
      <Item
        isPacked={true}
        name="Helmet with a golden leaf"
      />
      <Item
        isPacked={false}
        name="Photo of Tam"
      />
    </ul>
</section>
  );
}*/
function Item({ name, isPacked }) {
    return ( 
      <li className="item">
    {name} {isPacked && '✔️'}
      </li>); 
}
export default function PackingList() { 
  return (
<section>
<h1>Sally Ride's Packing List</hl> 
    <ul>
       <Item
        isPacked={true}
        name="Space suit"
       />
      <Item
        isPacked={true}
        name="Helmet with a golden leaf"
      />
      <Item
        isPacked={false}
        name="Photo of Tam"
      />
    </ul>
</section>
  );
}
