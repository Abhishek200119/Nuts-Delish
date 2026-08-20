import { motion, type Variants } from "framer-motion";
import {

  Globe2,
  Users,
  ShieldCheck,
  TrendingUp,
  Heart,
  CheckCircle2,
  ArrowRight,
  Building2,
  Zap,
  Target,
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } },
};
const childFade: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const timeline = [
  {
    year: "2021",
    title: "Company Founded",
    desc: "Nuts Delish Private Limited was established with a vision to make premium food accessible to every household.",
  },
  {
    year: "2021",
    title: "KesarCo Launched",
    desc: "Our flagship brand KesarCo introduced premium grocery staples, dry fruits, spices, and healthy snacks to the market.",
  },
  {
    year: "2024",
    title: "Tea Better Introduced",
    desc: "Tea Better entered the wellness space with herbal, specialty, and premium teas for the health-conscious consumer.",
  },
  {
    year: "2025",
    title: "Bruniq Unveiled",
    desc: "Bruniq brought better-for-you food products to the portfolio, expanding our footprint in the healthy foods segment.",
  },
  {
    year: "2025",
    title: "Omnichannel Expansion",
    desc: "Launched across e-commerce, quick commerce, major marketplaces, and offline retail — reaching every corner of India.",
  },
  {
    year: "2025+",
    title: "National Growth",
    desc: "Scaling manufacturing, deepening distribution, and innovating new products to serve evolving consumer lifestyles.",
  },
];
const values = [
  { icon: ShieldCheck, title: "Quality First", desc: "Every product undergoes rigorous quality checks from sourcing to shelf, ensuring only the best reaches your home." },
  { icon: Zap, title: "Innovation", desc: "We constantly introduce products that cater to evolving consumer lifestyles, combining tradition with modern needs." },
  { icon: Heart, title: "Customer Centricity", desc: "Our consumers are at the heart of every decision. We build products around real needs, real lifestyles, and real value." },
  { icon: Globe2, title: "Accessibility", desc: "Premium doesn't mean exclusive. Our mission is to make exceptional food products accessible to every household in India." },
  { icon: TrendingUp, title: "Integrity", desc: "Transparent sourcing, honest labeling, and ethical practices are non-negotiable pillars of how we do business." },
  { icon: Users, title: "Collaboration", desc: "We grow with our partners — from farmers and manufacturers to distributors and retail partners — building shared success." },
];

const qualityStandards = [
  "FSSAI Certified Manufacturing",
  "Hygienic Food-Grade Packaging",
  "Traceable & Ethical Sourcing",
  "Multi-Stage Quality Inspection",
  "Lab-Tested Raw Materials",
  "Zero Compromise on Freshness",
  "Stringent Allergen Controls",
  "Transparent Ingredient Labeling",
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <main className="overflow-hidden bg-[var(--background)]">

      {/* ── HERO ── */}
<section className="relative overflow-hidden bg-[var(--background)]">

  {/* Background Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] blur-3xl" />

    <div className="absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-[color-mix(in_srgb,var(--accent)_25%,transparent)] blur-3xl" />

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[color-mix(in_srgb,var(--secondary)_8%,transparent)] blur-3xl" />
  </div>

  <div className="relative z-10 max-w-5xl mx-auto px-6 py-14 md:py-16 text-center">

    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
    >

      {/* Label */}
      <motion.span
        variants={childFade}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2 text-sm font-semibold text-[var(--primary)] shadow-[var(--shadow-sm)]"
      >
        <Building2 size={16} />
        Our Story
      </motion.span>

      {/* Heading */}
      <motion.h1
        variants={childFade}
        className="mt-6 text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-[var(--text)]"
      >
        Building Brands{" "}
        <span className="text-[var(--primary)]">People</span>{" "}
        <span className="text-[var(--secondary)]">Love</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={childFade}
        className="mt-5 max-w-3xl mx-auto text-base md:text-lg leading-7 md:leading-8 text-[var(--text-secondary)]"
      >
        Nuts Delish is a fast-growing FMCG company focused on building
        innovative, consumer-centric food and beverage brands that bring
        premium quality to every home across India.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={childFade}
        className="mt-7 flex justify-center gap-4 flex-wrap"
      >
        <a
          href="/products"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-white font-semibold hover:bg-[var(--primary-hover)] transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow-md)]"
        >
          Explore Products
          <ArrowRight size={18} />
        </a>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-3.5 font-semibold text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
        >
          Contact Us
        </a>
      </motion.div>

    </motion.div>
  </div>
