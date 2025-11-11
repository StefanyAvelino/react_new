import App2 from "./App2";
import Avatar from "./Avatar";
import TadoList from "./TadoList";
import { Link } from "react-router-dom";

export default function Atv03(){
    return(
        <>
            <h1>Atividades da Semana 3</h1>
            <App2/>
            <Avatar/>
            <TadoList/>
            <Link to="/">Voltar</Link>
        
        </>
    );

}