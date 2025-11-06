export default function App() {
  const brand = {
    name: "AURŸNN",
    colors: {
      base: "#FAF7F2",
      gold: "#C7A46D",
      sand: "#D8CAB4",
      sage: "#BFCAB2",
      ink: "#484445",
    },
  };

  const products = [
    {
      id: "hand wash",
      name: "Revitalising Hand & Body Wash",
      subtitle: "Ervaar een moment van rust, telkens wanneer je je handen wast.",
      price: "€19,95",
      bullets: [
        "Zachte formule met plantaardige ingrediënten",
        "Hydraterend en pH-neutraal",
        "Luxe design – perfect voor badkamer of cadeau",
      ],
      image:
        "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=1200&auto=format&fit=crop",
      url: "https://aurynn.myshopify.com/products/aurynn-aromatherapie-ketting-draagbare-geurdiffuser-rvs",
    },
    {
      id: "shampoo",
      name: "Calming Peptide Shampoo",
      subtitle: "De natuurlijke geur is subtiel en rustgevend — een moment van kalmte, elke dag opnieuw.",
      price: "€24,95",
      bullets: [
        "Geschikt voor een gevoelige hoofdhuid",
        "Verrijkt met Pea Peptides & Aloe Vera",
        "Sulfaat- en siliconenvrij",
      ],
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612b3cfe?q=80&w=1200&auto=format&fit=crop",
      url: "https://aurynn.myshopify.com/products/aurynn-siliconen-gezichtsborstel-dagelijkse-glow",
    },
  ];

  return (
    <main
      className="min-h-screen w-full bg-[var(--base)] text-[var(--ink)]"
      style={{
        ["--base"]: brand.colors.base,
        ["--gold"]: brand.colors.gold,
        ["--sand"]: brand.colors.sand,
        ["--sage"]: brand.colors.sage,
        ["--ink"]: brand.colors.ink,
      }}
    >
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-[var(--base)]/80 border-b border-[var(--sand)]/60">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="tracking-[0.25em] text-xl md:text-2xl font-serif"
            aria-label="Aurynn home"
          >
            {brand.name}
          </a>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#collectie" className="hover:text-[var(--gold)] transition">
              Collectie
            </a>
            <a href="#verhaal" className="hover:text-[var(--gold)] transition">
              Ons verhaal
            </a>
            <a href="#faq" className="hover:text-[var(--gold)] transition">
              FAQ
            </a>
            <a href="#contact" className="hover:text-[var(--gold)] transition">
              Contact
            </a>
          </nav>
          <a
            href="#shop"
            className="md:inline-flex hidden rounded-full border px-4 py-2 text-sm border-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold)] hover:text-white transition"
            aria-label="Shop nu"
          >
            Shop nu
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif tracking-widest leading-tight">
              Moments of calm,
              <br /> created for you.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--ink)]/80 max-w-prose">
              Aurynn brengt welness en schoonheid samen in tijdloze,
              minimalistische producten. Betaalbare luxe voor je dagelijkse
              rituelen.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#collectie"
                className="rounded-full bg-[var(--ink)] text-white px-6 py-3 text-sm tracking-wide hover:bg-[var(--gold)] transition"
              >
                Ontdek collectie
              </a>
              <a
                href="#verhaal"
                className="rounded-full border border-[var(--sand)] px-6 py-3 text-sm tracking-wide hover:border-[var(--gold)] transition"
              >
                Lees ons verhaal
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl border border-[var(--sand)] overflow-hidden shadow-sm">
            <img
              alt="Rustige lifestyle"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1600&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-[var(--sand)]/60">
        <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-[var(--ink)]/80">
          <div className="flex items-center gap-2">🌿 Natuurlijke look & feel</div>
          <div className="flex items-center gap-2">💨 Snelle EU-verzending</div>
          <div className="flex items-center gap-2">🎁 Cadeau-klaar verpakt</div>
          <div className="flex items-center gap-2">⭐ 14-dagen bedenktijd</div>
        </div>
      </section>

      {/* Product grid */}
      <section id="collectie" className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest">
            Aurynn Collectie
          </h2>
          <p className="mt-3 text-[var(--ink)]/80 max-w-prose">
            Start met twee zorgvuldig geselecteerde favorieten. Meer komt
            binnenkort.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p) => (
            <article
              key={p.id}
              className="group rounded-3xl border border-[var(--sand)] overflow-hidden shadow-sm bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-[1.02] transition"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-serif tracking-wide">{p.name}</h3>
                <p className="mt-1 text-[var(--ink)]/70">{p.subtitle}</p>
                <ul className="mt-4 space-y-1 text-sm text-[var(--ink)]/80">
                  {p.bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-medium">{p.price}</span>
                  <div className="flex gap-3">
                    {/* Koopknoppen linken nu naar Shopify */}
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[var(--gold)] text-white px-5 py-2 text-sm hover:brightness-110 transition"
                    >
                      Koop nu
                    </a>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[var(--sand)] px-5 py-2 text-sm hover:border-[var(--gold)] transition"
                    >
                      Bekijk
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Story */}
      <section id="verhaal" className="bg-[var(--base)]">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-last md:order-first">
            <div className="relative aspect-[4/3] rounded-3xl border border-[var(--sand)] overflow-hidden">
              <img
                alt="Zachte materialen en kalme styling"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1600&auto=format&fit=crop"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-widest">
              Ons verhaal
            </h2>
            <p className="mt-4 text-[var(--ink)]/80 leading-relaxed">
              Bij Aurynn geloven we dat kleine rituelen het verschil maken. Met
              een focus op rustige esthetiek, prettige materialen en zorgvuldige
              details brengen we producten die je helpen vertragen — elke dag
              opnieuw.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#collectie"
                className="rounded-full bg-[var(--ink)] text-white px-6 py-3 text-sm tracking-wide hover:bg-[var(--gold)] transition"
              >
                Shop de collectie
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[var(--sand)] px-6 py-3 text-sm tracking-wide hover:border-[var(--gold)] transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-serif tracking-widest">
          Veelgestelde vragen
        </h2>
        <div className="mt-8 divide-y divide-[var(--sand)]/70">
          {[
            {
              q: "Hoe lang is de levertijd?",
              a: "Bestellingen vanuit EU-warehouse worden in 2–5 werkdagen geleverd.",
            },
            {
              q: "Kan ik retourneren?",
              a: "Ja, je hebt 14 dagen bedenktijd. Ongeopende producten kunnen kosteloos retour.",
            },
            {
              q: "Welke betaalmethoden accepteert Aurynn?",
              a: "iDEAL, creditcard, PayPal en Apple Pay.",
            },
          ].map((item, i) => (
            <details key={i} className="group py-4">
              <summary className="cursor-pointer list-none flex items-center justify-between text-lg font-medium">
                <span>{item.q}</span>
                <span className="ml-4 text-[var(--gold)] group-open:rotate-45 transition">
                  ＋
                </span>
              </summary>
              <p className="mt-2 text-[var(--ink)]/80">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-[var(--sand)]/60">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="tracking-[0.25em] text-xl font-serif">
              {brand.name}
            </div>
            <p className="mt-3 text-sm text-[var(--ink)]/70 max-w-sm">
              Calm. Glow. Repeat. Wellness & beauty gifts for peaceful living.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Nieuwsbrief ingediend – koppel later aan e-mail provider.");
            }}
            className="md:col-span-2"
          >
            <label className="text-sm text-[var(--ink)]/70">Nieuwsbrief</label>
            <div className="mt-2 flex gap-3">
              <input
                required
                placeholder="E-mailadres"
                className="flex-1 rounded-full border border-[var(--sand)] bg-white/70 px-4 py-3 outline-none focus:border-[var(--gold)]"
              />
              <button className="rounded-full bg-[var(--gold)] text-white px-6 py-3 text-sm hover:brightness-110">
                Inschrijven
              </button>
            </div>
          </form>
        </div>
        <div className="text-center text-xs text-[var(--ink)]/60 py-6">
          © {new Date().getFullYear()} Aurynn. Alle rechten voorbehouden.
        </div>
      </footer>
    </main>
  );
}
