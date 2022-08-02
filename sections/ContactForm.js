import { useState } from "react";

const ContactForm = () => {
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const [userType, setUserType] = useState("")
  const [oldUser, setOldUser] = useState("")
  const [message, setMessage] = useState("")
  return (
    <from className="contact-form">
      <div className="form-group">
        <label htmlFor="name">I am a..</label>
        <div className="grid">
          <div onClick={() => { setUserType("Home Owner") }} style={userType === "Home Owner" ? { border: "2px solid black" } : {}} className="block-content">
            <p >Home Owner</p>
          </div>
          <div onClick={() => { setUserType("Professional") }} style={userType === "Professional" ? { border: "2px solid black" } : {}} className="block-content">
            <p >Professional</p>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="name">Are you a new customer</label>
        <div className="grid">
          <div style={oldUser===false ? { border: "2px solid black" } : {}} onClick={() => { setOldUser(false) }} className="block-content">
            <p>Yes</p>
          </div>
          <div style={oldUser===true ? { border: "2px solid black" } : {}} onClick={() => { setOldUser(true) }} className="block-content">
            <p>No</p>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="name">Enter Your Details</label>
        <div className="grid">
          <input type="text" name="firstName" required placeholder="First Name" onChange={(e) => { setFirstName(e.target.value) }} />
          <input type="text" name="lastName" required placeholder="Last Name" onChange={(e) => { setLastName(e.target.value) }} />
        </div>
      </div>
      <div className="form-group">
        {/* <label htmlFor="email">Email</label> */}
        <div className="grid">
          <input type="email" name="email" required placeholder="Your E-Mail" onChange={(e) => { setEmail(e.target.value) }} />
          <input type="text" name="number" required placeholder="Your Phone Number" onChange={(e) => { setPhoneNo(e.target.value) }} />

        </div>

      </div>
      {/* <div className="form-group">
        <label htmlFor="user-type">Who you are?</label>
        <select name="user-type">
          <option value="Architect">Architect</option>
          <option value="Contractor">Contractor</option>
          <option value="Home Owner">Home Owner</option>
          <option value="Builder">Builder</option>
        </select>
      </div> */}
      <div className="form-group">
        {/* <label htmlFor="message">Your message</label> */}
        <textarea name="message" rows="2" placeholder="Your Message" onChange={(e) => { setMessage(e.target.value) }}></textarea>
      </div>
      <input type="button" value="Submit" className="submit-btn" />
    </from>
  );
};

export default ContactForm;
