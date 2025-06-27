import one_stop from '../../assets/one_stop.png'; // Adjust the path as necessary
export default function Content() {
    return (
        <section className="md:mt-24 lg:pt-1 overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center">
            <div className="px-4 mx-auto sm:px-6 lg:px-5 max-w-7xl lg:mt-15 mb-15 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image first on mobile, second on md+ */}
                    <div className="flex justify-center order-1 md:order-2">
                        <img
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded shadow-lg"
                            src={one_stop}
                            alt="Content Image"
                        />
                    </div>
                    {/* Text second on mobile, first on md+ */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black dark:text-white mb-4">
                            One Stop for All Web Services
                        </h2>
                        <p className="text-black dark:text-gray-200 font-semibold mb-6 text-justify">
                            Explore our latest content and updates.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 font-medium text-justify">
                            We provide comprehensive web solutions including design, development, SEO, and ongoing support to help your business thrive online. Our team ensures your digital presence is modern, responsive, and effective across all devices.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
