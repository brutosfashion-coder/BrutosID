import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import About from "@/components/home/About";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import WhyChoose from "@/components/home/WhyChoose";
import Testimonial from "@/components/home/Testimonial";
import Journal from "@/components/home/Journal";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <FeaturedCollection />
      <WhyChoose />
      <Testimonial />
      <Journal />
      <Newsletter />
    </>
  );
}
