
import Avatar from "./Avatar";
import List from "./List";
import PackingList from "./PackingList";
import Card from "./Card";
import TeaGathering from "./TeaGathering";
import Recipe from "./Recipe";
import TadoList from "./TadoList";

import { Link } from "react-router-dom";

export default function Atv03(){
    return(
        <>
            <h1>Atividades da Semana 3</h1>
            <Avatar/>
            <Card/>
            <PackingList/>
            <List/>
            <Recipe/>
            <TeaGathering/>
            

            <TadoList/>
            <Link to="/">Voltar</Link>
        
        </>
    );

}