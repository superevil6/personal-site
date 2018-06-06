import React, { Component } from 'react';
import './games.css';
import Description from '../../components/description/description.js';
import Gallery from '../../components/gallery/gallery.js';
import space from './images/space.png';
import grass from './images/grass.png';

class Dichotiball extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
 
  render() {
    return (
      <div className="container text-center">
        <h1>Dichotiball</h1>
        <Description 
        tagline="A brain splitting game of concentration."
        description="The game is fairly straight forward, just move your ball to pick up the ever spawning score items. Only you have two characters you need to independently at the same time. This game is a work in progress."
        // videoembed="https://www.youtube.com/embed/Ho7ufFmCZK0"
        features={
          [
            {"title" : "Over 100 levels", "description" : "In 10 different worlds, a flower patch, a bank, a casino, an alternate dimension, and a disgusting flesh pit!"},
            {"title" : "Dyanmic Sound", "description" : "The music is generated by items as they spawn. Giving you a different beat/song for each play of each level."},
            {"title" : "Powerups, hazards, and dangers" , "description" : "Avoid sandtraps, poison pits, ice patches, and wroughtiron fences. Grab multipliers, time slowers, ball cloners, and stat mods."},
            {"title" : "Unique Characters", "description" : "Play an overgrowing amorpheous blob, or a spike ball that never slows down, a manueverable marble, an all-seeing eyeball, or a rocket propelled motor ball."}
          ]
            }  />
          <hr/>
          <h2>Screenshots</h2>
          <hr/>
          <Gallery photos={[
            {"image" : grass,
            "description" : "Dichotiball, grab stuff and win!"},
            {"image" : space,
            "description" : "Many different characters and level themes."},

          ]} />
    </div>
    );
  }
}


export default Dichotiball;