import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import one_stop from "../../assets/2.svg";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="overflow-hidden bg-transparent flex items-center min-h-[75vh] sm:min-h-[82vh]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
        <div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20"
          data-aos="fade-up"
        >
          {/* Left: Text Content */}
          <div className="w-full max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-white px-3 sm:px-4 py-2 text-[11px] sm:text-sm font-semibold text-[#2563eb] shadow-sm mb-5 sm:mb-6">
              Modern Websites and Growth
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 bg-gradient-to-r from-[#2563eb] via-[#4588FF] to-[#35b2ff] bg-clip-text text-transparent leading-tight">
              Build. Launch. Thrive.
            </h1>

            <p className="font-body text-base sm:text-lg text-gray-800 font-medium mb-3 sm:mb-4">
              Smart Websites & Marketing for Modern Brands.
            </p>

            <p className="font-body text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              At <strong>The WebStart</strong>, we craft lightning-fast websites using Full-Stack & WordPress, and supercharge your reach with expert social media marketing.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href="mailto:info@thewebstart.in"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 text-white font-semibold bg-gradient-to-r from-[#4588FF] to-[#35b2ff] hover:opacity-95 transition-all duration-300 ease-in-out rounded-full shadow-lg text-base sm:text-lg font-body"
              >
                <i className="fa-regular fa-envelope text-xl"></i>
                Reach Out
              </a>
              <p className="text-xs sm:text-sm text-gray-600">
                Email us at <span className="font-semibold text-gray-800">info@thewebstart.in</span>
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4588FF]/30 to-[#35FF45]/20 blur-2xl rounded-3xl"></div>
              <img
                src={one_stop}
                alt="The WebStart"
                className="relative max-w-[280px] sm:max-w-md md:max-w-md w-full h-auto object-contain rounded-3xl bg-white/80 p-2.5 sm:p-3 border border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
