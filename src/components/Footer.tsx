import Link from "next/link";

const services = [
  "Bathroom Remodels",
  "Kitchen Remodels",
  "Custom Carpentry",
  "Interior Painting",
  "Exterior Painting",
  "Hardwood Flooring",
  "LVP Flooring",
  "Outdoor & Decks",
  "Handyman Services",
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cloud/70">
      <div className="container-site px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-xl font-800 text-white">
                CP Home<span className="text-white/50">&nbsp;&amp;&nbsp;</span>
                Paint
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              A small, family-owned home improvement company serving the
              Washington DC, Virginia, and Maryland area. We treat every home like our own.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:3369411955" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-accent/60 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                (336) 941-1955
              </a>
              <a href="mailto:cphomepaint@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-accent/60 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                cphomepaint@gmail.com
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a href="https://www.instagram.com/cphomeimprovementspaint" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" style={{ borderRadius: "var(--radius-btn)" }} aria-label="Instagram">
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/></svg>
              </a>
              <a href="https://www.facebook.com/people/Cp-home-improvements-paint-llc/100086803976083/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" style={{ borderRadius: "var(--radius-btn)" }} aria-label="Facebook">
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-700 text-white text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-700 text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="text-sm hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-sm hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-sm hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-sm hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="tel:3369411955" className="text-sm hover:text-white transition-colors">Call Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-cloud/40">
          <p>
            &copy; {new Date().getFullYear()} CP Home Improvements &amp; Paint LLC.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
