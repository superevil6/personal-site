import React, { Component } from 'react';
import Blog from '../../components/blog/blog.js';
import Header from '../../components/header/header.js';
import AgeFinder from '../../components/ageFinder';
import ImageGallery from 'react-image-gallery';
import homepageBackground from './sunflowers.jpg';
import './home.css';
import "react-image-gallery/styles/css/image-gallery.css";

//Carousel images
import uncomfortableSteve from './Uncomfortable Steve from accounting.png';
import garborez from './Garborez.png';
import roto2 from './Roto 2.gif';
import contactLens from './Contact Lens.gif';
import cosmos from './Cosmos.png';
import spaceO from './Space O.gif';
import spaceX from './Space X.gif';
import rainbowTiles from './Rainbow Tiles.gif';
import stainedGlass from './stained glass.gif';
import candy from './candy.png';




import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
    

  render() {
    const galleryImages = [
      {
        original: roto2,
        description: "rotoscope of me running for the DoorSquare Trailer."
      },
      {
        original: contactLens,
        description: "A trippy background used in DoorSquare."
      },
      {
        original: spaceO,
        description: "The animation that plays in the Space level of Aintaword."
      },
      {
        original: spaceX,
        description: "The animation that plays in the Space level of Aintaword."
      },
      {
        original: candy,
        description: "An expanding background for Dichotiball."
      },
      {
        original: cosmos,
        description: "Just a lovely pixel-art flower."
      },
      {
        original: rainbowTiles,
        description: "A rainbowy background used in DoorSquare."
      },
      {
        original: stainedGlass,
        description: "A stained glass animated background used in DoorSquare."
      },
      {
        original: uncomfortableSteve,
        description: "Uncomfortable Steve From Accounting, an enemy from Aintawords RPG mode."
      },
      {
        original: garborez,
        description: "Garborez, the grappling trashcan, an enemy from Aintawords RPG mode."
      },
    ]
    return (
        <div className="text-center">
          <Header 
          title="Alex Cassells" 
          description="A portolio site that hopefully shows off that I know a thing or two about Webdev and Software engineering." 
          background={homepageBackground}
          />
          <div className="home_container">
            <div className="intro_mobile">
              <h2>About Myself</h2>
              <div className="intro">
                <p>My name is Alex Cassells, I'm a {AgeFinder()} year old programmer. I love videogames, art, movies, drawing, and many other things. I like making stuff! I like making videogames the most though. Check out this website to learn more about me, and feel free to send me a message from the contact page.</p>
              </div>
            </div>
            <div className="gallery_link">
              <a href="#gallery">Click here for to view the gallery!</a>
            </div>
            <div className="left_container">
            <div>
              <h2>About Myself</h2>
              <div className="intro">
                <p>My name is Alex Cassells, I'm a {AgeFinder()} year old programmer. I love videogames, art, movies, drawing, and many other things. I like making stuff! I like making videogames the most though. Check out this website to learn more about me, and feel free to send me a message from the contact page.</p>
              </div>

            </div>
              <div className="fixed_container">
                <h2>Gallery</h2>
                <ImageGallery autoPlay={true} items={galleryImages} />
              </div>
            </div>
            <div className="right_container">
              <h2>Updates and News</h2>
              <Blog />
            </div>
            <div className="left_contaier_mobile">
              <div id="gallery" className="fixed_container">
                <h2>Gallery</h2>
                <ImageGallery autoPlay={true} items={galleryImages} />
              </div>
            </div>
          </div>
        </div>
    );
  }
}


export default Home;