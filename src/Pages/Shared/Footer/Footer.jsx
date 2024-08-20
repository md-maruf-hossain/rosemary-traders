import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="body-font bg-green-600">
      <div class="container px-5 py-12 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font items-center md:justify-start justify-center font-bold">
          <span class="ml-3 text-2xl uppercase text-white">Rosemary Traders</span>
        </a>
        <p class="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Copyright © {new Date().getFullYear()} - All right reserved by Rosemary Traders</p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-white">
          <Link to="/about-us" className="link link-hover mr-2">
            About us |
          </Link>
          <Link to="/products" className="link link-hover mr-2">
            Our Products |
          </Link>
          <Link to="/why-choose-us" className="link link-hover mr-2">
            Why Choose Us |
          </Link>
          <Link to="/testimonial" className="link link-hover mr-2">
            Testimonial |
          </Link>
          <Link to="/contact-us" className="link link-hover">
            Contact Us
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

<footer className="footer footer-center bg-green-600 text-white text-base font-semibold p-10">
  <aside>
    <nav className="grid grid-flow-col">
      <Link to="/about-us" className="link link-hover">
        About us
      </Link>
      |
      <Link to="/products" className="link link-hover">
        Our Products
      </Link>
      |
      <Link to="/why-choose-us" className="link link-hover">
        Why Choose Us
      </Link>
      |
      <Link to="/testimonial" className="link link-hover">
        Testimonial
      </Link>
      |
      <Link to="/contact-us" className="link link-hover">
        Contact Us
      </Link>
    </nav>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Rosemary Traders</p>
  </aside>
</footer>;
