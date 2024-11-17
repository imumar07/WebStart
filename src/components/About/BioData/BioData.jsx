
import clientpicture from "../../../assets/client-picture.jpg";


export default function BioData() {
  return (
    <>
      <section className="sm:pt-25 pt-32 sm:pt-28 md:pt-24 lg:pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:mt-20 ">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            {/* Image - Order first on small screens */}
            <div className="relative flex justify-center mt-0 sm:mt-0 order-1 sm:order-2">
              <img
                className="w-75 h-75 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-104 lg:h-104 object-cover rounded shadow-lg"

                src={clientpicture}
                alt="Khalid ul Rehman Hakeem"
              />
            </div>

            {/* Text - Order second on small screens */}
            <div className="order-2 sm:order-1 mt-5">
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-4xl">
                Dr. Khalid ul Rehman Hakeem
              </h2>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Professor
              </p>
              <p className="text-md text-gray-600 dark:text-gray-400">
                Department of Biological Sciences
              </p>
              <p className="text-md text-gray-600 dark:text-gray-400">
                Faculty of Science, King Abdulaziz University, Jeddah, Kingdom
                of Saudi Arabia
              </p>
              <p className="max-w-lg mt-3 text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8 text-justify">
                Dr. Khalid ul Rehman Hakeem is an accomplished academic and
                researcher with over 14 years of experience in Plant
                Eco-Physiology, Biotechnology, and Molecular Biology. He
                currently serves as the Head of the Plant Biotechnology Research
                Unit at the Princess Dr. Najlaa Bint Saud Al Saud Center for
                Distinguished Research. Dr. Hakeem has authored and edited over
                100 books and published more than 200 research articles in
                international journals. He has held prestigious positions,
                including Visiting Professor at Daffodil International
                University in Bangladesh and Adjunct Research Faculty at
                Chitkara University in India.
                
              </p>
            </div>
          </div>
          <div>
            <p className="  text-lg leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
              A Fellow of the Royal Society of Biology, Dr. Hakeem actively
              participates in international research projects and serves on the
              editorial boards of several high-impact scientific journals. His
              dedication to advancing scientific knowledge has earned him
              recognition, including listings in Marquis Who’s Who in the World
              from 2014 to 2021. Dr. Hakeem continues to contribute to the
              fields of environmental studies and plant biotechnology, focusing
              on eco-physiological and molecular processes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
