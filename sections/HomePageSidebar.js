import SidebarSlider from "@components/SidebarSlider";

const HomePageSidebar = () => {
  return (
    <>
      {/* <button className="visit-btn">Book a visit</button> */}

      <SidebarSlider heading="Featured Products" className="border-b" />
      <SidebarSlider heading="Our Projects" />
    </>
  );
};

export default HomePageSidebar;
