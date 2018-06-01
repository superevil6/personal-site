import React, { Component } from 'react';
import './games.css';
import Description from '../../components/description/description.js';
import mouth from "./images/Mouth.png";

class Doorsquare extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
 
  render() {
    return (
        <div className="container text-center">
          <h1>DoorSquare</h1>
          <Description />
          <div className="game_container">
            <iframe className="video_embed" src="https://www.youtube.com/embed/Ho7ufFmCZK0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <h2>A Game of Timing and Mayhem</h2>
            <div>
              <p>Description goes here.</p>
              <h3>Features</h3>
              <hr />
              <ul className="feature_list">
                

              </ul>
            </div>
          </div>
        </div>
    );
  }
}


export default Doorsquare;