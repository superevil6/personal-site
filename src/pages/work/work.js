import React, { Component } from 'react';
import Header from '../../components/header/header.js';
import Workcard from './work-card.js';
import './work.css';
import workBackground from './castle.jpg';
import Abbott from './abbott.png';
import BuilderDesigns from './builder_designs.png';
import Interac from './interac.png';
import KU from './KU.png';
import Unity from './unity.jpg';


class Work extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }
 
  render() {
    return (
        <div className="text-center">
          <Header 
            title="Work History" 
            description="These are the places I've worked, and some of the things I've done. Wow!" 
            background={workBackground}
          />
          <div className="text-center container">
            <Workcard 
            title="Abbott - eScreen" 
            date="September 2018 - Current" 
            image= {Abbott} 
            description="Abbott is a healthcare research and development company that produces health releated equipment and materials. EScreen is a subdivision of Abbott that specializes in drug testing hardware and software. I work as a software developer, using .NET frameworks." />
            <Workcard 
            title="BuilderDesigns" 
            date="July 2017 - September 2018" 
            image= {BuilderDesigns}
            description="I got hired on the Support department due to my self-taught programming skills, and began debugging a plethora of unfamiliar programming languages and front-end Javascript frameworks, including AngularJS 1.x, React, Node.JS, PHP, and the basics (HTML, CSS, and Vanilla JS.). I also do various Linux based server side administrative tasks, such as SSL certification and site migrations." />
            <Workcard 
            title="Indie GameDev" 
            date="January 2017 - Ongoing" 
            image= {Unity}
            description="I taught myself how to program in Javascript and C#, and began developing games in Unity utilizing C#. I love gaming, I love drawing, and I love writing, so it's only natural I would make my own stuff. Please check out the game menu above for a few examples of my work." />
            <Workcard 
            title="Interac" 
            date="January 2014 - March 2017" 
            image={Interac} 
            description="Shortly after working for the University of Kansas I moved to Japan to become an English Teacher. Interac gave me that job. On a yearly basis I taught in various different public schools across the country. This includes Ibaraki, just north of Tokyo; and a small town west of Kobe. I taught Kindergarten all the way to 9th grade. It was a blast!" />
            <Workcard 
            title="University of Kansas- Applied English Center" 
            date="June 2013 - September 2013" 
            image={KU}
            description="I worked for the Universrity of Kansas's Applied English Center after I graduated. I was a 'Special Program Ambassador', and it was my job to help groups of foreign-exchange students adjust to the American lifestyle. This involved taking them places, going on field trips with them, and having conversation table activities with them." />
          </div>
        </div>
    );
  }
}


export default Work;

