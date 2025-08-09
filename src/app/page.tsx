"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Courses from "@/components/sections/Courses";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Book from "@/components/sections/Book";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Courses />
      <Book />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
