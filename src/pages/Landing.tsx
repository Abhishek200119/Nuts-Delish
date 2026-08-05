import { motion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

import {
  Building2,
  Award,
  Globe2,
} from "lucide-react";
import HeroImage from "../assets/1.png";
import HeroImage1 from "../assets/2.png";


export default function Landing() {
  const faqs = [
  {
    question: "Where are your products sourced from?",
    answer:
      "We carefully source premium-quality dry fruits, nuts, seeds, and spices from trusted suppliers to ensure exceptional freshness, purity, and taste.",
  },
  {
    question: "Are your products hygienically packed?",
    answer:
      "Yes. All our products are processed and packed under strict hygiene standards using high-quality food-grade packaging to preserve freshness and nutritional value.",
  },
  {
    question: "Do you provide bulk or wholesale orders?",
    answer:
      "Yes. We cater to bulk, wholesale, and corporate orders with flexible packaging options and reliable distribution to meet business requirements.",
  },
  {
    question: "Do you offer private labeling services?",
    answer:
      "Yes. We provide private labeling and customized packaging solutions, helping businesses create their own branded range of premium food products.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "Every product undergoes multiple quality inspections, from sourcing and processing to packaging, ensuring it meets our high standards before reaching customers.",
  },
  {
    question: "Which product categories do you offer?",
    answer:
      "Our portfolio includes premium dry fruits, nuts, healthy seeds, spices, healthy snacks, gift hampers, and customized private-label products.",
  },
];
  return (
    <main className="overflow-hidden bg-[#fafaf8]">

      {/* HERO */}

      <section className="relative min-h-screen flex items-center">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute -top-52 -left-52 h-[500px] w-[500px] rounded-full bg-amber-200/30 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-green-200/30 blur-3xl" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-900">

              <Leaf size={18} />

              Premium Dry Fruits & Healthy Foods

            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-zinc-900">

              Crafted For

              <span className="block text-amber-600">

                Healthy Living

              </span>

            </h1>

            <p className="mt-8 text-lg text-zinc-600 leading-8 max-w-xl">

              Nuts Delish Private Limited delivers premium quality
              dry fruits, nuts, seeds, spices and healthy foods
              carefully sourced and hygienically packed to bring
              freshness, nutrition and taste to every home.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="rounded-full bg-amber-600 px-8 py-4 text-white font-semibold flex items-center gap-3 hover:bg-amber-700 transition">

                Explore Products

                <ArrowRight size={20} />

              </button>

              <button className="rounded-full border border-zinc-300 px-8 py-4 font-semibold hover:bg-white transition">

                Contact Us

              </button>

            </div>

            <div className="mt-14 grid grid-cols-3 gap-8">

              <div>

                <h2 className="text-4xl font-black text-zinc-900">

                  100+

                </h2>

                <p className="text-zinc-500 mt-2">

                  Premium Products

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-zinc-900">

                  2020

                </h2>

                <p className="text-zinc-500 mt-2">

                  Established

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-zinc-900">

                  PAN

                </h2>

                <p className="text-zinc-500 mt-2">

                  India Supply

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="rounded-[40px] bg-white shadow-2xl p-8">

             <img
  src={HeroImage}
  alt="Premium Dry Fruits"
  className="w-full h-auto object-contain"
/>

            </div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -left-12 top-20 rounded-3xl bg-white shadow-xl p-5"
            >

              <ShieldCheck className="text-green-600" size={40} />

              <p className="mt-3 font-semibold">

                Quality Checked

              </p>

            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -right-10 bottom-16 rounded-3xl bg-white shadow-xl p-5"
            >

              <PackageCheck className="text-amber-600" size={40} />

              <p className="mt-3 font-semibold">

                Hygienic Packaging

              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* ======================= ABOUT ======================= */}

<section className="bg-[var(--background)] py-32">

  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    <div className="grid items-center gap-20 lg:grid-cols-2">

      {/* LEFT */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <span className="inline-flex rounded-full bg-[color-mix(in_srgb,var(--primary)_10%,white)] px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[var(--primary)]">

          About Nuts Delish

        </span>

        <h2 className="mt-8 text-5xl font-black leading-tight text-[var(--text)] lg:text-6xl">

          Bringing Premium

          <span className="block text-[var(--primary)]">

            Nutrition To Every Home

          </span>

        </h2>

        <p className="mt-8 text-lg leading-9 text-[var(--text-secondary)]">

          Nuts Delish Private Limited is dedicated to providing premium-quality
          dry fruits, healthy snacks, seeds and spices that combine freshness,
          nutrition and exceptional taste.

        </p>

        <p className="mt-6 text-lg leading-9 text-[var(--text-secondary)]">

          From sourcing the finest ingredients to hygienic packaging and
          reliable distribution, every step reflects our commitment to
          quality and customer satisfaction.

        </p>

      </motion.div>

      {/* RIGHT */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <img
          src={HeroImage1}
          alt="Nuts Delish"
          className="w-full rounded-[36px] border border-[var(--border)] shadow-[var(--shadow-md)]"
        />

      </motion.div>

    </div>

  </div>

</section>
{/* ======================= COMPANY STATS ======================= */}

<section className="bg-[var(--background)] py-32">

  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: Building2,
          value: "2020",
          title: "Established",
        },
        {
          icon: Award,
          value: "100+",
          title: "Premium Products",
        },
        {
          icon: PackageCheck,
          value: "100%",
          title: "Quality Focus",
        },
        {
          icon: Globe2,
          value: "PAN India",
          title: "Distribution",
        },
      ].map((item) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={item.title}
            whileHover={{ y: -8 }}
            className="rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center shadow-[var(--shadow-md)] transition-all duration-300"
          >

            <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--primary)_12%,white)]">

              <Icon
                size={34}
                className="text-[var(--primary)]"
              />

            </div>

            <h2 className="mt-8 text-5xl font-black text-[var(--text)]">

              {item.value}

            </h2>

            <p className="mt-3 text-[var(--text-secondary)]">

              {item.title}

            </p>

          </motion.div>

        );

      })}

    </div>

  </div>

</section>
{/* ================= FAQ ================= */}

<section className="bg-[var(--surface)] py-32">

  <div className="mx-auto max-w-5xl px-6">

    <div className="text-center">

      <span className="text-sm font-semibold uppercase tracking-[4px] text-[var(--primary)]">
        FAQ
      </span>

      <h2 className="mt-4 text-5xl font-black text-[var(--text)]">
        Frequently Asked Questions
      </h2>

    </div>

    <div className="mt-16 space-y-6">

      {faqs.map((faq, index) => (

        <div
          key={index}
          className="rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-sm)]"
        >

          <h3 className="text-xl font-bold text-[var(--text)]">
            {faq.question}
          </h3>

          <p className="mt-4 leading-8 text-[var(--text-secondary)]">
            {faq.answer}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

    </main>
  );
}

