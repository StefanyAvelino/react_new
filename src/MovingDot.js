import ( useState ) from 'react'; export default function MovingDot() ( const [position, setPosition] = useState(f x: O, y: 0
return (
<div
onPointerMove=e => position.x = e.clientX; position.y = e.clientY;
style=[f
position: 'relative', width: '100vw', height: '100vh',
<div style= (
position: 'absolute', backgroundColor: 'red', borderRadius: '50%', transform: `translate($fposition.x)px, $fposition.y]px)`, left: -10, top: -10, width: 20, height: 20,
</div>
