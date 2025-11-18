import './Atv04.css';
import Toolbar from "./Toolbar";
import Gallery from "./Gallery";
import Counter from "./Counter";
import Form from "./Form";
import Form2 from "./Form2";
import Form3 from "./Form3";
import MovingDot from "./MovingDot";
import Lista from "./Lista";
import Lista2 from "./Lista2";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";
import Lista3 from "./Lista3";
import Lista4 from "./Lista4";
import BucketList from "./BucketList";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

export default function Atv04(){
    return(
        <div className="container container-atv04">

            <h1 className="text-primary">Atividades da Semana 4</h1>

            <div className="section-box">
                <h2 className="section-title">Toolbar</h2>
                <Toolbar/>
            </div>

            <div className="section-box">
                <h2 className="section-title">Galeria</h2>
                <Gallery/>
            </div>

            <div className="section-box">
                <h2 className="section-title">Contador</h2>
                <Counter/>
            </div>

            <div className="section-box">
                <h2 className="section-title">Forms</h2>
                <Form/>
                <Form2/>  
                <Form3/>
            </div>

            <div className="section-box">
                <h2 className="section-title">Moving Dot</h2>
                <MovingDot/>
            </div>

            <div className="section-box">
                <h2 className="section-title">Listas</h2>
                <Lista/>
                <Lista2/>
                <Lista3/>
                <Lista4/>
            </div>

            <div className="section-box">
                <h2 className="section-title">Editor de Formas</h2>
                <ShapeEditor/>
            </div>

            <div className="section-box">
                <h2 className="section-title">Lista de Contadores</h2>
                <CounterList/>
            </div>

            <div className="section-box">
                <h2 className="section-title">Bucket List</h2>
                <BucketList/>
            </div>

            <Link to="/" className="btn btn-secondary back-link">
                Voltar
            </Link>

        </div>
    );
}
