import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects take between 2 to 6 weeks, depending on features, content readiness, and integrations.",
  },
  {
    question: "Do you offer both design and development?",
    answer:
      "Yes. We handle UI/UX design, development, SEO basics, and launch support as one complete workflow.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can audit your current site, improve visual quality, and rebuild it for speed and conversions.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We provide post-launch support for updates, monitoring, and continuous improvements based on performance.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-3">Quick answers to help you move faster.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white bg-white/85 backdrop-blur-md shadow-md overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="w-full text-left px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-3 sm:gap-4"
                >
                  <span className="text-gray-900 font-semibold text-sm sm:text-base leading-relaxed">{faq.question}</span>
                  <span className="text-[#4588ff] text-lg">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
