import React, { useState } from "react";
import { FaEnvira } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar = () => {
  let Links = [
    { name: "  Home", link: "/" },
    { name: "   Rooms", link: "/rooms" },
    { name: "  Blog", link: "/blog" },
    { name: "About Us", link: "/about-us" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div
      className="shadow-md w-full 
        "
    >
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 ">
        <Link to="/">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="text-3xl text-green-600 mr-1 pt-2">
              <FaEnvira />
            </span>
            Abdul Aziz
          </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <HiX /> : <HiMenu />}
          {/* <HiMenu name={open ? "close" : "menu"} /> */}
        </div>

        {/* <div className="md:flex md:items-center sm:flex-col md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
          <div className="bg-green">
            <Link className="md:ml-8 text-lg text-black" to="/">
              Home
            </Link>
            <Link className="md:ml-8 text-lg text-black" to="/rooms">
              Rooms
            </Link>
            <Link className="md:ml-8 text-lg text-black" to="/blog">
              Blog
            </Link>
            <Link className="md:ml-8 text-lg text-black" to="/about-us">
              About Us
            </Link>
            <Link className="md:ml-8 text-lg text-black" to="/about-us">
              Contact
            </Link>
          </div>
        </div> */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
