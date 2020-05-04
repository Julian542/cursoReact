import React, { Component } from 'react';

class Forms extends Component{

    handleClick (e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const twitter = document.getElementById('twitter').value;
        console.log({name,twitter});
    }

    handleChange(e){
        console.log('handleChange');
        console.log(e.target.checked);
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
                        placeholder='Introduce aqui tu nombre'
                        />
                    </p>
                    <p>
                    <label htmlFor="twitter">Twitter: </label>
                        <input
                        id='twitter'
                        name='twitterAccount'
                        placeholder='Introduce aqui tu nombre de usuario en Twitter'
                        />
                    </p>
                    <p>
                        <label>
                            <input onChange={this.handleChange} type='checkbox'/>
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