const sponsors = [
  { name: "Abacus Data", logo: "/sponsors/abacus.png" },
  { name: "The Cyclery", logo: "/sponsors/the-cyclery.png" },
  { name: "Factor", logo: "/sponsors/factor.png" },
  { name: "SRAM", logo: "/sponsors/sram.png" },
  { name: "Mark Motors", logo: "/sponsors/mark-motors.png" },
  { name: "Castelli", logo: "/sponsors/castelli.png" },
  { name: "Smith", logo: "/sponsors/smith.png" },
  { name: "Look", logo: "/sponsors/look.png" },
  { name: "Pirelli", logo: "/sponsors/pirelli.png" },
  { name: "HLC", logo: "/sponsors/hlc.png" },
  { name: "Bont", logo: "/sponsors/bont.png" },
  { name: "Skratch Labs", logo: "/sponsors/skratch.png" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-8 font-sans">
      <section className="min-h-screen flex flex-col justify-between max-w-7xl mx-auto">
        <header className="flex justify-between items-start gap-6">
          <img src="/logo.svg"  alt="Cyclery Racing" className="w-40 md:w-56" />

          <a
            href="https://trevs.ca"
            target="_blank"
            rel="noreferrer"
            className="text-right text-xs font-semibold uppercase tracking-[0.04em] text-[#ff138c] transition hover:text-black"
          >
            Launch in progress
          </a>
        </header>

        <section className="grid lg:grid-cols-[1.3fr_0.7fr] gap-16 items-end py-24">
          <div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[-0.07em] leading-[0.9]">
              New site.
              <br />
              Same speed.
            </h1>
          </div>

          <div className="border-t border-black pt-6">
            <p className="text-lg md:text-xl leading-relaxed">
              The new Cyclery Racing - Abacus Data website is being built. Team updates,
              sponsors, riders, results, and season stories are coming soon.
            </p>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.04em] text-[#ff138c]">
              The next chapter is almost ready.
            </p>
          </div>
        </section>

        <section className="border-t border-black py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.04em] mb-6">
            Supported by
          </p>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 max-w-2xl">
            {sponsors.map((sponsor) => (
              <p
                key={sponsor.name}
                className="text-lg md:text-xl font-bold tracking-[-0.03em]"
              >
                {sponsor.name}
              </p>
            ))}
          </div>
        </section>

        <footer className="grid md:grid-cols-[1fr_1fr_0.7fr] gap-5 md:gap-6 border-t border-black py-6 text-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.04em] mb-1">
              In the meantime
            </p>
            <p className="max-w-sm leading-snug">
              Looking for more information before the new website is live?
              Reach out below.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.04em] mb-1">
              Sponsorships & Partnerships
            </p>
            <a
              href="mailto:vince@thecyclery.ca"
              className="text-xl transition hover:text-[#ff138c]"
            >
              vince@thecyclery.ca
            </a>

            <p className="text-xs font-semibold uppercase tracking-[0.04em] mt-5 mb-1 opacity-70">
              Website & Media
            </p>
            <a
              href="mailto:regina@trevs.ca"
              className="transition hover:text-[#ff138c]"
            >
              regina@trevs.ca
            </a>
          </div>

          <div className="md:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.04em] mb-1">
              Stay up to date
            </p>
            <a
              href="https://www.instagram.com/cycleryracing"
              target="_blank"
              rel="noreferrer"
              className="text-xl transition hover:text-[#ff138c]"
            >
              Instagram
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}