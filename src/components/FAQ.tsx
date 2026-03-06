"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve the greater Washington DC metro area, including Northern Virginia, Maryland, and surrounding communities.",
  },
  {
    q: "How do I get a quote for my project?",
    a: "You can fill out the contact form on this page, give us a call at (336) 941-1955, or email us at cphomeandpaint@gmail.com. We'll discuss your project and provide a detailed estimate.",
  },
  {
    q: "What types of projects do you handle?",
    a: "We handle a wide range of home improvement projects including bathroom and kitchen remodels, custom carpentry, interior and exterior painting, hardwood and LVP flooring, drywall work, outdoor living spaces, additions, and general handyman services.",
  },
  {
    q: "How long does a typical bathroom remodel take?",
    a: "A typical bathroom remodel takes between 2-4 weeks depending on the scope of work. We'll provide a timeline specific to your project during the consultation.",
  },
  {
    q: "Do you provide materials or do I need to supply them?",
    a: "We can handle everything from start to finish, including sourcing quality materials. You're also welcome to provide your own materials if you prefer. We'll discuss options during the planning phase.",
  },
  {
    q: "Can I see examples of your previous work?",
    a: "Absolutely! Check out our portfolio section above to see photos of our completed projects. We're happy to share additional examples relevant to your specific project.",
  },
  {
    q: "Do you offer any warranty on your work?",
    a: "Yes, we stand behind our craftsmanship. We'll discuss warranty details specific to your project type during the consultation.",
  },
  {
    q: "What is the typical process from inquiry to completion?",
    a: "Our process starts with a consultation to understand your vision. We then provide a detailed quote, agree on timeline and materials, and get to work. We maintain clear communication throughout and do a final walkthrough upon completion.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-stone">
      <div className="container-site px-6">
        <div className="text-center mb-12">
          <p className="text-accent font-heading font-600 text-sm tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-800 text-ink mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-cloud overflow-hidden"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-heading font-600 text-ink text-sm pr-4">
                  {faq.q}
                </span>
                <span
                  className={`text-accent text-xl shrink-0 transition-transform ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-sm text-slate/70 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
