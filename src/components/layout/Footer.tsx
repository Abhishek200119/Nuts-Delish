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
        <div>
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-lg font-extrabold tracking-tight text-transparent"
          >
            NutsDelish
          </a>
          <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-[var(--text-muted)]">
            Building products worth using — one release at a time.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--text)]">
            Product
          </h4>
          <a href="/products" className={linkClasses}>
            Overview
          </a>
          <a href="/pricing" className={linkClasses}>
            Pricing
          </a>
          <a href="/changelog" className={linkClasses}>
            Changelog
          </a>
        </div>

        <div className="flex flex-col gap-2.5">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--text)]">
            Company
          </h4>
          <a href="/about" className={linkClasses}>
            About Us
          </a>
          <a href="/careers" className={linkClasses}>
            Careers
          </a>
          <a href="/contact" className={linkClasses}>
            Contact
          </a>
        </div>

        <div className="flex flex-col gap-2.5">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--text)]">
            Resources
          </h4>
          <a href="/blog" className={linkClasses}>
            Blog
          </a>
          <a href="/docs" className={linkClasses}>
            Docs
          </a>
          <a href="/support" className={linkClasses}>
            Support
          </a>
        </div>
      </div>

      <div className="relative border-t border-[color-mix(in_srgb,var(--border)_60%,transparent)] px-6 py-5 text-center text-xs text-[var(--text-muted)]">
        <p>&copy; {currentYear} NutsDelish. All rights reserved.</p>
      </div>
    </footer>
  );
}
