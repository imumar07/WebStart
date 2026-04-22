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
import Projects from './components/Projects/Projects';
import Results from './components/Results/Results';
import FAQ from './components/FAQ/FAQ';
import FinalCTA from './components/FinalCTA/FinalCTA';

const MainLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full overflow-x-hidden">
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
              <div className="min-h-screen mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8 [&>*]:py-6 sm:[&>*]:py-8">
                <Hero />
                <Services />
                <Results />
                <WhyChooseUs />
                <HowItWorks />
                <Projects/>
                <AboutUs />
                <Testimonials />
                <FAQ />
                <FinalCTA />
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
