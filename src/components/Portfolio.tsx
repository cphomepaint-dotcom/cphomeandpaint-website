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

type Project = {
  title: string;
  category: string;
  images: string[];
};

const projects: Project[] = [
  {
    title: "Bathroom Remodel",
    category: "Bathrooms",
    images: [
      "/images/bathrooms/bathroom-remodel-01.jpeg",
      "/images/bathrooms/bathroom-remodel-02.jpeg",
      "/images/bathrooms/bathroom-remodel-03.jpeg",
      "/images/bathrooms/bathroom-remodel-04.jpeg",
      "/images/bathrooms/bathroom-remodel-05.jpeg",
      "/images/bathrooms/bathroom-remodel-06.jpeg",
      "/images/bathrooms/bathroom-remodel-07.jpeg",
      "/images/bathrooms/bathroom-remodel-08.jpeg",
      "/images/bathrooms/bathroom-remodel-09.jpeg",
    ],
  },
  {
    title: "Master Bath Remodel",
    category: "Bathrooms",
    images: [
      "/images/bathrooms/bathroom-master-remodel-01.jpeg",
      "/images/bathrooms/bathroom-master-remodel-02.jpeg",
      "/images/bathrooms/bathroom-master-remodel-03.jpeg",
      "/images/bathrooms/bathroom-master-remodel-04.jpeg",
      "/images/bathrooms/bathroom-master-remodel-05.jpeg",
      "/images/bathrooms/bathroom-master-remodel-06.jpeg",
      "/images/bathrooms/bathroom-master-remodel-07.jpeg",
    ],
  },
  {
    title: "Accent Wall with Murphy Door",
    category: "Carpentry",
    images: [
      "/images/carpentry/carpentry-accent-wall-murphy-door-01.jpeg",
      "/images/carpentry/carpentry-accent-wall-murphy-door-02.jpeg",
      "/images/carpentry/carpentry-accent-wall-murphy-door-03.jpeg",
      "/images/carpentry/carpentry-accent-wall-murphy-door-04.jpeg",
      "/images/carpentry/carpentry-accent-wall-murphy-door-05.jpeg",
      "/images/carpentry/carpentry-accent-wall-murphy-door-06.jpeg",
    ],
  },
  {
    title: "Fireplace, Floating Shelves & TV Install",
    category: "Carpentry",
    images: [
      "/images/carpentry/carpentry-fireplace-floating-shelves-01.jpg",
      "/images/carpentry/carpentry-fireplace-floating-shelves-02.jpg",
      "/images/carpentry/carpentry-fireplace-floating-shelves-03.jpg",
    ],
  },
  {
    title: "Storage Cabinet Upgrade",
    category: "Carpentry",
    images: [
      "/images/carpentry/carpentry-storage-doors-upgrade-01.jpg",
      "/images/carpentry/carpentry-storage-doors-upgrade-02.jpg",
    ],
  },
  {
    title: "Hardwood Floor Refinishing",
    category: "Flooring",
    images: [
      "/images/flooring-hardwood/hardwood-refinishing-01.jpeg",
      "/images/flooring-hardwood/hardwood-refinishing-02.jpeg",
      "/images/flooring-hardwood/hardwood-refinishing-03.jpeg",
      "/images/flooring-hardwood/hardwood-refinishing-04.jpeg",
      "/images/flooring-hardwood/hardwood-refinishing-05.jpeg",
    ],
  },
  {
    title: "LVP Floor Installation",
    category: "Flooring",
    images: [
      "/images/flooring-lvp/lvp-install-01.jpeg",
      "/images/flooring-lvp/lvp-install-02.jpeg",
      "/images/flooring-lvp/lvp-install-03.jpeg",
      "/images/flooring-lvp/lvp-install-04.jpeg",
      "/images/flooring-lvp/lvp-install-05.jpeg",
    ],
  },
  {
    title: "LVP, Paint & Stair Installation",
    category: "Flooring",
    images: [
      "/images/flooring-lvp/lvp-paint-stairs-combo-01.jpeg",
      "/images/flooring-lvp/lvp-paint-stairs-combo-02.jpeg",
      "/images/flooring-lvp/lvp-paint-stairs-combo-03.jpeg",
      "/images/flooring-lvp/lvp-paint-stairs-combo-04.jpeg",
      "/images/flooring-lvp/lvp-paint-stairs-combo-05.jpeg",
      "/images/flooring-lvp/lvp-paint-stairs-combo-06.jpeg",
      "/images/flooring-lvp/lvp-paint-stairs-combo-07.jpeg",
      "/images/flooring-lvp/lvp-paint-stairs-combo-08.jpeg",
    ],
  },
  {
    title: "Paint & Wallpaper Installation",
    category: "Painting",
    images: [
      "/images/painting/painting-wallpaper-install-01.jpeg",
      "/images/painting/painting-wallpaper-install-02.jpeg",
      "/images/painting/painting-wallpaper-install-03.jpeg",
      "/images/painting/painting-wallpaper-install-04.jpeg",
      "/images/painting/painting-wallpaper-install-05.jpeg",
    ],
  },
  {
    title: "Whitewash Paint Project",
    category: "Painting",
    images: [
      "/images/painting/painting-whitewash-01.jpg",
      "/images/painting/painting-whitewash-02.jpg",
      "/images/painting/painting-whitewash-03.jpg",
      "/images/painting/painting-whitewash-04.jpg",
      "/images/painting/painting-whitewash-05.jpg",
      "/images/painting/painting-whitewash-06.jpg",
      "/images/painting/painting-whitewash-07.jpg",
      "/images/painting/painting-whitewash-08.jpg",
    ],
  },
  {
    title: "Paint & Floor Installation",
    category: "Painting",
    images: [
      "/images/painting/painting-floor-install-01.jpeg",
      "/images/painting/painting-floor-install-02.jpeg",
      "/images/painting/painting-floor-install-03.jpeg",
      "/images/painting/painting-floor-install-04.jpeg",
    ],
  },
  {
    title: "Gazebo Installation",
    category: "Outdoor",
    images: [
      "/images/outdoor/outdoor-gazebo-01.jpeg",
      "/images/outdoor/outdoor-gazebo-02.jpeg",
      "/images/outdoor/outdoor-gazebo-03.jpeg",
      "/images/outdoor/outdoor-gazebo-04.jpeg",
      "/images/outdoor/outdoor-gazebo-05.jpeg",
      "/images/outdoor/outdoor-gazebo-06.jpeg",
      "/images/outdoor/outdoor-gazebo-07.jpeg",
      "/images/outdoor/outdoor-gazebo-08.jpeg",
      "/images/outdoor/outdoor-gazebo-09.jpeg",
    ],
  },
  {
    title: "Deck Repair & Step Replacement",
    category: "Outdoor",
    images: [
      "/images/outdoor/outdoor-deck-repair-01.jpeg",
      "/images/outdoor/outdoor-deck-repair-02.jpeg",
    ],
  },
  {
    title: "Custom Outdoor Stairs",
    category: "Outdoor",
    images: [
      "/images/outdoor/outdoor-stairs-01.jpeg",
      "/images/outdoor/outdoor-stairs-02.jpeg",
      "/images/outdoor/outdoor-stairs-03.jpeg",
      "/images/outdoor/outdoor-stairs-04.jpeg",
      "/images/outdoor/outdoor-stairs-05.jpeg",
    ],
  },
  {
    title: "Gutter & Lawn Cleanup",
    category: "Exterior",
    images: [
      "/images/exterior/exterior-gutter-lawn-01.jpeg",
      "/images/exterior/exterior-gutter-lawn-02.jpeg",
      "/images/exterior/exterior-gutter-lawn-03.jpeg",
      "/images/exterior/exterior-gutter-lawn-04.jpeg",
      "/images/exterior/exterior-gutter-lawn-05.jpeg",
      "/images/exterior/exterior-gutter-lawn-06.jpeg",
      "/images/exterior/exterior-gutter-lawn-07.jpeg",
      "/images/exterior/exterior-gutter-lawn-08.jpeg",
      "/images/exterior/exterior-gutter-lawn-09.jpeg",
      "/images/exterior/exterior-gutter-lawn-10.jpeg",
      "/images/exterior/exterior-gutter-lawn-11.jpeg",
      "/images/exterior/exterior-gutter-lawn-12.jpeg",
      "/images/exterior/exterior-gutter-lawn-13.jpeg",
      "/images/exterior/exterior-gutter-lawn-14.jpeg",
    ],
  },
  {
    title: "Kitchen Cabinet Paint Project",
    category: "Kitchens",
    images: [
      "/images/kitchens/kitchen-cabinet-paint-white-01.jpg",
      "/images/kitchens/kitchen-cabinet-paint-white-02.jpg",
      "/images/kitchens/kitchen-cabinet-paint-white-03.jpg",
      "/images/kitchens/kitchen-cabinet-paint-white-04.jpg",
      "/images/kitchens/kitchen-cabinet-paint-white-05.jpg",
      "/images/kitchens/kitchen-cabinet-paint-white-06.jpg",
      "/images/kitchens/kitchen-cabinet-paint-white-07.jpg",
      "/images/kitchens/kitchen-cabinet-paint-white-08.jpg",
      "/images/kitchens/kitchen-cabinet-paint-white-09.jpg",
      "/images/kitchens/kitchen-cabinet-paint-white-10.jpg",
      "/images/kitchens/kitchen-cabinet-paint-white-11.jpg",
      "/images/kitchens/kitchen-cabinet-paint-white-12.jpg",
      "/images/kitchens/kitchen-cabinet-paint-white-13.jpg",
      "/images/kitchens/kitchen-cabinet-paint-white-14.jpg",
    ],
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const openLightbox = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setImgIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setImgIndex(0);
  };

  const currentProject = selectedProject !== null ? filtered[selectedProject] : null;

  const goNext = useCallback(() => {
    if (!currentProject) return;
    setImgIndex((i) => (i + 1) % currentProject.images.length);
  }, [currentProject]);

  const goPrev = useCallback(() => {
    if (!currentProject) return;
    setImgIndex((i) => (i - 1 + currentProject.images.length) % currentProject.images.length);
  }, [currentProject]);

  useEffect(() => {
    if (selectedProject === null) return;
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
  }, [selectedProject, goNext, goPrev]);

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
            Click any project to see the full gallery.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); closeLightbox(); }}
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

        {/* Gallery Grid — one card per project */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <button
              key={project.title}
              onClick={() => openLightbox(i)}
              className="group text-left bg-white overflow-hidden cursor-pointer border border-cloud hover:shadow-lg transition-shadow duration-300"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              {/* Thumbnail — first image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300" style={{ borderRadius: "50%" }}>
                    <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
                {/* Photo count badge */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-ink/70 text-white text-xs font-600 px-2 py-1" style={{ borderRadius: "var(--radius-btn)" }}>
                    {project.images.length} photos
                  </div>
                )}
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
      {selectedProject !== null && currentProject && (
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
          {currentProject.images.length > 1 && (
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
          )}

          {/* Next arrow */}
          {currentProject.images.length > 1 && (
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
          )}

          {/* Image container */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentProject.images[imgIndex]}
              alt={`${currentProject.title} — photo ${imgIndex + 1}`}
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
                  {currentProject.title}
                </h3>
                <p className="text-white/50 text-sm mt-0.5">
                  {currentProject.category} &middot; Photo {imgIndex + 1} of {currentProject.images.length}
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
