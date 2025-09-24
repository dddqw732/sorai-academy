"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  { name: "سارة الخطيب", text: "الدروس كانت ممتعة وسهلة الفهم، والأستاذ كان دائمًا متعاونًا ويجيب على جميع أسئلتي. أشعر أنني تقدمت كثيرًا في وقت قصير!" },
  { name: "أحمد العمري", text: "المنصة منظمة بشكل رائع، وكل شيء واضح من البداية. أحببت أسلوب الشرح العملي الذي ساعدني على تطبيق اللغة مباشرة." },
  { name: "منى العبدالله", text: "أفضل تجربة تعليمية مررت بها! أحببت أن كل درس قصير لكنه مليء بالمعلومات المهمة، مما جعل التعلم ممتعًا وسلسًا." },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">آراء الطلاب</h2>
        <div className="relative min-h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <p className="text-base md:text-lg text-white/90">{testimonials[index].text}</p>
              <div className="mt-3 text-white/70">— {testimonials[index].name}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


