import React, { Component } from 'react';
import './games.css';
import Description from '../../components/description/description.js';
import Header from '../../components/header/header.js';
import aintawordBackground from './aintawordBackground.png';


class Aintaword extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
 
  render() {
    return (
      <div className="text-center">
        <Header 
          title="Aintaword" 
          description="A word recognition game that tests your reading comprehension and speed. It's more fun than it sounds, honestly."
          background= {aintawordBackground}
        />
      <Description 
      tagline="A gaem of wrod recogintion"
      description="Is it a word, or not? Quick fire word recognition designed to twist your brain with twisted words."
      features={
        [
          {"title" : "Addictive 'One more time' gameplay", "description" : "Quick matches, requiring split second decisions. Build up chains and score high!"},
          {"title" : "Hundreds of Levels", "description" : "With ten worlds, all featuring unique fonts, and graphics, and gameplay mods"},
          {"title" : "Adventure Story Mode", "description" : "Becuase word games require a deep emotional story."},
          {"title" : "Educational uses", "description" : "Grab the Spanish word pack, and make use of your time."},
          {"title" : "Multiplayer modes!", "description" : "Head-to-head score battle, mayhem with power battle mode. Twist your opponents words and raise the challenge. Try coop mode in case you don't want to end your friendships."},

        ]
          }  />
    </div>
    );
  }
}


export default Aintaword;