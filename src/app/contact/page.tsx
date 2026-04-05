import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 lg:pt-24 pb-20 bg-brand-beige min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center py-16">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-brown mb-4">
              Get in Touch
            </h1>
            <p className="text-brand-charcoal/60 max-w-xl mx-auto">
              We would love to hear from you. Reach out to us with any questions
              or inquiries.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="w-full lg:w-3/5">
              <div className="bg-white rounded-lg shadow-sm p-8 sm:p-10">
                <h2 className="font-serif text-2xl font-semibold text-brand-brown mb-8">
                  Send a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-charcoal mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors bg-brand-beige/50"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-charcoal mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors bg-brand-beige/50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-charcoal mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors bg-brand-beige/50"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-charcoal mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors bg-brand-beige/50 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button type="submit" className="btn-gold-filled">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-2/5 space-y-8">
              <div>
                <h3 className="font-serif text-xl font-semibold text-brand-brown mb-3">
                  Visit Our Showroom
                </h3>
                <p className="text-brand-charcoal/60 leading-relaxed">
                  123 Gentleman&apos;s Lane
                  <br />
                  Suite 400
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-brand-brown mb-3">
                  Contact Details
                </h3>
                <p className="text-brand-charcoal/60 leading-relaxed">
                  Email: hello@brutosid.com
                  <br />
                  Phone: +1 (212) 555-0199
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-brand-brown mb-3">
                  Hours
                </h3>
                <p className="text-brand-charcoal/60 leading-relaxed">
                  Monday – Friday: 10am – 7pm
                  <br />
                  Saturday: 11am – 5pm
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
