import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-left">
          <h2>About Me</h2>
          <p>I am a software engineer who is interested in leveraging full stack web development and industry leading design tools and technologies to build user-centric products. I had a passion for web design starting at a young age, and decided to take that passion and turn it into a career. I recently completed a full stack, 420+ hour Software Engineering course at General Assembly where I furthered my knowledge in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, and learned new tools and technologies such as <b>React.js</b>, <b>PHP</b>, <b>MySQL</b>, <b>MongoDB</b>, <b>REST APIs</b>, <b>Node.js</b> and <b>jQuery</b>. I am hoping to take what I have learned and apply it to real word experience and look forward to working under those who have more knowledge than myself and to continue learning. </p>


          </div>
          <div className="col-right">
          <h2>Contact</h2>
          <p className="contact-content"><a href="https://github.com/alisoncarnes" className="contact-links"><ion-icon name="logo-github"></ion-icon> github</a> </p>
          <p className="contact-content"><a href="https://www.linkedin.com/in/alison-carnes-a7100b119/" className="contact-links"><ion-icon name="logo-linkedin"></ion-icon> linkedin</a></p>
          <p className="contact-content"><a href="mailto:alisoncarnes@gmail.com"><ion-icon name="mail-outline"></ion-icon> alisoncarnes@gmail.com</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
