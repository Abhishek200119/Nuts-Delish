import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Globe2
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const childFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
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
    label: "Location",
    value: "Nuts Delish Private Limited",
    sub: "#1317, Manushri Homes AECS Layout - D Block, AECS Layout, Marathahalli, Bengaluru, Karnataka 560037",
    color: "text-[var(--primary)]",
    bg: "bg-orange-50",
  },
  {
    icon: Phone,
    label: "Contact",
    value: "+91 11-41609569",
    sub: "Mon – Sat, 9 AM – 6 PM IST",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Care@nutsdelish.in",
    sub: "We respond within 24 hours",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Clock,
    label: "Hours of operation",
    value: "Mon – Sat: 9 AM – 6 PM",
    sub: "Sunday: Closed",
    color: "text-amber-600",
    bg: "bg-amber-50",
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

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  function resetForm() {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      message: "",
    });
  }

  return (
    <main className="overflow-hidden bg-[var(--background)]">

      
      {/* ═══════════════════════════════════════════════════════════════
          CONTACT + FORM
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT — CONTACT INFORMATION */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <span className="text-xs font-bold uppercase tracking-[3px] text-[var(--primary)]">
                Always Here To Help You
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight text-[var(--text)]">
                Let's Talk
              </h2>

              <p className="mt-5 max-w-xl text-sm md:text-base leading-7 text-[var(--text-secondary)]">
                There are many ways to connect with us. Whether you have a
                product enquiry, partnership opportunity, bulk order request,
                or simply want to know more about Nuts Delish, our team is
                ready to help.
              </p>

              {/* Contact items */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-9 space-y-6"
              >
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      variants={childFade}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-4"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.bg}`}
                      >
                        <Icon size={19} className={item.color} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm font-bold text-[var(--text)]">
                          {item.label === "Email" ? (
                            <a
                              href={`mailto:${item.value}`}
                              className="hover:text-[var(--primary)] transition"
                            >
                              {item.value}
                            </a>
                          ) : item.label === "Contact" ? (
                            <a
                              href={`tel:${item.value.replace(/\s/g, "")}`}
                              className="hover:text-[var(--primary)] transition"
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </p>

                        <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                          {item.sub}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* RIGHT — CONTACT FORM */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-8 shadow-[var(--shadow-md)]"
            >
              <h3 className="text-2xl md:text-3xl font-black text-[var(--text)]">
                Ready To Get Started?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                Tell us about your requirement and our team will get back to
                you shortly.
              </p>

              <div className="mt-7">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center flex flex-col items-center"
                    >
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2
                          size={34}
                          className="text-green-600"
                        />
                      </div>

                      <h3 className="mt-5 text-2xl font-black text-[var(--text)]">
                        Message Sent!
                      </h3>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
                        Thank you for reaching out. Our team will get back to
                        you within 24 business hours.
                      </p>

                      <button
                        type="button"
                        onClick={resetForm}
                        className="mt-6 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="mb-2 block text-xs font-bold text-[var(--text)]">
                            Full Name *
                          </label>

                          <input
                            required
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-xs font-bold text-[var(--text)]">
                            Email Address *
                          </label>

                          <input
                            required
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Phone + Company */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="mb-2 block text-xs font-bold text-[var(--text)]">
                            Phone Number
                          </label>

                          <input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 11-41609569"
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-xs font-bold text-[var(--text)]">
                            Company Name
                          </label>

                          <input
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company"
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Inquiry */}
                      <div>
                        <label className="mb-2 block text-xs font-bold text-[var(--text)]">
                          Inquiry Type *
                        </label>

                        <select
                          required
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--primary)] focus:outline-none"
                        >
                          <option value="">Select inquiry type</option>

                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="mb-2 block text-xs font-bold text-[var(--text)]">
                          Message *
                        </label>

                        <textarea
                          required
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your requirements..."
                          className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none"
                        />
                      </div>

                      {/* Consent */}
                      <label className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <input
                          required
                          type="checkbox"
                          className="mt-0.5 accent-[var(--primary)]"
                        />
                        <span>
                          I agree to be contacted regarding my enquiry.
                        </span>
                      </label>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 rounded-xl bg-[var(--primary)] px-8 py-3.5 text-sm font-bold text-white hover:bg-[var(--primary-hover)] disabled:opacity-60 transition-all duration-300 hover:-translate-y-0.5 shadow-[var(--shadow-md)]"
                      >
                        {loading ? (
                          <span className="inline-block h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        ) : (
                          <>
                            <Send size={17} />
                            Send Message
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     {/* ═══════════════════════════════════════════════════════════════
    MAP
═══════════════════════════════════════════════════════════════ */}
<section className="pb-24 bg-[var(--background)]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <span className="text-xs font-bold uppercase tracking-[3px] text-[var(--primary)]">
        Find Us
      </span>

      <h2 className="mt-3 text-3xl md:text-4xl font-black text-[var(--text)]">
        Our Location
      </h2>
    </motion.div>

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface-secondary)] shadow-[var(--shadow-md)]"
    >

      {/* Google Maps - Manushri Homes / AECS Layout */}
      <iframe
        title="Nuts Delish Private Limited Location"
        src="https://www.google.com/maps?q=12.9605949,77.7133892&z=17&output=embed"
        className="h-[320px] md:h-[420px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Map overlay card */}
      <div className="absolute left-5 bottom-5 max-w-sm rounded-2xl bg-white/95 backdrop-blur-md p-5 shadow-xl">
        <div className="flex items-start gap-3">

          <div className="h-10 w-10 shrink-0 rounded-xl bg-orange-100 flex items-center justify-center">
            <MapPin
              size={19}
              className="text-[var(--primary)]"
            />
          </div>

          <div>
            <p className="font-bold text-[var(--text)]">
              Nuts Delish Private Limited
            </p>

            <p className="mt-1 text-xs leading-5 text-[var(--text-secondary)]">
              XP67+69J, AECS Layout - D Block,
              AECS Layout, Marathahalli,
              Bengaluru, Karnataka 560037
            </p>
          </div>

        </div>

        <a
          href="https://www.google.com/maps/place/Manushri+Homes/@12.9604908,77.7122299,17.65z/data=!4m6!3m5!1s0x3bae123ad95e42f3:0xcd31418dfd773a4!8m2!3d12.9605949!4d77.7133892!16s%2Fg%2F11gf97zftt"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2.5 text-xs font-bold text-white hover:bg-[var(--primary-hover)] transition"
        >
          <Globe2 size={14} />
          View on Google Maps
        </a>

      </div>
    </motion.div>
  </div>
</section>
    </main>
  );
}