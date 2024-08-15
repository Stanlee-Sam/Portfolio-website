import "./contact.scss";

const Contact = () => {
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
        <form action="">
            <input type="text" required placeholder="Name" />
            <input type="email" required placeholder="Email" />
            <textarea rows = {0} placeholder="Message" />
            <button type="submit">Send Message</button>
           

          <div className="error-message"></div>

        </form>

      </div>
    </div>
  );
};

export default Contact;
