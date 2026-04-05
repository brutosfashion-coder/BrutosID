import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function FooterLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-brand-cream"
    >
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse cx="50" cy="32" rx="14" ry="16" fill="currentColor" />
      <path d="M36 28C36 20 42 14 50 14C58 14 64 20 64 28C64 24 58 18 50 18C42 18 36 24 36 28Z" fill="currentColor" />
      <path d="M40 38C40 38 42 48 50 48C58 48 60 38 60 38" fill="currentColor" />
      <path d="M30 60C30 52 38 48 50 48C62 48 70 52 70 60L72 88L28 88L30 60Z" fill="currentColor" />
      <path d="M50 48L42 62L50 58L58 62L50 48Z" fill="white" opacity="0.3" />
      <path d="M46 48L50 56L54 48" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
  );
}

export default function Footer() {
  const navLinks = [
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#3C2A21] text-brand-cream">
      {/* Top Section: Logo + Nav + Social */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <FooterLogo />
            <span className="font-serif text-xl font-bold tracking-[0.12em]">
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

        {/* Newsletter Section + Image */}
        <div className="flex flex-col lg:flex-row items-center gap-10 py-10 lg:py-12">
          {/* Left: Newsletter */}
          <div className="w-full lg:w-1/2">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-brand-cream/60 mb-6">
              Get the latest updates and exclusive offers.
            </p>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-brand-cream/25 text-brand-cream placeholder-brand-cream/40 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button className="bg-[#C9A96E] text-white uppercase tracking-[0.15em] px-6 py-3 text-sm font-medium hover:bg-[#B8944D] transition-all duration-300 shrink-0">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right: Clothing Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1489370603040-dc6c28bc1a95?w=600&q=80"
                alt="Clothing flat lay"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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
