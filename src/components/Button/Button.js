import React, { Component } from 'react';
import styles from './button.module.css';
import classNames from 'classnames/bind';
import ButtonBase from './ButtonBase.js'

let cx = classNames.bind(styles);

class Button extends Component {
  render() {
    let {
      className,
      ...others  
    } = this.props;

    className = cx(this.props.className)

    return (  
       <ButtonBase className={className} {...others} /> 
    );
  }
}

export default Button
