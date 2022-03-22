import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import Layout from "@components/Layout";
import ContactForm from "@section/ContactForm";
import HomePageSidebar from "@section/HomePageSidebar";

const contact = () => {
  return (
    <Layout sidebar={<HomePageSidebar />}>
      <div className="contact-page">
        <div className="contact-sidebar">
          <div className="contact-section">
            <h1>CONTACT US</h1>
            <p>
              You are an architect, planner or user and would like to have some
              information materials or desire personal contact? We will gladly
              respond to an individual question. Please fill the form and
              submit, we will be in touch as soon as possible.
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
            <p>dalaltiles@yahoo.com</p>
            <p>sales@dalaltiles.com</p>
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
