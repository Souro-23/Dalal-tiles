import { useState } from "react";
import Accordion from "@components/Accordion";
import Layout from "@components/Layout";
import History from "@section/AccordionContents/History";
import ManufacturingFacility from "@section/AccordionContents/ManufacturingFacility";
import Profile from "@section/AccordionContents/Profile";
import HomePageSidebar from "@section/HomePageSidebar";

const About = () => {
  const data = [
    {
      title: "Profile",
      content: <Profile />,
    },
    {
      title: "History",
      content: <History />,
    },
    {
      title: "Manufacturing Facility",
      content: <ManufacturingFacility />,
    },
  ];

  const [activeAccordion, setActiveAccordion] = useState(false);

  return (
    <Layout sidebar={<HomePageSidebar />}>
      <div className={activeAccordion ? "about-banner hidden" : "about-banner"}>
        <p className="banner-heading">DALAL TILES</p>
        <p className="banner-description">
          Dalal Tiles has its history owed to its pioneers Mr. Anil Dalal and
          Mr. Rakesh Dalal that have instilled the values of transparency,
          Honesty, and excelling quality to build relationships towards an
          innovative and creativity driven community of Architects and
          Engineers.Ensuring the promise of delivering excellence, Dalal Tiles
          Pvt. Ltd. extends the execution, application, and installation of
          products and all services related, to Dalal Builders Pvt. Ltd.
          creating an umbrella of solutions under the Dalal Tiles Banner.
        </p>
      </div>

      {/* Accordion */}
      <Accordion data={data} setActiveAccordion={setActiveAccordion} />
    </Layout>
  );
};

export default About;
