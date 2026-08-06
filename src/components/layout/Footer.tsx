import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const linkClasses =
  "w-fit text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[color-mix(in_srgb,var(--border)_60%,transparent)] bg-[var(--background)] text-[var(--text-secondary)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(480px_circle_at_12%_0%,color-mix(in_srgb,var(--primary)_16%,transparent),transparent_60%),radial-gradient(420px_circle_at_88%_30%,color-mix(in_srgb,var(--accent)_22%,transparent),transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-8 pt-14 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">

        {/* Brand */}
        <div>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-lg font-extrabold tracking-tight text-transparent"
          >
            NutsDelish
          </Link>
          <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-[var(--text-muted)]">
            Premium dry fruits, seeds, spices & healthy foods — crafted for every home across India.
          </p>
          <div className="mt-5 flex flex-col gap-1.5 text-sm text-[var(--text-muted)]">
            <span>📍 Mumbai, Maharashtra, India</span>
            <span>✉️ hello@nutsdelish.com</span>
            <span>📞 +91 98765 43210</span>
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-2.5">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--text)]">
            Products
          </h4>
          <Link to="/products" className={linkClasses}>All Products</Link>
          <Link to="/products" className={linkClasses}>Dry Fruits</Link>
          <Link to="/products" className={linkClasses}>Healthy Seeds</Link>
          <Link to="/products" className={linkClasses}>Whole Spices</Link>

        </div>

        {/* Company */}
        <div className="flex flex-col gap-2.5">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--text)]">
            Company
          </h4>
          <Link to="/about" className={linkClasses}>About Us</Link>
          <Link to="/about" className={linkClasses}>Our Brands</Link>
          <Link to="/contact" className={linkClasses}>Contact</Link>

        </div>

        {/* Connect */}
        <div className="flex flex-col gap-2.5">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--text)]">
            Connect
          </h4>
          {/* <a href="#" className={linkClasses}>Instagram</a>
          <a href="#" className={linkClasses}>Facebook</a> */}
          <a href="#" className={linkClasses}>LinkedIn</a>
          {/* <a href="#" className={linkClasses}>Twitter / X</a> */}
          {/* <Link to="/contact" className={linkClasses}>Wholesale Enquiry</Link> */}
        </div>
      </div>

      <div className="relative border-t border-[color-mix(in_srgb,var(--border)_60%,transparent)] px-6 py-5 text-center text-xs text-[var(--text-muted)]">
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
