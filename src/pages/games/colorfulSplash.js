import React, { Component } from 'react';
import './games.css';
import Description from '../../components/description/description.js';
import Header from '../../components/header/header.js';
import Gallery from '../../components/gallery/gallery';
import csBackground from './Wavepooldoor.png';
import cs1 from './images/cs1.png';


class ColorfulSplash extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
 
  render() {
    return (
      <div className="text-center">
        <Header 
          title="Colorful Splash" 
          description="A fast paced action-puzzler game about mixing colors."
          background= {csBackground}
        />
      <Description 
      tagline="Mix and match to maximize mayham."
      description="Early in production but features plan to include:"
      features={
        [
          {"title" : "Single player story campaign.", "description" : "Story isn't yet written, but like Doorsquare, it's probably going to be unnecessarily weird and dark."},
          {"title" : "Marathon Modes, CPU Versus arcade modes, Challenge Modes, Puzzle Modes", "description" : "Pretty much the single player experiences that made this genre addictive and fun."},
          {"title" : "Multiplayer Modes", "description" : "Up to four player local multiplayer, and if possible online multiplayer. Traditional modes, Item-driven battle modes, and hopefully more!"},
        ]
          }  />
      <hr/>
      <h2>Screenshots</h2>
      <hr/>
      <Gallery photos={[
        {"image" : cs1,
        "description" : "The base game framework is mostly complete, now to just tweak and add features."}
      ]} />
    </div>
    );
  }
}


export default ColorfulSplash;