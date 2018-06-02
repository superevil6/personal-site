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
          <Description 
          tagline="A game of timing, and mayhem!"
          description="Get your door through the squares. Yep. The more doors you can get through in quick succession, the higher your score climbs. Grab power ups, play the story mode, and unlock severl hundred extra characters, obstacles, levels, and gameplay modes!"
          videoembed="https://www.youtube.com/embed/Ho7ufFmCZK0"
          features={
            [
              {"title" : "Over 80 Characters", "description" : "Play as a dog, a gorilla, the president, or a stained glass window!"},
              {"title" : "Over 80 Doors", "description" : "Pick your poison, aviod lasers, avoid abstract art, avoid cigarettes and keep you lungs healthy!"},
              {"title" : "Over 80 Backgrounds", "description" : "I drew up a tiling system, and made cool psychodelic stuff. Acid recommended*. (*Acid not recommended.)"},
              {"title" : "Tons of interchangable modes", "description" : "Ten major modes, including story modes, different major gameplay modes, like blaster mode, or charge mode; and tons of gameplay mods that can be added on for score multipliers. Probably thousands of combinations"}

            ]
              }  />
        </div>
    );
  }
}


export default Doorsquare;