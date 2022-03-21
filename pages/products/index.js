import { useState } from "react";
import Accordion from "@components/Accordion";
import Layout from "@components/Layout";
import AboutPageSidebar from "@section/AboutPageSidebar";
import WallTiles from "@section/AccordionContents/Products/WallTiles";
import ConcretePavers from "@section/AccordionContents/Products/ConcretePavers";
import GreenBuilding from "@section/AccordionContents/Products/GreenBuilding";
import UrbanAccessoriesSlider from "@section/AccordionContents/Products/UrbanAccessories";
import ArchitecturalElementsSlider from "@section/AccordionContents/Products/ArchitecturalElements";
import Link from "next/link";

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

          <Link href="/products/catalogue">
            <button className="btn btn-outline">Download Catalouge</button>
          </Link>
        </div>
      </div>

      <Accordion data={data} setActiveAccordion={setActiveAccordion} />
    </Layout>
  );
};

export default Products;
