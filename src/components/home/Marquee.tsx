'use client';

const items = [
  'Premium Fabric',
  'Tailored Fit',
  'Timeless Style',
  'Quiet Luxury',
  'Handcrafted Detail',
  'Old Money Aesthetic',
];

export default function Marquee() {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center flex-shrink-0">
      <span className="text-[15px] md:text-base font-body text-charcoal/35 whitespace-nowrap tracking-wide">
        {item}
      </span>
      <span className="mx-6 w-1 h-1 rounded-full bg-camel/30 flex-shrink-0" />
    </span>
  ));

  return (
    <div className="py-5 border-y border-mist/30 overflow-hidden">
      <div className="marquee-track flex animate-marquee">
        {content}
        {content}
      </div>
    </div>
  );
}
