import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Leaf,
  Star,
  Award,
  CheckCircle2,
  Package,
  Gift,
  
  Heart,
  Filter,
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
  tags: string[];
  badge?: string;
  gradient: string;
  iconBg: string;
  emoji: string;
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
  {
    id: "healthy-foods",
    label: "Healthy Foods",
    icon: Heart,
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    description: "Better-for-you snacks, mixes, and functional foods — guilt-free goodness for everyday living.",
    highlights: ["Clean ingredient lists", "Low sugar options", "High protein choices", "Vegan & GF available"],
  },
  {
    id: "gift-hampers",
    label: "Gift Hampers",
    icon: Gift,
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-200",
    description: "Thoughtfully curated premium gift hampers for every occasion — corporate gifting, festivals, and celebrations.",
    highlights: ["Luxury packaging", "Custom curation", "Corporate bulk orders", "Festival specials"],
  },
  {
    id: "private-label",
    label: "Private Label",
    icon: Package,
    color: "from-slate-600 to-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200",
    description: "Build your own brand with our end-to-end private labelling solutions — from formulation to branded packaging.",
    highlights: ["Custom branding", "MOQ flexibility", "R&D support", "National distribution ready"],
  },
];

const products: Product[] = [
  { id: 1, name: "Premium California Almonds", category: "dry-fruits", description: "Crisp, rich, and naturally nutritious — our California almonds are selected for maximum freshness.", tags: ["Bestseller", "High Protein"], badge: "Bestseller", gradient: "from-amber-400 to-orange-400", iconBg: "bg-amber-100", emoji: "🌰" },
  { id: 2, name: "Whole Cashew W240", category: "dry-fruits", description: "Large, buttery whole cashews with a clean snap and superior taste — perfect for snacking and cooking.", tags: ["Premium", "W240 Grade"], badge: "Premium", gradient: "from-yellow-400 to-amber-400", iconBg: "bg-yellow-100", emoji: "🥜" },
  { id: 3, name: "Afghan Raisins", category: "dry-fruits", description: "Plump, sun-dried raisins from Afghanistan — naturally sweet with no added sugar or sulphur.", tags: ["Natural", "No Additives"], gradient: "from-purple-400 to-violet-400", iconBg: "bg-purple-100", emoji: "🍇" },
  { id: 4, name: "Chilean Walnuts", category: "dry-fruits", description: "Crispy, brain-shaped walnuts packed with omega-3 fatty acids and antioxidants for heart health.", tags: ["Heart Healthy", "Omega-3"], gradient: "from-brown-400 to-amber-600", iconBg: "bg-amber-100", emoji: "🧠" },
  { id: 5, name: "Premium Pistachios", category: "dry-fruits", description: "Roasted and salted pistachios with a satisfying crunch — naturally flavourful and protein-rich.", tags: ["High Protein", "Roasted"], badge: "New", gradient: "from-green-400 to-lime-400", iconBg: "bg-green-100", emoji: "💚" },
  { id: 6, name: "Chia Seeds", category: "seeds", description: "Tiny but mighty — chia seeds loaded with fibre, omega-3, and plant-based protein for your wellness routine.", tags: ["Superfood", "Omega-3"], badge: "Trending", gradient: "from-slate-400 to-gray-500", iconBg: "bg-slate-100", emoji: "⚫" },
  { id: 7, name: "Flax Seeds", category: "seeds", description: "Golden and brown flax seeds rich in lignans and ALA omega-3 — great in smoothies, yoghurt, and baking.", tags: ["Antioxidant", "Fibre Rich"], gradient: "from-amber-500 to-yellow-500", iconBg: "bg-amber-100", emoji: "🌾" },
  { id: 8, name: "Pumpkin Seeds", category: "seeds", description: "Crunchy roasted pumpkin seeds packed with zinc, magnesium, and plant protein — ideal as a snack.", tags: ["High Zinc", "Roasted"], gradient: "from-orange-400 to-amber-500", iconBg: "bg-orange-100", emoji: "🎃" },
  { id: 9, name: "Sunflower Seeds", category: "seeds", description: "Light and crunchy sunflower seeds high in Vitamin E and selenium — great for salads and trail mixes.", tags: ["Vitamin E", "Antioxidant"], gradient: "from-yellow-400 to-orange-400", iconBg: "bg-yellow-100", emoji: "🌻" },
  { id: 10, name: "Cardamom (Elaichi)", category: "spices", description: "Fragrant green cardamom pods bursting with aroma — sourced from the spice gardens of Kerala.", tags: ["Aromatic", "Kerala Origin"], badge: "Premium", gradient: "from-green-500 to-emerald-500", iconBg: "bg-green-100", emoji: "🌿" },
  { id: 11, name: "Cinnamon Sticks", category: "spices", description: "True Ceylon cinnamon sticks with a warm, sweet-spicy flavour — perfect for teas, desserts, and curries.", tags: ["Ceylon", "Authentic"], gradient: "from-amber-600 to-brown-500", iconBg: "bg-amber-100", emoji: "🍂" },
  { id: 12, name: "Black Pepper Whole", category: "spices", description: "Bold, pungent whole black peppercorns freshly packed to preserve essential oils and maximum flavour.", tags: ["Bold Flavour", "Fresh Packed"], gradient: "from-gray-600 to-slate-700", iconBg: "bg-gray-100", emoji: "⚫" },
  { id: 13, name: "Trail Mix Snack Pack", category: "healthy-foods", description: "A perfectly balanced mix of nuts, seeds, and dried fruits — the ideal on-the-go energy booster.", tags: ["On-The-Go", "Energy Boost"], badge: "Popular", gradient: "from-orange-400 to-red-400", iconBg: "bg-orange-100", emoji: "🥗" },
  { id: 14, name: "Mixed Nuts Roasted", category: "healthy-foods", description: "A premium blend of lightly roasted almonds, cashews, walnuts, and pistachios with a hint of Himalayan salt.", tags: ["Roasted", "Premium Blend"], gradient: "from-amber-400 to-yellow-400", iconBg: "bg-amber-100", emoji: "🍿" },
  { id: 15, name: "Festive Dry Fruit Hamper", category: "gift-hampers", description: "An elegantly curated hamper with premium dry fruits, nuts, and saffron — perfect for gifting every occasion.", tags: ["Festive", "Luxury"], badge: "Bestseller", gradient: "from-pink-400 to-rose-500", iconBg: "bg-pink-100", emoji: "🎁" },
  { id: 16, name: "Corporate Gift Box", category: "gift-hampers", description: "Bespoke corporate gift boxes with custom branding — premium contents, premium impression.", tags: ["Corporate", "Custom Branding"], gradient: "from-slate-500 to-gray-600", iconBg: "bg-slate-100", emoji: "🎀" },
  { id: 17, name: "White Label Nuts Range", category: "private-label", description: "Your brand, our quality. Full-range private label nuts collection with flexible MOQ and custom packaging.", tags: ["Custom Branding", "Flexible MOQ"], badge: "B2B", gradient: "from-indigo-500 to-blue-600", iconBg: "bg-indigo-100", emoji: "🏷️" },
  { id: 18, name: "Private Label Seeds Range", category: "private-label", description: "Launch your own seeds brand with our private label programme — from product selection to branded packaging.", tags: ["Full Support", "B2B"], gradient: "from-teal-500 to-cyan-600", iconBg: "bg-teal-100", emoji: "📦" },
];





