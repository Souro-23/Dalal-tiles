import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";

const SideNav = () => {
  const router = useRouter();
  return (
    <div className="side-nav">
      <div onClick={() => router.push("/")} className="logo">
        <img src="/dalal-tiles.png" />
      </div>

      <div className="sm-links">
        <a
          href="https://mobile.twitter.com/dalal_tiles?lang=en"
          target="_blank"
          rel="noreferrer"
          className="detail-btn"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.facebook.com/dalaltiles"
          target="_blank"
          rel="noreferrer"
          className="detail-btn"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/company/dalal-tiles/"
          target="_blank"
          rel="noreferrer"
          className="detail-btn"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default SideNav;
