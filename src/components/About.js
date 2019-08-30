import React, { Component } from 'react'
import me from '../assets/me.jpg'

class About extends Component {
  render(){
    return(
      <div className="aboutComponent">
        <div className="aboutMePersonal">
          <div className="headshotBox">
            <img style={{width: "100%"}} src={me} alt="Victor Recabarren" />
          </div>
          <div className="aboutMeText">
            I am an inquisitive, endlessly curious software engineer motivated by social justice and a desire to put plans into action. I have a passion for learning new information, new approaches, and new frameworks of thinking in order to find deep insights when faced with new problems. I see myself as a lifelong student, and my professional journey through military hospitals, mortgage companies, and law firms have been proxies for me to continuously build my education and add to my problem-solving toolbox.

          ReactJS || JavaScript || NodeJS || Ruby || Git || GitHub || MongoDB || Mongoose || Express || postgreSQL || SQL || HTML5 || CSS ||
        </div>
      </div>
      <div className="aboutMeInfo">
        linkedin and stuff here
      </div>
  </div>
    )
  }
}

export default About
