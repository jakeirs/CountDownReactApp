import React, { Component } from 'react';
import Clock from './Clock'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    // zadeklarowany obiekt state
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    // zwraca obiekt state
    console.log('state ', this.state)
    // zmiana stanu deadline: na nowy podany z inputa
    this.setState( {deadline: this.state.newDeadline} )
  }

  render () {
    return (
      <div className="App">
        <div className="App__title">Countdown to {this.state.deadline}</div>
        <Clock
          // przekazuję CLOCK deadline, CLOCK od teraz może użyć DEADLINE
          deadline={this.state.deadline}
        />
        <div> 
          <input
            placeholder="new date"
            onChange={ event => this.setState({ newDeadline: event.target.value}) }   
          />
          <button onClick={ () => this.changeDeadline() }>
            Submit
          </button>
        </div>
      </div>  
      
    )
  }
}

export default App;