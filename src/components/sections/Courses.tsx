"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const courses = [
  {
    lang: "Ø§Ù„ÙŠØ§Ø¨Ø§Ù†ÙŠØ©",
    level: "Ù…Ø¨ØªØ¯Ø¦",
    duration: "3 Ø£Ø³Ø§Ø¨ÙŠØ¹",
    price: 260,
    title: "Ø§Ù„ÙŠØ§Ø¨Ø§Ù†ÙŠØ© Ù„Ù„Ù…Ø¨ØªØ¯Ø¦ÙŠÙ†",
    desc: "ØªØ¹Ù„Ù… Ø§Ù„Ù‡ÙŠØ±Ø§ØºØ§Ù†Ø§ ÙˆØ§Ù„ÙƒØ§ØªØ§ÙƒØ§Ù†Ø§ØŒ ØªØµØ±ÙŠÙ Ø§Ù„Ø£ÙØ¹Ø§Ù„ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ©ØŒ Ù…Ø­Ø§Ø¯Ø«Ø§Øª ÙŠÙˆÙ…ÙŠØ© Ø¨Ø³ÙŠØ·Ø©ØŒ Ø§Ù„Ø£Ø±Ù‚Ø§Ù… ÙˆØ§Ù„Ø£ÙŠØ§Ù… ÙˆØ§Ù„Ø´Ù‡ÙˆØ±.",
  },
  {
    lang: "Ø§Ù„ÙŠØ§Ø¨Ø§Ù†ÙŠØ©",
    level: "Ù…ØªÙˆØ³Ø·",
    duration: "40 ÙŠÙˆÙ…",
    price: 750,
    title: "Ø§Ù„ÙŠØ§Ø¨Ø§Ù†ÙŠØ© Ø§Ù„Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…ØªÙˆØ³Ø·",
    desc: "Ù…Ù†Ù‡Ø¬ Genki 1ØŒ Ù‚ÙˆØ§Ø¹Ø¯ Ø£ÙƒØ«Ø± ØªØ¹Ù‚ÙŠØ¯Ù‹Ø§ ÙˆØªØµØ±ÙŠÙØ§Øª Ù…ØªÙ†ÙˆØ¹Ø©ØŒ ØªÙˆØ³ÙŠØ¹ Ø§Ù„Ù…Ø­Ø§Ø¯Ø«Ø§Øª Ø§Ù„ÙŠÙˆÙ…ÙŠØ©ØŒ Ù…Ù…Ø§Ø±Ø³Ø© Ø§Ù„Ø§Ø³ØªÙ…Ø§Ø¹ ÙˆØ§Ù„ÙƒØªØ§Ø¨Ø©.",
  },
  {
    lang: "Ø§Ù„ÙŠØ§Ø¨Ø§Ù†ÙŠØ©",
    level: "Ù…ØªÙ‚Ø¯Ù…",
    duration: "30 ÙŠÙˆÙ…",
    price: 760,
    title: "Ø§Ù„ÙŠØ§Ø¨Ø§Ù†ÙŠØ© Ø§Ù„Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…ØªÙ‚Ø¯Ù…",
    desc: "Ù…Ù†Ù‡Ø¬ Genki 2ØŒ ØªØ¹Ø¨ÙŠØ±Ø§Øª Ù…ØªÙ‚Ø¯Ù…Ø© ÙˆØªØµØ±ÙŠÙØ§Øª Ù…Ø¹Ù‚Ø¯Ø©ØŒ Ù‚Ø±Ø§Ø¡Ø© Ù†ØµÙˆØµ Ø£Ø·ÙˆÙ„ ÙˆÙ…Ø­Ø§Ø¯Ø«Ø§Øª Ø£ÙƒØ«Ø± ØªØ¹Ù‚ÙŠØ¯Ù‹Ø§ØŒ ØªØ·ÙˆÙŠØ± Ù…Ù‡Ø§Ø±Ø§Øª Ø§Ù„Ø§Ø³ØªÙ…Ø§Ø¹ ÙˆØ§Ù„ÙÙ‡Ù….",
  },
  {
    lang: "Ø§Ù„ÙŠØ§Ø¨Ø§Ù†ÙŠØ©",
    level: "Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ø³ØªÙˆÙŠØ§Øª",
    price: 1600,
    title: "Ø­Ø²Ù…Ø© Ø§Ù„ÙŠØ§Ø¨Ø§Ù†ÙŠØ© Ø§Ù„Ø´Ø§Ù…Ù„Ø©",
    desc: "ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ø³ØªÙˆÙŠØ§Øª Ø¨ØªÙƒÙ„ÙØ© Ù…Ø®ÙØ¶Ø©.",
  },
  {
    lang: "Ø§Ù„ÙƒÙˆØ±ÙŠØ©",
    level: "Ù…Ø¨ØªØ¯Ø¦",
    price: 260,
    title: "Ø§Ù„ÙƒÙˆØ±ÙŠØ© Ù„Ù„Ù…Ø¨ØªØ¯Ø¦ÙŠÙ†",
    desc: "Ø£Ø³Ø§Ø³ÙŠØ§Øª Ø§Ù„Ø­Ø±ÙˆÙ ÙˆØ§Ù„Ù†Ø·Ù‚ ÙˆØ§Ù„Ù…Ø­Ø§Ø¯Ø«Ø© Ø§Ù„Ø¨Ø³ÙŠØ·Ø©.",
  },
  {
    lang: "Ø§Ù„ÙƒÙˆØ±ÙŠØ©",
    level: "Ù…ØªÙˆØ³Ø·",
    price: 640,
    title: "Ø§Ù„ÙƒÙˆØ±ÙŠØ© Ø§Ù„Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…ØªÙˆØ³Ø·",
    desc: "Ù‚ÙˆØ§Ø¹Ø¯ Ù…ØªÙ‚Ø¯Ù…Ø© ÙˆÙ…Ø­Ø§Ø¯Ø«Ø§Øª Ø­ÙŠØ§ØªÙŠØ© ÙˆØªÙˆØ³ÙŠØ¹ Ø§Ù„Ù…ÙØ±Ø¯Ø§Øª.",
  },
  {
    lang: "Ø§Ù„ÙƒÙˆØ±ÙŠØ©",
    level: "Ù…ØªÙ‚Ø¯Ù…",
    price: 650,
    title: "Ø§Ù„ÙƒÙˆØ±ÙŠØ© Ø§Ù„Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…ØªÙ‚Ø¯Ù…",
    desc: "Ø·Ù„Ø§Ù‚Ø© ÙÙŠ Ø§Ù„Ù…Ø­Ø§Ø¯Ø«Ø© ÙˆÙ‚Ø±Ø§Ø¡Ø© Ù†ØµÙˆØµ Ù…ØªØ®ØµØµØ©.",
  },
  {
    lang: "Ø§Ù„ÙƒÙˆØ±ÙŠØ©",
    level: "Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ø³ØªÙˆÙŠØ§Øª",
    price: 1400,
    title: "Ø­Ø²Ù…Ø© Ø§Ù„ÙƒÙˆØ±ÙŠØ© Ø§Ù„Ø´Ø§Ù…Ù„Ø©",
    desc: "ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ø³ØªÙˆÙŠØ§Øª Ø¨ØªÙƒÙ„ÙØ© Ù…Ø®ÙØ¶Ø©.",
  },
];