</section>

      {/* ── WHO WE ARE ── */}
      <section className="py-32 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-block rounded-full bg-[color-mix(in_srgb,var(--primary)_10%,white)] px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[var(--primary)]">
                Who We Are
              </span>
              <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-[var(--text)]">
                A New Generation <span className="text-[var(--primary)]">FMCG Company</span>
              </h2>
              <p className="mt-8 text-lg leading-9 text-[var(--text-secondary)]">
                Nuts Delish is a fast-growing FMCG company focused on building innovative, consumer-centric food and beverage brands. The company houses a portfolio of brands including KesarCo, Tea Better, and Bruniq.
              </p>
              <p className="mt-6 text-lg leading-9 text-[var(--text-secondary)]">
                Driven by a commitment to quality, innovation, and customer satisfaction, Nuts Delish combines trusted sourcing, modern manufacturing, and an expanding omnichannel distribution network across e-commerce, quick commerce, marketplaces, and offline retail.
              </p>
              <p className="mt-6 text-lg leading-9 text-[var(--text-secondary)]">
                With a vision to make premium food products accessible to every household, the company continues to introduce products that cater to evolving consumer lifestyles while delivering exceptional taste, convenience, and value.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[["100+", "Products"], ["3", "Brands"], ["PAN India", "Reach"], ["2021", "Founded"]].map(([v, l]) => (
                  <div key={l} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-6">
                    <p className="text-3xl font-black text-[var(--primary)]">{v}</p>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
              <div className="rounded-[40px] bg-gradient-to-br from-[var(--surface-secondary)] to-[var(--accent)] p-1 shadow-[var(--shadow-md)]">
                <div className="rounded-[38px] bg-[var(--surface)] p-12 flex flex-col gap-6">
                  <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Our Mission</p>
                    <p className="mt-2 text-lg font-bold leading-7">Make premium food products accessible to every household across India.</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-r from-[var(--secondary)] to-rose-700 p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Our Vision</p>
                    <p className="mt-2 text-lg font-bold leading-7">Build a portfolio of iconic food and beverage brands loved by millions.</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Our Promise</p>
                    <p className="mt-2 text-lg font-bold leading-7">Uncompromising quality, honest sourcing, and exceptional taste — always.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Desktop Timeline */}
      <div className="relative">
        {/* Center Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-amber-500 via-orange-500 to-amber-400 rounded-full" />

        <div className="space-y-16">
          {timeline.map((item, index) => {
            const left = index % 2 === 0;

            return (
              <motion.div
                key={item.year}
                initial={{
                  opacity: 0,
                  x: left ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                  {/* LEFT CARD */}
                  <div className="flex justify-end">
                    {left && (
                      <motion.div
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                        }}
                        className="group w-full max-w-md"
                      >
                        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-secondary)] p-8 shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                          <h3 className="text-2xl font-bold text-[var(--text)]">
                            {item.title}
                          </h3>

                          <p className="mt-4 leading-8 text-[var(--text-secondary)]">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* RIGHT CARD */}
                  <div className="flex justify-start">
                    {!left && (
                      <motion.div
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                        }}
                        className="group w-full max-w-md"
                      >
                        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-secondary)] p-8 shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                          <h3 className="text-2xl font-bold text-[var(--text)]">
                            {item.title}
                          </h3>

                          <p className="mt-4 leading-8 text-[var(--text-secondary)]">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Year */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                      }}
                      className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 shadow-xl flex items-center justify-center"
                    >
                      <span className="text-white font-black">
                        {item.year}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden mt-6">
                  <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-secondary)] p-8 shadow-lg">
                    <div className="inline-flex rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 text-white font-bold mb-4">
                      {item.year}
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--text)]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-[var(--text-secondary)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── VISION & MISSION ── */}
      <section className="py-32 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-[var(--primary)]">Purpose</span>
            <h2 className="mt-4 text-5xl font-black text-[var(--text)]">Vision & Mission</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-[40px] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-12 text-white">
              <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                <Target size={30} className="text-white" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest opacity-70">Our Vision</p>
              <h3 className="mt-4 text-3xl font-black leading-snug">To make premium food products accessible to every household in India.</h3>
              <p className="mt-6 text-lg opacity-85 leading-8">We envision a future where quality nutrition isn't a luxury — it's a standard. Every family deserves access to products that are pure, fresh, and genuinely good.</p>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-[40px] bg-gradient-to-br from-green-600 to-emerald-700 p-12 text-white">
              <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                <TrendingUp size={30} className="text-white" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest opacity-70">Our Mission</p>
              <h3 className="mt-4 text-3xl font-black leading-snug">Build innovative, consumer-centric food brands that deliver taste, convenience, and value.</h3>
              <p className="mt-6 text-lg opacity-85 leading-8">Through trusted sourcing, modern manufacturing, and smart distribution, we bring products that fit modern lifestyles without compromising on quality.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-[var(--primary)]">What We Stand For</span>
            <h2 className="mt-4 text-5xl font-black text-[var(--text)]">Our Core Values</h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">These principles guide every decision we make — from sourcing ingredients to building partnerships.</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} variants={childFade} whileHover={{ y: -8 }} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-sm)] transition-all duration-300 group cursor-default">
                  <div className="h-14 w-14 rounded-2xl bg-[color-mix(in_srgb,var(--primary)_10%,white)] flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors duration-300">
                    <Icon size={24} className="text-[var(--primary)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[var(--text)]">{v.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--text-secondary)]">{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── BUSINESS PRESENCE ── */}
      <section className="py-32 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-block rounded-full bg-[color-mix(in_srgb,var(--secondary)_10%,white)] px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[var(--secondary)]">Business Presence</span>
              <h2 className="mt-8 text-5xl font-black leading-tight text-[var(--text)]">Everywhere <span className="text-[var(--primary)]">Your Customers</span> Shop</h2>
              <p className="mt-8 text-lg leading-9 text-[var(--text-secondary)]">
                Our expanding omnichannel distribution network ensures Nuts Delish products are available wherever consumers choose to shop — online or offline, fast or planned.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { label: "E-Commerce", desc: "Amazon, Flipkart & more", icon: Globe2 },
                  { label: "Quick Commerce", desc: "Blinkit, Zepto, Swiggy Instamart", icon: Zap },
                  { label: "Marketplaces", desc: "Multi-platform presence", icon: Building2 },
                  { label: "Offline Retail", desc: "Kiranas & modern trade", icon: ShieldCheck },
                ].map((ch) => {
                  const Icon = ch.icon;
                  return (
                    <div key={ch.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-5">
                      <Icon size={20} className="text-[var(--primary)] mb-2" />
                      <p className="font-bold text-[var(--text)]">{ch.label}</p>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">{ch.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="rounded-[40px] border border-[var(--border)] bg-[var(--surface-secondary)] p-12">
                <div className="text-center">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mx-auto">
                    <Globe2 size={40} className="text-white" />
                  </div>
                  <h3 className="mt-6 text-3xl font-black text-[var(--text)]">PAN India</h3>
                  <p className="mt-2 text-[var(--text-secondary)]">National Distribution Network</p>
                </div>
                <div className="mt-10 space-y-4">
                  {["Tier 1 Metropolitan Cities", "Tier 2 & Tier 3 Cities", "Rural & Semi-Urban Markets", "Online — Across All Pincodes"].map((loc) => (
                    <div key={loc} className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                      <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                      <span className="text-[var(--text)] font-medium">{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ── QUALITY STANDARDS ── */}
      <section className="py-32 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-2 lg:order-1">
              <div className="rounded-[40px] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-12 text-white">
                <ShieldCheck size={48} className="mb-6" />
                <h3 className="text-3xl font-black mb-4">Quality You Can Trust</h3>
                <p className="text-lg opacity-85 leading-8 mb-8">Every Nuts Delish product meets the highest standards of purity, hygiene, and nutritional integrity before it reaches your home.</p>
                <div className="grid grid-cols-2 gap-3">
                  {qualityStandards.map((q) => (
                    <div key={q} className="flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2.5">
                      <CheckCircle2 size={14} className="flex-shrink-0" />
                      <span className="text-sm font-medium">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-1 lg:order-2">
              <span className="inline-block rounded-full bg-[color-mix(in_srgb,var(--primary)_10%,white)] px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[var(--primary)]">Quality Standards</span>
              <h2 className="mt-8 text-5xl font-black leading-tight text-[var(--text)]">Uncompromising <span className="text-[var(--primary)]">Quality At Every Step</span></h2>
              <p className="mt-8 text-lg leading-9 text-[var(--text-secondary)]">
                From the moment we select our raw materials to the final product that arrives at your door, quality is never an afterthought — it's the foundation of everything we do.
              </p>
              <p className="mt-6 text-lg leading-9 text-[var(--text-secondary)]">
                Our manufacturing facilities operate under stringent food safety protocols, ensuring that every batch is consistent, pure, and nutritionally sound.
              </p>
              <div className="mt-8 space-y-3">
                {["Multi-stage inspection at every production step", "Lab-tested for purity and contaminant-free assurance", "Food-grade packaging that locks in freshness"].map((pt) => (
                  <div key={pt} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
