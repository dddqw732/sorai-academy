// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Hero() {
  return (
    <section className="relative min-h-[92dvh] overflow-hidden">
      {/* unified background treatment: site-wide Particles already active; add subtle radial tint only here */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(36,72,255,0.12),transparent)]" />

      <div className="container mx-auto px-6 pt-28 pb-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <div className="mx-auto mb-6 flex justify-center">
            <BrandLogo size={144} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight gradient-text">
            تعلم. ابتكر. أنجز — Sorai Academy
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            نتخصّص في تعليم اللغتين اليابانية والكورية بمسارات عملية من المبتدئ إلى المتقدم، بإشراف مدرّسين خبراء وتمارين تفاعلية.
          </p>

          <motion.a
            href="#courses"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center mt-10 rounded-full px-8 py-4 text-lg font-semibold text-black bg-[linear-gradient(90deg,var(--accent-start),var(--accent-end))] shadow-[0_0_30px_rgba(36,72,255,0.18)] hover:shadow-[0_0_55px_rgba(255,43,43,0.25)] transition-shadow"
          >
            ابدأ الآن
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


