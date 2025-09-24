"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6 max-w-5xl text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Ø§Ø¨Ø¯Ø£ Ø±Ø­Ù„ØªÙƒ Ø§Ù„Ù„ØºÙˆÙŠØ© Ø§Ù„ÙŠÙˆÙ…</h3>
                <p className="text-white/70 mb-8">Ø§Ù†Ø¶Ù… Ø¥Ù„Ù‰ Ø­Ø²Ù…Ø© Ø§Ù„Ù…Ø³ØªÙˆÙŠØ§Øª Ù„ØªØ­ØµÙ„ Ø¹Ù„Ù‰ ÙˆØµÙˆÙ„ ÙƒØ§Ù…Ù„ Ø¨Ø³Ø¹Ø± Ù…Ø®ÙØ¶.</p>
                <motion.a
                    href="#courses"
                    onClick={(e) => {
                        const lenis = (window as unknown as { lenis?: { scrollTo: (el: Element, options?: { offset?: number }) => void } }).lenis;
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
                    ØªØµÙÙ‘Ø­ Ø§Ù„Ø¯ÙˆØ±Ø§Øª
                </motion.a>
            </div>
        </section>
    );
}



