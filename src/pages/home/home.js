import React, { Component } from 'react';
import Blog from '../../components/blog/blog.js';


import blackboard from '../../components/blog/images/blackboard.jpg';
import irishcarbomb from '../../components/blog/images/irishcarbomb.jpg';

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