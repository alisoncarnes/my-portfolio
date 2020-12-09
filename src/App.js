import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (

      <section className="container">
        <div className="left-half">
          <article>
            <h1>About me</h1>
            <p>Weekends don't count unless you spend them doing something completely pointless.</p>
          </article>
        </div>
        <div className="right-half">
          <article>
            <h1>Portfolio</h1>
            <p>If your knees aren't green by the end of the day, you ought to seriously re-examine your life.</p>
          </article>
        </div>
      </section>


    );
  }
}

export default App;
