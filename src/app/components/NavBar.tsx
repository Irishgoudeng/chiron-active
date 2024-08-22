"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("PHP");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCurrencyMenu = () => {
    setIsCurrencyOpen(!isCurrencyOpen);
  };

  const handleCurrencyChange = (currency: React.SetStateAction<string>) => {
    setSelectedCurrency(currency);
    setIsCurrencyOpen(false);
  };

  const currencies = [
    { code: "PHP", flag: "/flags/ph.png" },
    { code: "USD", flag: "/flags/us.png" },
    { code: "EUR", flag: "/flags/eu.png" },
    { code: "GBP", flag: "/flags/gb.png" },
    { code: "CAD", flag: "/flags/ca.png" },
    { code: "ARS", flag: "/flags/ar.png" },
    { code: "AUD", flag: "/flags/au.png" },
    { code: "BRL", flag: "/flags/br.png" },
  ];

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        setShowNavbar(false);
      } else {
        // If scrolling up, show the navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-transparent z-50 transition-transform duration-300 ${
        showNavbar ? "transform translate-y-0 " : "transform -translate-y-full "
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side: Collections, Shop By, Brand */}
        <div className="hidden md:flex space-x-6">
          <div className="group relative">
            <a href="#" className="hover:text-gray-600">
              Women
            </a>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg hidden group-hover:block">
              <a href="#" className="block px-4 py-2">
                Collection 1
              </a>
              <a href="#" className="block px-4 py-2">
                Collection 2
              </a>
            </div>
          </div>
          <div className="group relative">
            <a href="#" className="hover:text-gray-600">
              Men
            </a>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg hidden group-hover:block">
              <a href="#" className="block px-4 py-2">
                Category 1
              </a>
              <a href="#" className="block px-4 py-2">
                Category 2
              </a>
            </div>
          </div>
          <div className="group relative">
            <a href="#" className="hover:text-gray-600">
              Categories
            </a>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg hidden group-hover:block">
              <a href="#" className="block px-4 py-2">
                Brand 1
              </a>
              <a href="#" className="block px-4 py-2">
                Brand 2
              </a>
            </div>
          </div>
        </div>

        {/* Burger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Logo */}

        <div className="w-32 h-16">
          <Image
            src="/assets/chiron-logo.png"
            alt="Logo"
            layout="intrinsic"
            width={1024}
            height={64}
          />
        </div>

        {/* Right Side: Currency, Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <button
              onClick={toggleCurrencyMenu}
              className="flex items-center focus:outline-none"
            >
              <span>{selectedCurrency}</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isCurrencyOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg">
                <div className="py-2 overflow-auto max-h-60">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => handleCurrencyChange(currency.code)}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      <span>{currency.code}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 12a7 7 0 0114 0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19a7 7 0 007-7H5a7 7 0 007 7z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#" className="relative hover:text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 3h18v18H3V3z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute top-0 right-0 w-4 h-4 bg-black text-white text-xs rounded-full flex items-center justify-center">
              1
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-4">
            <a href="#" className="block py-2">
              COLLECTIONS
            </a>
            <a href="#" className="block py-2">
              SHOP BY
            </a>
            <a href="#" className="block py-2">
              BRAND
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
