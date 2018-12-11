import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//react CON JSX (USA ETIQUETAS HTML) - ES MAS CLARO EL CODIGO

class App extends Component {
  render() {
    const nombre = 'Juan';
    const empleado = {
      trabajo:'FrontEnd',
      nivel: 'SR'
    }
    return (
      <div>
        <h1>Mi titulo del coso este</h1>
        <p>Soy el texto {nombre}, { 2 + 2 }</p>
        <p>Trabajo: {empleado.trabajo}</p>
        <p>Nivel: {empleado.nivel}</p>
      </div>
    );
  }
}

export default App;
