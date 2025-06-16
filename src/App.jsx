import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavbarComp from "./components/Navbar/NavbarComp";
import suresh from './assets/Suresh.jpg';
import vikas from './assets/Vikas.jpg';
import umar from './assets/Umar.jpg';
import './App.css';
import Invoice from './components/Invoice/Invoice';
import { Nav } from 'react-bootstrap';

const persons = [
  {
    id: 1,
    name: 'Vikas',
    linkedIn: 'https://www.linkedin.com/in/vikas-kumar-koppoju-99b540208/',
    image: vikas,
    data: "Associate Software Engineer"
  },
  {
    id: 2,
    name: 'Syed Umar',
    linkedIn: 'https://www.linkedin.com/in/syedumarkalimulla',
    image: umar,
    data: "Associate Software Engineer"
  },
  {
    id: 3,
    name: 'Suresh Pilli',
    linkedIn: 'https://www.linkedin.com/in/suresh-pilli-783555254/',
    image: suresh,
    data: "Assoiate Software Engineer"
  },
];

const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname === "/invoice"; // Hide header/footer on /invoice

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  return (
    <div className='w-full'>
      {!hideLayout && <NavbarComp />}
      {children}
      {!hideLayout && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={
              <div className='container-fluid '>
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
              </div>
            }
          />
          <Route path="/invoice" element={
              <>
              <NavbarComp />
            <Invoice />
            <Footer />
            </>
            
            } />
          <Route path="*" element={<div className="text-center py-5 text-danger">404 - Page Not Found</div>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
