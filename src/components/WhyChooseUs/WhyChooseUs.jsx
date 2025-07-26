import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mt-24 mb-24">
        <h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-heading"
          data-aos="fade-up"
        >
          Why Choose Us
        </h2>
        <p
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 font-body"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We're more than just a tech company — we're your digital growth partner.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div
            className="p-6 rounded-xl shadow bg-[#35ff45]/10 dark:bg-gray-800"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-4xl text-[#35ff45] mb-4">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-heading">
              Fast & Reliable
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-body">
              We deliver high-performance websites optimized for speed and uptime.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="p-6 rounded-xl shadow bg-[#4588ff]/10 dark:bg-gray-800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-4xl text-[#4588ff] mb-4">
              <i className="fas fa-brain"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-heading">
              Smart Strategies
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-body">
              We combine tech with marketing to help you scale efficiently.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="p-6 rounded-xl shadow bg-[#35ff45]/10 dark:bg-gray-800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-4xl text-[#35ff45] mb-4">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-heading">
              Client-Centered
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-body">
              Your vision drives our process. We work hand-in-hand to bring ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
