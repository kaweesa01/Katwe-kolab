import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="txt-div">
          <div className="txt-container">
            If you want to grow as a developer, Ican't over empasize the
            benefits of joining a developer community. There are many
            advantages, from peer -programing to sharing knowledge, mentorship,
            code reviews, answering questions and much more{" "}
          </div>
        </div>
        <div className="form-div">
          <h3>Contact Us</h3>
          <h5>
            If you are interested in working with us, please fill out the form
            below
          </h5>

          <form className="contact-form">
            <input className="input-field text" type="text" placeholder="Your name" />
            <input className="input-field email" type="email" placeholder="Your email" />
            <textarea className="input-field area-txt" placeholder="Your message"></textarea>
            <button className="btn">Send message</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
