import { NavLink } from "./Navlink";

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
    </div>
  );
};

export default Navbar;
