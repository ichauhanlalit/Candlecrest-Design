import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Amber Glow",
    scent: "Vanilla · Sandalwood · Musk",
    price: "$28",
    burnTime: "55 hrs",
    emoji: "🕯️",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Harvest Hearth",
    scent: "Pumpkin · Cinnamon · Clove",
    price: "$32",
    burnTime: "60 hrs",
    emoji: "🍂",
    badge: "Seasonal",
  },
  {
    id: 3,
    name: "Sea Mist",
    scent: "Ocean · Driftwood · Salt Air",
    price: "$26",
    burnTime: "50 hrs",
    emoji: "🌊",
    badge: "New",
  },
  {
    id: 4,
    name: "Rose Petal Dusk",
    scent: "Rose · Peony · White Tea",
    price: "$30",
    burnTime: "55 hrs",
    emoji: "🌹",
    badge: "",
  },
  {
    id: 5,
    name: "Cedarwood Cabin",
    scent: "Cedar · Pine · Smoke",
    price: "$34",
    burnTime: "65 hrs",
    emoji: "🌲",
    badge: "Bestseller",
  },
  {
    id: 6,
    name: "Citrus Bloom",
    scent: "Lemon · Bergamot · Jasmine",
    price: "$26",
    burnTime: "48 hrs",
    emoji: "🍋",
    badge: "",
  },
];

