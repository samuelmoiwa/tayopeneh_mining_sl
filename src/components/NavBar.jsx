import React, { useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../asset/logo.png"

import AOS from '../components/aosConfig';

const navigation = [
  { name: "HOME", href: "/", current: true },
  { name: "ABOUT", href: "/about", current: false },
  { name: "SERVICE", href: "/services", current: false },
  { name: "CONTACT US", href: "/contact", current: false },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on location change
  }, [location]);

  return (
    <nav className="sm:bg-white bg-white sm:bg-opacity-90 shadow top-0 w-full sm:fixed z-10" aria-label="Top">
      <div className="mx-auto px-4 sm:px-6 py-6 lg:px-8">
        <div className="flex justify-between sm:h-14 h-12">
          <div className="flex items-center ml-20">
            <NavLink to="/" className="text-xl font-bold text-orange-500">
              <img
                className="block h-10 w-auto lg:hidden"
                src={logo}
                alt="Your Company"
              />
              <img
                className="hidden h-16 w-auto lg:block"
                src={logo}
                alt="Your Company"
              />
            </NavLink>
          </div>

          <div className="flex items-center -mr-2 sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2
                          rounded-md text-orange-500 hover:text-white
                          hover:bg-orange-500 focus:outline-none focus:bg-orange-500
                          focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center w-full hidden sm:flex">
            <div className="hidden sm:flex sm:items-center sm:ml-6 mr-20">
              {navigation.map((item, index) => {
                let aosAnimation = ""; // Default empty animation

                 // Apply different animations based on item position
                if (index === 1 || index === 2 ) {
                  aosAnimation = "zoom-in"; // Apply 'zoom-in' animation to second and third items
                }
                if (index === 0){
                  aosAnimation = "fade-right"; // Apply 'fade-right' animation to items on the left
                }
                if (index === 3){
                  aosAnimation = "fade-left"; // Apply 'fade-left' animation to items on the right
                }

                return (
                  <NavLink
                    key={item.name}
                    exact
                    to={item.href}
                    className="px-3 py-2 rounded-sm text-lg font-bold text-orange-500 hover:text-white
                      hover:bg-orange-500 focus:outline-none focus:text-white focus:bg-orange-500 transition
                      duration-150 ease-in-out
                      "
                      activeClassName="bg-gray-100"
                      onClick={toggleMenu}
                      data-aos={aosAnimation}
                      data-aos-delay={`${index * 400}`} // Optional: Delay the animation for each item
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 flex flex-col justify-center items-center bg-gray-800">
            {navigation.map((item, index) => {
              let aosAnimation = ""; // Default empty animation

               // Apply different animations based on item position
              if (index === 1 || index === 2 ) {
                aosAnimation = "zoom-in"; // Apply 'zoom-in' animation to second and third items
              }
              if (index === 0){
                aosAnimation = "fade-right"; // Apply 'fade-right' animation to items on the left
              }
              if (index === 3){
                aosAnimation = "fade-left"; // Apply 'fade-left' animation to items on the right
              }

              return (
                <NavLink
                  key={item.name}
                  exact
                  to={item.href}
                  className="block px-3 py-2 rounded-sm text-base font-bold text-orange-500 hover:text-white hover:bg-orange-500 focus:outline-none focus:text-white focus:bg-orange-500 transition duration-150 ease-in-out"
                  activeClassName="bg-gray-100"
                  onClick={toggleMenu}
                  data-aos={aosAnimation}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
