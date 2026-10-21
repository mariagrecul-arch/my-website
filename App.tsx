import { useEffect, useState } from "react";

type Page = "home" | "beratung" | "sortiment" | "store";

const pages: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "beratung", label: "Beratung" },
  { id: "sortiment", label: "Sortiment" },
  { id: "store", label: "Store & Anfahrt" },
];

const images = {
  hero: "https://images.unsplash.com/photo-1631112230741-446762ee05ac?auto=format&fit=crop&w=1800&q=88",
  store:
    "https://images.unsplash.com/photo-1621261027519-a71ac66d5a68?auto=format&fit=crop&w=1400&q=85",
  denim:
    "https://images.unsplash.com/photo-1541840031508-326b77c9a17e?auto=format&fit=crop&w=1200&q=85",
  detail:
    "https://images.unsplash.com/photo-1645859724073-d9bff094b1c7?auto=format&fit=crop&w=1200&q=85",
  hamburg:
    "https://images.unsplash.com/photo-1626291572050-ae194bad7783?auto=format&fit=crop&w=1600&q=85",
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PageLink({
  page,
  children,
  className = "",
  onNavigate,
}: {
  page: Page;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <a
      href={`#${page}`}
      className={className}
      onClick={() => onNavigate?.()}
    >
      {children}
    </a>
  );
}

function Header({ page }: { page: Page }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <PageLink page="home" className="brand" onNavigate={() => setMenuOpen(false)}>
          <span className="brand-mark">HJ</span>
          <span className="brand-name">
            Hamburg
            <br />
            Jeans
          </span>
        </PageLink>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Hauptnavigation">
          {pages.map((item) => (
            <PageLink
              key={item.id}
              page={item.id}
              className={page === item.id ? "active" : ""}
              onNavigate={() => setMenuOpen(false)}
            >
              {item.label}
            </PageLink>
          ))}
        </nav>

        <PageLink page="store" className="header-cta">
          <PinIcon />
          Besuchen
        </PageLink>

        <button
          className={menuOpen ? "menu-button is-open" : "menu-button"}
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow light">Hamburg Jeans</p>
          <h2>Eine gute Jeans findet man nicht online.</h2>
        </div>
        <PageLink page="store" className="circle-link">
          <ArrowIcon />
        </PageLink>
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="brand-mark inverse">HJ</span>
          <p>Jeans House Ohlrogge<br />GmbH &amp; Co. KG</p>
        </div>
        <div>
          <p className="footer-label">Besuchen</p>
          <p>Wandsbeker Allee 68<br />22041 Hamburg</p>
        </div>
        <div>
          <p className="footer-label">Geöffnet</p>
          <p>Mo–Fr&nbsp; 10:00–18:00<br />Sa&nbsp; 10:00–16:00</p>
        </div>
        <div>
          <p className="footer-label">Kontakt</p>
          <a href="tel:+494068915830">040 – 68 91 58 30</a>
          <div className="legal"><a href="#">Impressum</a><a href="#">Datenschutz</a></div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <img src={images.hero} alt="Nahaufnahme von tiefblauem Denim" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">Jeanskompetenz seit über 30 Jahren</p>
          <h1>Deine Jeans.<br /><em>Dein</em> Hamburg.</h1>
          <p className="hero-intro">Wir finden nicht irgendeine Jeans. Wir finden die, die zu dir passt.</p>
          <PageLink page="beratung" className="text-link light">
            Unsere Beratung <ArrowIcon />
          </PageLink>
        </div>
        <div className="hero-badge">
          <span>Heute geöffnet</span>
          <strong>10—18 Uhr</strong>
        </div>
        <span className="vertical-note">Wandsbek · Hamburg</span>
      </section>

      <section className="intro-section section-pad">
        <div className="section-number">01</div>
        <div className="intro-copy">
          <p className="eyebrow">Passform statt Paket</p>
          <h2>Manche Dinge muss man <em>anprobieren.</em></h2>
          <p className="lead">
            Jeans ist nicht gleich Jeans. Schnitt, Denim und Waschung verändern alles.
            Auf 260 m² nehmen wir uns Zeit, hören zu und sehen oft auf den ersten Blick,
            welches Modell wirklich sitzt.
          </p>
          <PageLink page="beratung" className="text-link">
            So beraten wir <ArrowIcon />
          </PageLink>
        </div>
        <div className="quote-card">
          <span className="quote-mark">“</span>
          <blockquote>Die beste Jeans ist die, an die du beim Tragen nicht mehr denkst.</blockquote>
          <p>— Unser Passform-Versprechen</p>
        </div>
      </section>

      <section className="split-feature">
        <div className="feature-image">
          <img src={images.store} alt="Kleiderstange in einer modernen Boutique" />
          <span className="image-index">260 m²</span>
        </div>
        <div className="feature-copy">
          <p className="eyebrow light">Mehr Auswahl. Weniger Fehlkäufe.</p>
          <h2>Deine Größe ist bei uns keine Randnotiz.</h2>
          <p>
            Von bewährten Klassikern bis zu aktuellen Fits. Auch Überlängen bis
            38 Inch und Weiten bis 48 warten im Store auf dich.
          </p>
          <PageLink page="sortiment" className="button cream">
            Sortiment entdecken <ArrowIcon />
          </PageLink>
        </div>
      </section>

      <section className="steps-section section-pad">
        <div className="steps-heading">
          <p className="eyebrow">So einfach geht gute Beratung</p>
          <h2>Drei Schritte.<br />Eine Jeans.</h2>
        </div>
        <div className="steps-list">
          {[
            ["01", "Ankommen", "Ohne Termin vorbeikommen und in Ruhe erzählen, was du suchst."],
            ["02", "Anprobieren", "Wir stellen Schnitte, Größen und Waschungen passend für dich zusammen."],
            ["03", "Wohlfühlen", "Du gehst nur mit einer Jeans, wenn sie sich wirklich richtig anfühlt."],
          ].map(([num, title, text]) => (
            <article className="step" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <StoreTeaser />
    </>
  );
}

function Beratung() {
  return (
    <>
      <PageHero
        eyebrow="Persönlich. Ehrlich. Erfahren."
        title={<>Wir sehen, was <em>dir steht.</em></>}
        image={images.detail}
        imageAlt="Detailaufnahme einer Jeansnaht"
        intro="Passformberatung ist bei uns kein Extra, sondern der Anfang von allem."
      />
      <section className="editorial-grid section-pad">
        <div>
          <p className="eyebrow">Beratung mit Blick fürs Detail</p>
          <h2>Dein Körper ist keine Konfektionsgröße.</h2>
        </div>
        <div className="body-copy">
          <p className="lead">
            High Rise oder Mid Rise? Straight, Slim oder Tapered? Wir übersetzen
            Fachbegriffe in ein gutes Gefühl und bringen nur das in die Kabine,
            was zu deinen Wünschen passt.
          </p>
          <p>
            Dabei zählen nicht Trends oder ein schneller Verkauf. Es zählt, dass
            du dich bewegst, hinsetzt und in den Spiegel schaust — und deine neue
            Jeans gern mit nach Hause nimmst.
          </p>
        </div>
      </section>
      <section className="service-cards section-pad">
        {[
          ["01", "Zuhören", "Anlass, Stil und Tragegefühl geben die Richtung vor."],
          ["02", "Auswählen", "Aus vielen Marken und Fits treffen wir eine präzise Vorauswahl."],
          ["03", "Feinjustieren", "Länge, Bund und Silhouette prüfen wir gemeinsam."],
          ["04", "Ehrlich sein", "Was nicht perfekt sitzt, bleibt bei uns im Laden."],
        ].map(([num, title, text]) => (
          <article key={num}>
            <span>{num}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <section className="dark-cta">
        <p className="eyebrow light">Kein Termin nötig</p>
        <h2>Komm vorbei.<br /><em>Wir nehmen uns Zeit.</em></h2>
        <PageLink page="store" className="button cream">Besuch planen <ArrowIcon /></PageLink>
      </section>
    </>
  );
}

function Sortiment() {
  return (
    <>
      <PageHero
        eyebrow="Auswahl, die wirklich passt"
        title={<>Große Namen.<br /><em>Alle Größen.</em></>}
        image={images.denim}
        imageAlt="Struktur von blauem Denim"
        intro="Klassiker, neue Lieblingsfits und echte Größenvielfalt — direkt zum Anprobieren."
      />
      <section className="assortment section-pad">
        <div className="assortment-heading">
          <p className="eyebrow">Unser Sortiment</p>
          <h2>Für jeden Körper eine gute Silhouette.</h2>
        </div>
        <div className="fit-list">
          {[
            ["01", "Straight & Regular", "Zeitlose Passformen, die jeden Tag funktionieren."],
            ["02", "Slim & Tapered", "Modern geschnitten, ohne Kompromisse beim Komfort."],
            ["03", "Wide & Relaxed", "Mehr Weite, neue Proportionen und maximale Bewegungsfreiheit."],
            ["04", "Special Sizes", "Überlängen bis 38 Inch und Weiten bis 48."],
          ].map(([num, title, text]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowIcon />
            </article>
          ))}
        </div>
      </section>
      <section className="brand-band">
        <p className="eyebrow light">Marken, die wir kennen</p>
        <div className="brand-cloud">
          {["Levi’s", "Lee", "Wrangler", "MAC", "Pioneer", "Cross", "Dockers", "Paddock’s"].map(
            (brand) => <span key={brand}>{brand}</span>,
          )}
        </div>
        <p className="band-note">Die Auswahl kann saisonal variieren. Ruf uns gern an, wenn du ein bestimmtes Modell suchst.</p>
      </section>
      <StoreTeaser />
    </>
  );
}

function Store() {
  return (
    <>
      <PageHero
        eyebrow="Mitten in Wandsbek"
        title={<>Nicht weit weg.<br /><em>Ganz nah dran.</em></>}
        image={images.hamburg}
        imageAlt="Stadtszene in Hamburg"
        intro="260 m² Jeanskompetenz, persönliche Beratung und eine große Auswahl direkt vor Ort."
      />
      <section className="visit-grid section-pad">
        <div className="visit-address">
          <p className="eyebrow">Hier findest du uns</p>
          <h2>Wandsbeker<br />Allee 68</h2>
          <p>22041 Hamburg</p>
          <a
            className="button dark"
            href="https://www.google.com/maps/dir/?api=1&destination=Wandsbeker+Allee+68,+22041+Hamburg"
            target="_blank"
            rel="noreferrer"
          >
            Route planen <ArrowIcon />
          </a>
        </div>
        <div className="opening-card">
          <p className="eyebrow light">Öffnungszeiten</p>
          <div><span>Montag — Freitag</span><strong>10:00 — 18:00</strong></div>
          <div><span>Samstag</span><strong>10:00 — 16:00</strong></div>
          <div><span>Sonntag</span><strong>Geschlossen</strong></div>
          <a href="tel:+494068915830">040 – 68 91 58 30</a>
        </div>
      </section>
      <section className="arrival section-pad">
        <div>
          <p className="eyebrow">Gut zu wissen</p>
          <h2>Dein Weg zur neuen Lieblingsjeans.</h2>
        </div>
        <div className="arrival-items">
          <article><span>01</span><h3>Ohne Termin</h3><p>Komm einfach während unserer Öffnungszeiten vorbei.</p></article>
          <article><span>02</span><h3>Mit Zeit</h3><p>Plane ungefähr 30 Minuten für eine entspannte Beratung ein.</p></article>
          <article><span>03</span><h3>Mit Fragen</h3><p>Du suchst ein Modell? Ruf vorher kurz durch — wir schauen nach.</p></article>
        </div>
      </section>
    </>
  );
}

function PageHero({
  eyebrow,
  title,
  image,
  imageAlt,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  image: string;
  imageAlt: string;
  intro: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <img src={image} alt={imageAlt} />
      <span className="vertical-note">Hamburg Jeans · Wandsbek</span>
    </section>
  );
}

function StoreTeaser() {
  return (
    <section className="store-teaser">
      <img src={images.hamburg} alt="Hamburger Straßenszene" />
      <div className="store-overlay" />
      <div className="store-teaser-copy">
        <p className="eyebrow light">Dein Weg zu uns</p>
        <h2>Wandsbeker<br />Allee 68</h2>
        <p>Mo–Fr 10–18 Uhr · Sa 10–16 Uhr</p>
        <PageLink page="store" className="button cream">Store &amp; Anfahrt <ArrowIcon /></PageLink>
      </div>
    </section>
  );
}

function App() {
  const getPage = (): Page => {
    const hash = window.location.hash.replace("#", "") as Page;
    return pages.some((item) => item.id === hash) ? hash : "home";
  };
  const [page, setPage] = useState<Page>(getPage);

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const titles: Record<Page, string> = {
      home: "Hamburg Jeans — Passform statt Paket",
      beratung: "Beratung — Hamburg Jeans",
      sortiment: "Sortiment — Hamburg Jeans",
      store: "Store & Anfahrt — Hamburg Jeans",
    };
    document.title = titles[page];
  }, [page]);

  return (
    <div className="site-shell">
      <Header page={page} />
      <main>{page === "home" ? <Home /> : page === "beratung" ? <Beratung /> : page === "sortiment" ? <Sortiment /> : <Store />}</main>
      <Footer />
    </div>
  );
}

export default App;
