import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import teamPhoto from "../../assets/team.jpg"; // Replace with your actual team image

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#F9FAFB] py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mt-24 mb-24">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 font-heading"
          data-aos="fade-up"
        >
          About Us
        </h2>
        <p
          className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 font-body"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We’re a passionate group of tech enthusiasts, designers, and problem-solvers on a mission to build impactful
          digital solutions. Our diverse backgrounds and shared values drive us to create work that truly matters.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Team Image */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <img
              src={teamPhoto}
              alt="Our Team"
              className="rounded-xl shadow-lg w-full h-auto max-h-[400px] object-cover"
            />
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2 text-left" data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-heading">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6 font-body">
              Our mission is to empower individuals and businesses through innovative, scalable, and human-centered
              digital experiences. We’re committed to making technology accessible, functional, and beautiful.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-heading">
              What Sets Us Apart?
            </h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2 font-body">
              <li>Diverse and collaborative team culture</li>
              <li>User-first mindset in every project</li>
              <li>Commitment to continuous innovation</li>
              <li>Transparent communication and agile workflows</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
