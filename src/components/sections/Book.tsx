"use client";

import { motion } from "framer-motion";

export default function Book() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">كتاب دليلك إلى اللغة اليابانية</h3>
          <div className="text-white/70">5 out of 5</div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-white/80">كتاب دليلك إلى اللغة اليابانية</div>
            <div className="text-2xl font-extrabold">$8.99</div>
          </div>
          <div className="aspect-[3/5] w-full rounded-xl overflow-hidden bg-black/40 flex items-center justify-center">
            {/* Using next/image for better LCP */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/md.png" alt="غلاف الكتاب" className="w-full h-full object-cover" />
          </div>
          <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="https://on-go-shop.fourthwall.com/products/ktb-dlylk-l-llgh-lybny?source=dashboard" className="mt-4 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-black bg-[linear-gradient(90deg,var(--accent-start),var(--accent-end))]">اشترِ نسختك الرقمية الآن</motion.a>
          <div className="mt-3 flex items-center gap-4 text-xs text-white/60">
            <div>Easy download</div>
            <div>5 of 5 reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}


