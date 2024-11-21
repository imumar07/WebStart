export default function Hero({ name, bio, image, data }) {
  return (
    <section className="md:mt-24 lg:pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:mt-20 mb-15">
        <div className="flex flex-col items-center hover:amination-bounce delay-150 duration-300">
          <div className="relative flex justify-center mt-0 sm:mt-0">
            <img
              className="w-75 h-75 sm:w-80 sm:h-80 lg:w-104 lg:h-104 object-cover rounded shadow-lg"
              src={image}
              alt={name}
            />
          </div>

          <div className="mt-5 text-center">
            <p className="sm:hidden md:block text-1xl font-bold leading-tight text-black dark:text-white sm:text-3xl lg:text-xl">
              {name}
            </p>

            <div className="mt-2 flex sm:text-center space-x-4  flex-col">
              <div>
                <p className="text-black font-semibold mb-1">{data}</p>
              </div>
              <div>
                <a
                  href={bio}
                  target="_blank"
                  className="inline-block px-4 py-2 sm:px-6 sm:py-3 md:text-sm lg:text-lg font-medium text-white bg-[#111827] hover:bg-gray-800 rounded-xl shadow"
                >
                  Reach Out 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
