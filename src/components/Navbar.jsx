"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return href.startsWith("#") ? false : pathname === href;
  };

  const handleAnchorClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900 shadow-lg border-b border-slate-700"
          : "bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent hover:scale-105 transition"
        >
          Hemanshu
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`relative transition-colors duration-300 ${
                  isActive(item.href)
                    ? "text-blue-500"
                    : "text-slate-300 hover:text-blue-500"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></span>
                )}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu Button + Theme Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer group"
          >
            <span
              className={`h-0.5 w-full bg-blue-500 rounded transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-blue-500 rounded transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-blue-500 rounded transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-in fade-in slide-in-from-top-2">
          <ul className="flex flex-col gap-2 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className={`block py-2 px-3 rounded transition-colors ${
                    isActive(item.href)
                      ? "bg-blue-500 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;