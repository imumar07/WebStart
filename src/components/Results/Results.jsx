const highlights = [
  {
    title: "Conversion-Focused Websites",
    description: "Designed to turn visitors into quality leads for your business.",
  },
  {
    title: "Clean and Modern UI",
    description: "Polished interfaces that reflect your brand and build trust.",
  },
  {
    title: "Performance First",
    description: "Fast-loading pages optimized for mobile users and SEO foundations.",
  },
  {
    title: "Ongoing Partnership",
    description: "Reliable support and improvements as your business grows online.",
  },
];

export default function Results() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white bg-white/80 backdrop-blur-xl shadow-xl p-6 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/90 border border-white p-5 text-left shadow-sm">
                <p className="text-lg font-bold bg-gradient-to-r from-[#2563eb] to-[#35b2ff] bg-clip-text text-transparent">
                  {item.title}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
