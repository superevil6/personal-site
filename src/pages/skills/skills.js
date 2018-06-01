import React, { Component } from 'react';
import './skills.css';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    };
  }

  render() {
    return (
        <div className="container text-center">
          <h1>My Skills</h1>
          <p>Mostly related to programming.</p>
          <div className="skill_holder">
            <Skill skillName="C#" width="80%" summaryItems={ 
              {items : [
                {"summary" : "Using the Unity editor I've created several games."}, 
                {"summary" : "Tons of experimentation and random development"}, 
                {"summary" : "Personally, it's my favorite."}
                ]} } />
            <Skill skillName="PHP: Apache, NGIN-X" width="50%" summaryItems={ 
              {items : [
                {"summary" : "While working at BuilderDesigns I've done a lot of PHP coding and debugging"}, 
                {"summary" : "I've built APIs for SQL databases to be used in PHP as well as AngularJS."}
                ]} } />
            <Skill skillName="SQL" width="50%" summaryItems={ 
              {items : [
                {"summary" : "While working at BuilderDesigns I've done a lot of PHP coding and debugging"}, 
                {"summary" : "I've built APIs for SQL databases to be used in PHP as well as AngularJS."}
                ]} } />
            <Skill skillName="HTML/CSS/JS" width="80%" summaryItems={ 
              {items : [
                {"summary" : "I've assisted in site buildouts"}, 
                {"summary" : "Plenty of site additions and corrections"}, {"summary" : "Well, I built this site."}
                ]} } />
            <Skill skillName="Angular 1.x" width="70%" summaryItems={ 
              {items : [
                {"summary" : "I've built/debugged many sites and pages using this one. I like it."}
                ]} } />
            <Skill skillName="ReactJS" width="70%" summaryItems={ 
              {items : [
                {"summary" : "Well, this site is made in ReactJS for one."}, 
                {"summary" : "I've taken several courses online including CodeAcademy.com's"}, 
                {"summary" : "BuilderDesigns uses it."}]} } />
            <Skill skillName="*nix administration" width="50%" summaryItems={ 
              {items : [
                {"summary" : "I do a lot of maintainence stuff, including site migrations (RSync-y stuff)."},
                {"summary" : "I have experience installing and utilizing CLIs and other servies."},
                {"summary" : "I can use Vim, that's an accomplishment. Oh oh, and set up Chrontabs."},
                {"summary" : "It doesn't count for much, but I've installed many SSL certificates through Certbot"}

                ]} } />
            <Skill skillName="Python Eve / Mongo" width="40%" summaryItems={ 
              {items : [
                {"summary" : "I can search, modify, add, and edit documents pretty handily."}, 
                ]} } />
            <Skill skillName="Japanese" width="80%" summaryItems={ 
              {items : [
                {"summary" : "I can speak, listen, read, and write at business level (I've studied JLPT N1 content for years). Not related to programming, but worth mentioning"}, 
                ]} } />
                
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
    console.log("Hi");
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
          <li>{item.summary}</li>
        )}
        </ul> 
        :
        null
    }
    </div>
    );
  };
}