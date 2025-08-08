"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const courses = [
  {
    lang: "اليابانية",
    level: "مبتدئ",
    price: 200,
    title: "اليابانية للمبتدئين",
    desc: "أساسيات الحروف والنطق والمحادثة البسيطة.",
  },
  {
    lang: "اليابانية",
    level: "متوسط",
    price: 399,
    title: "اليابانية المستوى المتوسط",
    desc: "قواعد متقدمة ومحادثات حياتية وتوسيع المفردات.",
  },
  {
    lang: "اليابانية",
    level: "متقدم",
    price: 399,
    title: "اليابانية المستوى المتقدم",
    desc: "طلاقة في المحادثة وقراءة نصوص متخصصة.",
  },
  {
    lang: "اليابانية",
    level: "جميع المستويات",
    price: 747,
    title: "حزمة اليابانية الشاملة",
    desc: "وصول إلى جميع المستويات بتكلفة مخفضة.",
  },
  {
    lang: "الكورية",
    level: "مبتدئ",
    price: 200,
    title: "الكورية للمبتدئين",
    desc: "أساسيات الهانغول والنطق والتعابير اليومية.",
  },
  {
    lang: "الكورية",
    level: "متوسط",
    price: 399,
    title: "الكورية المستوى المتوسط",
    desc: "قواعد ومحادثات متقدمة ومفردات مهنية.",
  },
  {
    lang: "الكورية",
    level: "متقدم",
    price: 399,
    title: "الكورية المستوى المتقدم",
    desc: "إتقان المحادثة وقراءة محتوى أصلي.",
  },
  {
    lang: "الكورية",
    level: "جميع المستويات",
    price: 747,
    title: "حزمة الكورية الشاملة",
    desc: "وصول إلى جميع المستويات بتكلفة مخفضة.",
  },
];

import React from "react";

export default function Courses() {
  const [tab, setTab] = React.useState<"اليابانية" | "الكورية" | "الكل">("الكل");
  const filtered = courses.filter((c) => (tab === "الكل" ? true : c.lang === tab));

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
          الدورات
        </motion.h2>

        <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 p-1">
          {(["الكل", "اليابانية", "الكورية"] as const).map((t) => (
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
              <TiltCard className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_60px_rgba(36,72,255,0.15)] transition">
                <div className="h-32 rounded-xl mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(120px_80px_at_50%_40%,rgba(36,72,255,0.28),transparent)] group-hover:bg-[radial-gradient(160px_100px_at_50%_40%,rgba(255,43,43,0.3),transparent)] transition" />
                  {/* subtle cultural icons */}
                  <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(white,transparent_70%)] pointer-events-none">
                    <div className="absolute top-2 left-3 text-xs">⛩️</div>
                    <div className="absolute top-3 right-4 text-xs">🎌</div>
                    <div className="absolute bottom-3 left-4 text-xs">한</div>
                    <div className="absolute bottom-2 right-3 text-xs">ㅇ</div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-black/50 border border-white/10">{c.lang}</div>
                </div>
                <div className="text-xs text-white/60 mb-1">{c.lang} • {c.level}</div>
                <h3 className="text-lg font-semibold mb-1">{c.title}</h3>
                <div className="text-base text-white/90 font-semibold">{c.price} ريال</div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


