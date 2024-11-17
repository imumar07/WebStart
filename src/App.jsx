import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Appointment from "./components/Navbar/Appointment";
import NavbarComp from "./components/Navbar/NavbarComp";
import Stat from "./components/Stat/Stat";
import About from "./components/About/About";

function App() {

  const persons = [
    {
      id: 1,
      name: 'Vikas',
      linkedIn: 'A software engineer with 5 years of experience in full-stack development.',
      image: "#",
    },
    {
      id: 1,
      name: 'Syed Umar',
      linkedIn: 'A software engineer with 5 years of experience in full-stack development.',
      image: "#",
    },
    {
      id: 2,
      name: 'Suresh Pilli',
      linkedIn: 'A doctor specializing in neurology with a passion for research.',
      image: "#",
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
                  <div className="flex justify-center divide-y divide-slate-200 [&>*]:py-16">
                    {persons.map((person) => (
                      <Hero
                        key={person.id}
                        name={person.name}
                        bio={person.linkedIn}
                        image={person.image}
                      />
                    ))}
                  </div>
                  <Stat />
                </div>
              }
            />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/appointments" element={<Appointment />} />
            <Route exact path="*" element={<div>Not Found Path</div>} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
