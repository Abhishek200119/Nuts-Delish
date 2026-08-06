import { motion, type Variants } from "framer-motion";

import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  PackageCheck,
  Building2,
  Award,
  Globe2,
  Star,
  Heart,
  Zap,
  TrendingUp,
  Users,
  CheckCircle2,
  Factory,

} from "lucide-react";
// import { useState } from "react";
import HeroImage from "../assets/1.png";


import amazon from "../assets/platforms/amazon.svg";
import flipkart from "../assets/platforms/flipkart.svg";
import blinkit from "../assets/platforms/blinkit.svg";
import zepto from "../assets/platforms/zepto.svg";
import bigbasket from "../assets/platforms/bigbasket.svg";
import jiomart from "../assets/platforms/jiomart.svg";
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
// const scaleIn: Variants = {
//   hidden: { opacity: 0, scale: 0.88 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
// };
const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.11 } },
};
const childFade: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};


const coreValues = [
  { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Every product is tested and inspected from source to shelf — no shortcuts, no compromises." },
  { icon: Zap, title: "Innovation-Led", desc: "We constantly push to develop products that meet evolving consumer lifestyles and nutritional needs." },
  { icon: Heart, title: "Consumer First", desc: "Every decision we make starts with one question: does this genuinely serve our consumers better?" },
  { icon: Globe2, title: "Accessible Premium", desc: "We believe premium quality should reach every household, not just a few — that's our north star." },
  { icon: TrendingUp, title: "Integrity Always", desc: "Honest sourcing, transparent labelling, and ethical practices underpin everything we do." },
  { icon: Users, title: "Partnership Driven", desc: "We grow alongside our partners — farmers, distributors, retailers, and the families we serve." },
];

const whyChooseUs = [
  { icon: Star, title: "Premium Sourcing", desc: "Handpicked from the finest growing regions — almonds from California, cashews from the coast, spices from Kerala." },
  { icon: Factory, title: "Modern Manufacturing", desc: "State-of-the-art production facilities operating under strict food safety and hygiene protocols." },
  { icon: PackageCheck, title: "Hygienic Packaging", desc: "Food-grade airtight packaging that locks in freshness, aroma, and nutritional value at every step." },
  { icon: Globe2, title: "Omnichannel Reach", desc: "Available on e-commerce, quick commerce, major marketplaces, and an expanding offline retail network." },
  { icon: Award, title: "Quality Certified", desc: "FSSAI-compliant processes and multi-stage quality inspections ensure every batch meets our standards." },
  { icon: Building2, title: "PAN India Distribution", desc: "A robust national distribution network delivering freshness from our facility to your doorstep." },
];


const brands = [
  {
    name: "KesarCo",
    tagline: "Premium Grocery & Healthy Snacks",
    desc: "Curated dry fruits, spices, and grocery staples sourced from trusted origins and packed for maximum freshness.",
    emoji: "🌟",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    name: "Tea Better",
    tagline: "Wellness & Specialty Teas",
    desc: "Herbal, wellness, and specialty teas crafted for the health-conscious consumer who values flavour and function.",
    emoji: "🍃",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    name: "Bruniq",
    tagline: "Better-For-You Foods",
    desc: "Clean-label, better-for-you food products designed for modern, health-aware lifestyles.",
    emoji: "💜",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
];

const trustedBy = [
  { name: "Amazon", logo: amazon },
  { name: "Flipkart", logo: flipkart },
  { name: "Blinkit", logo: blinkit },
  { name: "Zepto", logo: zepto },
  { name: "BigBasket", logo: bigbasket },
  { name: "JioMart", logo: jiomart },
];
const qualityStandards = [
  "FSSAI Certified", "Lab-Tested Batches", "Food-Grade Packaging",
  "Ethically Sourced", "No Artificial Additives", "Hygienic Facilities",
];



// ─── Page Component ───────────────────────────────────────────────────────────
export default function Landing() {
  return (
    <main className="overflow-hidden bg-[var(--background)]">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-52 -left-52 h-[500px] w-[500px] rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-green-200/30 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center py-24">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-900">
              <Leaf size={18} /> Premium Dry Fruits & Healthy Foods
            </span>
            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-zinc-900">
              Crafted For
              <span className="block text-amber-600">Healthy Living</span>
            </h1>
            <p className="mt-8 text-lg text-zinc-600 leading-8 max-w-xl">
              Nuts Delish Private Limited delivers premium quality dry fruits, nuts, seeds, spices and healthy foods — carefully sourced and hygienically packed to bring freshness, nutrition and taste to every home.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <a href="/products" className="rounded-full bg-amber-600 px-8 py-4 text-white font-semibold flex items-center gap-3 hover:bg-amber-700 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                Explore Products <ArrowRight size={20} />
              </a>
              <a href="/contact" className="rounded-full border border-zinc-300 bg-white px-8 py-4 font-semibold hover:border-amber-400 hover:text-amber-700 transition-all duration-300">
                Contact Us
              </a>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-8">
              {[["100+", "Premium Products"], ["2020", "Established"], ["PAN", "India Supply"]].map(([v, l]) => (
                <div key={l}>
                  <h2 className="text-4xl font-black text-zinc-900">{v}</h2>
                  <p className="text-zinc-500 mt-2 text-sm">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>
          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[40px] bg-white shadow-2xl p-8">
              <img src={HeroImage} alt="Premium Dry Fruits" className="w-full h-auto object-contain" />
            </div>
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -left-12 top-20 rounded-3xl bg-white shadow-xl p-5"
            >
              <ShieldCheck className="text-green-600" size={40} />
              <p className="mt-3 font-semibold text-zinc-800">Quality Checked</p>
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -right-10 bottom-16 rounded-3xl bg-white shadow-xl p-5"
            >
              <PackageCheck className="text-amber-600" size={40} />
              <p className="mt-3 font-semibold text-zinc-800">Hygienic Packaging</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
        TRUSTED BY
══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[var(--surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[4px] text-[var(--text-secondary)]">
              Available On Leading Platforms
            </p>
          </motion.div>

          <div className="relative overflow-hidden">

            {/* Left Fade */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[var(--surface)] to-transparent" />

            {/* Right Fade */}
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[var(--surface)] to-transparent" />

            <motion.div
              className="flex items-center gap-20 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...trustedBy, ...trustedBy].map((item, index) => (
                <img
                  key={index}
                  src={item.logo}
                  alt={item.name}
                  className="
              h-14
              md:h-16
              lg:h-20
              w-auto
              object-contain
              opacity-70
              hover:opacity-100
              hover:scale-110
              transition-all
              duration-300
            "
                />
              ))}
            </motion.div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
      ABOUT / WHO WE ARE
══════════════════════════════════════════════════════ */}
<section className="py-32 bg-[var(--background)]">
  <div className="max-w-5xl mx-auto px-6 lg:px-10">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center"
    >
      {/* Badge */}
      <span className="inline-flex rounded-full bg-[color-mix(in_srgb,var(--primary)_10%,white)] px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[var(--primary)]">
        About Nuts Delish
      </span>

      {/* Heading */}
      <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-[var(--text)]">
        Bringing Premium
        <span className="block text-[var(--primary)]">
          Nutrition To Every Home
        </span>
      </h2>

      {/* Description */}
      <p className="mt-10 text-xl leading-9 text-[var(--text-secondary)] max-w-4xl mx-auto">
        Nuts Delish Private Limited is a fast-growing FMCG company dedicated to
        delivering premium-quality dry fruits, healthy snacks, spices, seeds,
        and grocery essentials. We combine trusted sourcing, modern processing,
        and hygienic packaging to ensure every product reaches consumers with
        maximum freshness, nutrition, and taste.
      </p>

      <p className="mt-6 text-xl leading-9 text-[var(--text-secondary)] max-w-4xl mx-auto">
        Through our brands <strong>KesarCo</strong>,
        <strong> Tea Better</strong>, and <strong>Bruniq</strong>, we are
        building a portfolio that meets the evolving lifestyle needs of modern
        consumers. Our commitment to innovation, quality, and customer
        satisfaction drives us to create products that families across India
        can trust every day.
      </p>

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <a
          href="/about"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-white font-semibold shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary-hover)]"
        >
          Discover Our Story
          <ArrowRight size={18} />
        </a>
      </div>

    </motion.div>

  </div>
</section>

  

      {/* ══════════════════════════════════════════════════════
          BRAND PORTFOLIO PREVIEW
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-[var(--primary)]">Our Brands</span>
            <h2 className="mt-4 text-5xl font-black text-[var(--text)]">A Portfolio Built For <span className="text-[var(--primary)]">Every Lifestyle</span></h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">Three distinct brands under one commitment — quality, innovation, and consumer delight.</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <motion.div key={brand.name} variants={childFade} whileHover={{ y: -10 }}
                className={`rounded-3xl border ${brand.border} ${brand.bg} p-8 cursor-default transition-all duration-300`}>
                <span className="text-5xl">{brand.emoji}</span>
                <h3 className={`mt-6 text-2xl font-black bg-gradient-to-r ${brand.color} bg-clip-text text-transparent`}>{brand.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)]">{brand.tagline}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{brand.desc}</p>
                <a href="/about" className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r ${brand.color} bg-clip-text text-transparent`}>
                  Learn More <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CORE VALUES
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-[var(--primary)]">What We Stand For</span>
            <h2 className="mt-4 text-5xl font-black text-[var(--text)]">Our Core Values</h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">The principles that shape every product we make, every partner we work with, and every consumer we serve.</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} variants={childFade} whileHover={{ y: -8 }}
                  className="group rounded-3xl border border-[var(--border)] bg-[var(--surface-secondary)] p-8 shadow-[var(--shadow-sm)] transition-all duration-300 cursor-default">
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

      {/* ══════════════════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-block rounded-full bg-[color-mix(in_srgb,var(--primary)_10%,white)] px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[var(--primary)]">Why Choose Us</span>
              <h2 className="mt-8 text-5xl font-black leading-tight text-[var(--text)]">
                The Nuts Delish <span className="text-[var(--primary)]">Difference</span>
              </h2>
              <p className="mt-8 text-lg leading-9 text-[var(--text-secondary)]">
                From farm to your home, every decision we make is guided by a single principle — quality without compromise. Here's what sets us apart.
              </p>
              <div className="mt-10 space-y-4">
                {whyChooseUs.slice(0, 4).map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                      <div className="h-10 w-10 rounded-xl bg-[color-mix(in_srgb,var(--primary)_10%,white)] flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-[var(--primary)]" />
                      </div>
                      <div>
                        <p className="font-bold text-[var(--text)]">{item.title}</p>
                        <p className="text-sm text-[var(--text-secondary)] mt-1 leading-6">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <a href="/about" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-7 py-3.5 font-semibold text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-200">
                Learn More About Us <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-2 gap-4">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} whileHover={{ y: -6 }}
                    className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 cursor-default">
                    <Icon size={22} className="text-[var(--primary)]" />
                    <p className="mt-4 font-bold text-[var(--text)] text-sm">{item.title}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MANUFACTURING PROCESS
      ══════════════════════════════════════════════════════ */}
      {/* <section className="py-32 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-[var(--primary)]">How We Work</span>
            <h2 className="mt-4 text-5xl font-black text-[var(--text)]">From Farm To Your Door</h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">A six-step process built around precision, hygiene, and zero-compromise quality.</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingSteps.map((s) => (
              <motion.div key={s.step} variants={childFade} whileHover={{ y: -6 }}
                className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface-secondary)] p-8 overflow-hidden transition-all duration-300 cursor-default group">
                <span className="absolute -top-4 -right-4 text-8xl font-black text-[color-mix(in_srgb,var(--primary)_6%,transparent)] select-none">{s.step}</span>
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                    <span className="text-white font-black text-sm">{s.step}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[var(--text)]">{s.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--text-secondary)]">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════════════════
          QUALITY STANDARDS
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-2 lg:order-1">
              <div className="rounded-[40px] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />
                <ShieldCheck size={52} className="mb-6 relative" />
                <h3 className="text-3xl font-black leading-snug relative">Premium Quality, Zero Compromise</h3>
                <p className="mt-6 text-lg opacity-85 leading-8 relative">Every Nuts Delish product passes our multi-stage quality gate — from lab testing to final dispatch inspection.</p>
                <div className="mt-10 grid grid-cols-2 gap-3 relative">
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
              <h2 className="mt-8 text-5xl font-black leading-tight text-[var(--text)]">
                Uncompromising <span className="text-[var(--primary)]">Quality At Every Step</span>
              </h2>
              <p className="mt-8 text-lg leading-9 text-[var(--text-secondary)]">
                Quality isn't a checkbox at Nuts Delish — it's a culture. From the farms we source from to the packaging our products leave in, every step is governed by our promise to you.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Multi-stage inspection at every production step",
                  "Lab-tested for purity and contaminant-free assurance",
                  "Food-grade packaging that locks in freshness",
                  "Batch-traceable from farm to your shelf",
                ].map((pt) => (
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
