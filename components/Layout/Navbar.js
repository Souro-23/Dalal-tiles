import { NavLink } from "./Navlink";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";


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
        <Link href="tel:+919891924243">
          <a>
            <FaPhoneAlt />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
