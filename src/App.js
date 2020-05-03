import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import Conditional from './components/Conditional';
import cars from './data/cars.json'

//Utilizando una funcion que nos llega por parametros
class Titulo extends Component{
  render(){
    const {
      arrayOfNumbers,
      isActivated, 
      multiply,
      title
    } = this.props 
      
    const textoSegunBool = isActivated ? 'On' : 'Off'
    const mappedNumbers = arrayOfNumbers.map(multiply) 
    //esto es lo mismo que const mappedNumbers = this.props.arrayOfNumbers.map(this.props.multiply)
    return(
      <React.Fragment>
        <p> {textoSegunBool} </p>
        <p>{mappedNumbers.join(', ')}</p>
        {title}
      </React.Fragment>
    );
  }
}
//esto se hace para establecer valores por defecto a las props
Titulo.defaultProps = {
  title:<h1>Hola gente!</h1>   
}

function App() {
  const numbers = [1,1,3,4,5];
  return (
    <div className="App">
      <h4>Trabajando con Listas y el Key</h4>
      <ul>
      {
        cars.map( car => {
          return(
          <li key={car.id}> 
            <p><strong>Nombre:</strong>{car.name}</p>
            <p><strong>Marca: </strong>{car.company}</p>
          </li>
          )
        }
        )
      }
      </ul>
    </div>
  );
}

export default App;
