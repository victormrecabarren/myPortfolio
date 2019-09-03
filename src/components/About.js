import React, { Component } from 'react'
import me from '../assets/me.jpg'
import plus from '../assets/plus.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import pdf from '../assets/pdf.png'
import baltimore from '../assets/baltimore.jpg'
import resume from '../assets/resume.pdf'


class About extends Component {
  state = {
    skills: ["ReactJS", "jQuery", "Javascript", "NodeJS", "Ruby", "Rails", "REST", "Git", "GitHub", "MongoDB", "Mongoose", "Express", "postgreSQL", "SQL", "HTML5", "CSS"],
  }


  render(){
    return(
      <div className="aboutComponent">

        <div className="aboutMePersonal">
          <div className="headshotBox">
            <img
              id="myPicture"
              src={me}
              alt="Victor Recabarren" />
          </div>
          <div className="aboutMeText"
            >
            I am an inquisitive, endlessly curious software engineer motivated by social justice and a desire to put plans into action. I have a passion for learning new information, new approaches, and new frameworks of thinking in order to find deep insights when faced with new problems. I see myself as a lifelong student, and my professional journey through military hospitals, mortgage companies, and law firms have been proxies for me to continuously build my education and add to my problem-solving toolbox.

        </div>
      </div>

      <div className="moreInfo">

        <div className="skillsBox">
          <h4 className="skillsHeader">Skills</h4>
        <div className="skillsTable">
          {
            this.state.skills.length?
            this.state.skills.map(skill =>(
              <div
                key={skill}
               className="skillsLine">
                <img
                  src={plus}
                  alt="skill"
                  height="20px"
                />
                <p>
                  {skill}
                </p>
              </div>
            ))
            :
            null
          }


        </div>
      </div>

        <div className="contactInfo">
          <h4 className="contactHeader">
            Contact
          </h4>
          <div className="contactTable">
            <div className="contactLine">
              <a
                href="https://www.linkedin.com/in/victor-recabarren/"
                target="_blank">
                  <img
                    className="icons"
                    src={linkedin} />
              </a>
              <a
                className="contactLinks"
                href="https://www.linkedin.com/in/victor-recabarren/"
                target="_blank">

                LinkedIn
              </a>
            </div>

            <div className="contactLine">
              <a href="https://github.com/victormrecabarren" target="_blank">
                <img className="icons" src={github} />
              </a>
              <a  className="contactLinks"
                href="https://github.com/victormrecabarren" target="_blank">GitHub</a>
            </div>

            <div className="contactLine">
              <a href={resume} download>
                <img className="icons" src={pdf} />
              </a>
              <a  className="contactLinks"
                href={resume} download> Resume</a>
            </div>
          </div>

        </div>
      </div>


  </div>
    )
  }
}

export default About
