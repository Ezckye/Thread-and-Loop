const benefits = [
  {
    number: "01",
    title: "Curated monthly edit",
    copy: "A considered three-piece capsule, selected around your life and personal rhythm.",
  },
  {
    number: "02",
    title: "Smart fit profile",
    copy: "Your measurements, preferences, and feedback refine every collection we send.",
  },
  {
    number: "03",
    title: "Swap or skip anytime",
    copy: "Exchange a piece, pause a month, or change your cadence without the friction.",
  },
];

const steps = [
  ["Profile", "Define your fit, palette, silhouettes, and the way you actually dress."],
  ["Receive", "Unbox a coordinated edit of premium pieces chosen specifically for you."],
  ["Loop", "Keep your favourites, return the rest, and make every future edit sharper."],
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Thread and Loop home">
          <span className="wordmark-diamond" aria-hidden="true"><b>T</b></span>
          <span>Thread <i>&amp;</i> Loop</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#system">The system</a>
          <a href="#membership">Membership</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#membership">Join the loop</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>Wardrobe</span> / 01</p>
          <h1>
            Style, delivered
            <span>on your frequency.</span>
          </h1>
          <p className="hero-lede">
            A personalized capsule wardrobe, curated monthly. Premium pieces
            chosen for the person you are now—and the life you are building.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#membership">Start your rotation</a>
            <a className="button button-secondary" href="#system">Explore the system</a>
          </div>
          <div className="hero-note">
            <span className="signal-dot" aria-hidden="true" />
            <span>Now accepting founding members</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Thread and Loop brand mark and membership preview">
          <div className="arch arch-outer" aria-hidden="true" />
          <div className="arch arch-middle" aria-hidden="true" />
          <div className="arch arch-inner" aria-hidden="true" />
          <div className="logo-stage">
            <img src={`${basePath}/thread-loop-logo-transparent.png`} alt="Thread and Loop logo" />
          </div>
          <aside className="plan-card" aria-label="Loop One membership">
            <div className="plan-card-top">
              <span>Membership</span>
              <span>01 / 03</span>
            </div>
            <p>Loop One</p>
            <div className="price"><strong>$89</strong><span>/ month</span></div>
            <ul>
              <li>3 premium pieces</li>
              <li>Free exchanges</li>
              <li>Pause anytime</li>
            </ul>
          </aside>
          <span className="visual-index" aria-hidden="true">T&L — 2026</span>
        </div>
      </section>

      <section className="benefit-rail" aria-label="Membership benefits">
        {benefits.map((benefit) => (
          <article key={benefit.number}>
            <span>{benefit.number}</span>
            <div>
              <h2>{benefit.title}</h2>
              <p>{benefit.copy}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="system-section" id="system">
        <div className="section-heading">
          <p className="eyebrow"><span>The system</span> / 02</p>
          <h2>A wardrobe that learns your rhythm.</h2>
          <p>Less searching. Fewer compromises. A focused rotation that becomes more personal every month.</p>
        </div>
        <div className="steps">
          {steps.map(([title, copy], index) => (
            <article key={title}>
              <span className="step-number">0{index + 1}</span>
              <div className="step-glyph" aria-hidden="true"><span /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="membership-section" id="membership">
        <div className="membership-frame" aria-hidden="true">
          <span /><span /><span />
        </div>
        <div className="membership-copy">
          <p className="eyebrow"><span>Membership</span> / 03</p>
          <h2>Your next wardrobe begins with one considered loop.</h2>
          <p>Join Loop One for a monthly three-piece edit, free exchanges, and full control over your cadence.</p>
        </div>
        <div className="membership-action">
          <p><span>Loop One</span><strong>$89</strong><small>per month</small></p>
          <a className="button button-primary" href="mailto:hello@threadandloop.com?subject=Join%20the%20Loop">Request founding access</a>
          <span>No commitment. Pause or cancel anytime.</span>
        </div>
      </section>

      <footer id="about">
        <a className="wordmark footer-wordmark" href="#top" aria-label="Thread and Loop home">
          <span className="wordmark-diamond" aria-hidden="true"><b>T</b></span>
          <span>Thread <i>&amp;</i> Loop</span>
        </a>
        <p>Modern wardrobes, thoughtfully in motion.</p>
        <div>
          <a href="mailto:hello@threadandloop.com">Contact</a>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </main>
  );
}
