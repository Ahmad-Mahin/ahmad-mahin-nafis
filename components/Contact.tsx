"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("a.mahin.nafis@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto fallback link with prefilled subject and body
    const mailtoUrl = `mailto:a.mahin.nafis@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Collaboration Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-[150px]" />

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-sky-400">
          <MessageSquare className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest">Let's Connect</span>
        </div>
        <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight">
          Ready to Collaborate <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300">
            or Build Together?
          </span>
        </h2>
        <p className="max-w-xl text-slate-400 text-sm sm:text-base mt-2">
          Open to research partnerships, internship roles, campus initiatives, and technical discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Information & Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 flex items-center justify-between group hover:border-sky-500/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  Email Nafis
                </span>
                <p className="text-sm font-semibold text-white break-all">
                  a.mahin.nafis@gmail.com
                </p>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
              className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-sky-300 hover:bg-slate-700/80 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/ahmad-mahin-nafis"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-6 rounded-3xl border border-white/10 flex items-center justify-between group hover:border-sky-500/30 transition-all block"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  LinkedIn Network
                </span>
                <p className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                  linkedin.com/in/ahmad-mahin-nafis
                </p>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 group-hover:text-white transition-colors">
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          {/* Phone Card */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 flex items-center justify-between group hover:border-emerald-500/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  Direct Line
                </span>
                <p className="text-sm font-semibold text-white">
                  +880 1842-432181
                </p>
              </div>
            </div>
            <a
              href="tel:+8801842432181"
              className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-emerald-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Location Card */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                Primary Location
              </span>
              <p className="text-sm font-semibold text-white">
                Sylhet, Bangladesh
              </p>
              <span className="text-xs text-slate-400 font-mono">
                SUST Campus • Shahjalal University
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Direct Message Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the details below to initiate contact directly with Ahmad Mahin Nafis.
            </p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Message Dispatched!
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Your mail client has been opened to send your inquiry directly to a.mahin.nafis@gmail.com.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-xs font-mono text-emerald-400 hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Collaboration / Career Opportunity"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 via-indigo-500 to-amber-400 text-slate-950 font-bold text-sm hover:opacity-95 active:scale-[0.99] transition-all shadow-xl shadow-sky-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Nafis</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
