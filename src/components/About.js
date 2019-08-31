import React, { Component } from 'react'
import me from '../assets/me.jpg'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import pdf from '../assets/pdf.png'
import baltimore from '../assets/baltimore.jpg'
import resume from '../assets/resume.pdf'


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

      <div className="contactInfo">
        <div>
          <div className="contactHeader"><h3>Contact</h3></div>
          <a href="https://www.linkedin.com/in/victor-recabarren/" target="_blank"> LinkedIn</a>
          <a href="https://www.linkedin.com/in/victor-recabarren/" target="_blank">
            <img className="icons" src={linkedin} />
          </a>
        </div>
        <div>
          <a href="https://github.com/victormrecabarren" target="_blank">GitHub</a>
          <a href="https://github.com/victormrecabarren" target="_blank">
            <img className="icons" src={github} />
          </a>
        </div>
        <div>
          <a href={resume} download>Download my Resume</a>
          <a href={resume} download>
            <img className="icons" src={pdf} />
          </a>
        </div>
        <h4 style={{textAlign: "center"}}></h4>

      </div>


  </div>
    )
  }
}

export default About
