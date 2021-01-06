import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
        <div className="container">

          <h2>Resume</h2>
            <div className="empty-div"/>
            <div className="row">
              <div className="col">
              <h3>Alison Carnes</h3>
              </div>
              <div className="col">
              attachment to resume here
              </div>
            </div>
            <div className="empty-div"/>
            <div className="row">
              <div className="col">
              <p>I am a software engineer who is interested in leveraging full stack web development and industry leading design tools and technologies to build user-centric products.</p>
              </div>
              <div className="empty-div"/>
              <div className="col">
              <p>Email: <a href="mailto:alisoncarnes@gmail.com">alisoncarnes@gmail.com</a><br/>
              GitHub: <a href="https://github.com/alisoncarnes">@alisoncarnes</a> <br/>
              LinkedIn: <a href="https://www.linkedin.com/in/alison-carnes-a7100b119/">@alison-carnes-a7100b199</a> </p>
              </div>
            </div>
            <div className="empty-div"/>
            <h3>Technical Skills</h3>
            <div className="empty-div"/>
            <div className="row">
              <div className="col">
              <h4>Languages:</h4>
              <p>JavaScript, HTML, CSS, PHP, SQL</p>

              </div>
              <div className="col">
              <h4>Frameworks:</h4>
              <p>React.js, MongoDB, API/Rest APIs, Mongoose ODM, Node.js, GitHub, jQuery</p>
              </div>
            </div>
            <div className="empty-div"/>
            <h4>Work Experience:</h4>
            <div className="empty-div"/>
            <h5>Practice of Dr. Steven Shimoyama</h5><p>
            Marina del Rey, CA<br/>
            Lead X-Ray Technician<br/>
            August '17 - Feb '20<br/>
            <ul>
              <li>Preparation and procurement of upper/lower extremity, chest & spine x-rays for geriatric and professional athletic patients</li>
              <li>Consultations with lead specialist regarding x-ray interpretations and outcomes</li>
              <li>Explanation of x-ray results and potential next steps for patients</li>
            </ul>
            </p>



            <div className="empty-div"/>
            <h4>Education:</h4>
            <div className="empty-div"/>

            <h5>General Assembly</h5>
            <p>
            Award winning, industry leading software immersive program with a focus on HTML, CSS, JavaScript, PHP, modern front-end frameworks, back-end web applications and API development with modern programming languages and MVC, and consummation of third-party APIs. GA also focused on collaboration in teams using agile development workflow and widely accepted collaboration practices in Git/Github
            <br/><br/>
            <b>Software Engineering</b><br/>
            August '20 - Nov '20
            </p>
        </div>
    );
  }
}

export default Resume;
