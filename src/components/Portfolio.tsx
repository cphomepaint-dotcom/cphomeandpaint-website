"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const categories = [
  "All",
  "Bathrooms",
  "Carpentry",
  "Flooring",
  "Painting",
  "Outdoor",
  "Exterior",
  "Kitchens",
];

const projects = [
  // Bathrooms
  { src: "/images/bathrooms/bathroom-tile-shower-glass-door-01.jpeg", title: "Modern Tile Shower in Arlington", category: "Bathrooms" },
  { src: "/images/bathrooms/bathroom-bathtub-gold-fixtures-01.jpeg", title: "Gold Fixture Remodel in Bethesda", category: "Bathrooms" },
  { src: "/images/bathrooms/bathroom-vanity-modern-white-01.jpeg", title: "Custom White Vanity in Georgetown", category: "Bathrooms" },
  { src: "/images/bathrooms/bathroom-tile-shower-herringbone-01.jpeg", title: "Herringbone Tile Shower in Falls Church", category: "Bathrooms" },
  { src: "/images/bathrooms/bathroom-walk-in-shower-01.jpeg", title: "Walk-In Shower in Silver Spring", category: "Bathrooms" },
  { src: "/images/bathrooms/bathroom-freestanding-tub-01.jpeg", title: "Freestanding Tub in McLean", category: "Bathrooms" },
  { src: "/images/bathrooms/bathroom-double-vanity-01.jpeg", title: "Double Vanity in Alexandria", category: "Bathrooms" },
  { src: "/images/bathrooms/bathroom-modern-dark-tile-01.jpeg", title: "Dark Tile Bathroom in Rockville", category: "Bathrooms" },
  { src: "/images/bathrooms/bathroom-remodel-complete-01.jpeg", title: "Full Remodel in Fairfax", category: "Bathrooms" },
  { src: "/images/bathrooms/bathroom-shower-frameless-glass-01.jpeg", title: "Frameless Glass Shower in Potomac", category: "Bathrooms" },
  // Carpentry
  { src: "/images/carpentry/carpentry-accent-wall-dark-panel-01.jpeg", title: "Dark Accent Wall in Reston", category: "Carpentry" },
  { src: "/images/carpentry/carpentry-hidden-door-panel-wall-01.jpeg", title: "Hidden Door Panel in Ashburn", category: "Carpentry" },
  { src: "/images/carpentry/carpentry-built-in-shelving-01.jpeg", title: "Built-In Shelving in Tysons", category: "Carpentry" },
  { src: "/images/carpentry/carpentry-custom-closet-island-01.jpeg", title: "Custom Closet Island in Chevy Chase", category: "Carpentry" },
  { src: "/images/carpentry/carpentry-custom-closet-shelving-01.jpeg", title: "Walk-In Closet in Leesburg", category: "Carpentry" },
  // Flooring
  { src: "/images/flooring-hardwood/hardwood-dark-stain-bedroom-01.jpeg", title: "Dark Stained Hardwood in Vienna", category: "Flooring" },
  { src: "/images/flooring-lvp/lvp-bedroom-gray-01.jpeg", title: "Gray LVP Flooring in Herndon", category: "Flooring" },
  { src: "/images/flooring-lvp/lvp-staircase-install-01.jpeg", title: "Staircase LVP in Manassas", category: "Flooring" },
  { src: "/images/flooring-lvp/lvp-master-bedroom-01.jpeg", title: "Master Bedroom LVP in Germantown", category: "Flooring" },
  { src: "/images/flooring-lvp/lvp-bedroom-brown-tone-01.jpeg", title: "Brown Tone LVP in Centreville", category: "Flooring" },
  // Painting
  { src: "/images/painting/painting-interior-room-gray-01.jpeg", title: "Interior Gray in Springfield", category: "Painting" },
  { src: "/images/painting/painting-interior-bedroom-01.jpeg", title: "Bedroom Repaint in Gaithersburg", category: "Painting" },
  { src: "/images/painting/painting-interior-living-room-01.jpeg", title: "Living Room in Columbia", category: "Painting" },
  { src: "/images/painting/painting-interior-room-blue-01.jpeg", title: "Blue Accent Room in Woodbridge", category: "Painting" },
  // Outdoor
  { src: "/images/outdoor/outdoor-pergola-completed-01.jpeg", title: "Pergola & Patio in Loudoun County", category: "Outdoor" },
  { src: "/images/outdoor/outdoor-pergola-completed-02.jpeg", title: "Covered Patio in Frederick", category: "Outdoor" },
  { src: "/images/outdoor/outdoor-paver-patio-install-01.jpeg", title: "Paver Installation in Fairfax", category: "Outdoor" },
  { src: "/images/outdoor/outdoor-pergola-team-build-01.jpeg", title: "Custom Pergola in Sterling", category: "Outdoor" },
  // Kitchens
  { src: "/images/kitchens/kitchen-dark-cabinets-galley-01.jpeg", title: "Dark Cabinet Kitchen in Annandale", category: "Kitchens" },
  // Exterior
  { src: "/images/exterior/exterior-house-front-driveway-01.jpeg", title: "Front Exterior in Stafford", category: "Exterior" },
  { src: "/images/exterior/exterior-carport-front-01.jpeg", title: "Carport Renovation in Warrenton", category: "Exterior" },
  { src: "/images/exterior/exterior-house-entry-walkway-01.jpeg", title: "Entry Walkway in Fredericksburg", category: "Exterior" },
  { src: "/images/exterior/exterior-gutter-cleaning-01.jpeg", title: "Gutter Service in Burke", category: "Exterior" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goNext = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  }, [lightbox, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  }, [lightbox, filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, goNext, goPrev]);

  return (
    <section id="portfolio" className="section-padding bg-stone">
      <div className="container-site px-6">
        <div className="text-center mb-10">
          <p className="text-accent font-heading font-600 text-sm tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-800 text-ink mb-4">
            See the Results for Yourself
          </h2>
          <p className="text-ink/70 font-medium max-w-xl mx-auto">
            Real projects, real homes across the DC, Virginia, and Maryland area.
            Click any project to see it up close.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setLightbox(null); }}
              className={`px-5 py-2.5 text-xs font-heading font-600 uppercase tracking-widest transition-colors ${
                active === cat
                  ? "bg-accent text-white"
                  : "bg-white text-ink hover:text-accent border border-cloud"
              }`}
              style={{ borderRadius: "var(--radius-btn)" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid — card style with titles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <button
              key={`${project.src}-${i}`}
              onClick={() => openLightbox(i)}
              className="group text-left bg-white overflow-hidden cursor-pointer border border-cloud hover:shadow-lg transition-shadow duration-300"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay with magnify icon */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300" style={{ borderRadius: "50%" }}>
                    <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Card info */}
              <div className="p-4">
                <h3 className="font-heading font-700 text-ink text-sm uppercase tracking-wide leading-snug">
                  {project.title}
                </h3>
                <p className="text-ink/50 text-xs font-medium mt-1">{project.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            style={{ borderRadius: "50%" }}
            aria-label="Close lightbox"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            style={{ borderRadius: "50%" }}
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            style={{ borderRadius: "50%" }}
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>

          {/* Caption bar */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-ink/80 backdrop-blur-sm px-8 py-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container-site flex items-center justify-between">
              <div>
                <h3 className="font-heading font-700 text-white text-lg uppercase tracking-wide">
                  {filtered[lightbox].title}
                </h3>
                <p className="text-white/50 text-sm mt-0.5">
                  {filtered[lightbox].category} &middot; {lightbox + 1} of {filtered.length}
                </p>
              </div>
              <a
                href="#contact"
                onClick={closeLightbox}
                className="btn-primary text-sm hidden sm:inline-flex"
              >
                Get a Quote for This
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
