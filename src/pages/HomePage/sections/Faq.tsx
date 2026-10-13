import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const faqItems = [
  {
    question: "How long does it take to launch a website or AI receptionist?",
    answer: "Custom websites are typically delivered within 1 to 2 weeks. AI Receptionists can be configured, trained, and integrated with your calendar in as little as 3 to 5 business days."
  },
  {
    question: "How does the AI Receptionist integrate with my existing phone number?",
    answer: "We can assign a dedicated local phone number or seamlessly forward missed and after-hours calls from your existing business line. It integrates directly with Google Calendar, Outlook, and popular CRM platforms."
  },
  {
    question: "What is required from my business to get started?",
    answer: "We handle all the heavy lifting. You'll just fill out a simple onboarding brief or join a quick kickoff call to share your business goals, preferred FAQs for the AI, and brand preferences."
  },
  {
    question: "Is ongoing maintenance and support included?",
    answer: "Yes, ongoing support, security updates, and maintenance are included to ensure your website and AI receptionist remain fast, secure, and fully operational 24/7."
  },
  {
    question: "Can I customize how the AI Receptionist handles calls and bookings?",
    answer: "Absolutely. You have full control over call scripts, scheduling rules, business hours, emergency escalation policies, and tone of voice."
  },
  {
    question: "How do estimates and pricing work?",
    answer: "We provide upfront, fixed-scope estimates with no hidden fees or surprise costs. Reach out or book a call today to receive a free, no-obligation quote."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div data-webild-section="faq" id="faq">
      <section aria-label="FAQ section" className="py-20">
        <div className="flex flex-col gap-10 w-content-width mx-auto">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="px-3.5 py-1 text-xs font-medium tracking-wide card rounded-full text-accent flex items-center gap-2">
              <HelpCircle className="w-3.5 h-3.5 text-primary-cta" />
              <span>Got Questions?</span>
            </div>

            <TextAnimation
              text="Frequently Asked Questions"
              variant="slide-up"
              gradientText={false}
              tag="h2"
              className="text-4xl sm:text-5xl 2xl:text-6xl font-semibold leading-[1.15] text-balance text-foreground"
            />

            <p className="text-base sm:text-lg text-accent max-w-xl text-balance">
              Everything you need to know about our custom websites, AI receptionist setup, and onboarding process.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <ScrollReveal variant="fade" key={index}>
                  <div className="card rounded-xl overflow-hidden transition-all duration-200 border border-foreground/10 hover:border-foreground/20">
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="flex items-center justify-between w-full p-6 text-left gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg md:text-xl font-medium text-foreground">
                        {item.question}
                      </span>
                      <div
                        className={`flex items-center justify-center shrink-0 size-8 rounded-full card transition-transform duration-200 ${
                          isOpen ? "rotate-180 bg-foreground/10" : ""
                        }`}
                      >
                        <ChevronDown className="size-5 text-foreground" />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-base leading-relaxed text-accent border-t border-foreground/10 pt-4">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal variant="fade-blur">
            <div className="flex flex-col items-center gap-4 card rounded-2xl p-8 text-center max-w-2xl mx-auto border border-foreground/10">
              <h3 className="text-2xl font-semibold text-foreground">
                Still have questions?
              </h3>
              <p className="text-accent text-balance">
                We're here to help. Reach out to discuss your specific requirements or get a custom estimate.
              </p>
              <Button text="Get a Free Estimate" href="#contact" variant="primary" className="mt-2" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}