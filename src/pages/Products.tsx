import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Leaf,
  Star,
  Award,
  CheckCircle2,
  Filter,
} from "lucide-react";

// ─── Image Imports: Dry Fruits ────────────────────────────────────────────────
import imgAlmonds from "../assets/Dry Fruits/Almonds.png";
import imgCashews from "../assets/Dry Fruits/Cashews.png";
import imgBlackRaisins from "../assets/Dry Fruits/Black Raisins.png";
import imgGreenRaisins from "../assets/Dry Fruits/Green Raisins.png";
import imgPista from "../assets/Dry Fruits/Pista.png";
import imgFig from "../assets/Dry Fruits/Fig.png";
import imgBlackCurrant from "../assets/Dry Fruits/Black Currant.png";

// ─── Image Imports: Seeds ─────────────────────────────────────────────────────
import imgChia from "../assets/Seeds/Chia.png";
import imgFlax from "../assets/Seeds/Flax.png";
import imgPumpkin from "../assets/Seeds/Pumpkin.png";
import imgSunflower from "../assets/Seeds/Sunflower.png";
import imgBasil from "../assets/Seeds/Basil.png";
import imgWatermelon from "../assets/Seeds/Watermelon.png";

// ─── Image Imports: Whole Spices ──────────────────────────────────────────────
import imgGreenCardamom from "../assets/Whole Spices/Green Cardamom.png";
import imgCinnamon from "../assets/Whole Spices/Cinnamon.png";
import imgBlackPepper from "../assets/Whole Spices/Black Pepper.png";
import imgCumin from "../assets/Whole Spices/Cumin.png";
import imgRedChilli from "../assets/Whole Spices/Red Chilli.png";
import imgTurmeric from "../assets/Whole Spices/Turmeric.png";
import imgBayLeaves from "../assets/Whole Spices/Bay Leaves.png";
import imgStarAnise from "../assets/Whole Spices/Star Anise.png";
import imgFenugreek from "../assets/Whole Spices/Fenugreek.png";

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
  visible: { transition: { staggerChildren: 0.1 } },
};
const childFade: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

// ─── Types ────────────────────────────────────────────────────────────────────
interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  gradient: string;
  iconBg: string;
  image: string;
  enquireUrl: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  border: string;
  description: string;
  highlights: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const categories: Category[] = [
  {
    id: "dry-fruits",
    label: "Premium Dry Fruits",
    icon: Star,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    description: "Handpicked from the finest orchards — almonds, cashews, walnuts, pistachios, raisins, and more.",
    highlights: ["Farm-sourced freshness", "Rich in natural nutrients", "No artificial additives", "Airtight sealed packaging"],
  },
  {
    id: "seeds",
    label: "Healthy Seeds",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    border: "border-green-200",
    description: "Nutrient-dense seeds to supercharge your diet — chia, flax, pumpkin, sunflower, and hemp seeds.",
    highlights: ["High in omega-3 & fibre", "Cold-pressed varieties", "Superfood certified", "Diet-friendly"],
  },
  {
    id: "spices",
    label: "Whole Spices",
    icon: Award,
    color: "from-rose-500 to-red-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    description: "Aromatic whole spices sourced from premium growing regions for authentic, bold flavour in every dish.",
    highlights: ["100% whole & natural", "Premium origins", "No blends or fillers", "Intense aroma & flavour"],
  },
];

