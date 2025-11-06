import Contador from "./Contador";
import { Link } from "react-router-dom";


export default function Atv01(){
    return(
        <>
            <h1>Atividades da Semana 2</h1>
            <Contador/>
            <Link to="/">Voltar</Link>
        
        </>
    );

}