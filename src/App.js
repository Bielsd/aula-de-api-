import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentWillMount(){
    //evita erros ao carregar a página
    this.setState({ Img: {} });
  }
  
  
  aoClicar = (event) => {
    axios.get('https://randomfox.ca/floof/')
    .then((resposta) => {
      this.setState({dados: image});
    });
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.aoClicar}>Buscar</button>
        </div>
      </div>
    );
  }
}

export default App;
