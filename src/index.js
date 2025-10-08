import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BemVindo from './BemVindo';
import Texto from './Texto';
import Relogio from './Relogio';
import Letreiro from './Letreiro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Atividade 1: Relógio</h2>
      <Relogio />
      
      <h2 style={{ marginTop: '40px' }}>Atividade 2: Letreiro</h2>
      <Letreiro />
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

