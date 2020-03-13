import React, { Component } from 'react';
import Blog from '../../components/blog/blog.js';
import Header from '../../components/header/header.js';
import AgeFinder from '../../components/ageFinder';
import blackboard from '../../components/blog/images/blackboard.jpg';
import ImageGallery from 'react-image-gallery';
import homepageBackground from './sunflowers.jpg';
import './home.css';
import "react-image-gallery/styles/css/image-gallery.css";

//Blog images
import irishcarbomb from '../../components/blog/images/irishcarbomb.jpg';
import satansred from '../../components/blog/images/satansred.jpg';
import threeliter from '../../components/blog/images/threeliter.jpg';
import haku from '../../components/blog/images/haku.jpg';
import rings from '../../components/blog/images/rings.jpg';
import flowers from '../../components/blog/images/Flowers.jpg';
import beachhouse from '../../components/blog/images/beachhouse.JPG';
import temple from '../../components/blog/images/temple.jpeg';

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
              <Blog title="Chat!" 
              date="March 11th 2020" 
              imageDescription="A really awesome temple in Hyogo that I visited with my father-in-law."
              photo={temple} 
              content="I've built a small XMPP chat application that can be accessed in the footer of each page. Click the chat button in the menu or scroll on down! I'm also working on a new game as well, it's called Rogueloot for now, and I hope to add a page with some sweet screenshots soon." />
              <Blog title="Trucking Along" 
              date="September 28th 2019" 
              imageDescription="This beach/cool house was about 5 minutes walking distance from my appartment in Hitachi."
              photo={beachhouse} 
              content="Been working on Colorful Splash, and my website. Things have been going well, and I'm excited to give more updates out soon on its progress." />
              <Blog title="First year anniversary!" 
              date="August 19th 2019" 
              imageDescription="Lovely flowers that my wife crocheted for me!"
              photo={flowers} 
              content="Hard to believe that I've been married for over a year now! Just as hard to believe that I've been programming professionally for two and a half years now! Wow! Onward and upward! I've been working on my project called Color Splash lately, and I hope that I can eventually get it out the door, and on to Steam. I'll create a new page for it soon, once I've got some good screenshots to share. Check it out on Github" />
              <Blog title="Happy 4th, happy wedding!" 
              date="July 4th 2018" 
              imageDescription="Her engagement ring, and the ring I received from my grandparents."
              photo={rings} 
              content="I got married today. We're saving the ceremony for later, but in the interest of getting Greencard paperwork finished and filed, we've decided to get hitched today." />
              <Blog title="To the airport!" 
              date="June 19th 2018" 
              imageDescription="A mysterious $70 beauty product that ended up in her luguage some how. I feel bad for the person who lost it."
              photo={haku} 
              content="My fiance arrived in the United States! I haven't seen her in 10 months. I couldn't be any happier." />
              <Blog title="Steady updates" 
              date="June 5th 2018" 
              imageDescription="A three liter of beer. It was a great night."
              photo={threeliter} 
              content="Just making steady progress on the site. Next I'm going to finish adding in a connection to the MongoDB. Yay." />
              <Blog title="Site Launch" 
              date="June 3rd 2018" 
              imageDescription="A beer I drank on game night in Mito one time. Good stuff. Cheers to the site launch."
              photo={satansred} 
              content="Well, the site is up and secure. I have a few things here and there I need to improve, but so far things are pretty good. If anyone has any recommendations on content or what can be improved, I'm all ears!" />
              <Blog title="Progress on the site" 
              date="June 2nd 2018" 
              photo={irishcarbomb} 
              imageDescription="An Irish Car Bomb I drank in Hitachi with two Irish friends."
              content="Besides some mobile-friendly stuff, the site is essentially complete. I just have to transer it over to a dedicated server, and throw the switch. I'm going to use a MERN stack for the first time, and I'm excited to see how it goes. Wish me luck. Nobody can read this yet. Lol" />
              <Blog title="Hello World" 
              date="May 31st 2018" 
              imageDescription="A chalkboard drawing my fifth graders and I made one year. I was teaching them counting and shapes."
              photo={blackboard} 
              content="Hi, this is a test blog post just to test to see if it works well." />
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