import React from "react";

export default function Courses() {
  const [tab, setTab] = React.useState<"Ø§Ù„ÙŠØ§Ø¨Ø§Ù†ÙŠØ©" | "Ø§Ù„ÙƒÙˆØ±ÙŠØ©" | "Ø§Ù„ÙƒÙ„">("Ø§Ù„ÙŠØ§Ø¨Ø§Ù†ÙŠØ©");
  const filtered = courses.filter((c) => (tab === "Ø§Ù„ÙƒÙ„" ? true : c.lang === tab));

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Ø§Ù„Ø¯ÙˆØ±Ø§Øª
        </motion.h2>

        <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 p-1">
          {(["Ø§Ù„ÙƒÙ„", "Ø§Ù„ÙŠØ§Ø¨Ø§Ù†ÙŠØ©", "Ø§Ù„ÙƒÙˆØ±ÙŠØ©"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 text-sm rounded-full transition ${
                tab === t ? "bg-[linear-gradient(90deg,var(--accent-start),var(--accent-end))] text-black" : "text-white/80 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <TiltCard className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[var(--accent-start)]/40 to-[var(--accent-end)]/40 hover:from-[var(--accent-start)] hover:to-[var(--accent-end)] transition">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 h-full backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/50 border border-white/10">{c.lang}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10">{c.level}</span>
                    </div>
                    {/* price moved below */}
                  </div>

                  <h3 className="text-lg font-semibold mb-1">{c.title}</h3>
                  {"duration" in c && (
                    <div className="text-xs text-white/60 mb-2">Ø§Ù„Ù…Ø¯Ø©: {(c as { duration?: string }).duration}</div>
                  )}
                  <p className="text-sm text-white/70 mb-4 min-h-[44px]">{c.desc}</p>
                  <div className="text-base text-white/90 font-semibold mb-3">{c.price} Ø±ÙŠØ§Ù„</div>

                  <a
                    href={`https://wa.me/966538325090?text=${encodeURIComponent('Ù…Ø±Ø­Ø¨Ø§Ù‹ØŒ Ø£ÙˆØ¯ Ø§Ù„ØªØ³Ø¬ÙŠÙ„ ÙÙŠ Ø¯ÙˆØ±Ø© ' + c.title)}`}
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-[linear-gradient(90deg,var(--accent-start),var(--accent-end))] shadow-[0_0_20px_rgba(36,72,255,0.2)] hover:shadow-[0_0_35px_rgba(255,43,43,0.25)] transition"
                  >
                    Ø³Ø¬Ù‘Ù„ Ø§Ù„Ø¢Ù†
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



