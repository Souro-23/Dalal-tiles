const ContactForm = () => {
  return (
    <from className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="number">Number</label>
        <input type="text" name="number" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Your message</label>
        <textarea name="message" rows="5"></textarea>
      </div>
      <input type="button" value="Submit" className="submit-btn" />
    </from>
  );
};

export default ContactForm;
