import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [inputValue, setInputValue] = useState("");
  const [inputValid, setInputValid] = useState(true);
  const [secondInputValue, setSecondInputValue] = useState("");
  const [secondInputValid, setSecondInputValid] = useState(true);
  const [thirdInputValue, setThirdInputValue] = useState("");
  const [thirdInputValid, setThirdInputValid] = useState(true);
  const [displayText, setDisplayText] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      inputValue !== "" &&
      secondInputValue !== "" &&
      thirdInputValue !== ""
    ) {
      sendEmail(e);
      setInputValue("");
      setSecondInputValue("");
      setThirdInputValue("");
      setDisplayText(true);
    } else {
      setInputValid(inputValue !== "");
      setSecondInputValid(secondInputValue !== "");
      setThirdInputValid(thirdInputValue !== "");
      setDisplayText(false);
    }
  };

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_qlslksb",
        "template_6ovaay4",
        form.current,
        "chKx2wAbbJXzTstTY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h2>Contact me!</h2>
      <h3>
        Get in touch or shoot me an email directly on
        <span> rucinski.krzysztof02@gmail.com</span>
      </h3>
      <form ref={form} onSubmit={handleSubmit}>
        <label className="contact__form-label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          className={`contact__form-input ${!inputValid ? "invalid" : ""}`}
          placeholder="Enter Your Name"
          id="name"
          required
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setInputValid(true);
          }}
        />
        {!inputValid && (
          <p className="error-message">Please enter your name.</p>
        )}
        <label className="contact__form-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="user_email"
          className={`contact__form-input ${
            !secondInputValid ? "invalid" : ""
          }`}
          placeholder="Enter Your Email"
          required
          value={secondInputValue}
          onChange={(e) => {
            setSecondInputValue(e.target.value);
            setSecondInputValid(true);
          }}
        />
        {!secondInputValid && (
          <p className="error-message">Please enter a valid email address.</p>
        )}
        <label className="contact__form-label" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Enter Your Message"
          className={`contact__form-input ${!thirdInputValid ? "invalid" : ""}`}
          required
          value={thirdInputValue}
          onChange={(e) => {
            setThirdInputValue(e.target.value);
            setThirdInputValid(true);
          }}
        />
        {!thirdInputValid && (
          <p className="error-message">Please enter your message.</p>
        )}
        <input
          type="submit"
          onClick={handleSubmit}
          value="Send"
          className="btn"
        />
        {displayText && (
          <p style={{ color: "green", paddingTop: "20px" }}>
            Your message was sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
