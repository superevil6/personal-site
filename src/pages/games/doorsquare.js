import React, { Component } from 'react';
import Header from '../../components/header/header.js';
import Gallery from '../../components/gallery/gallery.js';
import Description from '../../components/description/description.js';
import './games.css';
import DoorSquareIcon from './images/Door Square Icon.png';
import ds from './images/ds.jpg';
import ds1 from './images/ds1.jpg';
import ds2 from './images/ds2.jpg';
import ds3 from './images/ds3.jpg';
import doorsquareBackground from './doorsquareBackground.png';

class Doorsquare extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
 
  render() {
    return (
        <div className="text-center">
          <Header title="DoorSquare" 
          description="The timing game of madness and doors!" 
          ogImage={DoorSquareIcon}
          background={doorsquareBackground}
          />
          <div className="container text-center">
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
            <hr/>
            <h2>Screenshots</h2>
            <hr/>
            <Gallery photos={[
              {"image" : ds,
              "description" : "DoorSquare! Put the Square through the doors! Wow"},
              {"image" : ds1,
              "description" : "Great Backgrounds, and unique character!."},
              {"image" : ds2,
              "description" : "Mix and match game modes, thousands of combination"},
              {"image" : ds3,
              "description" : "Wow, tons of content. Also it's free. What a steal."},
            ]} />
          </div>
        </div>

    );
  }
}


export default Doorsquare;