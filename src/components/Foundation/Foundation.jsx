// import React from 'react';
import hajrah from '../../assets/haj.png';
const Foundation = () => {
  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <img
            // src="https://via.placeholder.com/500" // Replace with the actual image URL
            src={hajrah} // Replace with the actual image URL
            alt="Mother Hajrah Foundation"
            className="rounded shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 w-full lg:pl-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Mother Hajrah Foundation - Empowering Lives, Honoring a Legacy
          </h2>
          <p className="text-gray-600 mb-6">
            Founded by Dr. Khalid R. Hakeem, the Mother Hajrah Foundation is a
            charitable initiative in memory of his mother, Late Hajrah Begum.
            Focused on uplifting the poor, orphans, and underprivileged, the
            foundation emphasizes education, healthcare, and community
            development.
          </p>

          <ul className="list-disc pl-5 text-gray-600 mb-6">
            <li className="mb-2">
              <span className="font-semibold">Water for All:</span> Providing
              clean water in underserved areas.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Educational Scholarships:</span>{" "}
              Supporting deserving students with scholarships and mentoring.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Skill Development:</span> Offering
              vocational training for better employment opportunities.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Community Empowerment:</span>{" "}
              Fostering self-reliance through resources and training.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Madrasa Modernization:</span>{" "}
              Enhancing education in Madrasas for holistic development.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Health for All:</span> Improving
              community health through medical care and awareness programs.
            </li>
          </ul>

          <a
            href="#"
            className="inline-block bg-[#111827] text-white py-3 px-6 rounded hover:text-[#111827] hover:bg-gray-300 transition duration-300"

          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Foundation;
