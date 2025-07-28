import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesImage from "../../assets/serv.jpg";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Custom websites built with modern technologies like React, Node.js, and Django.",
      icon: "fa-solid fa-code",
    },
    {
      title: "WordPress Development",
      description: "Beautiful, fast WordPress websites tailored to your brand and goals.",
      icon: "fa-brands fa-wordpress",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design with Figma and responsive layouts for all devices.",
      icon: "fa-solid fa-palette",
    },
    {
      title: "Social Media Marketing",
      description: "Grow your online presence and connect with your audience through expert strategies.",
      icon: "fa-brands fa-facebook",
    },
    {
      title: "SEO Optimization",
      description: "Improve your visibility and rank higher with effective SEO techniques.",
      icon: "fa-solid fa-chart-line",
    },
    {
      title: "Branding & Identity",
      description: "Build a memorable brand with custom logos, typography, and design systems.",
      icon: "fa-solid fa-pen-nib",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16 mt-24 mb-24">

        {/* Blurred Dark Image with Text Overlay */}
        <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-lg" data-aos="zoom-in">
          <img
            src={servicesImage}
            alt="Services"
            className="w-full h-full object-cover filter  brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-body bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-xl shadow-md max-w-xl text-xl sm:text-2xl font-semibold">
              Helping businesses grow with modern tech, design, and strategy.
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div data-aos="fade-up" id="services">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            What We Offer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Empowering your business with modern technology, beautiful design, and digital marketing expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-[#4588ff] text-3xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-heading">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
