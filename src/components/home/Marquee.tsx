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
  const track = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 flex-shrink-0">
      <span className="text-[14px] text-charcoal/30 tracking-[0.08em] uppercase whitespace-nowrap">
        {item}
      </span>
      <span className="flex gap-[3px] flex-shrink-0">
        <span className="w-[5px] h-[5px] rounded-[1px] bg-camel/25" />
        <span className="w-[5px] h-[5px] rounded-[1px] bg-camel/25" />
        <span className="w-[5px] h-[5px] rounded-[1px] bg-camel/25" />
      </span>
    </span>
  ));

  return (
    <div className="py-5 border-y border-sand/50 overflow-hidden">
      <div className="marquee-track flex items-center gap-8 animate-marquee">
        {track}
        {track}
      </div>
    </div>
  );
}
