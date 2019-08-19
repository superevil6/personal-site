import React, { Component } from 'react';
import './skills.css';
import Header from '../../components/header/header.js';
import skillsBackground from './beach.jpg';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    };
  }

  render() {
    return (
        <div className="text-center">
          <Header 
          title="My Skills"
          titleColor = "black" 
          description="Yo yo yo, check out my skills." 
          background={skillsBackground}
          />
          <div className="container text-center">
            <div className="skill_holder">
              <Skill skillName="C#" width="80%" summaryItems={ 
                {items : [
                  {"summary" : "Although I technically learned Javascript first, C# is my one true love for programming. It's organized."},
                  {"summary" : "I'm used to working with third-party libraries, and have experience with NuGet."},
                  {"summary" : "Game development hits a surprisingly large spectrum of techniques: IEnumerators for sub-routines, audio processing, function overloading, and interface adapatation utilitizing abstract classes"},    
                  {"summary" : "Using the Unity editor I've created several games."}, 
                  {"summary" : "Tons of experimentation and random development"}, 
                  {"summary" : "Personally, it's my favorite."},
                  ]} } />
                  <Skill skillName=".Net" width="80%" summaryItems={ 
                {items : [
                  {"summary" : "As previoulsy mentioned, I understand and thrive with Object Oriented Programming and C#, so .Net is a breeze."},
                  {"summary" : "I know how to manipulate IIS, stand up sites, and work with app/web configs."},
                  {"summary" : "Although I perfer *Nix terminals, I can work my way around Cmd and Powershell no problem."},
                  {"summary" : "I have experience utilizing TFS for version controlling and task management."},
                  {"summary" : "While I haven't built anything entirely on Azure due to the cost, I have built a lot of Webfunctions. It's easy and handy."},
                  ]} } />
                  <Skill skillName="Javascript/Node" width="70%" summaryItems={ 
                {items : [
                  {"summary" : "I have development experience with ES6 and everything prior."},
                  {"summary" : "It was the first programming language I taught myself. Boy did I have a lot of fun."},
                  {"summary" : "This website uses Node, and NPM. I love going through NPMjs and seeing all the crazy modules you can integrate into your projects."},
                  {"summary" : "One of my immediate personal projects is to develop a Node Package for distribution through npmjs.com"},
                  {"summary" : "I can set up and use Express.js. ...CRUD, this site doesn't utilize it."},
                  {"summary" : "I've used more jQuery than I'd like to admit."},
                  ]} } />
              <Skill skillName="PHP" width="70%" summaryItems={ 
                {items : [
                  {"summary" : "I wrote a lot of backend logic for Angular 1.x sites using PHP."}, 
                  {"summary" : "I've built APIs for SQL databases to be used in PHP as well as AngularJS."},
                  {"summary" : "Writting lots of back-end logic and tons of debugging."},
                  {"summary" : "I've worked on much older sites that use PHP as a make-shift front end framework to surprisingly good success."},
                  ]} } />
              <Skill skillName="Python" width="20%" summaryItems={ 
                {items : [
                  {"summary" : "This is more of a hobby language for me. I've experimented with Machine Learning, and have learned Phython to that extent. Look for the GitHub project when it's ready to be shared."},
                  {"summary" : "I understand the syntax well, and have written small applications like cashregisters with Python. I like it, but I wouldn't consider myself an expert at all."},
                  {"summary" : "I'm a Raspberry Pi enthusiast! I hope to actually mix the two together soon. I'm also eyeballing an Arduino project or two."},
                  ]} } />
              <Skill skillName="SQL" width="80%" summaryItems={ 
                {items : [
                  {"summary" : "Experience with creating databases, tables, rows, and columns."},
                  {"summary" : "tSQL and MySQL are mainly what I've worked with. I look forward to using Postgres, I hear good things."},  
                  {"summary" : "I have worked with Express, .Net WebAPI, and PHP to create SQL based APIs for frontends."}
                  ]} } />
              <Skill skillName="MongoDB" width="40%" summaryItems={ 
                {items : [
                  {"summary" : "I can install, and utilize MongoDB."},
                  {"summary" : "I can search, modify, add, and edit documents pretty handily."},
                  ]} } />
              <Skill skillName="HTML/CSS/JS" width="85%" summaryItems={ 
                {items : [
                  {"summary" : "I think that HTML and CSS are easy to learn, difficulty master. It's easy to make something, but it's also kind of an art form to make something truely magnificent."}, 
                  {"summary" : "At BuilderDesigns, I often have to build out new pages, new sections, and other new content. This is typically through HTML, CSS, and either PHP or Angular/React depending on the site."}, 
                  {"summary" : "I went for a relatively non-standard style for this site's design. I think it stands out a little more. I can do more traditional styles though."},
                  {"summary" : "I am well versed in Bootstrap."},
                  {"summary" : "... However I prefer Flexbox."},
                  {"summary" : "Just to clarify, I styled this site from scratch. I still need to clean up a few things here and there, but it's pretty consisten."},

                  ]} } />
              <Skill skillName="Angular 1.x" width="70%" summaryItems={ 
                {items : [
                  {"summary" : "I've built/debugged many sites and pages using this one. I like it."},
                  {"summary" : "I've set up controllers, filters, and UIs utilizing Angular 1.x"},
                  {"summary" : "Although I don't personally work with anything beyond 1.x through work, I am familiar with TypeScript, and actually appreciate it's organization."},
                  {"summary" : "I prefer ReactJS, but man do I appreciate two-way binding."}
                  ]} } />
              <Skill skillName="ReactJS" width="70%" summaryItems={ 
                {items : [
                  {"summary" : "Well, this site is made in ReactJS for one."}, 
                  {"summary" : "Although I made most of the components used on this site, there are a few pre-made ones such as react-router-dom, react-helmet, and that neat little shadowbox used in the games section."}, 
                  {"summary" : "I have made many sites and projects utilizing ReactJS, as of now, it's my go too."}]} } />
              <Skill skillName="*nix administration" width="75%" summaryItems={ 
                {items : [
                  {"summary" : "Most of my work at BuilderDesigns involves System Administrative work for Centos, Debian, and Ubuntu servers."},
                  {"summary" : "I can set up a server from scratch, install all necessary tools such as Node, NPM, Yarn, and countless others."},
                  {"summary" : "I can write Shellscripts, and setup Crontabs to automate just about anything automatable."},
                  {"summary" : "I have experience with both making CLIs and using popular ones like Amazon's CLI."},
                  {"summary" : "Cowsay moo!"},
                  {"summary" : "VIM has a nasty learning curve, but I've grown to like it."},
                  {"summary" : "Seriously though, I do a lot of SysAdmin work at Builderdesigns."}
                  ]} } />
              <Skill skillName="Graphic Design" width="60%" summaryItems={ 
                {items : [
                  {"summary" : "I do my own graphics for game development. I'd love to share some of the graphics."},
                  {"summary" : "Needless to say, I know how to use Photoshop (to a lesser extent GIMP), Illustrator, Krita, and Animate (formly known as Flash.). A ton of sprite editing programs too."},
                  {"summary" : "I used to do a lot of flash animation in highscool. I'll try to dig some up if you're interested."}
                  ]} } />
              <Skill skillName="Web Development / Misc" width="80%" summaryItems={ 
                {items : [
                  {"summary" : "Digital Ocean: I know most of what there is to know about creating, managing, destorying, and manipulating droplets through Digital Ocean."},
                  {"summary" : "Docker: I can set up Docker containers, and make good use of them too."},
                  {"summary" : "Wordpress: I can set up and manage Wordpress blogs."},
                  {"summary" : "C++: I can read and write C++, but I don't have as much experience with it as I do the languages above. I'd love to do more with it."},
                  {"summary" : "Java: Same thing as C++."},
                  {"summary" : "Stackoverflow: This isn't really a skill, but I know how to search through Stackoverflow efficiently to find what I need."}
                  ]} } />
              <Skill skillName="Japanese" width="80%" summaryItems={ 
                {items : [
                  {"summary" : "I can speak, listen, read, and write at business level (I've studied JLPT N1 content for years). Not related to programming, but worth mentioning"},
                  {"summary" : "I lived in Japan for five years, and adapted very well. I insisted on studying everyday and relished any chance to converse with people."},
                  {"summary" : "I really enjoy reading and writing. I feel a certain mysticism in the Kanji (the written characters originating from China.)."}, 
                  ]} } />
            </div>
          </div>
        </div>
    );
  }

}
export default Skills;

class Skill extends Component{
  constructor(props){
    super(props);
    this.state = {
      "viewMore" : false
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.width = {"width" : props.width};

  }
  toggleShow = () =>{
    const newState = this.state.viewMore;
    this.setState( { "viewMore" : !newState } );
  }

render(){
  return(
    <div className="skill">
      <h2>{this.props.skillName}</h2>
      <div className="skill_bar">
        <div className="skill_bar_filling" style={this.width}></div>
      </div>
      <button className="skillButton" onClick={this.toggleShow}>View Summary</button>
      {this.props.summaryItems? 
        <ul className={this.state.viewMore?"show_summary":"hide_summary"}> 
        {this.props.summaryItems.items.map(item =>
          <li key={item.summary}>{item.summary}</li>
        )}
        </ul> 
        :
        null
    }
    </div>
    );
  };
}