import { useEffect } from "react";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Login } from "./components/Login";
import { AdminDashboard } from "./components/AdminDashboard";
import { SubscribersPage } from "./components/SubscribersPage";
import "./App.css";

// This small component forces the page to the top on every route change
const ScrollToTopOnConfig = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTopOnConfig />
      <Routes>
        {/* LANDING PAGE ROUTE */}
        <Route 
          path="/" 
          element={
            <>
            <Navbar />
              <Hero />
              <Features />
              <About />
              <HowItWorks />
              <Services />
              <Testimonials />
              <Team />
              <Pricing />
              <Newsletter />
              <FAQ />
              <Footer /> {/* Footer is now strictly inside the home path */}
            </>
          } 
        />

        {/* LOGIN ROUTE */}
        <Route path="/admin" element={<Login />} />

        {/* DASHBOARD ROUTE */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* DEDICATED EMAILS PAGE */}
        <Route path="/admin/subscribers" element={<SubscribersPage />} />
        
      </Routes>

      <ScrollToTop />
    </Router>
  );
}

export default App;