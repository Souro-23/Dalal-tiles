import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { useRouter } from 'next/router'


const SideNav = () => {
  const router = useRouter()
  return (
    <div className="side-nav">
      <div onClick={()=>router.push('/')} className="logo">
        <img src="/dalal-tiles.png" />
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
