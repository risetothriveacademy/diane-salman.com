"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT ME",
    href: "/about",
    hasDropdown: true,
    subItems: [
    { label: "Author", href: "/author" },
     { label: "Speaking", href: "/speaking" },
      { label: "Legacy Maker", href: "/legacy-member" },
    ],
  },
  {
    label: "TRAUMA AND MENTAL HEALTH",
    href: "/trauma-and-mental-health",
    hasDropdown: true,
    subItems: [
      { label: "Mental Health Conditions", href: "/mental-health-conditions" },
    ],
  },
  {
    label: "3 SPHERE RECOVERY METHOD",
    href: "/recovery-methods",
    hasDropdown: true,
    subItems: [
      { label: "Medication", href: "/medication" },
      { label: "Therapy", href: "/therapy" },
      { label: "Spiritual Inner Healing", href: "/spiritual-inner-healing" },
    ],
  },
  {
    label: "NON-CLINICIANS",
    href: "/non-clinicians",
    hasDropdown: true,
    subItems: [
      { label: "Family Members", href: "/family-members" },
      { label: "Church", href: "/church" },
      { label: "Social Groups", href: "/social-groups" },
    ],
  },
  { label: "BLOGS", href: "/blogs" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        {/* Logo */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-gray-900">
              TORAH MATHEWS
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block border-t border-gray-200 pt-4">
          <ul className="flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.hasDropdown && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium tracking-wide text-gray-700 hover:text-gray-900 transition-colors py-2"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.subItems && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-md py-2 transition-all duration-200 ${
                      openDropdown === item.label
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-center border-t border-gray-200 pt-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium tracking-wide text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && item.subItems && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
