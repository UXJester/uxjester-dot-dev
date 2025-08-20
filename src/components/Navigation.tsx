"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "Home", isActive: pathname === "/" },
    { href: "/about", label: "About", isActive: pathname === "/about" },
    { href: "/blog", label: "Blog", isActive: pathname.startsWith("/blog") },
    { href: "/uses", label: "Uses", isActive: pathname === "/uses" },
  ];

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden space-x-6 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`transition-colors hover:text-blue-600 ${
              item.isActive
                ? "underline decoration-orange-300 decoration-2 underline-offset-8"
                : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex h-8 w-8 flex-col items-center justify-center space-y-1 md:hidden"
        aria-label="Toggle navigation menu"
      >
        <span
          className={`block h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-20 right-0 bottom-0 left-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-24 left-1/2 z-50 w-[90%] -translate-x-1/2 rounded-lg border border-gray-500 bg-white shadow-lg md:hidden">
          <div className="py-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-3 text-lg transition-colors hover:bg-gray-50 hover:text-blue-600 ${
                  item.isActive ? "font-medium text-blue-600" : ""
                } ${index < navItems.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
