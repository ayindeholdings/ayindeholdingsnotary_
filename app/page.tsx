export default function NotaryPublicWebsite() {
  const testimonials = [
    {
      name: "Satisfied Client",
      quote:
        "Professional, prompt, and incredibly easy to work with. The mobile service made everything stress-free.",
    },
    {
      name: "Local Business Client",
      quote:
        "Excellent communication and a polished experience from start to finish. Highly recommended for business notarizations.",
    },
    {
      name: "Returning Customer",
      quote:
        "Very reliable and flexible with scheduling. The service felt premium and efficient.",
    },
  ];

  const pricing = [
    {
      title: "Standard Notarization",
      price: "$10+",
      desc: "Per notarized signature, based on document type and state-allowed fees.",
    },
    {
      title: "Mobile Travel Service",
      price: "$25+",
      desc: "Convenient travel service within Gainesville and nearby areas. Final fee depends on distance and timing.",
    },
    {
      title: "Loan Signing Appointments",
      price: "Call for Quote",
      desc: "Pricing based on package size, location, and appointment complexity.",
    },
  ];

  const services = [
    {
      title: "General Notarizations",
      desc: "Acknowledgments, jurats, affidavits, powers of attorney, consent forms, and other common documents handled with care and accuracy.",
    },
    {
      title: "Mobile Notary",
      desc: "Convenient travel service to your home, office, hospital, care facility, or agreed meeting location for added flexibility.",
    },
    {
      title: "Loan Signing Support",
      desc: "Professional document signing assistance for refinance, purchase, seller packages, HELOCs, and related closing documents.",
    },
    {
      title: "Business & After-Hours Appointments",
      desc: "Flexible scheduling for busy professionals, small businesses, and clients who need early morning, evening, or weekend service.",
    },
  ];

  const steps = [
    "Book your appointment by phone, text, or email.",
    "Bring your unsigned documents and a valid government-issued photo ID.",
    "Your documents are reviewed, signed in person, and notarized.",
    "Leave with completed paperwork and a smooth, professional experience.",
  ];

  const faqs = [
    {
      q: "What do I need for my appointment?",
      a: "Please bring the document you need notarized, a valid unexpired government-issued photo ID, and all required signers. Do not sign the document until instructed during the appointment.",
    },
    {
      q: "Can you provide legal advice or prepare documents?",
      a: "No. A notary public cannot provide legal advice, choose forms for you, or explain legal consequences unless separately licensed to do so.",
    },
    {
      q: "Do you travel to clients?",
      a: "Yes. Mobile notary appointments are available based on location and scheduling. Travel fees may apply.",
    },
    {
      q: "What payment methods do you accept?",
      a: "Most clients are offered convenient payment options such as cash, card, or digital payment. Final payment options can be confirmed when booking.",
    },
  ];

  const mapUrl = "https://www.google.com/maps?q=Gainesville,FL&output=embed";
  const bookEmail =
    "mailto:ayindeholdings@gmail.com?subject=Notary%20Appointment%20Request";
  const bookPhone = "tel:+12024132006";
  const textNow = "sms:+12024132006";
  const squareLink = "https://square.link/u/1ZXFYl8e";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
              <span className="text-lg font-bold tracking-[0.2em]">AH</span>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight">
                AyindeHoldings Notary Services
              </div>
              <div className="text-sm text-slate-500">
                Luxury • Professional • Mobile
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-slate-600">
              Services
            </a>
            <a href="#pricing" className="hover:text-slate-600">
              Pricing
            </a>
            <a href="#service-area" className="hover:text-slate-600">
              Service Area
            </a>
            <a href="#faq" className="hover:text-slate-600">
              FAQ
            </a>
            <a href="#contact" className="hover:text-slate-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
            alt="Professional signing desk"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-amber-900/30" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-amber-300/60 bg-white/10 px-4 py-1.5 text-sm font-medium text-amber-100 backdrop-blur">
              Luxury Notary Public & Mobile Signing Services
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight leading-tight text-white md:text-6xl">
              Luxury mobile notarization with professionalism, privacy, and
              convenience.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Serving individuals, families, and businesses throughout
              Gainesville, Florida with elevated notary public services, mobile
              appointments, and flexible scheduling designed to make every
              signing smooth, secure, and stress-free.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={squareLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-amber-400 px-6 py-3 text-center font-semibold text-slate-950 shadow-sm hover:opacity-90"
              >
                Pay & Confirm Appointment
              </a>
              <a
                href={bookPhone}
                className="rounded-2xl border border-white/40 bg-white/10 px-6 py-3 text-center font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                Call to Book
              </a>
            </div>
            <p className="mt-3 text-sm text-amber-100">
              Payment secures your appointment. You will receive a confirmation
              via text or email shortly after.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm md:grid-cols-3">
              {["Mobile Appointments", "Open Daily 9AM–9PM", "Professional Signing Support"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-sm backdrop-blur-sm"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-white shadow-2xl backdrop-blur-sm">
              <div className="text-sm uppercase tracking-[0.2em] text-amber-300">
                Why Clients Choose Us
              </div>
              <div className="mt-4 text-3xl font-bold">
                Luxury service with confidence
              </div>
              <div className="mt-6 space-y-4 text-slate-200">
                <div className="rounded-2xl bg-white/10 p-4">
                  Prompt communication and white-glove scheduling
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  Refined service for personal and business documents
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  Luxury mobile service for clients with busy schedules
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  Clear guidance on what to bring to your appointment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Why This Site Converts
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Clear next steps for every visitor
            </h2>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <div className="font-semibold">Fast action</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Visitors can call, text, email, or pay online immediately without
              searching for details.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <div className="font-semibold">Trust signals</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Luxury branding, testimonials, pricing, and a clear service area
              make the business feel legitimate and premium.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Services
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Notary services designed around your schedule
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Whether you need a simple notarization or a mobile appointment,
            every signing is handled with professionalism, discretion, and
            attention to detail.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              About
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Professional service you can feel comfortable with
            </h2>
            <p className="mt-6 leading-8 text-slate-300">
              AyindeHoldings Notary Services is committed to making notarization
              convenient, respectful, and efficient. We understand that
              important documents often come with deadlines, life events, and
              sensitive situations, so every appointment is handled with
              professionalism and care.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Our goal is simple: provide a polished experience, clear
              communication, and dependable service clients can trust.
            </p>
          </div>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/10 p-5"
              >
                <div className="text-sm font-semibold text-amber-300">
                  Step {index + 1}
                </div>
                <div className="mt-1 text-lg text-white">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-amber-300 bg-yellow-50 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
                Important Reminder
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Please bring valid ID
              </h3>
            </div>
            <div className="leading-8 text-slate-700 lg:col-span-2">
              All signers must appear in person with valid, unexpired
              government-issued identification. Documents must be complete
              before the appointment, but signatures should be made only in the
              presence of the notary unless the document instructions state
              otherwise.
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Pricing
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Transparent pricing for every appointment
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Simple, professional pricing with mobile convenience. Final quotes
            may vary based on number of signatures, distance, and appointment
            type.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricing.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                {item.title}
              </div>
              <div className="mt-4 text-3xl font-bold tracking-tight">
                {item.price}
              </div>
              <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold">
            Ready to secure your appointment?
          </div>
          <p className="mt-2 leading-7 text-slate-600">
            Use the secure payment link to pay and confirm your appointment
            faster.
          </p>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <div className="font-semibold">Typical Pricing:</div>
            <div>$25 Mobile Travel Fee</div>
            <div>$10 Per Notarized Signature</div>
            <div>Loan Signing: Custom Quote</div>
          </div>
          <a
            href={squareLink}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 shadow-sm hover:opacity-90"
          >
            Pay & Confirm Appointment
          </a>
        </div>
      </section>

      <section
        id="service-area"
        className="border-t border-slate-200 bg-slate-50"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Service Area
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Serving Gainesville, Florida and surrounding areas
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              AyindeHoldings Notary Services offers mobile notarization
              throughout Gainesville, FL and nearby communities. Appointments
              are available for homes, offices, hospitals, care facilities, and
              other agreed meeting locations.
            </p>
            <div className="mt-8 space-y-4 text-slate-700">
              <div>
                <span className="font-semibold">Primary Area:</span> Gainesville,
                FL
              </div>
              <div>
                <span className="font-semibold">Hours:</span> Daily, 9:00 AM to
                9:00 PM
              </div>
              <div>
                <span className="font-semibold">Booking:</span> Available by
                phone, text, email, or secure online payment
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <iframe
              title="Google Map of Gainesville, Florida"
              src={mapUrl}
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Testimonials
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Trusted by clients who value professionalism
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Built on professionalism, flexibility, and a smooth client
              experience from first contact to final signature.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <p className="leading-7 text-slate-200">“{item.quote}”</p>
                <div className="mt-5 text-sm font-semibold text-amber-300">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            FAQ
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Common questions
          </h2>
        </div>
        <div className="mt-10 grid gap-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <p className="mt-2 leading-7 text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Book your notary appointment
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Ready to schedule? Reach out by phone, text, or email to request
              an appointment, confirm availability, and get pricing details.
            </p>
            <div className="mt-8 space-y-4 text-slate-700">
              <div>
                <span className="font-semibold">Phone:</span> (202) 413-2006
              </div>
              <div>
                <span className="font-semibold">Email:</span>{" "}
                ayindeholdings@gmail.com
              </div>
              <div>
                <span className="font-semibold">Service Area:</span> Gainesville,
                FL and surrounding areas
              </div>
              <div>
                <span className="font-semibold">Hours:</span> Daily, 9:00 AM to
                9:00 PM
              </div>
            </div>
          </div>

          <form className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <div className="grid gap-4">
              <input
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="Full name"
              />
              <input
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="Email address"
              />
              <input
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="Phone number"
              />
              <textarea
                className="min-h-[140px] rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="Tell us what document you need notarized and your preferred appointment time"
              />
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookEmail}
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-center font-semibold text-white hover:opacity-90"
                >
                  Book by Email
                </a>
                <a
                  href={bookPhone}
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center font-semibold hover:bg-slate-50"
                >
                  Book by Phone
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href={textNow}
          className="rounded-full bg-emerald-600 px-5 py-4 text-center text-sm font-semibold text-white shadow-2xl hover:opacity-90"
        >
          Text Now
        </a>
        <a
          href={bookPhone}
          className="rounded-full bg-slate-900 px-5 py-4 text-center text-sm font-semibold text-white shadow-2xl hover:opacity-90"
        >
          Call Now
        </a>
      </div>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 AyindeHoldings Notary Services. All rights reserved.</div>
          <div>Notary public services by appointment only.</div>
        </div>
      </footer>
    </div>
  );
}
