import React, { Component } from 'react';
import Button from "./components/buttons"
import Title from "./components/titulo"
import countryes from "../src/assets/countries.json"
//vimport { thisExpression } from '@babel/types';

class App extends Component {
  state = {
    randomCountry: [],
    capital: "",
    respuestaUsuario: null
  }

  // validarRespuesta = () => {
  //   this.setState({
  //     const comparar = 
  //     })
  // }


  componentDidMount() {
    const capitales = [];
    for (let i = 0; i < 5; i++) {
      let country = Math.floor(Math.random() * Math.floor(countryes.length))
      let capital = countryes[country]
      capitales.push(capital)
    }
    const titulo = Math.floor(Math.random() * Math.floor(capitales.length))
    //paso el array de capitales a el estado con set state 
    this.setState({ randomCountry: capitales, capital: capitales[titulo].name })
  }




  render() {
    return (
      <div className="container">
        <Title title={this.state.capital} />
        <div className="col">
          <Button countries={this.state.randomCountry} />
        </div>
      </div>
    );
  }
}

export default App;




