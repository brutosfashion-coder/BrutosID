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
    <footer className="bg-[#EDE6DD] border-t border-[#C5B9A8]/40">
      <div className="max-w-[1100px] mx-auto px-5 h-[56px] lg:h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-head.png" alt="Brutos ID" width={28} height={28} className="w-7 h-7" />
          <span className="font-serif text-[16px] font-bold text-[#3B2F2F] tracking-[0.02em]">BRUTOS ID</span>
        </Link>

        {/* Desktop: Nav links + separator + socials */}
        <div className="hidden sm:flex items-center gap-5">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-[13px] text-[#8C7E74] hover:text-[#3B2F2F] transition-colors">
              {l.label}
            </Link>
          ))}
          <span className="text-[#3B2F2F]/20 text-[16px]">|</span>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="text-[#3B2F2F]/70 hover:text-[#3B2F2F] transition-colors"><FaInstagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="text-[#3B2F2F]/70 hover:text-[#3B2F2F] transition-colors"><FaFacebookF className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="Twitter" className="text-[#3B2F2F]/70 hover:text-[#3B2F2F] transition-colors"><FaTwitter className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Mobile: just socials */}
        <div className="sm:hidden flex items-center gap-3">
          <a href="#" aria-label="Instagram" className="text-[#3B2F2F]/70"><FaInstagram className="w-4 h-4" /></a>
          <a href="#" aria-label="Facebook" className="text-[#3B2F2F]/70"><FaFacebookF className="w-3.5 h-3.5" /></a>
          <a href="#" aria-label="Twitter" className="text-[#3B2F2F]/70"><FaTwitter className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
