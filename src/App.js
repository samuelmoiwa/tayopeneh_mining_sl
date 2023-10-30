import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProfessionalService from './components/home/ProfessionalService';
import NaturalResources from './components/home/NaturalResources';
import FeaturedProjects from './components/home/FeaturedProjects';
import Services from './pages/Services';
import ContactUsPage from './pages/ContactUs';

import About from './pages/About';

function App() {
  return (
      <>
          <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profService" element={<ProfessionalService />} />
          <Route path="/naturalResources" element={<NaturalResources />} />
          <Route path="/featuredProjects" element={<FeaturedProjects />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<ContactUsPage />} />

          <Route path="/about" element={<About />} />
        </Routes>

          <Footer />
      </>
  );
}

export default App;
