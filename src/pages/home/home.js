import React, { Component } from 'react';
import Blog from '../../components/blog/blog.js';


import blackboard from '../../components/blog/images/blackboard.jpg';

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
          <Blog title="Hello World" date="May 31st 2018" photo={blackboard} content="Hi, this is a test blog post just to test to see if it works well." />

        </div>
    );
  }
}


export default Home;