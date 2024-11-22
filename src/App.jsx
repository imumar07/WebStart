import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
// import Appointment from "./components/Navbar/Appointment";
import NavbarComp from "./components/Navbar/NavbarComp";
// import Stat from "./components/Stat/Stat";
// import About from "./components/About/About";
import suresh from './assets/Suresh.jpg';
import vikas from './assets/Vikas.jpg';
import umar from './assets/Umar.jpg';
import './App.css';
import { data } from 'autoprefixer';


function App() {

  const persons = [
    {
      id: 1,
      name: 'Vikas',
      linkedIn: 'https://www.linkedin.com/in/vikas-kumar-koppoju-99b540208/',
      image: vikas,
      data: "Freelancer, Programmer "
    },
    {
      id: 1,
      name: 'Syed Umar',
      linkedIn: 'https://www.linkedin.com/in/syedumarkalimulla',
      image: umar,
      data: "GDG On campus Organizer, Ex-Intern at HRLytics"
    },
    {
      id: 2,
      name: 'Suresh Pilli',
      linkedIn: 'https://www.linkedin.com/in/suresh-pilli-783555254/',
      image: suresh,
      data: "Lead Web and App, Ex-Intern at HRLytics"
    },
  ];

  return (
    <>
      <div className='w-full'>
        <NavbarComp />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div className='container-fluid'>
                  <div className="small-div flex justify-center divide-y divide-slate-200 [&>*]:py-16">
                    {persons.map((person) => (
                      <Hero
                        key={person.id}
                        name={person.name}
                        bio={person.linkedIn}
                        image={person.image}
                        data={person.data}
                      />
                    ))}
                  </div>
                  {/* <Stat /> */}
                </div>
              }
            />
            {/* <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/appointments" element={<Appointment />} />
            <Route exact path="*" element={<div>Not Found Path</div>} /> */}
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
