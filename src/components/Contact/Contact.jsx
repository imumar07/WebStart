import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkerAlt,
  FaLinkedin,
  FaEnvelope,
  FaClock,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-3xl mx-auto">
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
  );
};

export default Contact;
