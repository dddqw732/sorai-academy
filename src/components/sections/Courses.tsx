"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const courses = [
  {
    lang: "اليابانية",
    level: "مبتدئ",
    duration: "3 أسابيع",
    price: 260,
    title: "اليابانية للمبتدئين",
    desc: "تعلم الهيراغانا والكاتاكانا، تصريف الأفعال الأساسية، محادثات يومية بسيطة، الأرقام والأيام والشهور.",
  },
  {
    lang: "اليابانية",
    level: "متوسط",
    duration: "40 يوم",
    price: 750,
    title: "اليابانية المستوى المتوسط",
    desc: "منهج Genki 1، قواعد أكثر تعقيدًا وتصريفات متنوعة، توسيع المحادثات اليومية، ممارسة الاستماع والكتابة.",
  },
  {
    lang: "اليابانية",
    level: "متقدم",
    duration: "30 يوم",
    price: 760,
    title: "اليابانية المستوى المتقدم",
    desc: "منهج Genki 2، تعبيرات متقدمة وتصريفات معقدة، قراءة نصوص أطول ومحادثات أكثر تعقيدًا، تطوير مهارات الاستماع والفهم.",
  },
  {
    lang: "اليابانية",
    level: "جميع المستويات",
    price: 1600,
    title: "حزمة اليابانية الشاملة",
    desc: "وصول إلى جميع المستويات بتكلفة مخفضة.",
  },
  {
    lang: "الكورية",
    level: "مبتدئ",
    price: 260,
    title: "الكورية للمبتدئين",
    desc: "أساسيات الحروف والنطق والمحادثة البسيطة.",
  },
  {
    lang: "الكورية",
    level: "متوسط",
    price: 640,
    title: "الكورية المستوى المتوسط",
    desc: "قواعد متقدمة ومحادثات حياتية وتوسيع المفردات.",
  },
  {
    lang: "الكورية",
    level: "متقدم",
    price: 650,
    title: "الكورية المستوى المتقدم",
    desc: "طلاقة في المحادثة وقراءة نصوص متخصصة.",
  },
  {
    lang: "الكورية",
    level: "جميع المستويات",
    price: 1400,
    title: "حزمة الكورية الشاملة",
    desc: "وصول إلى جميع المستويات بتكلفة مخفضة.",
  },
];

import React from "react";

export default function Courses() {
  const [tab, setTab] = React.useState<"اليابانية" | "الكورية" | "الكل">("اليابانية");
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
                    <div className="text-xs text-white/60 mb-2">المدة: {(c as any).duration}</div>
                  )}
                  <p className="text-sm text-white/70 mb-4 min-h-[44px]">{c.desc}</p>
                  <div className="text-base text-white/90 font-semibold mb-3">{c.price} ريال</div>

                  <a
                    href={`https://wa.me/966538325090?text=${encodeURIComponent('مرحباً، أود التسجيل في دورة ' + c.title)}`}
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-[linear-gradient(90deg,var(--accent-start),var(--accent-end))] shadow-[0_0_20px_rgba(36,72,255,0.2)] hover:shadow-[0_0_35px_rgba(255,43,43,0.25)] transition"
                  >
                    سجّل الآن
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


