import React, { Component } from 'react';

class Forms extends Component{

    handleClick (e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const twitter = document.getElementById('twitter').value;
        console.log({name,twitter});
    }
    render(){
        return(
            <React.Fragment>
                <h4>Formularios</h4>
                <form>
                    <p>
                        <label>Nombre: </label>
                        <input
                        id='name'
                        name='userName'
                        placeholder='Introduce aqui tu nombre'
                        />
                    </p>
                    <p>
                    <label>Twitter: </label>
                        <input
                        id='twitter'
                        name='twitterAccount'
                        placeholder='Introduce aqui tu nombre de usuario en Twitter'
                        />
                    </p>
                    <button onClick={this.handleClick} >Enviar</button>
                </form>
            </React.Fragment>
        );
    }
}
export default Forms;