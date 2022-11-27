import { FaPhoneAlt, FaEnvelope, FaMapPin } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMap } from "react-icons/hi";
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
            <p>+91 98919 24243</p>
            <p>+91 99534 90566</p>
            <p>+91 98112 73159 (Architect Consultant)</p>
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
            <p>
              <b>Unit 1 </b>- Bahadurgarh-Sonepat Road, V& PO Asaudah, Distt.
              Jhajjar, Asoda Todran,
            </p>
            <p>
              Haryana - 124505{" "}
              <a
                href="https://maps.app.goo.gl/V9SFTRjJzYW8DdRo9"
                target="_blank"
                rel="noreferrer"
                className="detail-btn"
                style={{ textDecoration: "underline" }}
              >
                location <FaMapPin />
              </a>
            </p>
            <p>
              <b>Unit 2</b> - Dalal Tiles Industries, HFX5+5H7,
            </p>
            <p>
              {" "}
              Haryana - 124106{" "}
              <a
                href="https://maps.app.goo.gl/neZUDud9Vs9NKjrPA"
                target="_blank"
                rel="noreferrer"
                className="detail-btn"
                style={{ textDecoration: "underline" }}
              >
                location <FaMapPin />
              </a>
            </p>
            <p>
              <b>Unit 3 </b>- JXJ8+XRG,
            </p>
            <p>
              {" "}
              Haryana - 134103{" "}
              <a
                href="https://maps.app.goo.gl/RRmhWYSVXzuD68Zf7"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "underline" }}
                className="detail-btn"
              >
                location <FaMapPin />
              </a>
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default contact;
