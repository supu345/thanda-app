import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Logo from "../../assets/thanda.png";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Blogs",
    link: "/",
  },
  {
    name: "Best Places",
    link: "/",
  },
];

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50  bg-white backdrop-blur-sm text-black shadow-md dark:text-white dark:bg-black">
        <div className="bg-orange-500 px-5 text-white">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <div className="flex flex-row gap-4">
                <FaInstagram />
                <FaFacebookF />
                <FaYoutube />
                <FaXTwitter />
              </div>
              <p className="text-sm">
                SEARCHING FOR FRESH TASTY FRUIT JUICE Click Here
              </p>
              <div className="flex flex-row gap-4 items-center">
                <FaEnvelope />
                <p>example@gamil.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0 px-6">
          <div className="flex justify-between items-center">
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarLinks.map((data) => (
                  <li className="py-4" key={data.name}>
                    <NavLink to={data.link} activeClassName="active">
                      {data.name}
                    </NavLink>
                  </li>
                ))}
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4 font-bold text-2xl ">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="photo" className="h-[60px] w-[60px]" />
              </Link>
            </div>
            <div className="flex items-center gap-4 font-bold text-xl ">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <IoPersonOutline />
              </Link>
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <MdOutlineShoppingBag />
              </Link>
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <FaRegHeart />
              </Link>
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <button className="bg-pink-400 text-white font-medium text-xl px-6 py-1 rounded-full ml-9">
                  Order Now
                </button>
              </Link>
            </div>
            {/* <div>
              <button onClick={toggleDarkMode}>
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
              </button>
            </div> */}
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                Book Now
              </button>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Passing the state to ResponsiveMenu */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
