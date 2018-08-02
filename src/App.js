import React, { Component } from 'react';
import './App.css';
import {words} from './words.js';

const MAIN_MODE = "main";
const TEAM_MODE = "team";
const MASTER_MODE = "master";


class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		mode : MAIN_MODE,
  	}
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Code Breaker!</h1>
        </header>
        
        <button onClick={()=> this.setState({mode : TEAM_MODE})}>Team View</button>
        <button onClick={()=> this.setState({mode : MASTER_MODE})}>Code Master View</button>

        {this.state.mode === TEAM_MODE && <TeamView />}
        {this.state.mode === MASTER_MODE && <CodeView />}

      </div>
    );
  }
}


class TeamView extends Component {
   render() {
   	const randWords =words.randomSelection(4);
   	
    return (
      <div className="TeamWords">
        <p> {randWords[0]} </p>
        <p> {randWords[1]} </p>
        <p> {randWords[2]} </p>
        <p> {randWords[3]} </p>
      </div>
    );
  }
}

class CodeView extends Component {
   render() {
   	const code = [1,2,3,4].randomSelection(3);
    return (
      <div className="CodemasterView">
        <p> {code[0]} {code[1]} {code[2]} </p>
        <button onClick={() => alert("todo")}> Next Code </button>
      </div>
    );
  }
}


Array.prototype.randomSelection = function(sizeOfSelection) {
  var i = 0, j, temp;
  if ( this.length <= sizeOfSelection  ) return this.slice();
  while ( i< sizeOfSelection ) {
     j = Math.floor( Math.random() * ( this.length - i ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
     i++;
  }
  return this.slice(0,sizeOfSelection);
}

export default App;

