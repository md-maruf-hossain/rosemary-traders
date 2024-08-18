import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-green-600 text-white text-base font-semibold p-10">
      <nav className="grid grid-flow-col">
        <Link to="/about-us" className="link link-hover">About us</Link>|
        <Link to="/products" className="link link-hover">Our Products</Link>|
        <Link to="/why-choose-us" className="link link-hover">Why Choose Us</Link>|
        <Link to="/testimonial" className="link link-hover">Testimonial</Link>|
        <Link to="/contact-us" className="link link-hover">Contact Us</Link>

      </nav>
      <div>
        <p>Copyright © {new Date().getFullYear()} - Rosemary Traders. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
