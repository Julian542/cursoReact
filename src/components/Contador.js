import React, { Component } from 'react';

class Contador extends Component{

    constructor(props){ //Si queremos utilizar props en nuestro constructor debemos pasarselas por parametro a la clase de donde heredamos
        super(props);
        this.state = { contador : this.props.contadorInicial}
        //vamos a probar la reactividad de React
        setInterval( () =>{
            this.setState( { contador : this.state.contador + 1})
        },1000)
    }
    render(){
        return(
            <span>{this.state.contador}</span>
        );
    }
}
Contador.defaultProps = {
    contadorInicial : 0
}

export default Contador;