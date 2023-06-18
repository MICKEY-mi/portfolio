import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_t76jnol",
        "template_7p7532i",
        form.current,
        "zozF20U2SZWw5Z47D"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          document.form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} name="form" onSubmit={sendEmail} id="form">
          <input type="text" required name="user_name" className="user"  placeholder="Name" />
          <input type="email" required name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" required className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done&&"Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
