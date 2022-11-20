import SideNav from "@components/Layout/SideNav";
import Navbar from "@components/Layout/Navbar";
import CallNow from "@components/Layout/CallNow";
import Footer from "@components/Layout/Footer";
import MobileNav from "./MoileNav";
import HomePageSidebar from "@section/HomePageSidebar";
import Meta from "@components/Meta";
import { motion } from "framer-motion";

const Layout = ({ children, sidebar }) => {
  return (
    <>
      <Meta />
      <MobileNav />
      <div className="layout-container">
        <SideNav />
        <Navbar />
        <CallNow />
        <motion.div
          className="main"
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          {children}
        </motion.div>
        <motion.div
          className="sidebar"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          {sidebar ? sidebar : <HomePageSidebar />}
        </motion.div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
