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


class App extends Component {   
   
  constructor(){
    super();
    this.state = { mouseX:0 , mouseY:0}
  }

  handleMouseMove = (e) =>{
    const {clientX, clientY} = e;
    this.setState({ mouseX:clientX, mouseY:clientY});
  }
  render(){
  return (
     <div>
      <h4>Trabajando con Eventos Soportados</h4>
      <div
      onMouseMove={this.handleMouseMove}
      style={{border:'1px solid #000', marginTop:10, padding:10}}>
        <p>{this.state.mouseX}, {this.state.mouseY}</p>
      </div>
    </div>
  );
  }
} 
export default App;
