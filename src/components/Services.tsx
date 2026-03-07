import Image from "next/image";

const services = [
  {
    title: "Bathroom Remodels",
    description:
      "Complete transformations — tile work, walk-in showers, vanities, bathtubs, and custom fixtures tailored to your style.",
    image: "/images/bathrooms/bathroom-tile-shower-glass-door-01.jpeg",
  },
  {
    title: "Kitchen Remodels",
    description:
      "Cabinetry, countertops, backsplashes, and modern layouts that turn your kitchen into the heart of your home.",
    image: "/images/kitchens/kitchen-dark-cabinets-galley-01.jpeg",
  },
  {
    title: "Custom Carpentry",
    description:
      "Accent walls, built-in shelving, hidden doors, wainscoting, mantles, and bespoke trim work — crafted on site.",
    image: "/images/carpentry/carpentry-accent-wall-dark-panel-01.jpeg",
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Professional finishes for every surface. Clean lines, lasting color, and meticulous prep work inside and out.",
    image: "/images/painting/painting-interior-room-gray-01.jpeg",
  },
  {
    title: "Hardwood Flooring",
    description:
      "Installation, refinishing, and staining that brings warmth and elegance to any room in your home.",
    image: "/images/flooring-hardwood/hardwood-dark-stain-bedroom-01.jpeg",
  },
  {
    title: "LVP Flooring",
    description:
      "Luxury vinyl plank installation — durable, water-resistant, and beautiful for bedrooms, living areas, and stairs.",
    image: "/images/flooring-lvp/lvp-bedroom-gray-01.jpeg",
  },
  {
    title: "Outdoor Living & Decks",
    description:
      "Paver patios, pergolas, decks, and outdoor structures that extend your living space into the open air.",
    image: "/images/outdoor/outdoor-pergola-completed-02.jpeg",
  },
  {
    title: "Drywall & Repairs",
    description:
      "Installation, patching, and finishing for walls and ceilings — clean surfaces ready for paint or texture.",
    image: "/images/painting/painting-interior-bedroom-01.jpeg",
  },
  {
    title: "Basement Remodels",
    description:
      "Transform unused space into functional living areas — framing, flooring, lighting, and full finishing.",
    image: "/images/painting/painting-interior-living-room-01.jpeg",
  },
  {
    title: "Additions & Expansions",
    description:
      "Expand your footprint with quality construction that blends seamlessly with your existing home.",
    image: "/images/exterior/exterior-house-front-driveway-01.jpeg",
  },
  {
    title: "Handyman Services",
    description:
      "Door replacements, storage upgrades, fixture installations, and general repairs — no job is too small.",
    image: "/images/carpentry/carpentry-built-in-shelving-01.jpeg",
  },
  {
    title: "And Much More",
    description:
      "Have a project in mind? We likely can help. Reach out and let us know what you need — we love a challenge.",
    image: "/images/exterior/exterior-house-entry-walkway-01.jpeg",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-site px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-accent font-heading font-600 text-sm tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-800 text-ink mb-5">
            If It&apos;s In Your Home, We Do It
          </h2>
          <p className="text-ink/70 font-medium max-w-2xl mx-auto leading-relaxed">
            From full-scale renovations to small repairs, we handle every project with precision and care.
            Don&apos;t see your project listed below? We still do it — just ask.
          </p>
        </div>

        {/* Services Grid — image cards with gradient overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <a
              key={service.title}
              href="#contact"
              className="group relative overflow-hidden block aspect-[4/3]"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient Overlay — always present, darkens on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent transition-opacity duration-500 group-hover:from-ink/95 group-hover:via-ink/60" />

              {/* Content — pinned to bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-heading font-700 text-xl text-white mb-1.5 leading-snug drop-shadow-md">
                  {service.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300 drop-shadow-sm">
                  {service.description}
                </p>

                {/* Hover arrow */}
                <div className="flex items-center gap-1.5 mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-white/90 text-xs font-heading font-600 uppercase tracking-wider">
                    Get a Quote
                  </span>
                  <svg className="w-4 h-4 text-white/90" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Tell Us About Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
