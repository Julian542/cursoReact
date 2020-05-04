import React, { Component } from 'react';

class Forms extends Component{

    constructor(){
        super();
        this.state = {
            name:'Nombre',
            twitter:'@',
            inputTerm:true
        }
    }

    handleClick (e){
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) =>{
        console.log('handleChange');
        console.log(e.target.checked);
        this.setState( {inputTerm : e.target.checked})
    }
    render(){
        return(
            <React.Fragment>
                <h4>Formularios</h4>
                <form onSubmit={this.handleClick}>
                    <p>
                        <label htmlFor="name">Nombre: </label>
                        <input
                        id='name'
                        name='userName'
                        value={this.state.name}
                        onChange={ e => this.setState({name: e.target.value})}
                        />
                    </p>
                    <p>
                    <label htmlFor="twitter">Twitter: </label>
                        <input
                        id='twitter'
                        name='twitterAccount'
                        value={this.state.twitter}
                        onChange={e => this.setState({twitter: e.target.value})}
                        />
                    </p>
                    <p>
                        <label>
                            <input onChange={this.handleChange} type='checkbox' checked={this.state.inputTerm}/>
                            Acepta los terminos y condiciones
                        </label>
                    </p>
                    <button>Enviar</button>
                </form>
            </React.Fragment>
        );
    }
}
export default Forms;