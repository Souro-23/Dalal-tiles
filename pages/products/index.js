import { useState } from "react";
import Accordion from "@components/Accordion";
import Layout from "@components/Layout";
import AboutPageSidebar from "@section/AboutPageSidebar";
import WallTiles from "@section/AccordionContents/Products/WallTiles";
import ConcretePavers from "@section/AccordionContents/Products/ConcretePavers";
import GreenBuilding from "@section/AccordionContents/Products/GreenBuilding";
import UrbanAccessoriesSlider from "@section/AccordionContents/Products/UrbanAccessories";
import ArchitecturalElementsSlider from "@section/AccordionContents/Products/ArchitecturalElements";

const Products = () => {
  const data = [
    {
      title: "Landscape Products & Urban Accessories",
      content: <UrbanAccessoriesSlider />,
    },
    {
      title: "Wall Tiles",
      content: <WallTiles />,
    },
    {
      title: "Green Building Products",
      content: <GreenBuilding />,
    },
    {
      title: "Architectural Elements",
      content: <ArchitecturalElementsSlider />,
    },
    {
      title: "Concrete Pavers",
      content: <ConcretePavers />,
    },
  ];

  const [activeAccordion, setActiveAccordion] = useState(false);

  return (
    <Layout sidebar={<AboutPageSidebar />}>
      <div
        className={
          activeAccordion ? "products-banner hidden" : "products-banner"
        }
      >
        <div className="image-wrapper">
          <img src="/products/banner.png" alt="Producta banner" />
        </div>
        <div className="banner-content">
          <div className="banner-heading">
            Our Freshly Updated Catalogue is out now. Get your digital copy to
            explore our whole range.
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do nim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est labo
          </p>

          <button className="btn btn-outline">Download Catalouge</button>
        </div>
      </div>

      <Accordion data={data} setActiveAccordion={setActiveAccordion} />
    </Layout>
  );
};

export default Products;
