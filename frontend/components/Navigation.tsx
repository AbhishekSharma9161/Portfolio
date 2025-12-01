import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "More", path: "/testimonials" },
  ];

  const isActivePath = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-500 text-primary-foreground">
            <span className="text-lg font-bold">AS</span>
          </div>
        </Link>

        {/* Desktop Navigation - Centered with glass effect */}
        <div className="hidden md:flex">
          <div className="glass-effect curved-element flex items-center space-x-1 px-6 py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-white/10 ${
                  isActivePath(item.path)
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Book a Call Button */}
        <div className="hidden md:flex">
          <Button asChild className="curved-element bg-white/10 hover:bg-white/20 text-white border-white/20">
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-9 w-9 p-0 text-white hover:bg-white/10"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="glass-effect border-t border-white/10 md:hidden">
          <div className="container px-4 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActivePath(item.path)
                      ? "bg-white/10 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-lg bg-white/10 px-3 py-2 text-center text-sm font-medium text-white hover:bg-white/20"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
