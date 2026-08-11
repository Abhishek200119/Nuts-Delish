import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import nutsLogo from "../../assets/Logo/Nuts Logo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-[color-mix(in_srgb,var(--border)_55%,transparent)] bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] backdrop-blur-xl backdrop-saturate-150">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src={nutsLogo}
            alt="Nuts Delish"
           className="h-24 w-80 object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav
          className={`absolute left-0 right-0 top-full flex flex-col overflow-hidden border-b border-[color-mix(in_srgb,var(--border)_60%,transparent)] bg-[color-mix(in_srgb,var(--surface)_95%,transparent)] shadow-lg backdrop-blur-xl transition-[max-height] duration-300 md:static md:flex-row md:items-center md:gap-2 md:overflow-visible md:border-none md:bg-transparent md:shadow-none md:backdrop-blur-none md:max-h-none ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`border-t border-[color-mix(in_srgb,var(--border)_50%,transparent)] px-6 py-4 text-sm font-medium transition-all md:rounded-full md:border-none md:px-5 md:py-2 ${
                isActive(link.href)
                  ? "text-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_8%,transparent)]"
                  : "text-[var(--text-secondary)] hover:bg-[color-mix(in_srgb,var(--primary)_10%,transparent)] hover:text-[var(--primary)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-0.5 w-6 rounded-full bg-[var(--text)] transition-transform duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-[var(--text)] transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-[var(--text)] transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>

        </div>
      </div>
    </header>
  );
}