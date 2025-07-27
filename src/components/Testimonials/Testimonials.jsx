import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: 'Dr. Khalid Rehman Hakeem',
    role: 'Founder, Mother Hajrah Foundation',
    feedback: 'We’re really happy with the final result. The team was professional and easy to work with.',
  },
  {
    name: 'Dr. Mohammad Ibrar Alam Ansari',
    role: 'IELTS Trainer, Public Speaker',
    feedback: 'Incredible attention to detail and communication throughout the project lifecycle.',
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-4xl mx-auto text-center mt-24 mb-24">
        <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-16">
          Testimonials
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md w-full max-w-sm"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                “{t.feedback}”
              </p>
              <div className="text-left">
                <p className="text-gray-900 dark:text-white font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
