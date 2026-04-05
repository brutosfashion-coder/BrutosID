import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function FooterLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="47" stroke="#F5F0EB" strokeWidth="1.8" fill="none"/>
      <ellipse cx="50" cy="30" rx="13" ry="15" fill="#F5F0EB"/>
      <path d="M37 26C37 18 42 13 50 13C58 13 63 18 63 26C63 22 58 16 50 16C42 16 37 22 37 26Z" fill="#F5F0EB"/>
      <path d="M40 36C40 36 43 46 50 46C57 46 60 36 60 36" fill="#F5F0EB"/>
      <path d="M30 58C30 50 38 46 50 46C62 46 70 50 70 58L72 90L28 90L30 58Z" fill="#F5F0EB"/>
      <path d="M50 46L41 62L50 57L59 62L50 46Z" fill="#3C2A21" opacity="0.25"/>
      <path d="M46 46L50 55L54 46" stroke="#3C2A21" strokeWidth="1.5" fill="none" opacity="0.3"/>
    </svg>
  );
}

export default function Footer() {
  const nav = [
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-brand-brown text-brand-cream">
      {/* Top Bar: Logo + Nav + Social */}
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 pt-10 lg:pt-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2.5">
            <FooterLogo/>
            <span className="font-serif text-[20px] font-bold tracking-[0.1em] text-brand-cream">BRUTOS ID</span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-brand-cream/70 hover:text-brand-gold transition-colors"><FaInstagram size={18}/></a>
            <a href="#" aria-label="Facebook" className="text-brand-cream/70 hover:text-brand-gold transition-colors"><FaFacebookF size={16}/></a>
            <a href="#" aria-label="Twitter" className="text-brand-cream/70 hover:text-brand-gold transition-colors"><FaTwitter size={17}/></a>
          </div>
        </div>

        {/* Newsletter + Image */}
        <div className="flex flex-col lg:flex-row items-center gap-8 py-10 lg:py-12">
          <div className="w-full lg:w-1/2">
            <h3 className="font-serif text-xl sm:text-[22px] font-semibold text-white mb-1.5">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-brand-cream/50 mb-5">
              Get the latest updates and exclusive offers.
            </p>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 bg-transparent border border-brand-cream/20 text-brand-cream placeholder-brand-cream/35 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button className="bg-brand-gold text-white uppercase tracking-[0.15em] px-5 py-3 text-sm font-medium hover:bg-brand-gold-dark transition-colors shrink-0">
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
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-5">
          <p className="text-center text-xs text-brand-cream/35">&copy; 2024 Brutos ID. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
