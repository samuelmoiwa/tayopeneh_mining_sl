import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroCarousel from '../components/home/HeroCarousel'
import AboutUsCard from '../components/home/AboutUsCard'
import AbutUs from '../components/home/AbutUs'
import OurExperts from '../components/home/OurExperts'
import ContactUs from '../components/ContactUs'
import MeetTheCEO from '../components/home/MeetTheCEO'


const Home = () => {


  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sectionId = searchParams.get('section');

    if (sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.search]);

  return (
    <div>
      <HeroCarousel />
      <AboutUsCard />
      <AbutUs />
      <OurExperts />
      <MeetTheCEO />
      <section id='partner'>
        <ContactUs />
      </section>

    </div>
  )
}




export default Home
