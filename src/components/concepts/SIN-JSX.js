import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//react SIN JSX(NO USA ETIQUETAS HTML) - no es recomendable usarlo ya que al crear muchos elementos html resulta cpnfuso

class App extends Component {
  render() {
    return (
      React.createElement(
          'h1',
          {id: 'titulo', className: 'encabezado'},
          'Hola Mundo',
          'div',
          'null',
          React.createElement(
            'input',
            { type: "text", value: 'Value para el Input' }
          )
      )
    );
  }
}

export default App;
