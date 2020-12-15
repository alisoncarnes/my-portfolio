import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="main">

        <h2>Projects</h2>
        <text className="text-content">All projects listed below were created entirely by me unless stated otherwise.</text>

        <div className="container">

          <div className="projects-page">

            <div className="project-page__image">

              <img src="https://i.ibb.co/3mFMN5h/perrenial.jpg"/>

            </div>

            <div class="projects-page__text">
              <p>
                <h3>perrenial</h3>
                <a href="https://perrenial.herokuapp.com/plants">https://perrenial.herokuapp.com</a>
                <br/><br/>
                Technologies used:
                <br/>
                <text className="text-content">Node.js, Mongoose, Express & EJS</text>
                <br/><br/>
                About the Project:
                <br/>
                <text className="text-content">Site Description here</text>
              </p>
              </div>
            </div>

            <div className="projects-page">

                <div className="project-page__image">

                  <img src="https://i.ibb.co/BNg97zc/mossjobs4.png"/>

                </div>

                <div class="projects-page__text">
                <p>
                    <h3>mossJobs</h3>
                    <a href="https://limitless-oasis-80314.herokuapp.com/">https://limitless-oasis-80314.herokuapp.com</a>
                    <br/><br/>
                    Technologies used:
                    <br/>
                    <text className="text-content">PHP, React.js, Materialize CSS</text>
                    <br/><br/>
                    About the Project:
                    <br/>
                    <text className="text-content">Site Description here</text>
                    <br/><br/>
                    <text className="text-content">Created with: <a href="https://github.com/onerivas">Juan Carlos Rivas</a></text>
                  </p>
                </div>

          </div>

          <div className="projects-page">

              <div className="project-page__image">

                <img src="https://i.ibb.co/NLtrvc6/dailybeer.png"/>

              </div>

              <div class="projects-page__text">
              <p>
                  <h3>daily beer</h3>
                  <a href="https://dailybeer.herokuapp.com/">https://dailybeer.herokuapp.com</a>
                  <br/><br/>
                  Technologies used:
                  <br/>
                  <text className="text-content">MongoDB, React.js, Node.js, Express & Bootstrap</text>
                  <br/><br/>
                  About the Project:
                  <br/>
                  <text className="text-content">Site Description here</text>
                </p>
              </div>

        </div>

        </div>
      </div>
    );
  }
}

export default Projects;
