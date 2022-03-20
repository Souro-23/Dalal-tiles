import { useState } from "react";
import { NavLink } from "./Navlink";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="mobile-nav">
        <div className="logo">
          <img src="/dalal-tiles.png" />
        </div>

        {/* <a href="#" className="visit-btn">
          Book a visit
        </a> */}
        <div className="call-btn">
          <FaPhoneAlt />
        </div>

        <RiMenu3Line
          style={{ fontSize: "2rem" }}
          onClick={() => setIsActive(true)}
        />
      </div>
      <div className={isActive ? "mob-nav-menu active" : "mob-nav-menu"}>
        <div className="close-btn" onClick={() => setIsActive(false)}>
          <CgClose />
        </div>
        <NavLink href="/" exact className="nav-link">
          Home
        </NavLink>

        <NavLink href="/about" className="nav-link">
          About
        </NavLink>

        <NavLink href="/products" className="nav-link">
          Products
        </NavLink>

        <NavLink href="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default MobileNav;
