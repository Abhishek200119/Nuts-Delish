import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  Send,
  Package,
  ShieldCheck,
  Building2,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Zap,
  Globe2,
  Share2,
  MessageCircle,
  AtSign,
  Link2,
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
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};
const childFade: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  message: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const contactDetails = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Nuts Delish Private Limited",
    sub: "Mumbai, Maharashtra, India",
    color: "from-rose-500 to-red-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@nutsdelish.com",
    sub: "We respond within 24 hours",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon – Sat, 9 AM – 6 PM IST",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9 AM – 6 PM",
    sub: "Sunday: Closed",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
];

const inquiryTypes = [
  "General Enquiry",
  "Wholesale / Bulk Order",
  "Private Label",
  "Retail Partnership",
  "Corporate Gifting",
  "Media & Press",
  "Careers",
  "Other",
];

const inquiryCards = [
  {
    icon: Package,
    title: "Wholesale Inquiry",
    desc: "Looking to stock Nuts Delish products? We offer competitive wholesale pricing, flexible MOQs, and reliable fulfilment across India.",
    cta: "Contact Wholesale Team",
    color: "from-amber-500 to-orange-500",
    highlights: ["Competitive pricing", "Flexible MOQ", "Pan-India delivery", "Dedicated account manager"],
  },
  {
    icon: ShieldCheck,
    title: "Private Label Inquiry",
    desc: "Build your own brand with our end-to-end private label solutions — from product development and formulation to branded packaging.",
    cta: "Explore Private Label",
    color: "from-[var(--secondary)] to-rose-700",
    highlights: ["Custom branding", "R&D support", "Custom packaging", "Full manufacturing support"],
  },
];

const socialLinks = [
  { icon: AtSign, label: "Instagram", href: "#", color: "from-pink-500 to-rose-500" },
  { icon: Share2, label: "Facebook", href: "#", color: "from-blue-600 to-indigo-600" },
  { icon: MessageCircle, label: "Twitter / X", href: "#", color: "from-sky-500 to-blue-500" },
  { icon: Link2, label: "LinkedIn", href: "#", color: "from-blue-700 to-blue-900" },
];

