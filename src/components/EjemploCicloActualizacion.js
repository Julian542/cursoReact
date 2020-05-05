import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
    cat :'https://goo.gl/PoQQXb',
    dolphin:'https://goo.gl/BbiKCd',
    panda:'https://goo.gl/oNbtoq'
}

class AnimalImage extends Component{
    state = { src : ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps (nextProps){ //este metodo nos ayuda a actualizar el componente justo cuando le van a llegar nuevas props
            this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
    }
    
    render(){
        return(
            <div>
                <p>Selected {this.props.animal}</p>
                <img
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250'
                />
            </div>
        );
    }
}

AnimalImage.propTypes ={
    animal: PropTypes.oneOf(['cat','dolphin','panda'])
}

AnimalImage.defaultProps ={
    animal:'panda'
}

class EjemploCicloActualizacion extends Component{
    state = {animal:'panda'}

    render(){
        return(
            <React.Fragment>
                <h4>Ciclo de Actualizacion, ejemplo de: Component WillReceiveProps</h4>
                <button onClick={() => this.setState({animal:'panda'})}> Ver Panda</button>
                <button onClick={ () => this.setState({animal:'cat'})}>Ver Gatito</button>
                <button onClick={ () => this.setState({animal:'dolphin'})}>Ver Delfin</button>
                <AnimalImage animal={this.state.animal}/>
            </React.Fragment>
        )
    }
}
export default EjemploCicloActualizacion;