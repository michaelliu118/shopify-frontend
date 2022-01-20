import React, { Component } from "react";
import './popup.css'

export default class PopUp extends Component {
  handleClick = () => {
   this.props.toggle();
  };
render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <p className="toggle">{this.props.url}</p>
    </div>
   </div>
  );
 }
}