const testimonials = [
  {
    name: "Sophie R.",
    text: "The Amber Glow candle completely transformed my living room. The scent is rich but not overpowering — pure luxury.",
    location: "Austin, TX",
  },
  {
    name: "Marcus W.",
    text: "I gifted Harvest Hearth to my mom and she immediately ordered two more. CandleCrest quality is unmatched.",
    location: "Chicago, IL",
  },
  {
    name: "Priya L.",
    text: "Beautiful packaging, incredible scents. These candles burn so evenly and last ages. My go-to for home fragrance.",
    location: "New York, NY",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "hsl(38 40% 97%)",
        borderBottom: "1px solid hsl(35 25% 82%)",
        boxShadow: "0 2px 12px rgba(100,70,30,0.07)",
      }}
    >
      <div
        className="cc-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.1rem 1.5rem",
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1.6rem" }}>🕯️</span>
            <div>
              <div
                className="cc-heading"
                style={{
                  fontSize: "1.35rem",
                  fontWeight: "700",
                  color: "hsl(25 30% 15%)",
                  lineHeight: 1,
                  letterSpacing: "0.06em",
                }}
              >
                CandleCrest
              </div>
              <div
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "hsl(30 55% 45%)",
                  marginTop: "1px",
                }}
              >
                Handcrafted · Premium
              </div>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}
        >
          <a href="#products" className="nav-link">Shop</a>
          <a href="#about" className="nav-link">Our Story</a>
          <a href="#values" className="nav-link">Values</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#contact" className="btn-primary" style={{ padding: "0.5rem 1.4rem", fontSize: "0.75rem" }}>
            Shop Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            color: "hsl(25 30% 15%)",
            padding: "0.25rem",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#products" className="nav-link" onClick={() => setMenuOpen(false)}>Shop</a>
        <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>Our Story</a>
        <a href="#values" className="nav-link" onClick={() => setMenuOpen(false)}>Values</a>
        <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href="#contact" className="btn-primary" style={{ textAlign: "center", marginTop: "0.5rem" }}>
          Shop Now
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      style={{
        background: "linear-gradient(135deg, hsl(38 40% 94%) 0%, hsl(30 45% 90%) 50%, hsl(20 35% 88%) 100%)",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(180, 120, 60, 0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(180, 120, 60, 0.06)",
          pointerEvents: "none",
        }}
      />

      <div className="cc-container" style={{ textAlign: "center", position: "relative" }}>
        <div
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "hsl(30 55% 45%)",
            marginBottom: "1.2rem",
          }}
        >
          Handcrafted with Love · Est. 2019
        </div>

        <h1
          className="cc-heading"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: "700",
            color: "hsl(25 30% 15%)",
            lineHeight: 1.15,
            marginBottom: "1.5rem",
            maxWidth: "800px",
            margin: "0 auto 1.5rem",
          }}
        >
          Light Your World with
          <br />
          <span style={{ color: "hsl(30 55% 45%)" }}>Pure, Natural Luxury</span>
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "hsl(30 15% 45%)",
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          Hand-poured soy wax candles crafted with premium fragrance oils and
          natural botanicals. Every flame tells a story.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#products" className="btn-primary">Explore Collection</a>
          <a href="#about" className="btn-outline">Our Story</a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            marginTop: "4rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "50+", label: "Unique Scents" },
            { num: "100%", label: "Natural Soy Wax" },
            { num: "10K+", label: "Happy Customers" },
            { num: "55hrs", label: "Avg Burn Time" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                className="cc-heading"
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "hsl(30 55% 45%)",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "hsl(30 15% 50%)",
                  marginTop: "0.25rem",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="cc-section" style={{ background: "hsl(38 35% 96%)" }}>
      <div className="cc-container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "hsl(30 55% 45%)",
              marginBottom: "0.75rem",
            }}
          >
            Our Collection
          </div>
          <h2
            className="cc-heading"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              fontWeight: "700",
              color: "hsl(25 30% 15%)",
              marginBottom: "0",
            }}
          >
            Signature Candles
          </h2>
          <div className="cc-divider" style={{ display: "block", margin: "1rem auto 1.5rem" }} />
          <p style={{ color: "hsl(30 15% 50%)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Each candle is hand-poured in small batches using 100% natural soy wax
            and premium fragrance blends.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="product-card"
              style={{
                background: "hsl(38 40% 97%)",
                borderRadius: "4px",
                border: "1px solid hsl(35 25% 86%)",
                overflow: "hidden",
              }}
            >
              {/* Product image area */}
              <div
                style={{
                  height: "220px",
                  background: "linear-gradient(145deg, hsl(35 35% 90%) 0%, hsl(25 30% 85%) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <span style={{ fontSize: "5rem", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}>
                  {p.emoji}
                </span>
                {p.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      background: "hsl(30 55% 45%)",
                      color: "white",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "2px",
                    }}
                  >
                    {p.badge}
                  </div>
                )}
              </div>

              {/* Product info */}
              <div style={{ padding: "1.5rem" }}>
                <h3
                  className="cc-heading"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    color: "hsl(25 30% 15%)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "hsl(30 15% 55%)",
                    marginBottom: "1.2rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  {p.scent}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.2rem",
                  }}
                >
                  <span
                    className="cc-heading"
                    style={{ fontSize: "1.4rem", fontWeight: "700", color: "hsl(30 55% 40%)" }}
                  >
                    {p.price}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "hsl(30 15% 55%)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    🕐 {p.burnTime} burn time
                  </span>
                </div>
                <button className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="#contact" className="btn-outline">View Full Collection</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="cc-section"
      style={{ background: "hsl(25 30% 15%)", color: "hsl(38 40% 92%)" }}
    >
      <div className="cc-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Text content */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "hsl(30 55% 60%)",
                marginBottom: "0.75rem",
              }}
            >
              Our Story
            </div>
            <h2
              className="cc-heading"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
                fontWeight: "700",
                color: "hsl(38 40% 92%)",
                marginBottom: "0",
                lineHeight: 1.2,
              }}
            >
              Born from a
              <br />
              <span style={{ color: "hsl(30 55% 60%)" }}>Passion for Warmth</span>
            </h2>
            <div
              style={{
                width: "60px",
                height: "2px",
                background: "hsl(30 55% 60%)",
                margin: "1.25rem 0 1.75rem",
              }}
            />
            <p style={{ lineHeight: 1.8, marginBottom: "1.2rem", color: "hsl(38 20% 75%)", fontSize: "1rem" }}>
              CandleCrest was born in 2019 in a small kitchen in Portland, Oregon.
              Founder Emma Whitfield spent years perfecting the art of candle making —
              blending natural soy wax with the finest fragrance oils sourced from around the world.
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: "2rem", color: "hsl(38 20% 75%)", fontSize: "1rem" }}>
              What started as a hobby gifted to friends and family has grown into a beloved brand
              trusted by thousands of customers who believe home should feel like a sanctuary.
              Every candle is still hand-poured with intention and care.
            </p>
            <a href="#values" className="btn-primary">Our Values</a>
          </div>

          {/* Visual panel */}
          <div
            style={{
              background: "linear-gradient(145deg, hsl(25 30% 22%) 0%, hsl(20 25% 19%) 100%)",
              borderRadius: "4px",
              padding: "3rem 2rem",
              border: "1px solid hsl(25 30% 28%)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <span style={{ fontSize: "5rem" }}>🕯️</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { icon: "🌱", title: "100% Natural Soy", desc: "Clean burning, eco-friendly, and sustainably sourced." },
                { icon: "🧪", title: "Premium Fragrance", desc: "Carefully blended oils for a true-to-life scent experience." },
                { icon: "♻️", title: "Eco Packaging", desc: "FSC-certified boxes and recycled glass containers." },
                { icon: "🤝", title: "Small Batch Made", desc: "Every candle hand-poured by our team in Portland, OR." },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: "600", color: "hsl(38 35% 88%)", marginBottom: "0.2rem", fontSize: "0.95rem" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "hsl(38 15% 60%)", lineHeight: 1.6 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const vals = [
    {
      icon: "🌿",
      title: "Sustainably Sourced",
      desc: "Our soy wax is non-GMO and grown in the USA. We partner with suppliers who share our commitment to environmental responsibility.",
    },
    {
      icon: "💧",
      title: "Clean Burning",
      desc: "No paraffin. No synthetic dyes. No phthalates. Our candles burn cleaner than conventional alternatives.",
    },
    {
      icon: "🐰",
      title: "Cruelty Free",
      desc: "CandleCrest products are 100% cruelty-free. We never test on animals and proudly hold Leaping Bunny certification.",
    },
    {
      icon: "📦",
      title: "Minimal Packaging",
      desc: "We've eliminated all unnecessary packaging. Our boxes are recyclable and our glass jars can be repurposed.",
    },
  ];

  return (
    <section id="values" className="cc-section" style={{ background: "hsl(38 40% 97%)" }}>
      <div className="cc-container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "hsl(30 55% 45%)",
              marginBottom: "0.75rem",
            }}
          >
            What We Stand For
          </div>
          <h2
            className="cc-heading"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              fontWeight: "700",
              color: "hsl(25 30% 15%)",
            }}
          >
            Our Values
          </h2>
          <div className="cc-divider" style={{ display: "block", margin: "1rem auto 0" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "2rem",
          }}
        >
          {vals.map((v) => (
            <div
              key={v.title}
              style={{
                background: "hsl(38 35% 94%)",
                border: "1px solid hsl(35 25% 84%)",
                borderRadius: "4px",
                padding: "2rem 1.75rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{v.icon}</div>
              <h3
                className="cc-heading"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "hsl(25 30% 15%)",
                  marginBottom: "0.75rem",
                }}
              >
                {v.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "hsl(30 15% 50%)", lineHeight: 1.7 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section
      className="cc-section"
      style={{
        background: "linear-gradient(135deg, hsl(30 35% 91%) 0%, hsl(38 40% 94%) 100%)",
      }}
    >
      <div className="cc-container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "hsl(30 55% 45%)",
              marginBottom: "0.75rem",
            }}
          >
            What People Say
          </div>
          <h2
            className="cc-heading"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              fontWeight: "700",
              color: "hsl(25 30% 15%)",
            }}
          >
            Customer Love
          </h2>
          <div className="cc-divider" style={{ display: "block", margin: "1rem auto 0" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "hsl(38 40% 97%)",
                borderRadius: "4px",
                padding: "2rem",
                border: "1px solid hsl(35 25% 84%)",
                boxShadow: "0 4px 16px rgba(100,70,30,0.08)",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="star">{s}</span>
                ))}
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "hsl(25 25% 30%)",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>
              <div>
                <div style={{ fontWeight: "700", color: "hsl(25 30% 15%)", fontSize: "0.9rem" }}>
                  {t.name}
                </div>
                <div style={{ fontSize: "0.78rem", color: "hsl(30 15% 55%)" }}>{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="cc-section"
      style={{ background: "hsl(38 35% 95%)" }}
    >
      <div className="cc-container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "hsl(30 55% 45%)",
              marginBottom: "0.75rem",
            }}
          >
            Get in Touch
          </div>
          <h2
            className="cc-heading"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              fontWeight: "700",
              color: "hsl(25 30% 15%)",
            }}
          >
            Say Hello
          </h2>
          <div className="cc-divider" style={{ display: "block", margin: "1rem auto 1.5rem" }} />
          <p style={{ color: "hsl(30 15% 50%)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Questions about your order, wholesale inquiries, or just want to talk candles?
            We'd love to hear from you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Contact info */}
          <div>
            <h3
              className="cc-heading"
              style={{ fontSize: "1.2rem", fontWeight: "700", color: "hsl(25 30% 15%)", marginBottom: "1.5rem" }}
            >
              Contact Information
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { icon: "📍", label: "Address", value: "1284 Ember Lane, Portland, OR 97201" },
                { icon: "📧", label: "Email", value: "hello@candlecrest.com" },
                { icon: "📞", label: "Phone", value: "+1 (503) 555-0182" },
                { icon: "🕐", label: "Hours", value: "Mon–Fri: 9am – 5pm PST" },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", gap: "1rem" }}>
                  <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(30 15% 55%)", marginBottom: "0.2rem" }}>
                      {c.label}
                    </div>
                    <div style={{ color: "hsl(25 30% 20%)", fontSize: "0.92rem" }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem" }}>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(30 15% 55%)", marginBottom: "0.8rem" }}>
                Follow Us
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                {["📸 Instagram", "🐦 Twitter", "📘 Facebook"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    style={{
                      fontSize: "0.8rem",
                      color: "hsl(30 55% 45%)",
                      textDecoration: "none",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {sent ? (
              <div
                style={{
                  background: "hsl(30 55% 45%)",
                  color: "white",
                  borderRadius: "4px",
                  padding: "2.5rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✨</div>
                <h3 className="cc-heading" style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>
                  Message Received!
                </h3>
                <p style={{ fontSize: "0.9rem", opacity: 0.85, lineHeight: 1.7 }}>
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {["name", "email"].map((field) => (
                  <div key={field}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.7rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "hsl(30 15% 50%)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {field === "name" ? "Your Name" : "Email Address"}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      required
                      value={form[field as "name" | "email"]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "1px solid hsl(35 25% 80%)",
                        borderRadius: "2px",
                        background: "hsl(38 40% 98%)",
                        color: "hsl(25 30% 15%)",
                        fontSize: "0.9rem",
                        fontFamily: "Georgia, serif",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "hsl(30 15% 50%)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "1px solid hsl(35 25% 80%)",
                      borderRadius: "2px",
                      background: "hsl(38 40% 98%)",
                      color: "hsl(25 30% 15%)",
                      fontSize: "0.9rem",
                      fontFamily: "Georgia, serif",
                      outline: "none",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "hsl(25 30% 12%)", color: "hsl(38 20% 70%)", padding: "3rem 1.5rem 2rem" }}>
      <div className="cc-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.4rem" }}>🕯️</span>
              <span
                className="cc-heading"
                style={{ fontSize: "1.2rem", fontWeight: "700", color: "hsl(38 35% 88%)" }}
              >
                CandleCrest
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "hsl(38 15% 58%)" }}>
              Handcrafted soy candles made with love in Portland, Oregon since 2019.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(30 40% 55%)", marginBottom: "1rem" }}>
              Shop
            </div>
            {["All Candles", "Seasonal Collection", "Gift Sets", "Wax Melts", "Accessories"].map((l) => (
              <div key={l} style={{ marginBottom: "0.6rem" }}>
                <a href="#products" style={{ fontSize: "0.85rem", color: "hsl(38 15% 60%)", textDecoration: "none" }}>
                  {l}
                </a>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(30 40% 55%)", marginBottom: "1rem" }}>
              Company
            </div>
            {["Our Story", "Values", "Sustainability", "Press", "Wholesale"].map((l) => (
              <div key={l} style={{ marginBottom: "0.6rem" }}>
                <a href="#about" style={{ fontSize: "0.85rem", color: "hsl(38 15% 60%)", textDecoration: "none" }}>
                  {l}
                </a>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(30 40% 55%)", marginBottom: "1rem" }}>
              Stay in Touch
            </div>
            <p style={{ fontSize: "0.82rem", color: "hsl(38 15% 55%)", lineHeight: 1.7, marginBottom: "1rem" }}>
              Get exclusive offers and be the first to know about new scents.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", gap: "0.5rem" }}
            >
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: "0.6rem 0.75rem",
                  background: "hsl(25 25% 18%)",
                  border: "1px solid hsl(25 25% 28%)",
                  borderRadius: "2px",
                  color: "hsl(38 35% 85%)",
                  fontSize: "0.8rem",
                  fontFamily: "Georgia, serif",
                  outline: "none",
                }}
              />
              <button type="submit" className="btn-primary" style={{ padding: "0.6rem 1rem", fontSize: "0.75rem" }}>
                →
              </button>
            </form>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid hsl(25 25% 22%)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "hsl(38 10% 45%)" }}>
            © 2024 CandleCrest. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "Shipping Policy"].map((l) => (
              <a key={l} href="#" style={{ fontSize: "0.78rem", color: "hsl(38 10% 45%)", textDecoration: "none" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "Georgia, serif" }}>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Values />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
