/*import Gallery from "./Gallery";
import { Profile } from "./Gallery";

export default App2(){
    return(
        //<Gallery/>
        <Profile/>
    );
}*/

import { getImageUrl } from "./utils";
function Avatar({ person, size}){
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.mane}
            width={size}
            height={size}
        />
    );
}

export default function Profile(){
    return(
        <div>
        <Avatar
            size={100}
            person = {{
            name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'
        }}/>
        <Avatar
            size={80}
            person={{
            name: 'Aklilu Lema', imageId: 'OKSETH'
            }}/>
        <Avatar
            size= {50}
            person = {{ 
                name: 'Lin Lanying', imageId: '1bX5H6'}}/>   
        </div>
    );
}