import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-heading font-bold text-center text-green-700 mb-4"
          data-aos="fade-down"
        >
          📬 Get in Touch
        </h2>
        <p
          className="text-lg text-center text-gray-600 mb-12"
          data-aos="fade-down"
        >
          We'd love to hear from you. Whether you have a question or just want to say hi!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div data-aos="fade-right" className="bg-white p-8 shadow-lg rounded-2xl">
            <h3 className="text-2xl font-heading text-green-600 mb-6">Contact Information</h3>
            <p className="text-gray-700 mb-4">
              📍 <span className="font-semibold">Location:</span> India
            </p>
            <p className="text-gray-700 mb-4">
              📞 <span className="font-semibold">Phone:</span> +91 6305535725
            </p>
            <p className="text-gray-700 mb-4">
              📧 <span className="font-semibold">Email:</span>{' '}
              <a
                href="mailto:example@email.com"
                className="text-green-600 hover:underline"
              >
                info@webstart.com
              </a>
            </p>
            <p className="text-gray-700">
              🕐 <span className="font-semibold">Hours:</span> Mon–Fri, 9am–6pm
            </p>
          </div>

          {/* Contact Form */}
          <form
            data-aos="fade-left"
            className="bg-white p-8 shadow-lg rounded-2xl space-y-6"
          >
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