// ─── Sub-Components ───────────────────────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={childFade}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] overflow-hidden transition-all duration-300 cursor-default"
    >
      {/* Image / Visual Area */}
      <div className={`relative h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}>
        <motion.span
          className="text-7xl select-none"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {product.emoji}
        </motion.span>
        {product.badge && (
          <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[var(--text)] shadow-sm">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-[var(--text)] leading-snug">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)] line-clamp-2">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]">
              {tag}
            </span>
          ))}
        </div>
        <button className="mt-5 w-full rounded-2xl border border-[var(--border)] py-2.5 text-sm font-semibold text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[color-mix(in_srgb,var(--primary)_5%,white)] transition-all duration-200 flex items-center justify-center gap-2">
          Enquire Now <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}

// function FAQItem({ faq }: { faq: FAQ }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <motion.div variants={childFade} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-[var(--shadow-sm)]">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex items-center justify-between gap-4 p-8 text-left hover:bg-[var(--surface-secondary)] transition-colors duration-200"
//         aria-expanded={open}
//       >
//         <span className="text-lg font-bold text-[var(--text)]">{faq.question}</span>
//         <span className="flex-shrink-0 h-8 w-8 rounded-full bg-[color-mix(in_srgb,var(--primary)_10%,white)] flex items-center justify-center">
//           {open ? <ChevronUp size={16} className="text-[var(--primary)]" /> : <ChevronDown size={16} className="text-[var(--primary)]" />}
//         </span>
//       </button>
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="overflow-hidden"
//           >
//             <p className="px-8 pb-8 leading-8 text-[var(--text-secondary)]">{faq.answer}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

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
      <section id="featured" className="py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-[var(--primary)]">Featured Range</span>
            <h2 className="mt-4 text-5xl font-black text-[var(--text)]">Explore Our Products</h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">Filter by category to find exactly what you're looking for.</p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-3 justify-center mb-14">
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                activeCategory === "all"
                  ? "bg-[var(--primary)] text-white shadow-[var(--shadow-md)]"
                  : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
              }`}
            >
              <Filter size={14} /> All Products
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
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-[var(--text-secondary)]">No products in this category yet.</div>
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
                  ["Sourced from verified, premium-grade suppliers", "✓"],
                  ["Lab-tested for contaminants and purity", "✓"],
                  ["Processed in hygienic, certified facilities", "✓"],
                  ["Sealed in food-grade airtight packaging", "✓"],
                  ["Inspected at every stage of production", "✓"],
                  ["Batch-traceable from farm to shelf", "✓"],
                ].map(([point]) => (
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
                  {[["100%", "Natural Ingredients"], ["0", "Artificial Additives"], ["Multi-Stage", "QC Process"], ["FSSAI", "Certified"]].map(([v, l]) => (
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
