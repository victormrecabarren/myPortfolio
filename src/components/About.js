import React, { Component } from 'react'
import me from '../assets/me.jpg'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import pdf from '../assets/pdf.png'
import baltimore from '../assets/baltimore.jpg'


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

          <p
            className="skills"
            >
              ReactJS || jQuery || JavaScript || NodeJS || Ruby
              <br/>
              Rails || REST || Git || GitHub || MongoDB
              <br/>
              Mongoose || Express || postgreSQL || SQL || HTML5
              <br/>
              || CSS ||
          </p>
        </div>
      </div>

      <div className="aboutMeInfo">
        <div>
          <h4>View my LinkedIn</h4>
          <img className="icons" src={linkedin} />
        </div>
        <div>
          <h4>View my GitHub</h4>

          <img className="icons" src={github} />
        </div>
        <div>
          <h4>Download my Resume</h4>

          <img className="icons" src={pdf} />
        </div>

      </div>


  </div>
    )
  }
}

export default About
