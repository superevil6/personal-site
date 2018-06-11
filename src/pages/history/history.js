import React, { Component } from 'react';
import SubNav from '../../components/sub-nav/sub-nav.js';
import List from '../../components/list/list.js';
import Header from '../../components/header/header.js';
import './history.css';
import courthouse from './images/courthouse.jpg';
import campus from './images/campus.jpg';
import sunset from './images/sunset.jpg';
import tajiri from './images/tajiri.jpg';
import pencil from './images/pencil.jpg';





class History extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
 
  render() {
    return (
        <div id="history" className="container text-center">
        <Header title="The History of my life." description="Check out these various interesting historical events centered around me. Also view my hobbies and be amazed by my lofty goals." />
          <List width={90} list={
            {
              items: [
                {"title" : "Who I am",
                "image" : pencil,
                "description" : "I am a 28 year old software developer who lives in Kansas. I used to live in Japan for five years, and plan on getting married to a beautiful woman soon. I love playing, and making video games. I always challenge myself to learn new hobbies/skills, and luckily programming/web development has no shortage of things to learn."}

            ]}
          }
          />
          <SubNav items={ {items : [{"name" : "My History", "link" : "#history"}, {"name" : "Hobbies", "link" : "#hobbies"}, {"name" : "Goals", "link" : "#goals"}]} } />

              <h2 id="history">My History</h2>
              <List width={ "45" } list={
                  {items : [
                  {"title" : "Growing Up", 
                  "image" : courthouse, 
                  "imageDescription" : "The super old Linn County courthouse of my hometown MoundCity.",
                  "description" : "I was born in Olathe Kansas, but my family moved to Denver Colorado shortly after that. The first ten years of my life we grew up in a nice Suburb called Arvada. We moved back to Kansas when I was 10, and lived in a small town with the population of 800."},
                  {"title" : "College", 
                  "image" : campus, 
                  "imageDescription" : "University of Kansas Campus. Lotsa fun memories there.",
                  "description" : "Since I lived in Kansas, I decided to go to the University of Kansas. I ended up in the College of Liberal Arts and Sciences. I ended up studying Japanese, and eventually did a year long study abroad in Japan."},
                  {"title" : "Living Abroad", 
                  "image" : tajiri, 
                  "imageDescription" : "I taught at a school named Tajiri Elementary school. This was the view off the balcony of my classroom.",
                  "description" : "I had a great time in Japan, so when I returned to America to finish up college, I decided to apply for an English teaching job, and was hired. I spent the next four years living in Japan. Eventually I moved in with my fiance, and taught myself C# so I could program indie games."},
                  {"title" : "Returning to the US", 
                  "image" : sunset,
                  "imageDescription" : "A sunset I captured upon returning to America. It's taken at my parent's house. America has the best sunsets.", 
                  "description" : "I came back to visit my family, and while I was visiting, I was offered a job. So I moved back to start a career in programming."},

                ]}
              } />
              <h2 id="hobbies">Hobbies</h2>
              <List width={ "30" } list={
                {items : [
                {"title" : "Guitar", "description" : "I'm a huge fan of metal, so I love sweep picking, double picking, and anything that stounds awesome. I could stand to practice more.", "icon" : "fa fa-music"},
                {"title" : "Video Games", "description" : "It's been my primary hobby since for as long as I can remember. I've played and beaten more games than I could possibly count.", "icon" : "fa fa-gamepad"},
                {"title" : "Art", "description" : "I absolutely love drawing, and animation as well. I used to make Flash cartoons.", "icon" : "fa fa-paint-brush"},
                {"title" : "Movies", "description" : "I watch as many films as I can. I love great movies, and I love terrible movies. That being said, I'm not too big a fan of modern movies, they seem too cash grabby.", "icon" : "fa fa-film"},
                {"title" : "Programming", "description" : "I like doing it, which is good because it's my job.", "icon" : "fa fa-code"},
                {"title" : "Studying", "description" : "No, really. I love learning new things. Right now this mostly involves studying Programing and Japanese.", "icon" : "fa fa-book"},

                ]}
              } />
              <h2 id="goals">Goals</h2>
              <List width={ "45" } list={
                  {items : [
                  {"title" : "Have a family!", "description" : "That sounds fun!"},
                  {"title" : "Learn how to create AI.", "description" : "It's not that I want to make SkyNet, I just feel a little compelled."},
                  {"title" : "Make More Games", "description" : "I've got a bunch of ideas, and given the time I think I can make some really good stuff."},
                  
                ]}
              } />
        </div>
    );
  }
}


export default History;