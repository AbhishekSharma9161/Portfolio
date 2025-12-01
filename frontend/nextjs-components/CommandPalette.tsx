"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Search, 
  Home, 
  User, 
  Briefcase, 
  Code, 
  MessageSquare, 
  Mail,
  ExternalLink,
  Command,
  X
} from "lucide-react";

interface NavigationItem {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  shortcut?: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: "Home",
    description: "Welcome to my personal site.",
    href: "/",
    icon: Home,
    shortcut: "G H"
  },
  {
    name: "About",
    description: "Learn more about me.",
    href: "/about",
    icon: User,
    shortcut: "G A"
  },
  {
    name: "Projects",
    description: "Showcase of my projects.",
    href: "/experience",
    icon: Code,
    shortcut: "G P"
  },
  {
    name: "Skills",
    description: "My technical expertise.",
    href: "/skills",
    icon: Briefcase,
    shortcut: "G S"
  },
  {
    name: "Testimonials",
    description: "What people say about me.",
    href: "/testimonials",
    icon: MessageSquare,
    shortcut: "G T"
  },
  {
    name: "Contact",
    description: "Get in touch with me.",
    href: "/contact",
    icon: Mail,
    shortcut: "G C"
  }
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = navigationItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="curved-element bg-white/5 border-white/20 text-white hover:bg-white/10 flex items-center gap-2 mt-2 -ml-0.5"
      >
        <Command className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg">
        <Card className="curved-element glass-effect border-white/20 bg-black/90 shadow-2xl">
          <CardContent className="p-0">
            {/* Search Header */}
            <div className="flex items-center border-b border-white/10 p-4">
              <Search className="h-4 w-4 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
                autoFocus
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 text-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Navigation Section */}
            <div className="p-2">
              <div className="mb-2 px-2 py-1">
                <span className="text-xs font-medium text-gray-400">Navigation</span>
              </div>
              <div className="space-y-1">
                {filteredItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center rounded-lg p-3 text-left hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 mr-3">
                        <Icon className="h-4 w-4 text-gray-300" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{item.name}</div>
                        <div className="text-xs text-gray-400">{item.description}</div>
                      </div>
                      {item.shortcut && (
                        <Badge variant="secondary" className="bg-white/5 text-xs text-gray-400 border-0">
                          {item.shortcut}
                        </Badge>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/10 p-3 text-xs text-gray-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="rounded bg-white/5 px-1.5 py-0.5">↵</kbd>
                  to select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded bg-white/5 px-1.5 py-0.5">ESC</kbd>
                  to close
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
