import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <section className="mt-[68px] py-20 bg-brand-cream min-h-screen">
        <div className="max-w-[700px] mx-auto px-5 sm:px-8">
          <h1 className="font-serif text-4xl font-bold text-brand-charcoal mb-4">Contact Us</h1>
          <p className="text-brand-muted mb-10">We would love to hear from you.</p>
          <form className="space-y-5">
            <input type="text" placeholder="Your Name" className="w-full bg-transparent border border-brand-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"/>
            <input type="email" placeholder="Your Email" className="w-full bg-transparent border border-brand-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"/>
            <textarea placeholder="Your Message" rows={5} className="w-full bg-transparent border border-brand-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"/>
            <button type="submit" className="btn-gold px-10 py-3 rounded-sm">SEND MESSAGE</button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
