/*export default function TadoList() {
    return (
    //This doesn't quite work!
    <>
    <h1>Hedy Lamarr's Todos</h1>
    <img
        src="https://i.imgur.com/yXDvdOSs.jpg"
        alt="Hedy Lamarr"
        class="photo"/>
    <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene </li>
        <li>Improve the spectrum technology</li>
    </ul>
    </>
    );
}

export default function TadoList() {
    const name = 'Gregorio Y. Zara';
    return (
    <h1>{name}'s Todos</h1>
    );
    
}

const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US',
    {weekday: "Long"}).format(date);
}

export default function TodoList() {
    return (
        <h2>To Do List for {formatDate(today)}</h2>);
}

export default function TodoList() {
    return (
    <ul style={{
    backgroundColor: 'black',
    color: pink
    }}>
    <li>Improve the videophone</li>
    <li>Prepare aeronautics lectures</li>
    <li>work on the alcohol-fuelled engine</li>
    </ul>
    );
}*/

const person = {
    name: 'Gregorio Y. Zara',
    thene: {
        backgroundColor: 'black',
        color: 'pink'
    }
};
export default function TedoList() {
return (
    <div style ={person.theme}>
        <h1>(person.name)'s Todos</h1>
        <img
        classNames="avatar"
        src="https://i.imgur.com/7vQDefPs.jpg"
        alt="Gregorio Y. Zara"/>
        <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
    </div>
    );
}