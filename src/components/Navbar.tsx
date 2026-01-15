import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Building2, Key, Phone, Settings, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Accueil", icon: Home },
    { path: "/achat", label: "Acheter", icon: Building2 },
    { path: "/location", label: "Louer", icon: Key },
    { path: "/contact", label: "Contact", icon: Phone },
    { path: "/config", label: "Config", icon: Settings },
  ];

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 shrink-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg"
          : "bg-white/5 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-3 text-2xl font-bold transition-all duration-300 hover:scale-105"
          >
            <img
              src="/logo.png"
              alt="Nolcop Immobilier"
              className="w-10 h-10 object-contain rounded-full group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Nolcop Immobilier
            </span>
          </Link>

          {/* Desktop Navigation - lg screens and up */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                    isActiveLink(item.path)
                      ? "text-white bg-linear-to-r from-blue-500 to-purple-600 shadow-lg"
                      : "text-gray-700 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-lg bg-linear-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0 rotate-90 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Animated gradient border */}
      <div className="absolute bottom-0 shrink-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-purple-600/50" />

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-2xl transition-all duration-300 origin-top ${
          isMobileMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActiveLink(item.path)
                      ? "text-white bg-linear-to-r from-blue-500 to-purple-600 shadow-lg"
                      : "text-gray-700 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="font-medium">{item.label}</span>

                  {/* Hover effect for mobile */}
                  <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
