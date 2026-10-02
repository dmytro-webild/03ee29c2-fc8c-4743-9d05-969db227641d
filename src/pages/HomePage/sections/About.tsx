// Created by add_section_from_catalog (AboutMediaOverlay).

import React from 'react';
import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';

export default function AboutSection(): React.JSX.Element {
  return (
    <div data-webild-section="about" data-section="about" id="about">
      <AboutMediaOverlay
        imageSrc="http://img.b2bpic.net/free-photo/covid-preventing-virus-health-healthcare-workers-quarantine-concept-surprised-excited-female_1258-92298.jpg"
        description="Four years of professional experience, focusing on one-person studio excellence."
        textAnimation="slide-up"
        title="Run by Ben Levick"
        tag="Meet the builder"
      />
    </div>
  );
}
