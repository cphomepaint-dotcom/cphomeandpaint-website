import Image from "next/image";

const services = [
  {
    title: "Bathroom Remodels",
    description:
      "Complete transformations — tile work, walk-in showers, vanities, bathtubs, and custom fixtures tailored to your style.",
    image: "/images/bathrooms/bathroom-remodel-01.jpeg",
  },
  {
    title: "Master Bathroom Remodels",
    description:
      "Full master bath renovations with premium tile, frameless glass showers, double vanities, and luxury finishes.",
    image: "/images/bathrooms/bathroom-master-remodel-01.jpeg",
  },
  {
    title: "Kitchen Cabinet Painting",
    description:
      "Transform your kitchen with professional cabinet repainting and countertop replacement — a fraction of the cost of a full remodel.",
    image: "/images/kitchens/kitchen-cabinet-paint-white-01.jpg",
  },
  {
    title: "Accent Walls & Murphy Doors",
    description:
      "Custom accent walls with hidden murphy doors — functional, stunning, and built to your exact specifications.",
    image: "/images/carpentry/carpentry-accent-wall-murphy-door-01.jpeg",
  },
  {
    title: "Fireplace, Shelving & TV Installs",
    description:
      "Built-in shelving, floating mantles, base cabinets, and full TV installation — crafted and finished on site.",
    image: "/images/carpentry/carpentry-fireplace-floating-shelves-01.jpg",
  },
  {
    title: "Interior Painting & Wallpaper",
    description:
      "Professional interior paint and wallpaper installation. Clean lines, rich finishes, and meticulous prep work.",
    image: "/images/painting/painting-wallpaper-install-01.jpeg",
  },
  {
    title: "Whitewash & Specialty Finishes",
    description:
      "Whitewash treatments and specialty paint finishes that add texture, warmth, and character to any wall.",
    image: "/images/painting/painting-whitewash-01.jpg",
  },
  {
    title: "Hardwood Floor Refinishing",
    description:
      "Sanding, staining, and refinishing that restores the natural beauty of your hardwood floors.",
    image: "/images/flooring-hardwood/hardwood-refinishing-01.jpeg",
  },
  {
    title: "LVP Flooring Installation",
    description:
      "Luxury vinyl plank installation — durable, water-resistant, and beautiful for any room including stairs.",
    image: "/images/flooring-lvp/lvp-install-01.jpeg",
  },
  {
    title: "Gazebo & Outdoor Structures",
    description:
      "Custom gazebo and outdoor structure installation — built solid, finished beautifully, ready to enjoy.",
    image: "/images/outdoor/outdoor-gazebo-01.jpeg",
  },
  {
    title: "Deck & Stair Repair",
    description:
      "Deck repairs, stringer replacements, and full stair rebuilds — restored to safe, like-new condition.",
    image: "/images/outdoor/outdoor-stairs-01.jpeg",
  },
  {
    title: "Gutter & Exterior Maintenance",
    description:
      "Gutter cleaning, exterior repairs, and lawn clean-up that keeps the outside of your home in top shape.",
    image: "/images/exterior/exterior-gutter-lawn-01.jpeg",
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
