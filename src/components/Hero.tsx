import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-ink overflow-hidden">
      {/* Background Image — 75% opacity so the photo is clearly visible */}
      <div className="absolute inset-0">
        <Image
          src="/images/outdoor/outdoor-pergola-completed-01.jpeg"
          alt="Professional home improvement project by CP Home & Paint"
          fill
          className="object-cover opacity-75"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay — lighter, just enough for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent" />
        {/* Bottom gradient for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-site px-6 pt-28 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-800 text-white leading-[1.08] mb-6" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
            Quality Craftsmanship for
            <span className="block text-white mt-1">Every Room in Your Home</span>
          </h1>

          <p className="text-lg text-white max-w-lg mb-10 leading-relaxed" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
            We are a small, family-owned company. We guarantee that we&apos;ll
            give your home the highest level of care, and treat it as our own
            with great attention to detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary bg-white text-ink border-white hover:bg-stone hover:border-stone hover:text-ink">
              Get a Free Quote
            </a>
            <a href="tel:3369411955" className="btn-primary bg-accent text-white border-accent hover:bg-ink hover:border-ink">
              Call (336) 941-1955
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              <span className="text-white text-sm font-medium" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>Serving DC, Virginia &amp; Maryland</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              <span className="text-white text-sm font-medium" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>Residential &amp; Commercial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              <span className="text-white text-sm font-medium" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>Same-Day Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
