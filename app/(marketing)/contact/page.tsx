import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HEADER WITH BACKGROUND IMAGE */}
      <section className="relative h-[450px] flex items-center justify-center text-center text-white">

        {/* Background Image */}
        <img
          src="/images/Contact.jpg"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold mb-4">
            Get in <span className="text-green-400">Touch</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Have questions about our platform or need help finding the right tutor?
            Our team is here to support your learning journey.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-20">
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Contact Information
            </h2>

            {/* Location */}
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-green-100 p-3 rounded-lg">
                <MapPin className="text-green-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Our Location</h4>
                <p className="text-gray-800">
                  123 Galle Road, Colombo 03,<br />
                  Sri Lanka
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-green-100 p-3 rounded-lg">
                <Mail className="text-green-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email Support</h4>
                <p className="text-gray-800">
                  support@mentora.lk <br />
                  info@mentora.lk
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Phone className="text-green-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phone Number</h4>
                <p className="text-gray-800">
                  +94 11 234 5678 <br />
                  +94 77 123 4567
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-6">Send Message</h2>

            <form className="space-y-4">

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <textarea
                rows={5}
                placeholder="Your message here..."
                className="w-full p-3 rounded-lg bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 transition py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gray-300 h-[350px] rounded-xl flex items-center justify-center">
          <span className="bg-green-500 text-white px-4 py-2 rounded-full">
            Mentora HQ
          </span>
        </div>
      </section>

    </div>
  );
}