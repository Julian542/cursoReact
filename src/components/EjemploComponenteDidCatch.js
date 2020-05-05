import React, { Component } from 'react';

class BotonQueLanzaError extends Component{
    state = {throwError:false}
    render(){
        if(this.state.throwError){
            throw new Error('Error disparado')
        }
        return(
            <button 
            onClick={ ()=> this.setState({throwError : true})}>
                Lanzar Error
                </button>
        )
    }
}

export default class EjemploComponenteDidCatch extends Component{

    state = { hasError : false, errorMsg:''}
    componentDidCatch(error,errorInfo){
        console.log('Aca se ejecuto el didcatch')
        console.log({error,errorInfo});
        this.setState({hasError:true,errorMsg:'Madre mia, ha ocurrido un error'});
    }
    render(){
        if(this.state.hasError){
            return(
                <div>
                <p>Error en el componente : {this.state.errorMsg}</p>
                <button onClick={() => {this.setState({hasError:false})}}>Volver atrás</button>
                </div>
            )
        }
        return(
            <div>
                <h4>Ciclo de montaje: ComponenteDidCatch</h4>
                <BotonQueLanzaError/>
            </div>
        )
    }
}