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
    <section className="py-14 sm:py-20 bg-transparent font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 sm:space-y-16 mt-8 sm:mt-16 mb-10 sm:mb-20">

        {/* Blurred Dark Image with Text Overlay */}
        <div className="relative h-[230px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl border border-white/60" data-aos="zoom-in">
          <img
            src={servicesImage}
            alt="Services"
            className="w-full h-full object-cover filter  brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-body bg-white/20 backdrop-blur-md text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-md max-w-[92%] sm:max-w-xl text-base sm:text-2xl font-semibold border border-white/40">
              Helping businesses grow with modern tech, design, and strategy.
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div data-aos="fade-up" id="services">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-heading">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering your business with modern technology, beautiful design, and digital marketing expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/85 backdrop-blur-md border border-white rounded-2xl shadow-lg p-6 sm:p-7 hover:-translate-y-1 hover:shadow-2xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-[#4588ff] text-3xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
