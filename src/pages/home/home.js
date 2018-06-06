import React, { Component } from 'react';
import Blog from '../../components/blog/blog.js';


import blackboard from '../../components/blog/images/blackboard.jpg';
import irishcarbomb from '../../components/blog/images/irishcarbomb.jpg';
import satansred from '../../components/blog/images/satansred.jpg';
import threeliter from '../../components/blog/images/threeliter.jpg';



import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
 
  render() {
    return (
        <div className="container text-center">
          <h1>Alex Cassells</h1>
          <p>Welcome to my site, here is some information about me and what I do.</p>
          <hr/> 
          <h2>Updates and News</h2>
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
    );
  }
}


export default Home;