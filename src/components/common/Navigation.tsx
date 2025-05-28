import React, { useState, useEffect } from "react";
import { Menu, X, User, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Jobs", path: "/jobs" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Update current path when component mounts or URL changes
    const updateCurrentPath = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for URL changes (for SPAs)
    window.addEventListener('popstate', updateCurrentPath);
    window.addEventListener("scroll", handleScroll);
    
    // Update path on mount
    updateCurrentPath();

    return () => {
      window.removeEventListener('popstate', updateCurrentPath);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if current path matches or starts with the nav item path
  const isActivePath = (navPath) => {
    if (navPath === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(navPath);
  };

  const handleNavClick = (path) => {
    setCurrentPath(path);
    setIsOpen(false);
  };

  const handleSignUp = () => {
    window.location.href = '/login?signup=true';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-2" 
          : "bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <div className="relative">
            <img 
              src="/lovable-uploads/d3c6ba39-b736-4a64-9d5f-2236e85b3f83.png" 
              alt="TVM IT Solutions Logo" 
              className={`transition-all duration-300 ${
                scrolled ? "h-16 w-auto" : "h-20 w-auto"
              } group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center space-x-1 bg-white/50 backdrop-blur-sm rounded-full px-2 py-1 border border-gray-200/50">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item.path)
                    ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                    : "text-gray-700 hover:text-blue-600 hover:bg-white/70"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {!isActivePath(item.path) && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a 
            href="/login"
            className="group flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 bg-white/70 hover:bg-white border border-gray-200/50 rounded-full transition-all duration-300 hover:shadow-md"
          >
            <User size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            Login
          </a>
          <button 
            onClick={handleSignUp}
            className="group flex items-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Sign Up
            <ChevronDown size={14} className="ml-1 group-hover:translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden relative p-2 text-gray-700 hover:text-blue-600 bg-white/70 hover:bg-white rounded-full border border-gray-200/50 transition-all duration-300 hover:shadow-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
              }`} 
            />
            <X 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ease-out origin-top ${
          isOpen 
            ? "opacity-100 scale-y-100 translate-y-0" 
            : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="mx-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 border border-gray-200/50 overflow-hidden">
          <div className="p-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-2 mb-6">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen ? 'slideInUp 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="space-y-3 pt-4 border-t border-gray-200/50">
              <a 
                href="/login"
                className="group flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 bg-gray-50 hover:bg-white border border-gray-200/50 rounded-xl transition-all duration-300 hover:shadow-md"
              >
                <User size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                Login
              </a>
              <button 
                onClick={handleSignUp}
                className="group flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                Sign Up
                <ChevronDown size={14} className="ml-1 group-hover:translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Navigation;