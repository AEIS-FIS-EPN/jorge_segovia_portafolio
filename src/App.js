import React from 'react';
import fotoPerfil from './fotoPerfil.jpg'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-buttons">
        <button className="button">Sobre mí</button>
        <button className="button">Formación</button>
        <button className="button">Proyectos</button>
      </div>
      <div className="App-content">
        <img src={fotoPerfil} className="fotoPerfil" alt="Foto Jorge Segovia" />
        <p className="App-intro">
          Hola, mi nombre es Jorge Segovia, bienvenido a mi portafolio.
        </p>
      </div>
    </div>
  );
}

export default App;
