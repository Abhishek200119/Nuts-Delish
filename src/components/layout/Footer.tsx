import { Link } from "react-router-dom";
import nutsLogo from "../../assets/Logo/Nuts Logo.png";

const currentYear = new Date().getFullYear();

const linkClasses =
  "w-fit text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[color-mix(in_srgb,var(--border)_60%,transparent)] bg-[var(--background)] text-[var(--text-secondary)]">

      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(480px_circle_at_12%_0%,color-mix(in_srgb,var(--primary)_16%,transparent),transparent_60%),radial-gradient(420px_circle_at_88%_30%,color-mix(in_srgb,var(--accent)_22%,transparent),transparent_60%)]"
      />

      {/* Main Footer Content */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-9 sm:grid-cols-2 md:grid-cols-[2.3fr_1fr_1fr_1fr] lg:px-10">

        {/* Brand / Contact */}
        <div>

          {/* Logo */}
          <Link
            to="/"
            className="inline-flex items-center"
          >
            <img
              src={nutsLogo}
              alt="Nuts Delish"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Description */}
          <p className="mt-3 max-w-[42ch] text-sm leading-6 text-[var(--text-muted)]">
            Premium dry fruits, seeds, spices & healthy foods crafted for
            every home across India.
          </p>

          {/* Contact Details */}
          <div className="mt-5 flex max-w-[520px] flex-col gap-2.5 text-sm leading-5 text-[var(--text-muted)]">

            {/* Address */}
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-sm">
                📍
              </span>

              <span>
                #1317, Manushri Homes, AECS Layout - D Block,
                AECS Layout, Marathahalli, Bengaluru,
                Karnataka 560037
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="shrink-0 text-sm">
                ✉️
              </span>

              <a
                href="mailto:Care@nutsdelish.in"
                className="transition-colors hover:text-[var(--primary)]"
              >
                Care@nutsdelish.in
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="shrink-0 text-sm">
                📞
              </span>

              <a
                href="tel:+911141609569"
                className="transition-colors hover:text-[var(--primary)]"
              >
                +91 11-41609569
              </a>
            </div>

          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-2">

          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--text)]">
            Products
          </h4>

          <Link to="/products" className={linkClasses}>
            All Products
          </Link>

          <Link to="/products" className={linkClasses}>
            Dry Fruits
          </Link>

          <Link to="/products" className={linkClasses}>
            Healthy Seeds
          </Link>

          <Link to="/products" className={linkClasses}>
            Whole Spices
          </Link>

        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">

          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--text)]">
            Company
          </h4>

          <Link to="/about" className={linkClasses}>
            About Us
          </Link>

          <Link to="/about" className={linkClasses}>
            Our Brands
          </Link>

          <Link to="/contact" className={linkClasses}>
            Contact
          </Link>

        </div>

        {/* Connect */}
        <div className="flex flex-col gap-2">

          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--text)]">
            Connect
          </h4>

          <a
            href="#"
            className={linkClasses}
          >
            LinkedIn
          </a>

        </div>

      </div>

      {/* Copyright */}
      <div className="relative border-t border-[color-mix(in_srgb,var(--border)_60%,transparent)] px-6 py-4 text-center text-xs text-[var(--text-muted)]">

        <p>
          &copy; {currentYear} Nuts Delish Private Limited. All rights reserved.
          &nbsp;·&nbsp;
          <span>FSSAI Certified</span>
          &nbsp;·&nbsp;
          <span>Made with ❤️ in India</span>
        </p>

      </div>

    </footer>
  );
}