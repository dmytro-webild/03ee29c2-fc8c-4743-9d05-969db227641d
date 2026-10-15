import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import ServicesSection from './HomePage/sections/Services';
import WorkSection from './HomePage/sections/Work';
import ReceptionistSection from './HomePage/sections/Receptionist';
import PricingSection from './HomePage/sections/Pricing';
import ProcessSection from './HomePage/sections/Process';
import ContactSection from './HomePage/sections/Contact';

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <HeroSection />

      <ServicesSection />

      <WorkSection />

      <ReceptionistSection />

      <PricingSection />

      <ProcessSection />

      <ContactSection />
    </>
  );
}