const products: Product[] = [
  // ── Dry Fruits ──
  {
    id: 1,
    name: "Premium California Almonds",
    category: "dry-fruits",
    description:
      "Crisp, rich, and naturally nutritious — our California almonds are selected for maximum freshness.",
    gradient: "from-amber-400 to-orange-400",
    iconBg: "bg-amber-100",
    image: imgAlmonds,
    enquireUrl: "https://kesarco.com/products/raw-almonds",
  },

  {
    id: 2,
    name: "Whole Cashew W240",
    category: "dry-fruits",
    description:
      "Large, buttery whole cashews with a clean snap and superior taste — perfect for snacking and cooking.",
    gradient: "from-yellow-400 to-amber-400",
    iconBg: "bg-yellow-100",
    image: imgCashews,
    enquireUrl: "https://kesarco.com/products/premium-cashews",
  },

  {
    id: 3,
    name: "Black Raisins",
    category: "dry-fruits",
    description:
      "Plump, sun-dried black raisins — naturally sweet with no added sugar or sulphur.",
    gradient: "from-purple-400 to-violet-400",
    iconBg: "bg-purple-100",
    image: imgBlackRaisins,
    enquireUrl:
      "https://kesarco.com/products/black-raisins-kali-kishmish",
  },

  {
    id: 4,
    name: "Green Raisins",
    category: "dry-fruits",
    description:
      "Premium sun-dried green raisins packed with natural sweetness, iron, and antioxidants.",
    gradient: "from-lime-400 to-green-400",
    iconBg: "bg-lime-100",
    image: imgGreenRaisins,
    enquireUrl: "https://kesarco.com/products/green-raisins",
  },

  {
    id: 5,
    name: "Premium Pistachios",
    category: "dry-fruits",
    description:
      "Roasted and salted pistachios with a satisfying crunch — naturally flavourful and protein-rich.",
    gradient: "from-green-400 to-lime-400",
    iconBg: "bg-green-100",
    image: imgPista,
    enquireUrl: "https://kesarco.com/products/pistachios",
  },

  {
    id: 6,
    name: "Dried Figs (Anjeer)",
    category: "dry-fruits",
    description:
      "Soft, naturally sweet dried figs loaded with fibre, calcium, and antioxidants.",
    gradient: "from-rose-400 to-pink-400",
    iconBg: "bg-rose-100",
    image: imgFig,
    enquireUrl: "https://kesarco.com/products/dried-afghani-figs",
  },

  {
    id: 7,
    name: "Black Currant",
    category: "dry-fruits",
    description:
      "Tangy and sweet dried black currants bursting with Vitamin C and flavour.",
    gradient: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-100",
    image: imgBlackCurrant,
    enquireUrl: "https://kesarco.com/products/dried-black-currant",
  },

  // ── Seeds ──
  {
    id: 8,
    name: "Chia Seeds",
    category: "seeds",
    description:
      "Tiny but mighty — chia seeds loaded with fibre, omega-3, and plant-based protein for your wellness routine.",
    gradient: "from-slate-400 to-gray-500",
    iconBg: "bg-slate-100",
    image: imgChia,
    enquireUrl: "https://kesarco.com/products/chia-seeds-200gm",
  },

  {
    id: 9,
    name: "Flax Seeds",
    category: "seeds",
    description:
      "Golden and brown flax seeds rich in lignans and ALA omega-3 — great in smoothies, yoghurt, and baking.",
    gradient: "from-amber-500 to-yellow-500",
    iconBg: "bg-amber-100",
    image: imgFlax,
    enquireUrl: "https://kesarco.com/products/flax-seeds-200gm",
  },

  {
    id: 10,
    name: "Pumpkin Seeds",
    category: "seeds",
    description:
      "Crunchy roasted pumpkin seeds packed with zinc, magnesium, and plant protein — ideal as a snack.",
    gradient: "from-orange-400 to-amber-500",
    iconBg: "bg-orange-100",
    image: imgPumpkin,
    enquireUrl: "https://kesarco.com/products/pumpkin-seeds-200gm",
  },

  {
    id: 11,
    name: "Sunflower Seeds",
    category: "seeds",
    description:
      "Light and crunchy sunflower seeds high in Vitamin E and selenium — great for salads and trail mixes.",
    gradient: "from-yellow-400 to-orange-400",
    iconBg: "bg-yellow-100",
    image: imgSunflower,
    enquireUrl: "https://kesarco.com/products/sunflower-seeds-200gm",
  },

  {
    id: 12,
    name: "Basil Seeds (Sabja)",
    category: "seeds",
    description:
      "Cooling basil seeds perfect for drinks and desserts — rich in fibre and naturally hydrating.",
    gradient: "from-emerald-400 to-teal-500",
    iconBg: "bg-emerald-100",
    image: imgBasil,
    enquireUrl:
      "https://kesarco.com/products/basil-seeds-sabja-seeds",
  },

  {
    id: 13,
    name: "Watermelon Seeds",
    category: "seeds",
    description:
      "Roasted watermelon seeds — a crunchy, protein-rich snack with magnesium and zinc.",
    gradient: "from-red-400 to-rose-400",
    iconBg: "bg-red-100",
    image: imgWatermelon,
    enquireUrl: "https://kesarco.com/products/watermelon-seeds",
  },

  // ── Whole Spices ──
  {
    id: 14,
    name: "Green Cardamom (Elaichi)",
    category: "spices",
    description:
      "Fragrant green cardamom pods bursting with aroma — sourced from the spice gardens of Kerala.",
    gradient: "from-green-500 to-emerald-500",
    iconBg: "bg-green-100",
    image: imgGreenCardamom,
    enquireUrl:
      "https://kesarco.com/products/green-cardamom-40gm",
  },

  {
    id: 15,
    name: "Cinnamon Sticks",
    category: "spices",
    description:
      "True cinnamon sticks with a warm, sweet-spicy flavour — perfect for teas, desserts, and curries.",
    gradient: "from-amber-600 to-orange-500",
    iconBg: "bg-amber-100",
    image: imgCinnamon,
    enquireUrl:
      "https://kesarco.com/products/cinnamom-sticks-50gm-1",
  },

  {
    id: 16,
    name: "Whole Black Pepper",
    category: "spices",
    description:
      "Bold, pungent whole black peppercorns freshly packed to preserve essential oils and maximum flavour.",
    gradient: "from-gray-600 to-slate-700",
    iconBg: "bg-gray-100",
    image: imgBlackPepper,
    enquireUrl: "https://kesarco.com/products/black-pepper",
  },

  {
    id: 17,
    name: "Cumin Seeds (Jeera)",
    category: "spices",
    description:
      "Earthy, aromatic cumin seeds essential in Indian cooking — sourced from premium growing regions.",
    gradient: "from-yellow-600 to-amber-600",
    iconBg: "bg-yellow-100",
    image: imgCumin,
    enquireUrl: "https://kesarco.com/products/jeeracumin-seeds",
  },

  {
    id: 18,
    name: "Whole Red Chilli",
    category: "spices",
    description:
      "Fiery whole red chillies that add bold heat and vibrant colour to every dish.",
    gradient: "from-red-500 to-rose-600",
    iconBg: "bg-red-100",
    image: imgRedChilli,
    enquireUrl:
      "https://kesarco.com/products/red-chilli-whole-lal-mirch?_pos=1&_psq=red+chilli&_psid=9af4bee07&_ss=e",
  },

  {
    id: 19,
    name: "Turmeric (Haldi)",
    category: "spices",
    description:
      "Pure whole turmeric with high curcumin content — the golden spice of health and flavour.",
    gradient: "from-yellow-400 to-amber-500",
    iconBg: "bg-yellow-100",
    image: imgTurmeric,
    enquireUrl:
      "https://kesarco.com/products/turmeric-powder-rich-in-curcumin",
  },

  {
    id: 20,
    name: "Bay Leaves (Tej Patta)",
    category: "spices",
    description:
      "Fragrant whole bay leaves that lend deep aroma and flavour to slow-cooked dishes and biryanis.",
    gradient: "from-green-600 to-teal-600",
    iconBg: "bg-green-100",
    image: imgBayLeaves,
    enquireUrl:
      "https://kesarco.com/products/dried-bay-leaves-tej-patta-100gm",
  },

  {
    id: 21,
    name: "Star Anise (Chakra Phool)",
    category: "spices",
    description:
      "Beautiful star-shaped spice with a sweet, licorice-like flavour — essential in biryanis and chai.",
    gradient: "from-amber-500 to-brown-500",
    iconBg: "bg-amber-100",
    image: imgStarAnise,
    enquireUrl: "https://kesarco.com/products/star-anise-20gm",
  },

  {
    id: 22,
    name: "Fenugreek Seeds (Methi)",
    category: "spices",
    description:
      "Slightly bitter, highly nutritious fenugreek seeds used in curries, pickling, and wellness routines.",
    gradient: "from-amber-400 to-yellow-500",
    iconBg: "bg-amber-100",
    image: imgFenugreek,
    enquireUrl:
      "https://kesarco.com/products/fenugreekmethi-seeds",
  },
];

