import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import About from '@/components/home/About';
import FeaturedCollection from '@/components/home/FeaturedCollection';
import WhyChoose from '@/components/home/WhyChoose';
import Testimonial from '@/components/home/Testimonial';
import Journal from '@/components/home/Journal';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <main className="bg-mist-light min-h-screen py-0 lg:py-4">
      <div className="device-frame">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <FeaturedCollection />
        <WhyChoose />
        <Testimonial />
        <Journal />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
