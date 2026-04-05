import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream">
      {/* Top Bar: Logo + Nav + Social */}
      <div className="max-w-[1080px] mx-auto px-6 lg:px-10 pt-10 lg:pt-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-nav.png"
              alt=""
              width={99}
              height={44}
              className="h-[32px] w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="font-serif text-[18px] font-bold tracking-[0.08em] text-brand-cream">
              BRUTOS ID
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[14px] text-brand-cream/70 hover:text-brand-gold transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-brand-cream/70 hover:text-brand-gold transition-colors"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-brand-cream/70 hover:text-brand-gold transition-colors"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-brand-cream/70 hover:text-brand-gold transition-colors"
            >
              <FaTwitter size={17} />
            </a>
          </div>
        </div>

        {/* Newsletter + Image */}
        <div className="flex flex-col lg:flex-row items-center gap-8 py-10 lg:py-12">
          <div className="w-full lg:w-1/2">
            <h3 className="font-serif text-[20px] sm:text-[22px] font-semibold text-white mb-1.5">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-[14px] text-brand-cream/50 mb-5">
              Get the latest updates and exclusive offers.
            </p>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 bg-transparent border border-brand-cream/20 text-brand-cream placeholder-brand-cream/30 px-4 py-3 text-[14px] focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button className="bg-brand-gold text-white uppercase tracking-[0.15em] px-5 py-3 text-[13px] font-medium hover:bg-brand-gold-dark transition-colors shrink-0 cursor-pointer">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative h-48 sm:h-56 lg:h-60 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1489370603040-dc6c28bc1a95?w=700&q=80"
                alt="Clothing collection"
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
        <div className="max-w-[1080px] mx-auto px-6 lg:px-10 py-5">
          <p className="text-center text-xs text-brand-cream/30">
            &copy; 2024 Brutos ID. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
