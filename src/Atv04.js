import Toolbar from "./Toolbar";
import Gallery from "./Gallery";

import { Link } from "react-router-dom";

export default function Atv04(){
    return(
        <>
            <h1>Atividades da Semana 4</h1>
            <Toolbar/>
            <Gallery/>
            
            <Link to="/">Voltar</Link>
        
        </>
    );


}
