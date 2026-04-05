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
    <footer className="bg-[#3C2A21]">
      <div className="max-w-[1100px] mx-auto px-5 h-[56px] lg:h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-head.png" alt="Brutos ID" width={28} height={28} className="w-7 h-7 brightness-0 invert" />
          <span className="font-serif text-[16px] font-bold text-[#F5F0EB] tracking-[0.02em]">BRUTOS ID</span>
        </Link>

        {/* Nav links + divider + socials */}
        <div className="hidden sm:flex items-center gap-5">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-[13px] text-[#F5F0EB]/70 hover:text-[#F5F0EB] transition-colors">
              {l.label}
            </Link>
          ))}
          <span className="text-[#F5F0EB]/30 text-[16px]">|</span>
          <div className="flex items-center gap-3">
            <a href="#" className="text-[#F5F0EB]/70 hover:text-[#F5F0EB] transition-colors"><FaInstagram className="w-4 h-4" /></a>
            <a href="#" className="text-[#F5F0EB]/70 hover:text-[#F5F0EB] transition-colors"><FaFacebookF className="w-3.5 h-3.5" /></a>
            <a href="#" className="text-[#F5F0EB]/70 hover:text-[#F5F0EB] transition-colors"><FaTwitter className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Mobile: just socials */}
        <div className="sm:hidden flex items-center gap-3">
          <a href="#" className="text-[#F5F0EB]/70"><FaInstagram className="w-4 h-4" /></a>
          <a href="#" className="text-[#F5F0EB]/70"><FaFacebookF className="w-3.5 h-3.5" /></a>
          <a href="#" className="text-[#F5F0EB]/70"><FaTwitter className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
