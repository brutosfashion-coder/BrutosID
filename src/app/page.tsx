import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import DiscoverCollection from '@/components/home/DiscoverCollection';
import FeaturedCollection from '@/components/home/FeaturedCollection';
import QuoteSection from '@/components/home/QuoteSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <DiscoverCollection />
      <FeaturedCollection />
      <QuoteSection />
    </>
  );
}