const faqs: FAQ[] = [
  { question: "How quickly do you respond to enquiries?", answer: "We aim to respond to all enquiries within 24 business hours. For urgent matters, please call us directly during business hours." },
  { question: "Do you offer samples before placing a bulk order?", answer: "Yes, we offer product samples for genuine wholesale and private label enquiries. Please reach out through the contact form or phone to request a sample pack." },
  { question: "What is the minimum order quantity for wholesale?", answer: "MOQs vary by product category. Please contact our wholesale team with your requirements and we'll provide a customised quote." },
  { question: "Do you ship outside India?", answer: "Currently our primary distribution network covers PAN India. For international enquiries, please contact us and we'll explore the best options for your requirements." },
  { question: "How do I start a private label project?", answer: "Simply reach out via our contact form or email with your brand vision and product ideas. Our private label team will walk you through the entire process from concept to shelf." },
  { question: "Can I visit your facility?", answer: "Facility visits are arranged for serious wholesale and private label partners. Please contact us in advance to schedule an appointment." },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={childFade} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-[var(--shadow-sm)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-8 text-left hover:bg-[var(--surface-secondary)] transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="text-lg font-bold text-[var(--text)]">{faq.question}</span>
        <span className="flex-shrink-0 h-8 w-8 rounded-full bg-[color-mix(in_srgb,var(--primary)_10%,white)] flex items-center justify-center">
          {open
            ? <ChevronUp size={16} className="text-[var(--primary)]" />
            : <ChevronDown size={16} className="text-[var(--primary)]" />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-8 pb-8 leading-8 text-[var(--text-secondary)]">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  return (
    <main className="overflow-hidden bg-[var(--background)]">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-[color-mix(in_srgb,var(--accent)_25%,transparent)] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.span variants={childFade} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-2.5 text-sm font-semibold text-[var(--primary)] shadow-[var(--shadow-sm)]">
              <Mail size={16} /> Get In Touch
            </motion.span>
            <motion.h1 variants={childFade} className="mt-8 text-6xl md:text-8xl font-black leading-tight text-[var(--text)]">
              Let's Build <span className="text-[var(--primary)]">Something</span> <span className="text-[var(--secondary)]">Great</span>
            </motion.h1>
            <motion.p variants={childFade} className="mt-8 text-xl leading-9 text-[var(--text-secondary)] max-w-3xl mx-auto">
              Whether you're a retailer, distributor, private label partner, or just want to say hello — our team is ready to help. Reach out and let's start a conversation.
            </motion.p>
            <motion.div variants={childFade} className="mt-10 flex justify-center gap-8 flex-wrap">
              {[["24h", "Response Time"], ["PAN India", "Reach"], ["B2B Ready", "Partnerships"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <p className="text-2xl font-black text-[var(--primary)]">{v}</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">{l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT DETAILS ── */}
      <section className="py-32 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-[var(--primary)]">Company Contact</span>
            <h2 className="mt-4 text-5xl font-black text-[var(--text)]">Find Us, Reach Us</h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">Multiple ways to connect with the Nuts Delish team — choose what works best for you.</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div key={c.label} variants={childFade} whileHover={{ y: -8 }}
                  className={`rounded-3xl border ${c.border} ${c.bg} p-8 transition-all duration-300 cursor-default`}>
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)]">{c.label}</p>
                  <p className="mt-2 font-bold text-[var(--text)] leading-snug">{c.value}</p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{c.sub}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT FORM + MAP ── */}
      <section className="py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Form */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-block rounded-full bg-[color-mix(in_srgb,var(--primary)_10%,white)] px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[var(--primary)]">Send A Message</span>
              <h2 className="mt-6 text-4xl font-black leading-tight text-[var(--text)]">We'd Love To <span className="text-[var(--primary)]">Hear From You</span></h2>
              <p className="mt-4 text-[var(--text-secondary)] leading-7">Fill out the form and our team will get back to you within one business day.</p>

              <div className="mt-10 rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-md)]">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center flex flex-col items-center gap-4"
                    >
                      <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 size={40} className="text-green-600" />
                      </div>
                      <h3 className="text-2xl font-black text-[var(--text)]">Message Sent!</h3>
                      <p className="text-[var(--text-secondary)] max-w-xs leading-7">Thank you for reaching out. Our team will get back to you within 24 business hours.</p>
                      <button
                        onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", company: "", inquiryType: "", message: "" }); }}
                        className="mt-4 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-200"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-[var(--text)] mb-2">Full Name *</label>
                          <input
                            required name="name" type="text" value={formData.name} onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none transition-colors duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[var(--text)] mb-2">Email Address *</label>
                          <input
                            required name="email" type="email" value={formData.email} onChange={handleChange}
                            placeholder="you@company.com"
                            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none transition-colors duration-200"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-[var(--text)] mb-2">Phone Number</label>
                          <input
                            name="phone" type="tel" value={formData.phone} onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none transition-colors duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[var(--text)] mb-2">Company Name</label>
                          <input
                            name="company" type="text" value={formData.company} onChange={handleChange}
                            placeholder="Your company"
                            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none transition-colors duration-200"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[var(--text)] mb-2">Inquiry Type *</label>
                        <select
                          required name="inquiryType" value={formData.inquiryType} onChange={handleChange}
                          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-[var(--text)] focus:border-[var(--primary)] focus:outline-none transition-colors duration-200"
                        >
                          <option value="">Select inquiry type</option>
                          {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[var(--text)] mb-2">Message *</label>
                        <textarea
                          required name="message" rows={5} value={formData.message} onChange={handleChange}
                          placeholder="Tell us about your requirements..."
                          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none transition-colors duration-200 resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 rounded-2xl bg-[var(--primary)] px-8 py-4 text-white font-semibold hover:bg-[var(--primary-hover)] disabled:opacity-60 transition-all duration-300 hover:-translate-y-0.5 shadow-[var(--shadow-md)]"
                      >
                        {loading ? (
                          <span className="inline-block h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        ) : (
                          <><Send size={18} /> Send Message</>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Map + Side Info */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              {/* Map Placeholder */}
              <div className="rounded-[32px] border border-[var(--border)] overflow-hidden shadow-[var(--shadow-md)] bg-[var(--surface-secondary)] h-72 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--primary)_8%,transparent)] to-[color-mix(in_srgb,var(--accent)_20%,transparent)]" />
                <div className="relative text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg mb-4">
                    <MapPin size={28} className="text-white" />
                  </div>
                  <p className="font-bold text-[var(--text)]">Nuts Delish Private Limited</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">Mumbai, Maharashtra, India</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2 text-sm text-white font-semibold hover:bg-[var(--primary-hover)] transition-colors duration-200"
                  >
                    <Globe2 size={14} /> View on Google Maps
                  </a>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: "Mon – Sat", sub: "9 AM – 6 PM IST", color: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
                  { icon: Zap, label: "Response Time", sub: "Within 24 hours", color: "text-green-600", bg: "bg-green-50 border-green-200" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className={`rounded-2xl border ${item.bg} p-5`}>
                      <Icon size={20} className={item.color} />
                      <p className="mt-3 font-bold text-[var(--text)] text-sm">{item.label}</p>
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5">{item.sub}</p>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-4">Follow Us</p>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        className={`flex items-center gap-3 rounded-2xl bg-gradient-to-r ${s.color} p-3 text-white text-sm font-semibold hover:-translate-y-1 transition-all duration-200`}
                        aria-label={s.label}
                      >
                        <Icon size={18} /> {s.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BUSINESS INQUIRY CARDS ── */}
      <section className="py-32 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-[var(--primary)]">Business Partnerships</span>
            <h2 className="mt-4 text-5xl font-black text-[var(--text)]">Grow With <span className="text-[var(--primary)]">Nuts Delish</span></h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">We work with retailers, distributors, and brand builders. Here's how we can work together.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10">
            {inquiryCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={i === 0 ? fadeLeft : fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="rounded-[40px] border border-[var(--border)] bg-[var(--surface-secondary)] p-10 shadow-[var(--shadow-sm)] transition-all duration-300"
                >
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="mt-8 text-2xl font-black text-[var(--text)]">{card.title}</h3>
                  <p className="mt-4 text-[var(--text-secondary)] leading-8">{card.desc}</p>
                  <div className="mt-8 space-y-3">
                    {card.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-3 text-[var(--text-secondary)]">
                        <CheckCircle2 size={16} className="text-[var(--primary)] flex-shrink-0" />
                        <span className="text-sm">{h}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact-form"
                    onClick={() => document.querySelector("form")?.scrollIntoView({ behavior: "smooth" })}
                    className={`mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${card.color} px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 transition-all duration-200 shadow-[var(--shadow-sm)]`}
                  >
                    {card.cta} <ArrowRight size={16} />
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Business Channels */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Building2, title: "Retail Partnership", desc: "Stock us in your store", color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
              { icon: Globe2, title: "E-Commerce Listing", desc: "List on your platform", color: "text-green-600", bg: "bg-green-50 border-green-200" },
              { icon: Zap, title: "Quick Commerce", desc: "Fast delivery partners", color: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
              { icon: ShieldCheck, title: "Corporate Gifting", desc: "Branded gift hampers", color: "text-purple-600", bg: "bg-purple-50 border-purple-200" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={childFade} whileHover={{ y: -6 }}
                  className={`rounded-2xl border ${item.bg} p-6 cursor-default transition-all duration-300`}>
                  <Icon size={24} className={item.color} />
                  <p className="mt-4 font-bold text-[var(--text)]">{item.title}</p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-32 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-[var(--primary)]">FAQ</span>
            <h2 className="mt-4 text-5xl font-black text-[var(--text)]">Common Questions</h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)]">Quick answers before you reach out.</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="rounded-[48px] bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[color-mix(in_srgb,var(--secondary)_80%,black)] p-16 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
              </div>
              <div className="relative">
                <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-widest">Let's Connect</span>
                <h2 className="mt-6 text-4xl md:text-5xl font-black leading-tight">Start Your Partnership With Nuts Delish Today</h2>
                <p className="mt-6 text-xl opacity-85 max-w-xl mx-auto leading-8">Our team is ready to support your wholesale, private label, or retail needs. Reach out — we're just a message away.</p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:hello@nutsdelish.com"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[var(--primary)] font-bold hover:bg-[var(--accent)] transition-all duration-300 hover:-translate-y-1 shadow-lg"
                  >
                    <Mail size={18} /> Email Us Now
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-8 py-4 font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    <Phone size={18} /> Call Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
