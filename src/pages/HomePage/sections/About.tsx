// Created by add_section_from_catalog (AboutMediaOverlay).

import React from 'react';
import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';

export default function AboutSection(): React.JSX.Element {
  return (
    <div data-webild-section="about" data-section="about" id="about">
      <AboutMediaOverlay
        imageSrc="https://storage.googleapis.com/webild/users/user_3K0aa19UHoT6DytXIGbvco08Y93/uploaded-1790952331496-gh68tu0j.jpg"
        description="Four years of professional experience, focusing on one-person studio excellence."
        textAnimation="slide-up"
        title="Run by Ben Levick"
        tag="Meet the builder"
      />
    </div>
  );
}
