import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-brown">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[60px] sm:h-[64px]">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo-nav.png"
              alt="Brutos ID"
              width={80}
              height={36}
              className="h-[30px] w-auto object-contain brightness-0 invert"
            />
            <span className="font-serif text-[17px] font-bold text-brand-cream tracking-[0.06em]">
              BRUTOS ID
            </span>
          </Link>

          {/* Center-Right: Nav links */}
          <div className="hidden sm:flex items-center gap-6 lg:gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-brand-cream/80 text-[13px] sm:text-[14px] hover:text-brand-cream transition-colors"
              >
                {l.label}
              </Link>
            ))}

            {/* Separator */}
            <span className="text-brand-cream/30 text-[18px] font-light">|</span>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                <FaFacebookF size={14} />
              </a>
              <a href="#" aria-label="Twitter" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                <FaTwitter size={15} />
              </a>
            </div>
          </div>

          {/* Mobile: just social icons */}
          <div className="flex sm:hidden items-center gap-3">
            <a href="#" aria-label="Instagram" className="text-brand-cream/80">
              <FaInstagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="text-brand-cream/80">
              <FaFacebookF size={16} />
            </a>
            <a href="#" aria-label="Twitter" className="text-brand-cream/80">
              <FaTwitter size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
