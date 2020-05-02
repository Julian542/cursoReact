import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Titulo 
            isActivated = {true}
            arrayOfNumbers = {[2,4,6,8]}
            multiply = { (number) => number *5 }
         ></Titulo>
         <Contador></Contador>
      </header>
    </div>
  );
}

export default App;
