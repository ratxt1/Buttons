import React, { Component } from 'react';
import './App.css';
// const data = require('./data.json')



class ButtonCore extends Component {
  render() {
    let type = this.props.buttons[this.props.type]

    return (
      <div>
        <button className={type.name} onClick={(e) => this.props.onClick(e)}>{type.text}</button>
      </div>
    );
  }
}

export default ButtonCore
