import React, { Component } from 'react';
import Workcard from './work-card.js';
import './work.css';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }
 
  render() {
    return (
        <div className="container text-center">
          <h1>Work History</h1>
          <Workcard 
          title="BuilderDesigns" 
          date="July 2017 - Current" 
          image="https://static1.clutch.co/sites/default/files/logos/builder_designs.png" 
          description="I got hired on the Support department due to my self-taught programming skills, and began debugging a plethora of unfamiliar programming languages and front-end Javascript frameworks, including AngularJS 1.x, React, Node.JS, PHP, and the basics (HTML, CSS, and Vanilla JS.). I also do various Linux based server side administrative tasks, such as SSL certification and site migrations." />
          <Workcard 
          title="Indie GameDev" 
          date="January 2017 - Ongoing" 
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Unity_Technologies_Logo.svg/1200px-Unity_Technologies_Logo.svg.png" 
          description="I taught myself how to program in Javascript and C#, and began developing games in Unity utilizing C#. I love gaming, I love drawing, and I love writing, so it's only natural I would make my own stuff. Please check out the game menu above for a few examples of my work." />
          <Workcard 
          title="Interac" 
          date="January 2014 - March 2017" 
          image="https://jobsinjapan.com/files/pictures/Signature_Fullcolor_02.png" 
          description="Shortly after working for the University of Kansas I moved to Japan to become an English Teacher. Interac gave me that job. On a yearly basis I taught in various different public schools across the country. This includes Ibaraki, just north of Tokyo; and a small town west of Kobe. I taught Kindergarten all the way to 9th grade. It was a blast!" />
          <Workcard 
          title="University of Kansas- Applied English Center" 
          date="June 2013 - September 2013" 
          image="https://www.ku.edu/assets/ku-template/images/logo.png" 
          description="I worked for the Universrity of Kansas's Applied English Center after I graduated. I was a 'Special Program Ambassador', and it was my job to help groups of foreign-exchange students adjust to the American lifestyle. This involved taking them places, going on field trips with them, and having conversation table activities with them." />
        </div>
    );
  }
}


export default Work;

