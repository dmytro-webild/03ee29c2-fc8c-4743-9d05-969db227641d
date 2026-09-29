import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesRevealCards from '@/components/sections/features/FeaturesRevealCards';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplitVerticalMarquee from '@/components/sections/hero/HeroSplitVerticalMarquee';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import TeamOverlayCards from '@/components/sections/team/TeamOverlayCards';
import { Globe, MessageSquare, Star } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarquee
      tag="Small business AI solutions"
      title="Your website, built. Your customers, answered."
      description="Lurocraft designs clean, fast websites for small businesses, then adds an AI receptionist that answers questions, books appointments, and takes messages, day and night. Websites from $450, AI receptionists from $1,000, Fixed quote before any work starts."
      primaryButton={{
        text: "Book a call",
        href: "#contact",
      }}
      secondaryButton={{
        text: "See example sites",
        href: "#work",
      }}
      leftItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-assistant-holding-horizontal-green-screen-tablet-office-medical-nurse-using-isolated-copy-space-template-with-chroma-key-mockup-blank-background-gadget-display-checkup_482257-41832.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tablet-with-intelligent-software-placed-table-kitchen-with-nobody_482257-8724.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-minimalist-lifestyle_23-2149743918.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169854.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-therapist-man-holding-mock-up-green-screen-chroma-key-tablet-with-isolated-display-horizontal-position-while-analyzing-sickness-expertise-hospital-office-medicine-concept_482257-29751.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/chroma-key-laptop-with-air-conditioner_482257-90912.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345419.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-character-emerging-from-smartphone_23-2151336609.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-typing-keyboard_23-2148868100.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/technician-sweeping-debris-hvac-unit_482257-92789.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-tasty-ingredient-healthy-breakfast_23-2148101717.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-working-overtime-project_482257-74600.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <AboutFeaturesSplit
      tag="Our Core Services"
      title="High-impact digital tools for your shop"
      description="We specialize in three key areas to keep your business modern and efficient."
      items={[
        {
          icon: Globe,
          title: "Websites",
          description: "Beautiful, fast, responsive sites built for conversion.",
        },
        {
          icon: MessageSquare,
          title: "AI Receptionists",
          description: "Automated assistants to handle bookings and messages 24/7.",
        },
        {
          icon: Star,
          title: "Custom AI",
          description: "Tailored automation to solve unique business problems.",
        },
      ]}
      textAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/graphic-digital-tablet-stationeries-white-background_23-2147880446.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="work" data-section="work">
    <SectionErrorBoundary name="work">
          <FeaturesRevealCards
      tag="Live Demos"
      title="Example demo websites"
      description="See our design in action. Note: these are fictional business demos."
      items={[
        {
          title: "Maple Dental",
          description: "Family dental clinic with Figtree design.",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-nurse-patient-looking-laptop-with-greenscreen-display-hospital-reception-lobby-isolated-copyspace-template-with-blank-chroma-key-mockup-background-waiting-area_482257-48908.jpg",
        },
        {
          title: "Northbound Heating",
          description: "HVAC experts with Archivo typography.",
          imageSrc: "http://img.b2bpic.net/free-photo/contemporary-laptop-placework-construction-worker_329181-3495.jpg",
        },
        {
          title: "Olive & Ash",
          description: "Neighbourhood bistro with serif flair.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-enjoying-mexican-barbecue_23-2151000332.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="receptionist" data-section="receptionist">
    <SectionErrorBoundary name="receptionist">
          <FeaturesRevealCardsBento
      tag="AI Intelligence"
      title="What your AI receptionist does"
      description="Manage your customer touchpoints with enterprise-grade automation."
      items={[
        {
          title: "Answer queries",
          description: "Always helpful.",
          imageSrc: "http://img.b2bpic.net/free-photo/calendar-agenda-event-meeting-reminder-schedule-graphic-concept_53876-125181.jpg",
          href: "#",
        },
        {
          title: "Book appointments",
          description: "Calendar integrated.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-administrator-uses-green-screen-tablet-explore-new-growth-strategy_482257-126533.jpg",
          href: "#",
        },
        {
          title: "Take messages",
          description: "Never miss a lead.",
          imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-businesswoman-sitting-desk-with-laptop-looking-calendar_1098-20530.jpg",
          href: "#",
        },
        {
          title: "Smart stops",
          description: "Context awareness.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-home-office-with-desktop-pc-monitor-displaying-business-analytics_482257-130255.jpg",
          href: "#",
        },
        {
          title: "Live onsite",
          description: "Always active.",
          imageSrc: "http://img.b2bpic.net/free-photo/technology-hologram-indoors_23-2151833342.jpg",
          href: "#",
        },
        {
          title: "Fast updates",
          description: "One-day changes.",
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169842.jpg",
          href: "#",
        },
        {
          title: "Easy tracking",
          description: "See the results.",
          imageSrc: "http://img.b2bpic.net/free-photo/workspace-with-stationery-papers-with-smartphone_23-2147965724.jpg",
          href: "#",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingMediaCards
      tag="Investment"
      title="Transparent pricing"
      description="Simple, fixed costs for premium service."
      plans={[
        {
          tag: "Essentials",
          price: "$450+",
          period: "once + maintenance",
          features: [
            "Responsive site",
            "Modern design",
            "SEO optimized",
            "$60-$120/mo maintenance",
          ],
          primaryButton: {
            text: "Contact",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/nurse-dentist-showing-green-screen-display-stomatology-senior-doctor-while-examining-tooth-pain-man-patient-sittinh-dental-chair_482257-4900.jpg",
        },
        {
          tag: "Professional",
          price: "$1,000+",
          period: "setup + monthly",
          features: [
            "AI Receptionist",
            "Calendar integration",
            "24/7 Monitoring",
            "$200-$600/mo management",
          ],
          primaryButton: {
            text: "Contact",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/person-using-tablet_53876-41005.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="process" data-section="process">
    <SectionErrorBoundary name="process">
          <FaqSimple
      tag="Our Process"
      title="The path to your new site"
      description="Four simple steps to get you launched."
      items={[
        {
          question: "Short call",
          answer: "Let's discuss your specific needs and timeline.",
        },
        {
          question: "Fixed quote",
          answer: "We provide a mockup and price before a single line is written.",
        },
        {
          question: "The build",
          answer: "Rapid, high-quality development of your solution.",
        },
        {
          question: "Launch & maintain",
          answer: "We keep everything running smoothly after go-live.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <TeamOverlayCards
      tag="Meet the builder"
      title="Run by Ben in Newmarket"
      description="Four years of professional experience, focusing on one-person studio excellence."
      members={[
        {
          name: "Ben",
          role: "Founder & Developer",
          imageSrc: "http://img.b2bpic.net/free-photo/covid-preventing-virus-health-healthcare-workers-quarantine-concept-surprised-excited-female_1258-92298.jpg",
        },
        {
          name: "Lu",
          role: "AI Receptionist",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-business-agenda_53876-33537.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to start?"
      text="Email us at lurocraft.co@gmail.com, text 289-231-2628, or book a call below to discuss your project."
      primaryButton={{
        text: "Book a call",
        href: "#",
      }}
      secondaryButton={{
        text: "Send email",
        href: "mailto:lurocraft.co@gmail.com",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
