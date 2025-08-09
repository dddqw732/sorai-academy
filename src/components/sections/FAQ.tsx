"use client";

import { motion } from "framer-motion";
const faqs = [
  {
    q: "ما هي Sorai Academy؟",
    a: "هي منصة تعليمية تقدم دورات احترافية في مجالات متنوعة بأسلوب عصري وتفاعلي.",
  },
  {
    q: "أين تقدم الدورات؟",
    a: "تقدم الدورات عبر منصة زوم و قوقل ميتينغ",
  },
  {
    q: "هل هناك مستويات في الدورة؟",
    a: "نعم، لدينا دورات تبدأ من الأساسيات وصولًا للمستويات المتقدمة.",
  },
  {
    q: "كيف أسجّل في دورة؟",
    a: "يمكنك التسجيل عبر الضغط على زر \"ابدأ الآن\" وسيتم توجيهك الى مسؤول التسجيل",
  },
  {
    q: "هل يمكنني التعلم من الهاتف؟",
    a: "نعم، المنصة متوافقة مع الهواتف والأجهزة اللوحية.",
  },
  {
    q: "كم مدة الوصول إلى المحتوى؟",
    a: "ستحصل على وصول مدى الحياة إلى المحتوى بعد التسجيل.",
  },
  {
    q: "هل يوجد دعم فني؟",
    a: "نعم، فريق الدعم متواجد للإجابة على استفساراتك عبر البريد أو الدردشة.",
  },
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




