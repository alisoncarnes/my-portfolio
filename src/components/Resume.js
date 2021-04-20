import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
        <div className="custom-container container">

          <h2>Resume</h2>
            <div className="empty-div"/>
            <div className="row">
            <div className="col">
              <h3 className="title">Alison Carnes</h3>
              <h5 className="link"><a href="https://drive.google.com/file/d/1-bPDb9wjQED99QTpL_WsxQQOyL7SM5JW/view?usp=sharing" className="pdf-link">Alison-Carnes-Resume.pdf</a></h5>
              <hr/>
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
            <h4 className="title-sub">Technical Skills</h4>
            <hr/>
            <div className="empty-div"/>
            <div className="row">
              <div className="col">
              <h4 className="title-sub">Languages:</h4>
                <div className="resume-page">
                  <p>JavaScript, HTML, CSS, PHP, SQL</p>
                </div>

              </div>
              <div className="col">
              <h4 className="title-sub">Frameworks:</h4>
                <div className="resume-page">
                  <p>React.js, MongoDB, API/Rest APIs, Mongoose ODM, Node.js, GitHub, jQuery</p>
                </div>
              </div>
            </div>
            <div className="empty-div"/>
            <h4 className="title-sub">Work Experience:</h4>
            <hr/>
            <div className="empty-div"/>
            <h4 className="title-sub">Practice of Dr. Steven Shimoyama</h4><p>
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
            <h4 className="title-sub">Education:</h4>
            <hr/>
            <div className="empty-div"/>

            <h4 className="title-sub">General Assembly</h4>
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
