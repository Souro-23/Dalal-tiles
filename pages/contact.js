import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import AboutPageSidebar from "@section/AboutPageSidebar";
import Layout from "@components/Layout";
import ContactForm from "@section/ContactForm";

const contact = () => {
  return (
    <Layout sidebar={<AboutPageSidebar />}>
      <div className="contact-page">
        <div className="contact-sidebar">
          <div className="contact-section">
            <h1>CONTACT US</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="contact-section">
            <div className="heading">
              <FaPhoneAlt /> Call us
            </div>
            <p>+91 88364 52136</p>
            <p>+91 88626 72833</p>
          </div>
          <div className="contact-section">
            <div className="heading">
              <FaEnvelope /> Mail us
            </div>
            <p>youremail@dalaltiles.com</p>
          </div>
          <div className="contact-section">
            <div className="heading">
              <HiLocationMarker /> Reach us
            </div>
            <p>Plot-278, Block-H, RK Puram,</p>
            <p>New Delhi - 110030</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default contact;
