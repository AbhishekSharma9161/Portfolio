"use client";

import { Button } from "@/components/ui/button";
import CommandPalette from "@/components/CommandPalette";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Blog", path: "/blog" },
    { name: "More", path: "/testimonials" },
  ];

  const isActivePath = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const updateIndicator = () => {
      if (navRef.current) {
        const activeItem = navRef.current.querySelector(
          '[data-active="true"]',
        ) as HTMLElement;
        if (activeItem) {
          const navContainer = navRef.current;
          const containerRect = navContainer.getBoundingClientRect();
          const activeRect = activeItem.getBoundingClientRect();

          setIndicatorStyle({
            left: activeRect.left - containerRect.left,
            width: activeRect.width,
          });
        }
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [pathname]);

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-12 w-12 items-center justify-center mt-4 ml-6">
            <img
              src="/assets/logo.webp"
              alt="Abhishek Sharma Logo"
              className="h-12 w-12 object-contain rounded-lg"
            />
          </div>
        </Link>

        {/* Desktop Navigation - Centered with glass effect */}
        <div className="hidden md:flex">
          <div
            ref={navRef}
            className="glass-effect curved-element flex items-center space-x-1 px-6 py-2 mt-[15px] relative"
          >
            {/* Sliding white light indicator */}
            <div
              className="absolute top-2 bottom-2 rounded-full bg-gradient-to-r from-white/20 via-white/30 to-white/20 shadow-lg transition-all duration-300 ease-out"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.width > 0 ? 1 : 0,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse" />
            </div>

            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                data-active={isActivePath(item.path)}
                className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-white ${
                  isActivePath(item.path) ? "text-white" : "text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Command Palette Button */}
        <div className="hidden md:flex">
          <CommandPalette />
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
                  href={item.path}
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
                href="/contact"
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
