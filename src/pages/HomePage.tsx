// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import ServicesSection from './HomePage/sections/Services';
import WorkSection from './HomePage/sections/Work';
import ReceptionistSection from './HomePage/sections/Receptionist';
import PricingSection from './HomePage/sections/Pricing';
import ProcessSection from './HomePage/sections/Process';
import ContactSection from './HomePage/sections/Contact';


import FaqSection from './HomePage/sections/Faq';export default function HomePage(): React.JSX.Element {
  return (
    <>
      <HeroSection />

      <ServicesSection />

      <WorkSection />

      <ReceptionistSection />

      <PricingSection />

      <ProcessSection />

      <FaqSection />
      <ContactSection />
    </>
  );
}