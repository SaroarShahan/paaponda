import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { FormStyle, ButtonWrap, Wrapper } from "../styles/FormStyle";
import BreadCrumbs from "../../common/BreadCrumbs";
import Map from "../../common/Map";

const initState = {
  fullname: "",
  subject: "",
  email: "",
  message: ""
};

class Contact extends Component {
  state = { ...initState };

  _handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  _handleSubmit = e => {
    e.preventDefault();

    const { fullname, email, message } = this.state;

    if (fullname === "" || email === "" || message === "") {
      toast.warn("Input fields should not be empty!", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    toast.success("Your message sent successfully!", {
      position: toast.POSITION.TOP_RIGHT
    });

    this.setState({ ...initState });
  };

  render() {
    const { fullname, subject, email, message } = this.state;
    return (
      <>
        <BreadCrumbs title="contact" />
        <Wrapper>
          <FormStyle onSubmit={this._handleSubmit}>
            <div>
              <label htmlFor="fullname">Full Name:</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={fullname}
                placeholder="Enter your full name"
                onChange={this._handleChange}
              />
            </div>
            <div>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                placeholder="Enter your subject"
                onChange={this._handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={this._handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <input
                type="text"
                id="message"
                name="message"
                value={message}
                placeholder="Write your message here..."
                onChange={this._handleChange}
              />
            </div>
            <ButtonWrap>
              <button type="submit">Send</button>
            </ButtonWrap>
          </FormStyle>
          <Map />
        </Wrapper>
      </>
    );
  }
}

export const ContactContainer = withRouter(Contact);
