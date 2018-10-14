import React, { Component } from 'react';
import styles from './button.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Button extends Component {
  render() {
    let {
      className,
      ...others  
    } = this.props;

    className = cx(this.props.className)

    return (
        <div>
          <button className={className} {...others} /> 
        </div> 
    );
  }
}

export default Button
