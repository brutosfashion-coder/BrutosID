import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const navLinks = [
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-brand-brown text-brand-cream">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-brand-cream"
            >
              <path
                d="M32 4C26 4 22 9 22 15C22 21 26 26 32 26C38 26 42 21 42 15C42 9 38 4 32 4Z"
                fill="currentColor"
              />
              <path
                d="M20 28C16 28 12 32 12 38L12 42L16 60L28 56L32 60L36 56L48 60L52 42L52 38C52 32 48 28 44 28L40 34L32 38L24 34L20 28Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-serif text-xl font-bold tracking-wide">
              BRUTOS ID
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-brand-cream/80 hover:text-brand-gold transition-colors duration-300"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-brand-cream/80 hover:text-brand-gold transition-colors duration-300"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-brand-cream/80 hover:text-brand-gold transition-colors duration-300"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-10">
          <div className="text-center lg:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-brand-cream/60">
              Get the latest updates and exclusive offers.
            </p>
          </div>
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 text-brand-cream placeholder-brand-cream/40 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button className="bg-brand-gold text-white uppercase tracking-wider px-6 py-3 text-sm font-medium hover:bg-opacity-90 transition-all duration-300 shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-xs text-brand-cream/40">
            &copy; 2024 Brutos ID. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
