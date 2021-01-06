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

              <img src="https://i.ibb.co/3mFMN5h/perrenial.jpg" className="responsive"/>

            </div>

            <div class="projects-page__text">
              <p>
                <h3>perrenial</h3>
                <a href="https://perrenial.herokuapp.com/plants">https://perrenial.herokuapp.com</a>
                <br/><br/>
                <b>Technologies used:</b>
                <br/>
                <text className="text-content">HTML, CSS, Node.js, Mongoose, Express & EJS</text>
                <br/><br/>
                <b>About the Project:</b>
                <br/>
                <text className="text-content">Perrenial is a full-stack application of a mock plant shop displaying all 7 RESTful routes and full CRUD. The back-end was built using Express, Method-Override and Mongoose. Front-end was created with EJS, Bootstrap and CSS. This project also displays user authentication using Express-Session.  </text>
              </p>
              </div>
            </div>

            <div className="projects-page">

                <div className="project-page__image">

                  <img src="https://i.ibb.co/BNg97zc/mossjobs4.png" className="responsive"/>

                </div>

                <div class="projects-page__text">
                <p>
                    <h3>mossJobs</h3>
                    <a href="https://limitless-oasis-80314.herokuapp.com/">https://limitless-oasis-80314.herokuapp.com</a>
                    <br/><br/>
                    <b>Technologies used:</b>
                    <br/>
                    <text className="text-content">HTML, CSS, JavaScript, Heroku, PHP, PostgreSQL, React.js & Materialize</text>
                    <br/><br/>
                    <b>About the Project:</b>
                    <br/>
                    <text className="text-content">For this project created with a fellow student, we wanted to create a space for our fellow classmates to share job opportunities that they may not find compatible for them, but may be for someone else. In this project, I created the PostgreSQL database and inputed the table, as well as the front-end and styling of the application.</text>
                    <br/><br/>
                    <text className="text-content">Created with: <a href="https://github.com/onerivas">Juan Carlos Rivas</a></text>
                  </p>
                </div>

          </div>

          <div className="projects-page">

              <div className="project-page__image">

                <img src="https://i.ibb.co/NLtrvc6/dailybeer.png" className="responsive"/>

              </div>

              <div class="projects-page__text">
              <p>
                  <h3>daily beer</h3>
                  <a href="https://dailybeer.herokuapp.com/">https://dailybeer.herokuapp.com</a>
                  <br/><br/>
                  <b>Technologies used:</b>
                  <br/>
                  <text className="text-content">MongoDB, React.js, Node.js, Express, Bootstrap & CSS</text>
                  <br/><br/>
                  <b>About the Project:</b>
                  <br/>
                  <text className="text-content">Daily Beer is an application where a user can search for beers based off of ABV or find breweries from searching by city. The app follows the 7 RESTful routes and demonstrates full CRUD. As for the search options, I used two third-party APIs. The application is also responsive. </text>
                </p>
              </div>

        </div>

        </div>
      </div>
    );
  }
}

export default Projects;
