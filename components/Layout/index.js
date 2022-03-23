import SideNav from "@components/Layout/SideNav";
import Navbar from "@components/Layout/Navbar";
import CallNow from "@components/Layout/CallNow";
import Footer from "@components/Layout/Footer";
import MobileNav from "./MoileNav";
import HomePageSidebar from "@section/HomePageSidebar";
import Meta from "@components/Meta";

const Layout = ({ children, sidebar }) => {
  return (
    <>
      <Meta />
      <MobileNav />
      <div className="layout-container">
        <SideNav />
        <Navbar />
        <CallNow />
        <div className="main">{children}</div>
        <div className="sidebar">{sidebar ? sidebar : <HomePageSidebar />}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
