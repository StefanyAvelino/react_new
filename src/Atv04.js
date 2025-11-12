import Toolbar from "./Toolbar";
import Gallery from "./Gallery";
import Counter from "./Counter";
import Form from "./Form";
import Form2 from "./Form2";
import Form3 from "./Form3";

import { Link } from "react-router-dom";

export default function Atv04(){
    return(
        <>
            <h1>Atividades da Semana 4</h1>
            <Toolbar/>
            <Gallery/>
            <Counter/>
            <Form/>
            <Form2/>  
            <Form3/>
            <Link to="/">Voltar</Link>
        
        </>
    );


}




