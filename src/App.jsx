import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavbarComp from "./components/Navbar/NavbarComp";
import Invoice from './components/Invoice/Invoice';
import Services from './components/Services/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Testimonials from './components/Testimonials/Testimonials';
import HowItWorks from './components/HowItWorks/HowItWorks';
import AboutUs from './components/AboutUs/AboutUs';
import About from './components/About';
import Contact from './components/Contact/Contact';

const MainLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full">
      <NavbarComp />
      {children}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <div className="container-fluid min-h-screen [&>*]:py-4">
                <Hero />
                <Services />
                <WhyChooseUs />
                <HowItWorks />
                <AboutUs />
                <Testimonials />
              </div>
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        {/* Invoice Page - No layout */}
        <Route path="/invoice" element={<Invoice />} />

        {/* 404 Page */}
        <Route path="*" element={
          <MainLayout>
            <div className="text-center py-5 text-danger">404 - Page Not Found</div>
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
