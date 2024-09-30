import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // Corrected variable naming

  const links = ["Home", "Contact", "Services", "About"];

  return (
    <nav className="border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://mandihouse230.netlify.app/assets/images/logo.webp"
            className="h-12 rounded-full"
            alt="Mandi House Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Mandi House
          </span>
        </Link>

        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`w-full md:block md:w-auto ${
            isNavOpen ? "block" : "hidden"
          } sm:hidden`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.toLowerCase()}
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current={link === "Home" ? "page" : undefined} // Use aria-current conditionally
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <i className="ri-arrow-right-up-line"></i>
        </div>

        <div className="flex flex-row items-center justify-between ga2">
          <i className="ri-shopping-cart-line"></i>
          <Link to="/getstarted">
            <button className="btn" aria-label="Get Started">
              <span className="sparkle">
                <svg
                  height="24"
                  width="24"
                  fill="#FFFFFF"
                  viewBox="0 0 24 24"
                  data-name="Layer 1"
                  id="Layer_1"
                >
                  <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                </svg>
              </span>
              <span className="text">Get Started</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
