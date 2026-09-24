"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Building2,
  User,
  Globe,
  MessageSquare,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { companyInfo, allProductList } from "@/data/companyData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    productInterest: "T-Shirt",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate professional API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Leadership & Factory Information */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              label="Direct Executive Contact"
              title="Start a Conversation."
              subtitle="Connect directly with our factory leadership to discuss sample development, volume production schedules, or technical knit specifications."
            />

            {/* Leadership Profile Card */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-neutral-200/80 shadow-xs space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#1B4332]">
                    Executive Leadership
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mt-0.5">
                    {companyInfo.leadership.name}
                  </h3>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    {companyInfo.leadership.title}
                  </p>
                  <p className="text-xs text-[#1B4332] font-semibold mt-0.5">
                    {companyInfo.leadership.credentials}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center font-bold text-xs shadow-xs">
                  MD
                </div>
              </div>

              {/* Direct Links */}
              <div className="space-y-3 pt-3.5 border-t border-neutral-100 text-sm">
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-neutral-800 hover:text-[#1B4332] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-md bg-[#F8F9FA] flex items-center justify-center text-neutral-500 group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-neutral-400">
                      Direct Phone / WhatsApp
                    </span>
                    <span className="font-semibold text-xs sm:text-sm">{companyInfo.contact.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-center gap-3 text-neutral-800 hover:text-[#1B4332] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-md bg-[#F8F9FA] flex items-center justify-center text-neutral-500 group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-neutral-400">
                      Official Export Inquiries
                    </span>
                    <span className="font-semibold text-xs sm:text-sm">{companyInfo.contact.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 pt-1">
                  <div className="w-8 h-8 rounded-md bg-[#F8F9FA] flex items-center justify-center text-neutral-500 mt-0.5 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-neutral-400">
                      Factory Address
                    </span>
                    <address className="not-italic text-xs leading-relaxed text-[#475569] font-normal">
                      {companyInfo.contact.address.road},<br />
                      {companyInfo.contact.address.plot},<br />
                      {companyInfo.contact.address.area},<br />
                      {companyInfo.contact.address.city}, {companyInfo.contact.address.country}.
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional B2B Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-neutral-200/80 shadow-xs">
            <div className="mb-5">
              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                Submit a Manufacturing Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1">
                Receive tech-pack review, price quotation, and sampling turnaround estimates within 24 hours.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#1B4332] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#111111]">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-sm text-[#5A5A5A] max-w-md mx-auto">
                    Thank you, {formData.name}. Our export management team has received your inquiry for{" "}
                    <strong>{formData.productInterest}</strong> and will contact you at{" "}
                    <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        country: "",
                        productInterest: "T-Shirt",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#111111] text-white rounded-sm hover:bg-[#1B4332] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Johnathan Miller"
                          className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-black/15 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                        Company / Brand Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Nordic Apparel Group"
                        className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-black/15 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. buyer@apparel.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-black/15 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+45 123 456 78"
                        className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-black/15 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Country */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                        Buyer Destination Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="e.g. Germany, UK, Denmark, Japan"
                        className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-black/15 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-colors"
                      />
                    </div>

                    {/* Product Interest */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                        Product Category Interest *
                      </label>
                      <select
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-black/15 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none bg-white transition-colors"
                      >
                        {allProductList.map((prod) => (
                          <option key={prod} value={prod}>
                            {prod}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                      Order Details, Fabric Specs or Quantity *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please mention desired quantities, GSM/fabric specifications, target delivery timeline..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-black/15 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#111111] text-white font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-[#1B4332] transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
