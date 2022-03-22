import SidebarSlider from "@components/SidebarSlider";
import { featuredProducts, ourProjects } from "_data/HomePageSlides";

const HomePageSidebar = () => {
  return (
    <>
      {/* <button className="visit-btn">Book a visit</button> */}

      <SidebarSlider
        heading="Featured Products"
        products={featuredProducts}
        className="border-b"
      />
      <SidebarSlider heading="Our Projects" products={ourProjects} />
    </>
  );
};

export default HomePageSidebar;
