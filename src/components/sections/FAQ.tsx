"use client";

import { motion } from "framer-motion";
const faqs = [
  { q: "كيف يتم تنظيم المستويات؟", a: "ثلاث مستويات: مبتدئ، متوسط، متقدم، مع حزمة لجميع المستويات بتكلفة مخفضة." },
  { q: "هل هناك مدرّسون ناطقون أصليًا؟", a: "نعم، يوفر البرنامج حصصًا بإشراف مدرّسين ناطقين أصليًا ومراجعات دورية." },
  { q: "هل يوجد دعم؟", a: "قناة دعم متاحة على مدار الساعة، ومجتمع خاص للتقويم ومشاركة التقدم." },
];

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.details key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group rounded-xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer select-none text-white/90 marker:hidden">{f.q}</summary>
              <p className="mt-2 text-white/70 text-sm">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}



