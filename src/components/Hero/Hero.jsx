import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import one_stop from "../../assets/2.svg";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center min-h-[80vh]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
        <div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20"
          data-aos="fade-up"
        >
          {/* Left: Text Content */}
          <div className="w-full max-w-xl text-center lg:text-left">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 bg-gradient-to-r from-[#35FF45] to-[#4588FF] bg-clip-text text-transparent">
              Build. Launch. Thrive.
            </h1>

            <p className="font-body text-lg text-gray-800 dark:text-gray-300 font-medium mb-4">
              Smart Websites & Marketing for Modern Brands.
            </p>

            <p className="font-body text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              At <strong>The WebStart</strong>, we craft lightning-fast websites using Full-Stack & WordPress, and supercharge your reach with expert social media marketing.
            </p>

            <a
              href="https://www.instagram.com/thewebstart?igsh=dTFxZW0zYWcweWp6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold bg-[#4588FF] hover:bg-[#35FF45] transition-all duration-300 ease-in-out rounded-xl shadow-lg text-lg font-body"
            >
              <i className="fab fa-instagram text-xl"></i>
              Reach Out
            </a>
          </div>

          {/* Right: Image */}
          <div className="w-full flex justify-center">
            <img
              src={one_stop}
              alt="The WebStart"
              className="max-w-sm sm:max-w-md md:max-w-md w-full h-auto object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
