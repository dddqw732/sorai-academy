"use client";

import React from "react";
import BrandLogo from "@/components/ui/BrandLogo";
export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
        <a href="#" className="flex items-center gap-3">
          <BrandLogo size={36} />
          <span className="font-semibold">Sorai Academy</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-white" href="#courses">الدورات</a>
          <a className="hover:text-white" href="#testimonials">آراء الطلاب</a>
          <a className="hover:text-white" href="#contact">اتصل بنا</a>
        </nav>
        <a href="#courses" className="rounded-full px-6 py-3 text-base font-semibold text-black bg-[linear-gradient(90deg,var(--accent-start),var(--accent-end))] shadow-[0_0_24px_rgba(36,72,255,0.25)]">سجّل الآن</a>
      </div>
    </header>
  );
}


