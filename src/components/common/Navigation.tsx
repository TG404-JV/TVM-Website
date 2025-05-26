
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/d3c6ba39-b736-4a64-9d5f-2236e85b3f83.png" 
            alt="TVM IT Solutions Logo" 
            className="h-24 w-auto" // Increased from h-16 to h-24 (50% increase)
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-tvm-blue bg-tvm-blue/10"
                  : "text-tvm-darkGray hover:text-tvm-blue hover:bg-tvm-blue/5"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/login">
            <Button variant="outline" size="sm" className="ml-2">
              <User size={16} className="mr-2" />
              Login
            </Button>
          </Link>
          <Button className="ml-2" size="sm" onClick={() => window.location.href = '/login?signup=true'}>
            Sign Up
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-tvm-darkGray"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="container-custom py-4 flex flex-col space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-3 rounded-md text-sm font-medium ${
                location.pathname === item.path
                  ? "text-tvm-blue bg-tvm-blue/10"
                  : "text-tvm-darkGray hover:text-tvm-blue hover:bg-tvm-blue/5"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/login" className="w-full">
            <Button variant="outline" className="w-full flex items-center justify-center" size="sm">
              <User size={16} className="mr-2" />
              Login
            </Button>
          </Link>
          <Link to="/login?signup=true" className="w-full">
            <Button className="w-full" size="sm">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
