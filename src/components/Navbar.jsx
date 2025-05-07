import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#service', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-black text-white fixed w-full top-0 left-0 z-50 shadow-md px-6 md:px-12 lg:px-16">
      <div className="container mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-1">
          <span className="text-white">Prince</span>
          <span className="text-green-400">Richard</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="hover:text-gray-300 transition duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <a
          href="https://www.linkedin.com/in/prince-richard-"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <button className="bg-gradient-to-r from-green-400 to-blue-500 px-5 py-2 rounded-full text-white transition-transform duration-300 hover:scale-105">
            Connect With Me
          </button>
        </a>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <Menu className="w-8 h-8 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-black text-white p-6 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute top-6 right-6"
          onClick={closeMenu}
          aria-label="Close Menu"
        >
          <X className="w-8 h-8 text-white" />
        </button>

        <div className="mt-16 space-y-6 text-lg text-center">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className="block hover:text-gray-400"
            >
              {label}
            </a>
          ))}

          <a
            href="https://www.linkedin.com/in/prince-richard-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full w-full transition-transform duration-300 hover:scale-105">
              Connect With Me
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
