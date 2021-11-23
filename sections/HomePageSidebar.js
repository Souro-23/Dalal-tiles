import SidebarSlider from "@components/SidebarSlider";

const HomePageSidebar = () => {
  return (
    <div className="homepage-sidebar">
      <button className="visit-btn">Book a visit</button>

      <SidebarSlider heading="Featured Products" className="border-b" />
      <SidebarSlider heading="Our Projects" />
    </div>
  );
};

export default HomePageSidebar;
