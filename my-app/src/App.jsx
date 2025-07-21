import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./jsx/Header";
import HeroSection from "./jsx/Hero";
import InfoSection from "./jsx/Info";
import LicensesSection from "./jsx/Licences";
import Footer from "./jsx/Footer";
import ServicesPage from "./jsx/ServicesPage";
import AboutPage from "./jsx/AboutPage";
import PersonnelPage from "./jsx/PersonnelPage";
import '@fontsource/jost'; // Defaults to weight 400
// Optional:
// import '@fontsource/jost/500.css';
// import '@fontsource/jost/700.css';


function AppContent() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <InfoSection />
            <LicensesSection />
          </>
        } />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/personnel" element={<PersonnelPage />} />

      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
