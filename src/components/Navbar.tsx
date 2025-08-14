'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-[#E5E7EB] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Logo.png"
                alt="Budgetify Marketing Agency"
                width={300}
                height={300}
                className="rounded-lg h-48 w-48"
              />
              {/* <span className="text-[#3B82F6] font-bold text-xl">
                Budgetify
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-[#374151] hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-[#374151] hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Services
              </Link>
              {/* <Link
                href="/portfolio"
                className="text-[#374151] hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Portfolio
              </Link> */}
              <Link
                href="#about"
                className="text-[#374151] hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-[#374151] hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="https://calendly.com/budgetifymarketingagency/30min"
              target='_blank'
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Get A Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#374151] hover:text-[#3B82F6] focus:outline-none focus:text-[#3B82F6]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-[#E5E7EB]">
              <Link
                href="/"
                className="text-[#374151] hover:text-[#3B82F6] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-[#374151] hover:text-[#3B82F6] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-[#374151] hover:text-[#3B82F6] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-[#374151] hover:text-[#3B82F6] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[#374151] hover:text-[#3B82F6] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link
                  href="/get-quote"
                  className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 