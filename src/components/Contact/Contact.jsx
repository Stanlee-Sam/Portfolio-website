import "./contact.scss";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_h5kg4dc", "template_jsh4lol", form.current, {
        publicKey: "kNYDeQd-speujsVrw",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's Work Together</h1>
        <div className="item">
          <h2>Email</h2>
          <span>stanleyamunze03@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Ongata Rongai</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+254 799 416 754</span>
        </div>
      </div>
      <div className="formContainer">
        <div className="formContainer">
          <form ref = {form} action="" onSubmit={sendEmail}>
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={0} placeholder="Message" name="message" />
            <button type="submit">Send Message</button>
            {error && (
              <span className="error-message">Error sending email</span>
            )}
            {success && (
              <span className="success-message">Email sent successfully</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
