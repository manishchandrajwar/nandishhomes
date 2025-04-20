import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="page-title">Contact Us</h1>
      <p className="form-info">
        Click{" "}
        <a
          href="https://form.jotform.com/251091660663456"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        to fill the contact form.
      </p>
      <p className="form-info">
        Contact Form is not working now, click on the link above or call{" "}
        <span className="highlight-number">+91 9003918651</span>
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" value="" disabled />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" value="" disabled />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input type="email" value="" disabled />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" value="" disabled />
        </div>
        <div className="form-group">
          <label>Booking for</label>
          <select disabled>
            <option>Single Room</option>
            <option>Double Room</option>
            <option>Whole Villa</option>
          </select>
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input type="text" value="" disabled />
        </div>
        <div className="form-group">
          <label>WhatsApp Number</label>
          <input type="text" value="" disabled />
        </div>
      </form>
    </div>
  );
};

export default Contact;
