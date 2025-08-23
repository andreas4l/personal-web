"use client";

import Image from "next/image";
import { SearchInput } from "./app-search";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function AppNavbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(false);
        setOpen(false); // auto close desktop
      } else {
        setIsMobile(true);
      }
    };

    handleResize(); // init
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="top-0 left-0 w-full z-50 fixed py-4 bg-white shadow">
      {/* Desktop & mobile container */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/codebert.svg"
          alt="CODEBERT"
          width={200}
          height={100}
          className="cursor-pointer hidden md:block"
        />
        {/* Desktop menu */}
        {!isMobile && (
          <ul className="flex-1 hidden md:flex gap-14 font-bold items-center justify-center">
            <li className="hover:bg-[#0938FE] px-2 py-2 hover:text-white rounded-md">
              <a href="#home">Home</a>
            </li>
            <li className="hover:bg-[#0938FE] px-2 py-2 hover:text-white rounded-md">
              <a href="#about">About</a>
            </li>
            <li className="hover:bg-[#0938FE] px-2 py-2 hover:text-white rounded-md">
              <a href="#projrct">Project</a>
            </li>
            <li className="hover:bg-[#0938FE] px-2 py-2 hover:text-white rounded-md">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
        {/* Desktop search */}
        {!isMobile && <SearchInput />}
        {/* Mobile center search */}
        {isMobile && (
          <div className="flex-1 flex justify-between items-center gap-4">
            <Image
              src="/codebert.svg"
              alt="CODEBERT"
              width={150}
              height={60}
              className="cursor-pointer md:hidden"
            />
            <SearchInput />
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="absolute top-full w-full bg-white shadow-md flex flex-col p-6 gap-6 text-lg font-bold animate-slideDown items-center">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="hover:text-[#0938FE]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="hover:text-[#0938FE]"
          >
            About
          </a>
          <a
            href="#project"
            onClick={() => setOpen(false)}
            className="hover:text-[#0938FE]"
          >
            Project
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="hover:text-[#0938FE]"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
