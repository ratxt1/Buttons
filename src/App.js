import React, { Component } from 'react';
import './App.css';
import Button from './Button.js'

let buttons = {
  multipleChoiceButton: {
    name: "multipleChoiceButton",
    text: "-4, -2, and 1"
        
  },
  matchmakingButton: {
    name: "matchmakingButton",
    text: "PLAY"
  },
  categoryButton: {
    name: "categoryButton",
    text: "GRE" 
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      randomButton: [],
      init: true
    }
  }

  dummyFunction(e) {
    this.setState({
      counter: this.state.counter + 1
    })

    e.preventDefault()
  }

  getRandomButton() {
    let types = ["multipleChoiceButton", "matchmakingButton", "categoryButton"]
    let type = types[Math.floor(Math.random() * 3)]
    return <Button 
      type = {type}
      onClick = {(e) => this.dummyFunction(e)}
      buttons = {buttons}
    />
  }

  init() {
    if (this.state.init) {
      this.setRandomButton()
      this.setState({
        init: false
      })
    }
  }

  setRandomButton() {
    this.setState({
      randomButton: this.getRandomButton()
    })
  }


  render() {
    this.init()
    return (
      <div className="App">
        <div className="Button">
          {this.state.randomButton}
        </div>
      <div>{this.state.counter}</div>
      </div>
    );
  }
}

export default App;
