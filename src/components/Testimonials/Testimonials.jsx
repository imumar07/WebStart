import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'CEO, Startup X',
    feedback: 'This team delivered exactly what we needed. Our traffic and sales grew by 200% in 2 months!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'John Smith',
    role: 'Marketing Head, TechNova',
    feedback: 'Incredible attention to detail and communication throughout the project lifecycle.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sarah Lee',
    role: 'Founder, EduSpark',
    feedback: 'Loved the clean UI/UX and how they understood our brand. Highly recommend!',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-6xl mx-auto text-center mt-24 mb-24">
        <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-12">
          Testimonials
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow transition"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4">"{t.feedback}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-gray-900 dark:text-white font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
