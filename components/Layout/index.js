import SideNav from "@components/Layout/SideNav";
import Navbar from "@components/Layout/Navbar";
import CallNow from "@components/Layout/CallNow";
import Footer from "@components/Layout/Footer";
import HomePageSlider from "@section/HomePageSlider";
import HomePageSidebar from "@section/HomePageSidebar";

const Layout = () => {
  return (
    <div className="layout-container">
      <SideNav />
      <Navbar />
      <CallNow />
      <div className="main">
        <HomePageSlider />
      </div>
      <div className="sidebar">
        <HomePageSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
