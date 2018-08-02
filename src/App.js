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
        <h1> 1. {randWords[0]} </h1>
        <h1> 2. {randWords[1]} </h1>
        <h1> 3. {randWords[2]} </h1>
        <h1> 4. {randWords[3]} </h1>
      </div>
    );
  }
}

class CodeView extends Component {
	constructor(props){
		super(props);
		this.state = {
			code  : [1,2,3,4].randomSelection(3),
		}
	}

   render() {
   	const code = this.state.code;
    return (
      <div className="CodemasterView">
        <h1> {code[0]} {code[1]} {code[2]} </h1>
        <button onClick={() => this.setState({code  : [1,2,3,4].randomSelection(3)})}> Next Code </button>
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

