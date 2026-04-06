import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C1E16]">
      <div className="max-w-[1100px] mx-auto px-5 h-[68px] lg:h-[76px] flex items-center justify-between">
        {/* Logo — inverted for dark bg */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-footer.png"
            alt="Brutos ID"
            width={30}
            height={30}
            className="w-7 h-7 brightness-0 invert opacity-80"
          />
          <span className="font-serif text-[16px] font-bold text-[#E8DFD4] tracking-[0.02em]">
            BRUTOS ID
          </span>
        </Link>

        {/* Desktop: Nav links + separator + socials */}
        <div className="hidden sm:flex items-center gap-5">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-[#C5B9A8] hover:text-[#F5F0EB] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <span className="text-[#F5F0EB]/20 text-[16px]">|</span>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="text-[#C5B9A8] hover:text-[#F5F0EB] transition-colors">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="text-[#C5B9A8] hover:text-[#F5F0EB] transition-colors">
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-[#C5B9A8] hover:text-[#F5F0EB] transition-colors">
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile: just socials */}
        <div className="sm:hidden flex items-center gap-3">
          <a href="#" aria-label="Instagram" className="text-[#C5B9A8]">
            <FaInstagram className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Facebook" className="text-[#C5B9A8]">
            <FaFacebookF className="w-3.5 h-3.5" />
          </a>
          <a href="#" aria-label="Twitter" className="text-[#C5B9A8]">
            <FaTwitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
