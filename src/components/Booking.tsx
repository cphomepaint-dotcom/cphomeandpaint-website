export default function Booking() {
  return (
    <section id="booking" className="section-padding bg-stone">
      <div className="container-site px-6">
        <div className="text-center mb-10">
          <p className="text-accent font-heading font-600 text-sm tracking-widest uppercase mb-3">
            Schedule
          </p>
          <h2 className="text-3xl md:text-4xl font-800 text-ink mb-4">
            Book a Consultation
          </h2>
          <p className="text-slate/70 max-w-xl mx-auto">
            Pick a time that works for you and we&apos;ll discuss your project
            in detail.
          </p>
        </div>

        <div
          className="bg-white border border-cloud overflow-hidden mx-auto max-w-3xl"
          style={{ borderRadius: "var(--radius-card)" }}
        >
          <div className="aspect-[4/3] flex items-center justify-center bg-cloud/50">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5" style={{ borderRadius: "var(--radius-card)" }}>
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <h3 className="font-heading font-700 text-xl text-ink mb-2">
                Calendar Coming Soon
              </h3>
              <p className="text-slate/70 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
                Online booking will be available shortly. In the meantime, give
                us a call to schedule your consultation.
              </p>
              <a href="tel:3369411955" className="btn-primary">
                Call (336) 941-1955
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
