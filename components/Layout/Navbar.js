import { NavLink } from "./Navlink";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-menu">
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

      {/* <a href="#" className="visit-btn">
        Book a visit
      </a> */}
      <div className="call-btn">
        <FaPhoneAlt />
      </div>
    </div>
  );
};

export default Navbar;
