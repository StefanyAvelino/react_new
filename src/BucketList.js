import { useState } from 'react';

let nextId = 3;
const initialList = [
   { id: 0, title: 'Big Bellies', seen: false }, 
   { id: 1, title: 'Lunar Landscape', seen: false }, 
   { id: 2, title: 'Terracotta Army', seen: true }, 
];
export default function BucketList() {
  const [myList, setMyList] = useState(initialList); 
  const [yourList, setYourList] = useState( 
    initialList
   );
  function handleToggleMyList(artworkId, nextSeen) {
    const myNextList = [...myList];
    const artwork = myNextList.find(
       a => a.id === artworkId
    );
    artwork.seen = nextSeen;
    setMyList(myNextList);
  }
  function handleToggleYourList(artworkId, nextSeen) { 
    const yourNextList = [...yourList]; 
    const artwork = yourNextList.find(
      a => a.id === artworkId
     );
    artwork.seen = nextSeen;
    setYourList(yourNextList);
   }return (
<
<h1>Art Bucket List</hl>
<h2>My list of art to see:</h2>
<ItemList
artworks=(myList) onToggle=/handleToggleMyList] />
<h2>Your list of art to see:</h2>
<ItemList
artworks=[yourList)
onToggle=(handleToggleYourList] />
</>
function ItemList(f artworks, onToggle )) ( return ( <ul> fartworks.map(artwork => ( <li key=fartwork.id)> <label> <input type="checkbox" checked=(artwork.seen) onChange=fe => ( onToggle( artwork.id, e.target.checked ): V (artwork.title)
</label> </li> ))H </ul> ):