// ─── Sub-Components ───────────────────────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={childFade}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] overflow-hidden transition-all duration-300 cursor-default"
    >
      {/* Image Area */}
      <div className="relative h-56 bg-white flex items-center justify-center overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain select-none"
          style={{ padding: "0px" }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
          draggable={false}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-[var(--text)] leading-snug">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)] line-clamp-2">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
        </div>
        <a
          href={product.enquireUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 w-full rounded-2xl border border-[var(--border)] py-2.5 text-sm font-semibold text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[color-mix(in_srgb,var(--primary)_5%,white)] transition-all duration-200 flex items-center justify-center gap-2"
        >
          Enquire Now <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="overflow-hidden bg-[var(--background)]">

    {/* ── FEATURED PRODUCTS GRID ── */}
<section
  id="featured"
  className="pt-10 pb-12 bg-[var(--background)]"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Section Heading */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-8"
    >
      <span className="text-xs font-semibold uppercase tracking-[4px] text-[var(--primary)]">
        Featured Range
      </span>

      <h2 className="mt-2 text-4xl md:text-5xl font-black text-[var(--text)]">
        Explore Our Products
      </h2>

      <p className="mt-3 text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
        Filter by category to find exactly what you're looking for.
      </p>
    </motion.div>

    {/* Filter Bar */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap gap-3 justify-center mb-10"
    >
      <button
        onClick={() => setActiveCategory("all")}
        className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
          activeCategory === "all"
            ? "bg-[var(--primary)] text-white shadow-[var(--shadow-md)]"
            : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
        }`}
      >
        <Filter size={14} />
        All Products
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
            activeCategory === cat.id
              ? "bg-[var(--primary)] text-white shadow-[var(--shadow-md)]"
              : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </motion.div>

    {/* Products Grid */}
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCategory}
        variants={stagger}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </motion.div>
    </AnimatePresence>

    {/* Empty State */}
    {filteredProducts.length === 0 && (
      <div className="text-center py-16 text-[var(--text-secondary)]">
        No products in this category yet.
      </div>
    )}

  </div>
</section>

      {/* ── QUALITY PROMISE ── */}
      <section className="py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-block rounded-full bg-[color-mix(in_srgb,var(--primary)_10%,white)] px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[var(--primary)]">Our Promise</span>
              <h2 className="mt-8 text-5xl font-black leading-tight text-[var(--text)]">The Quality Promise That <span className="text-[var(--primary)]">Never Breaks</span></h2>
              <p className="mt-8 text-lg leading-9 text-[var(--text-secondary)]">
                At Nuts Delish, quality isn't a department — it's a culture. From the farms we source from to the machines that package our products, every step is governed by our uncompromising quality promise.
              </p>
              <div className="mt-10 space-y-4">
                {[
                  "Sourced from verified, premium-grade suppliers",
                  "Lab-tested for contaminants and purity",
                  "Processed in hygienic, certified facilities",
                  "Sealed in food-grade airtight packaging",
                  "Inspected at every stage of production",
                  "Batch-traceable from farm to shelf",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <span className="text-[var(--text)]">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="rounded-[40px] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
                <ShieldCheck size={56} className="mb-6 relative" />
                <h3 className="text-3xl font-black leading-snug relative">Premium Quality, Zero Compromise</h3>
                <p className="mt-6 text-lg opacity-85 leading-8 relative">
                  Every product you receive from Nuts Delish has passed our multi-stage quality gate. We don't just talk about quality — we build it into every step of our process.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-4 relative">
                  {[
                    ["100%", "Natural Ingredients"],
                    ["0", "Artificial Additives"],
                    ["Multi-Stage", "QC Process"],
                    ["FSSAI", "Certified"],
                  ].map(([v, l]) => (
                    <div key={l} className="rounded-2xl bg-white/15 p-4 text-center">
                      <p className="text-xl font-black">{v}</p>
                      <p className="text-xs opacity-75 mt-1">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
