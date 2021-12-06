import SidebarSlider from "@components/SidebarSlider";
import { OurClients } from "_data/OurClients";

const AboutPageSidebar = () => {
  return (
    <>
      <button className="visit-btn">Book a visit</button>

      <SidebarSlider heading="Featured Products" className="border-b" />

      <div className="our-clients">
        <div className="sidebar-heading">Our clients</div>
        <div className="grid-3 ">
          {OurClients.map((client, index) => (
            <img src={client.logo} alt={client.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPageSidebar;
