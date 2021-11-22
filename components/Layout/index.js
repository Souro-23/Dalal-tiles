import SideNav from "@components/Layout/SideNav";
import Navbar from "@components/Layout/Navbar";
import CallNow from "@components/Layout/CallNow";
import Footer from "@components/Layout/Footer";

const Layout = () => {
  return (
    <div className="layout-container">
      <SideNav />
      <Navbar />
      <CallNow />
      <div className="main">Main</div>
      <div className="sidebar">Sidebar</div>
      <Footer />
    </div>
  );
};

export default Layout;
