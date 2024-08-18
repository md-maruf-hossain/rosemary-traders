import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-green-600 text-white">
      <div className="navbar-start">
        {/* /navbar drop down for phone */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-green-600 text-white font-medium rounded-box z-[1] mt-3 w-52 p-2 ">
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/products">Our Products</Link>
            </li>
            <li>
              <Link to="/why-choose-us">Why Choose Us</Link>
            </li>
            <li>
              <Link to="/testimonial">Testimonial</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* /navbar drop down for phone */}
        <a className="btn btn-ghost text-xl">Rosemary Traders</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/products">Our Products</Link>
          </li>
          <li>
            <Link to="/why-choose-us">Why Choose Us</Link>
          </li>
          <li>
            <Link to="/testimonial">Testimonial</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
