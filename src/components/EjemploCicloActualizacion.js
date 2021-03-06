import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
    panda: 'https://goo.gl/oNbtoq',
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd'

}

const ANIMALS = Object.keys(ANIMAL_IMAGES);

class AnimalImage extends PureComponent { //PureComponent hace una revision superficial de la pagina y detecta si hay que hacer un renderizado nuevo o no
    state = { src: ANIMAL_IMAGES[this.props.animal] }

    componentWillReceiveProps(nextProps) { //este metodo nos ayuda a actualizar el componente justo cuando le van a llegar nuevas props
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
    }

    componentWillUpdate(nextProps,nextState){
        // ComponentWillUpdate se utiliza para manejar nuestro arbol de elementos justo antes de renderizar
        const img = document.querySelector('img');
        img.animate([{
            filter:'blur(0px)'
        },{
            filter:'blur(2px)'
        }],{
            duration:500,
            easing:'ease'
        });
    }
    
    //Ahora vamos a ver el ultimo metodo del ciclo actualizacion, el cual se ejecuta posterior al render
    componentDidUpdate(prevProps,prevState){
        console.log('4to en ejecutarse');
        const img = document.querySelector('img');
        img.animate([
            {
                filter:'blur(2px)'
            },{
                filter:'blur(0px)'
            }   
        ],{
            duration:1500,
            easing:'ease'
        });
        console.log('from img element', {alt: img.alt});
    }

    render() {
        return (
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

AnimalImage.propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
}

class EjemploCicloActualizacion extends Component {
    state = { animal: 'panda' }

    _renderAnimalButton = (animal) => {
        return (
            <button
                //disabled={ animal === this.state.animal} 
                key={animal} onClick={() => this.setState({ animal })}> Ver {animal} </button>
        );
    }

    render() {
        return (
            <React.Fragment>
                <h4>Ciclo de Actualizacion, ejemplo de: Component WillReceiveProps y ShouldComponentUpdate</h4>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal} />
            </React.Fragment>
        )
    }
}
export default EjemploCicloActualizacion;