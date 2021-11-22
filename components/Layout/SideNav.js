import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="logo">
        <img src="dalal-tiles.png" />
      </div>

      <div className="sm-links">
        <FaTwitter />
        <FaFacebook />
        <FaYoutube />
      </div>
    </div>
  );
};

export default SideNav;
