"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquareText, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">اتصل بنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-2 text-sm">الاسم</label>
                <input className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-[--accent-start]" placeholder="اسمك الكامل" />
              </div>
              <div>
                <label className="block mb-2 text-sm">البريد الإلكتروني</label>
                <input type="email" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-[--accent-start]" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block mb-2 text-sm">الرسالة</label>
                <textarea rows={5} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-[--accent-start]" placeholder="اكتب رسالتك هنا" />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-2 rounded-full px-7 py-4 text-base font-semibold text-black bg-[linear-gradient(90deg,var(--accent-start),var(--accent-end))]">إرسال</motion.button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>info@sorai.academy</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+966 555 000 123</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquareText className="w-5 h-5" />
                <span>دعم فني على مدار الساعة</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(0,245,255,0.25)" }} className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/10">
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


