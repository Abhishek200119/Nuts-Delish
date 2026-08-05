import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color-mix(in_srgb,var(--border)_55%,transparent)] bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] backdrop-blur-xl backdrop-saturate-150">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="/"
          className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-2xl font-extrabold tracking-tight text-transparent"
        >
          NutsDelish
        </a>

        {/* Navigation */}
        <nav
          className={`absolute left-0 right-0 top-full flex flex-col overflow-hidden border-b border-[color-mix(in_srgb,var(--border)_60%,transparent)] bg-[color-mix(in_srgb,var(--surface)_95%,transparent)] shadow-lg backdrop-blur-xl transition-[max-height] duration-300 md:static md:flex-row md:items-center md:gap-2 md:overflow-visible md:border-none md:bg-transparent md:shadow-none md:backdrop-blur-none md:max-h-none ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-t border-[color-mix(in_srgb,var(--border)_50%,transparent)] px-6 py-4 text-sm font-medium text-[var(--text-secondary)] transition-all hover:bg-[color-mix(in_srgb,var(--primary)_10%,transparent)] hover:text-[var(--primary)] md:rounded-full md:border-none md:px-5 md:py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          {/* CTA Button */}
          <a
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-[860px]:inline-flex"
          >
            Get Started
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="block h-0.5 w-6 rounded-full bg-[var(--text)]"></span>
            <span className="block h-0.5 w-6 rounded-full bg-[var(--text)]"></span>
            <span className="block h-0.5 w-6 rounded-full bg-[var(--text)]"></span>
          </button>

        </div>
      </div>
    </header>
  );
}