"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6 max-w-5xl text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">ابدأ رحلتك اللغوية اليوم</h3>
                <p className="text-white/70 mb-8">انضم إلى حزمة المستويات لتحصل على وصول كامل بسعر مخفض.</p>
                <motion.a
                    href="#courses"
                    onClick={(e) => {
                        const lenis = (window as unknown as { lenis?: any }).lenis;
                        const el = document.getElementById("courses");
                        if (lenis && el) {
                            e.preventDefault();
                            lenis.scrollTo(el, { offset: 0 });
                        }
                    }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center rounded-full px-9 py-4 text-lg font-semibold text-black bg-[linear-gradient(90deg,var(--accent-start),var(--accent-end))] shadow-[0_0_35px_rgba(36,72,255,0.25)]"
                >
                    تصفّح الدورات
                </motion.a>
            </div>
        </section>
    );
}


