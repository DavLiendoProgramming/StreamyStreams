import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4 mb-12">
      <div className="flex items-center flex-shrink-0 text-white mr-6 ">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <Link
          to="/"
          className="font-semibold text-xl tracking-tight text-white"
        >
          Stream CSS
        </Link>
      </div>
      <div className="w-full block flex-grow items-center lg:flex lg:items-center md:w-auto md:justify-between  lg:w-auto lg:justify-end">
        <div className="text-base lg:flex">
          <Link
            to="/"
            className="block mt-2 lg:inline-block md:inline-block md:mt-0  lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Streamy
          </Link>
          <a
            href="#responsive-header"
            className="block mt-2 md:inline-block  lg:inline-block md:mt-0  lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-2 md:inline-block  lg:inline-block md:mt-0  lg:mt-0 text-teal-200 hover:text-white mr-4  justify-end"
          >
            Blog
          </a>
        </div>
      </div>
      <GoogleAuth className=" block mt-2 md:inline-block  lg:inline-block md:mt-0  lg:mt-0 text-teal-200 hover:text-white mr-4" />
    </nav>
  );
};

export default Header;
