import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaMapMarkerAlt,
  FaLinkedin,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const API = import.meta.env.VITE_FORM_ACCESS_KEY;

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [result, setResult] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult({ type: "", message: "" });

    const formData = new FormData(event.target);
    formData.append("access_key", API);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();
        setResult({
          type: "success",
          message: "Message sent successfully. We will get back to you soon.",
        });
      } else {
        setResult({
          type: "error",
          message: "Something went wrong. Please try again in a moment.",
        });
      }
    } catch (error) {
      setResult({
        type: "error",
        message: "Unable to send your message right now. Please email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[50vh] py-8 sm:py-10 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-heading font-bold text-center text-gray-900 mb-4"
          data-aos="fade-down"
        >
          Get in Touch
        </h2>
        <p
          className="text-base sm:text-lg text-center text-gray-600 mb-8 sm:mb-12"
          data-aos="fade-down"
        >
          We’d love to hear from you. Here’s how you can reach us.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
          <div className="bg-white/85 backdrop-blur-md border border-white shadow-xl rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6" data-aos="fade-up">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading">Send us a message</h3>
              <p className="text-sm text-gray-600 mt-1">Tell us a bit about your project and goals.</p>
            </div>

            <form className="text-black space-y-5" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="bg-white mt-1 block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 focus:ring-2 focus:ring-[#4588ff]/25 focus:border-[#4588ff] outline-none transition"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-white mt-1 block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 focus:ring-2 focus:ring-[#4588ff]/25 focus:border-[#4588ff] outline-none transition"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="bg-white mt-1 block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 focus:ring-2 focus:ring-[#4588ff]/25 focus:border-[#4588ff] outline-none transition resize-none"
                placeholder="Tell us about your project, timeline, and goals."
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-[#4588ff] to-[#35b2ff] hover:opacity-95 disabled:opacity-70 disabled:cursor-not-allowed transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            </form>

            {result.message && (
              <div
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  result.type === "success"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-rose-50 text-rose-700 border border-rose-200"
                }`}
              >
                {result.message}
              </div>
            )}
          </div>

          <div
            className="bg-white/85 backdrop-blur-md border border-white shadow-xl rounded-3xl p-5 sm:p-8 space-y-6"
            data-aos="fade-up"
          >
          <div className="flex items-start space-x-4">
            <div className="text-[#4588ff] text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Location</p>
              <p className="text-gray-600">India</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-[#4588ff] text-xl">
              <FaLinkedin />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Linkedin</p>
              <a
                href="https://www.linkedin.com/company/the-webstart/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563eb] hover:underline"
              >
                The WebStart
              </a>
            </div>
          </div>

          {/* <div className="flex items-center space-x-4">
            <div className="text-green-600 text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Phone</p>
              <p className="text-gray-600">+91 6305535725</p>
            </div>
          </div> */}

          <div className="flex items-start space-x-4">
            <div className="text-[#4588ff] text-xl">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Email</p>
              <a
                href="mailto:info@thewebstart.in"
                className="text-[#2563eb] hover:underline"
              >
                info@thewebstart.in
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-[#4588ff] text-xl">
              <FaClock />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Hours</p>
              <p className="text-gray-600">Mon–Fri, 9am–6pm</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
