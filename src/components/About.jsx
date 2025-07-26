import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import servicesImage from "../assets/serv.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pt-28 px-6 md:px-16 min-h-screen bg-[#F9FAFB] text-[#111827] font-body">
      
      {/* Section 1: Intro Paragraph */}
      <section className="max-w-5xl mx-auto mb-24 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-aos="fade-up">About Us</h1>
        <p className="text-lg md:text-xl leading-relaxed" data-aos="fade-up">
          We are a collaborative team of developers, designers, and creative thinkers driven by a shared vision — 
          to build digital products that solve real-world problems. We believe that technology should not only work 
          but inspire, empower, and elevate every user experience.
        </p>
        <img
          src={servicesImage}
          alt="Teamwork"
          className="w-full h-64 object-cover rounded-2xl mt-8 shadow-md"
        />
      </section>

      {/* Section 2: Our Mission */}
      <section className="max-w-5xl mx-auto mb-24 text-center">
        <h2 className="text-3xl font-heading font-semibold mb-4 flex items-center justify-center gap-3" data-aos="fade-up">
          <i className="fas fa-bullseye text-green-600"></i> Our Mission
        </h2>
        <p className="text-lg md:text-xl leading-relaxed" data-aos="fade-up">
          Our mission is to craft scalable, meaningful, and intuitive digital solutions that make a lasting impact.
          Through innovation and empathy, we aim to bridge the gap between ideas and execution — helping startups 
          and enterprises thrive in a fast-paced digital world.
        </p>
        
      </section>

      {/* Section 3: What Sets Us Apart */}
      <section className="max-w-6xl mx-auto mb-12">
        {/* Section 3: What Sets Us Apart */}
<div className="max-w-6xl mx-auto mb-20">
  <h2 className="text-3xl font-heading font-semibold mb-10 text-center">
    🔹 What Sets Us Apart
  </h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
    {/* Card 1 */}
    <div
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 group"
      data-aos="fade-up"
    >
      <h3 className="text-xl font-heading font-semibold mb-2 text-green-700 group-hover:text-green-800 transition-colors">
        Multidisciplinary Team
      </h3>
      <p className="text-base font-body text-gray-700 leading-relaxed">
        Passionate about user-focused design and clean code across every stage of development.
      </p>
    </div>

    {/* Card 2 */}
    <div
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 group"
      data-aos="fade-up"
    >
      <h3 className="text-xl font-heading font-semibold mb-2 text-green-700 group-hover:text-green-800 transition-colors">
        Transparent Collaboration
      </h3>
      <p className="text-base font-body text-gray-700 leading-relaxed">
        We maintain a transparent and collaborative approach throughout the entire development cycle.
      </p>
    </div>

    {/* Card 3 */}
    <div
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 group"
      data-aos="fade-up"
    >
      <h3 className="text-xl font-heading font-semibold mb-2 text-green-700 group-hover:text-green-800 transition-colors">
        Commitment to Standards
      </h3>
      <p className="text-base font-body text-gray-700 leading-relaxed">
        Dedicated to accessibility, performance, and industry best practices.
      </p>
    </div>

    {/* Card 4 */}
    <div
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 group"
      data-aos="fade-up"
    >
      <h3 className="text-xl font-heading font-semibold mb-2 text-green-700 group-hover:text-green-800 transition-colors">
        Agile & Impactful
      </h3>
      <p className="text-base font-body text-gray-700 leading-relaxed">
        Agile methodology with continuous delivery, real-time feedback, and measurable results.
      </p>
    </div>
  </div>
</div>

      </section>
    </div>
  );
};

export default About;
