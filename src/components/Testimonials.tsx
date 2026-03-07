const testimonials = [
  {
    name: "Sarah M.",
    text: "CP Home & Paint completely transformed our master bathroom. The tile work is flawless and the attention to detail was impressive. Highly recommend!",
    project: "Bathroom Remodel",
  },
  {
    name: "David & Lisa R.",
    text: "We hired them for LVP flooring throughout our home and couldn't be happier. Professional, clean, and the results speak for themselves.",
    project: "LVP Flooring",
  },
  {
    name: "Michael T.",
    text: "The custom accent wall and hidden door they built for our living room is a showpiece. Everyone who visits asks about it. True craftsmanship.",
    project: "Custom Carpentry",
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-site px-6">
        <div className="text-center mb-12">
          <p className="text-accent font-heading font-600 text-sm tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-800 text-ink mb-4">
            What Our Clients Say
          </h2>
          <p className="text-ink/70 font-medium max-w-xl mx-auto">
            Our customers are our best advocates. Here&apos;s what they have to say
            about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-stone p-8 border border-cloud relative"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-accent/10">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
              </div>

              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-ink/70 text-sm font-medium leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-cloud pt-4">
                <p className="font-heading font-700 text-ink text-sm">{t.name}</p>
                <p className="text-xs text-ink/50 font-medium mt-0.5">{t.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
