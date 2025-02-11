// components/Header.js
"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "./LogoIcon";
import SearchIcon from "./SearchIcon";
import HamburgerIcon from "./HamburgerIcon";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1a232b] border-b border-b-[#243647] select-none transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 py-3 flex flex-wrap items-center justify-between">
        {/* Logo and company name */}
        <div className="flex items-center gap-3 sm:gap-4 text-gray-100">
          <div className="w-10 h-10 flex-shrink-0">
            <LogoIcon />
          </div>
          <h2 className="text-lg font-bold">CoolTech</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9 text-gray-100">
          <Link
            href="#"
            className="text-sm md:text-base font-medium hover:text-white"
          >
            Solutions
          </Link>
          <Link
            href="#"
            className="text-sm md:text-base font-medium hover:text-white"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-sm md:text-base font-medium hover:text-white"
          >
            Industries
          </Link>
          <Link
            href="#"
            className="text-sm md:text-base font-medium hover:text-white"
          >
            Resources
          </Link>
          <Link
            href="#"
            className="text-sm md:text-base font-medium hover:text-white"
          >
            About
          </Link>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Search Button */}
          <button
            className="flex items-center justify-center rounded-xl h-10 bg-[#243647] text-white px-2.5"
            onClick={() => setShowSearch((prev) => !prev)}
            aria-label="Toggle search"
          >
            <SearchIcon />
          </button>

          {/* Hamburger Button (visible on mobile) */}
          <button
            className="flex items-center justify-center rounded-xl h-10 bg-[#243647] text-white px-2.5 md:hidden"
            onClick={() => setShowMobileMenu((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Mobile search input */}
      {showSearch && (
        <div className="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md p-2 text-black"
          />
        </div>
      )}

      {/* Mobile navigation menu with sliding animation */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          showMobileMenu ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="bg-[#1a232b] border-t border-b-[#243647]">
          <div className="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 py-3 flex flex-col gap-3 text-gray-100">
            <Link href="#" className="text-sm font-medium hover:text-white">
              Solutions
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-white">
              Products
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-white">
              Industries
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-white">
              Resources
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-white">
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
