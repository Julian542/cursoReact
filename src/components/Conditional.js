//aprovechamos este componente para practicar el renderizado condicional
import React, { Component } from 'react';

class ComponenteA extends Component{
    render(){
        return <p>Componente A</p>;
    }
}
class ComponenteB extends Component{
    render(){
        return <p>Componente B</p>;
    }
}

function condicion (mostrarA){
    if(mostrarA){
        return <ComponenteA/>
    }else{
        return <ComponenteB/> 
    }
    
}



class Conditional extends Component{
    
    constructor(){
        super();
        this.state = { mostrarA : true }
    }
    render(){
        let ternaria = this.state.mostrarA ? <ComponenteA/> : <ComponenteB/>;
        return(
            <React.Fragment>
                <h4>Conditional Rendering</h4>
                {ternaria}
            </React.Fragment>
        )
    }
}

export default Conditional;