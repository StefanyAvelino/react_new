import Toolbar from "./Toolbar";
import Gallery from "./Gallery";
import Counter from "./Counter";
import Form from "./Form";

import { Link } from "react-router-dom";

export default function Atv04(){
    return(
        <>
            <h1>Atividades da Semana 4</h1>
            <Toolbar/>
            <Gallery/>
            <Counter/>
            <Form/>
            
            <Link to="/">Voltar</Link>
        
        </>
    );


}


