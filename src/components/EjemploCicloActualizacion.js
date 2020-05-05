import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
    panda:'https://goo.gl/oNbtoq',
    cat :'https://goo.gl/PoQQXb',
    dolphin:'https://goo.gl/BbiKCd'
    
}

const ANIMALS = Object.keys(ANIMAL_IMAGES);

class AnimalImage extends Component{
    state = { src : ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps (nextProps){ //este metodo nos ayuda a actualizar el componente justo cuando le van a llegar nuevas props
            this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
    }

    shouldComponentUpdate(nextProps){
        console.log('Cuando se ejecuta?');
        console.log(nextProps);
        /*hay que retornar booleano, si el metodo no existe por defecto devuelve true lo q causa que siempre
          se renderice el componente*/
        return this.props.animal !== nextProps.animal //devuelve TRUE solo si las nuevas props son diferentes a las anteriores
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
    animal: PropTypes.oneOf(ANIMALS)
}

class EjemploCicloActualizacion extends Component{
    state = {animal:'panda'}

    _renderAnimalButton = (animal) => {
        return(
            <button
                //disabled={ animal === this.state.animal} 
                key={animal} onClick={() => this.setState({animal})}> Ver {animal} </button>
        );
    }

    render(){
        return(
            <React.Fragment>
                <h4>Ciclo de Actualizacion, ejemplo de: Component WillReceiveProps y ShouldComponentUpdate</h4>
                {ANIMALS.map( this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal}/>
            </React.Fragment>
        )
    }
}
export default EjemploCicloActualizacion;