export default function FinalCTA() {
  return (
    <section className="py-10 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-gradient-to-r from-[#2563eb] via-[#4588ff] to-[#35b2ff] text-white p-6 sm:p-12 shadow-2xl">
          <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-white/20 blur-2xl"></div>
          <div className="absolute -left-10 -bottom-10 w-36 h-36 rounded-full bg-[#35ff45]/20 blur-2xl"></div>

          <div className="relative flex flex-col md:flex-row items-center md:items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-3xl font-bold font-heading">Ready to grow your digital presence?</h3>
              <p className="mt-2 text-white/90 max-w-2xl text-sm sm:text-base">
                Let&apos;s discuss your idea and build a fast, modern website that drives real business results.
              </p>
            </div>

            <a
              href="mailto:info@thewebstart.in"
              className="inline-flex items-center justify-center rounded-full bg-white text-[#2563eb] font-semibold px-6 py-3 shadow-lg hover:bg-gray-100 transition"
            >
              Start With Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
