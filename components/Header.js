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
    <header className="sticky top-0 z-50 bg-[#1a232b] border-b border-b-[#243647] select-none">
      {/* Main header row with fluid horizontal padding */}
      <div className="flex items-center justify-between py-3 px-[clamp(16px,4vw,64px)]">
        {/* Left: Logo and company name */}
        <div className="flex items-center gap-3 text-gray-100">
          <div className="w-10 h-10 flex-shrink-0">
            <LogoIcon />
          </div>
          <h2 className="text-lg font-bold">CoolTech</h2>
        </div>

        {/* Center: Desktop Navigation (hidden on mobile) */}
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

        {/* Right: Search and Hamburger buttons */}
        <div className="flex items-center gap-2">
          <button
            className="flex items-center justify-center rounded-xl h-10 bg-[#243647] text-white px-2.5"
            onClick={() => setShowSearch((prev) => !prev)}
            aria-label="Toggle search"
          >
            <SearchIcon />
          </button>
          <button
            className="flex items-center justify-center rounded-xl h-10 bg-[#243647] text-white px-2.5 md:hidden"
            onClick={() => setShowMobileMenu((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Mobile search input with fluid horizontal padding */}
      {showSearch && (
        <div className="px-[clamp(16px,4vw,64px)] py-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md p-2 text-black"
          />
        </div>
      )}

      {/* Mobile navigation menu with fluid horizontal padding */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          showMobileMenu
            ? "max-h-screen opacity-100 py-3"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <nav className="bg-[#1a232b] border-t border-b-[#243647]">
          <div className="flex flex-col gap-3 px-[clamp(16px,4vw,64px)] text-gray-100">
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
