"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Layers } from "lucide-react";

const items = [
  { icon: Code2, title: "تعلم عملي", desc: "محتوى يعتمد على التطبيق الفعلي و المحادثات الواقعية والقواعد اللغوية التطبيقية" },
  { icon: Rocket, title: "مسارات تعلم سريعة", desc: "خطط تعلم مختصرة بمرشدين خبراء." },
  { icon: Layers, title: "مجتمع طلابي نشط", desc: "دعم ومراجعات من طلاب و معلمين." },
];

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          من نحن
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/80 max-w-3xl"
        >
          Sorai Academy منصة حديثة تُقدّم تعلّم لغات تفاعليًا يوازن بين الأساسيات المتينة والتطبيق العملي، لتمكينك من تحدث اللغة بكل ثقة.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:shadow-[0_10px_40px_rgba(0,245,255,0.08)] transition"
            >
              <item.icon className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




