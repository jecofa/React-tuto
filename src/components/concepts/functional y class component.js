import React, {Component} from 'react';

//Class component

class FirstComponent extends Component{
    render() {
        return (
            <div>
                <p>
                    Hi this is my first or second... component
                </p>
            </div>
        )
    }
}

// functional component, 
//requieren menos codigo, faciles de crear, facil de leer, facil de probar, no se puede usar la palbra this, se dice que tiene un mejor perfmance
// Desventajas, no se puede usar lo metodos de vida, no tiene state, no se puede usar ref(valores de un formulario), si se necesitan estos tres mejor usar un class component
const App = (props) => (
   <p>Hola mundo</p>
);

export default FirstComponent;