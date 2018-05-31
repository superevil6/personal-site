import React, { Component } from 'react';
import './work-card.css';

class Workcard extends Component {
    constructor(props) {
      super(props);
      this.state ={};
    }
   
    render() {
      return (
          <div className="work_history_card_background">
            <img className="work_history_image" src={this.props.image} />
            <div  className="work_history_card"> 
              <h2>{this.props.title}</h2>
              <h3>{this.props.date}</h3>
              <div className="work_history_description">{this.props.description}</div>
            </div>
          </div>
      );
    }
  }
  
  
  export default Workcard;