import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  {
    icon: 'fas fa-lightbulb',
    title: 'Step 1: Discover',
    desc: 'Understand your goals, pain points, and target audience.',
  },
  {
    icon: 'fas fa-pencil-ruler',
    title: 'Step 2: Plan & Design',
    desc: 'Create wireframes, prototypes, and select the right tech stack.',
  },
  {
    icon: 'fas fa-code',
    title: 'Step 3: Develop',
    desc: 'Turn designs into responsive and optimized digital products.',
  },
  {
    icon: 'fas fa-rocket',
    title: 'Step 4: Launch & Support',
    desc: 'Deploy, monitor, and iterate with ongoing support.',
  },
];

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mt-24 mb-24">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white font-heading">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 font-body">
          Our process is simple, transparent, and efficient.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-3xl text-[#4588ff] mb-4">
                <i className={step.icon}></i>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 font-heading">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-body">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
