import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Zap,
  Globe2,
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
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  message: string;
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


            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
