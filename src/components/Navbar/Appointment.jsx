
const Appointment = () => {
    return (
      <section className="bg-[#F9FAFB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
          <div className="bg-[#111827] rounded-xl shadow-lg p-8 lg:p-16">
            <h2 className="text-3xl font-extrabold text-white text-center sm:text-4xl lg:text-5xl mb-8">
              Book an Appointment
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12">
              Schedule a session with us to discuss your concerns, plans, or any queries you may have. We are here to assist you in any way we can.
            </p>
  
            {/* Statistics section */}
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 mb-8">
              {/* Map through your stats here */}
            </dl>
  
            {/* Button */}
            <div className="text-center">
              <a href="#" className="bg-blue-600 text-white py-3 px-6 rounded transition duration-300 hover:bg-blue-700 ">
                Book Now
              </a>
            </div>
          </div>
          
        </div>
        
      </section>
    );
  };
  
  export default Appointment;
  