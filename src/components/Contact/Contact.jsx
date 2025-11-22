import React, { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaMapMarkerAlt,
  FaLinkedin,
  FaEnvelope,
  FaClock,
  FaInstagram,
} from "react-icons/fa";

const API = import.meta.env.VITE_FORM_ACCESS_KEY;

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", API);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Form Submitted Successfully!" : "Error");
  };

  return (
    <div className="min-h-[50vh] bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-body">
      
      <div className="max-w-full mx-auto">
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
          We’d love to hear from you. Here’s how you can reach us.
        </p>

        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-full gap-8">
          <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6" data-aos="fade-up">
          <form className="text-black" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-white mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
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
                  className="bg-white mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="bg-white mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="mt-6 text-center rounded-lg">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Send Message
              </button>
            </div>
          </form>
          {result && (
            <p className="mt-4 text-center text-green-600 font-semibold">{result}</p>
          )}
        </div>

        <div
          className="bg-white shadow-xl rounded-2xl p-8 space-y-6"
          data-aos="fade-up"
        >
          <div className="flex items-center space-x-4">
            <div className="text-green-600 text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Location</p>
              <p className="text-gray-600">India</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-green-600 text-xl">
              <FaLinkedin />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Linkedin</p>
              <a
                href="https://www.linkedin.com/company/the-webstart/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
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

          <div className="flex items-center space-x-4">
            <div className="text-green-600 text-xl">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Email</p>
              <a
                href="mailto:info@thewebstart.in"
                className="text-green-600 hover:underline"
              >
                info@thewebstart.in
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-green-600 text-xl">
              <FaInstagram />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Instagram</p>
              <a
                href="https://instagram.com/thewebstart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                @thewebstart
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-green-600 text-xl">
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
