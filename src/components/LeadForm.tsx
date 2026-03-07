"use client";

import { useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again or call us directly.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-ink">
      <div className="container-site px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column — Info */}
          <div className="text-white">
            <p className="text-white/60 font-heading font-600 text-sm tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-800 text-white mb-5">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed max-w-md">
              Tell us about your vision and we&apos;ll get back to you with a
              detailed quote in just a few hours. No project is too big or too
              small for our team.
            </p>

            {/* Contact Details */}
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0" style={{ borderRadius: "var(--radius-btn)" }}>
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">Call Us Directly</p>
                  <a href="tel:3369411955" className="text-white font-heading font-600 text-lg hover:text-accent transition-colors">
                    (336) 941-1955
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0" style={{ borderRadius: "var(--radius-btn)" }}>
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">Email Us</p>
                  <a href="mailto:cphomeandpaint@gmail.com" className="text-white font-heading font-600 hover:text-accent transition-colors">
                    cphomeandpaint@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0" style={{ borderRadius: "var(--radius-btn)" }}>
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">Response Time</p>
                  <p className="text-white font-heading font-700">Under 4 Hours</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/cphomeimprovementspaint" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" style={{ borderRadius: "var(--radius-btn)" }} aria-label="Instagram">
                <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/></svg>
              </a>
              <a href="https://www.facebook.com/people/Cp-home-improvements-paint-llc/100086803976083/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" style={{ borderRadius: "var(--radius-btn)" }} aria-label="Facebook">
                <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z"/></svg>
              </a>
            </div>
          </div>

          {/* Right Column — Form */}
          <div>
            {status === "success" ? (
              <div className="bg-stone p-10 text-center" style={{ borderRadius: "var(--radius-card)" }}>
                <div className="w-16 h-16 bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5" style={{ borderRadius: "var(--radius-card)" }}>
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                </div>
                <h3 className="font-heading font-700 text-2xl text-ink mb-3">Quote Request Sent</h3>
                <p className="text-ink/70 font-medium leading-relaxed mb-6 max-w-sm mx-auto">
                  Thank you! We&apos;ve received your request and will get back to you shortly. Check your email for a confirmation.
                </p>
                <button onClick={() => setStatus("idle")} className="btn-secondary">Send Another Request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-stone p-8 md:p-10 space-y-5" style={{ borderRadius: "var(--radius-card)" }}>
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4" style={{ borderRadius: "var(--radius-btn)" }}>
                    {errorMsg}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">Full Name <span className="text-red-400">*</span></label>
                    <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-cloud text-ink text-sm focus:outline-none focus:border-accent transition-colors" style={{ borderRadius: "var(--radius-btn)" }} placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">Phone Number <span className="text-red-400">*</span></label>
                    <input type="tel" id="phone" name="phone" required value={form.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-cloud text-ink text-sm focus:outline-none focus:border-accent transition-colors" style={{ borderRadius: "var(--radius-btn)" }} placeholder="(202) 000-0000" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">Email Address <span className="text-red-400">*</span></label>
                  <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-cloud text-ink text-sm focus:outline-none focus:border-accent transition-colors" style={{ borderRadius: "var(--radius-btn)" }} placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-ink mb-1.5">Service Needed</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-cloud text-ink text-sm focus:outline-none focus:border-accent transition-colors" style={{ borderRadius: "var(--radius-btn)" }}>
                    <option value="">Select a service...</option>
                    <option>Bathroom Remodel</option>
                    <option>Kitchen Remodel</option>
                    <option>Basement Remodel</option>
                    <option>Custom Carpentry</option>
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Hardwood Flooring</option>
                    <option>LVP Flooring</option>
                    <option>Drywall Services</option>
                    <option>Outdoor / Deck Work</option>
                    <option>Additions</option>
                    <option>Handyman Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">Project Details</label>
                  <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-cloud text-ink text-sm focus:outline-none focus:border-accent transition-colors resize-none" style={{ borderRadius: "var(--radius-btn)" }} placeholder="Tell us about your project — rooms, scope, timeline, budget range..." />
                </div>
                <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === "sending" ? "Sending..." : "Send Quote Request"}
                </button>
                <p className="text-xs text-ink/40 text-center">We respond to every inquiry within a few hours.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
