"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquareText, Phone, Instagram } from "lucide-react";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path d="M13.5 3.5v9.2a4.2 4.2 0 1 1-3.2-4.1v2.6a1.8 1.8 0 1 0 0 2.9V2.5h3.2c.4 1.2 1.1 2.2 2.1 3 1 .8 2.2 1.2 3.5 1.3v3.1c-1.5-.1-3-.6-4.3-1.4v5.6a6.8 6.8 0 1 1-6.8-6.8c.5 0 1 .1 1.5.2V3.5h3z"/>
    </svg>
  );
}

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const message = (data.get("message") as string) || "";

    const composed = `مرحبا، لدي رسالة من نموذج الاتصال:%0A%0Aالاسم: ${name}%0Aالبريد: ${email}%0Aالرسالة:%0A${message}`;
    const whatsappUrl = `https://wa.me/966538325090?text=${composed}`;
    window.open(whatsappUrl, "_blank");
  };

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
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-2 text-sm">الاسم</label>
                <input name="name" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-[--accent-start]" placeholder="اسمك الكامل" />
              </div>
              <div>
                <label className="block mb-2 text-sm">البريد الإلكتروني</label>
                <input name="email" type="email" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-[--accent-start]" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block mb-2 text-sm">الرسالة</label>
                <textarea name="message" rows={5} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-[--accent-start]" placeholder="اكتب رسالتك هنا" />
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
                <span>fguvrhn47@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+966 53 832 5090</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquareText className="w-5 h-5" />
                <span>دعم فني على مدار الساعة</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <motion.a
                href="https://www.instagram.com/_oaff.0x?igsh=cDQzMzY4d3k5ODdr&utm_source=qr"
                target={"_blank"}
                whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(0,245,255,0.25)" }}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/10"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@..202?_r=1&_d=egi2gk1m7ic1j5&sec_uid=MS4wLjABAAAAaXF-5-_RuQl2sHJ2T5ge3goIICceNhb8sB0-QcP3wNIoL2CGgXF6ZGUqDVWmfDjP&share_author_id=6776756095467176965&sharer_language=ar&source=h5_m&u_code=da59036lh872dl&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAAaXF-5-_RuQl2sHJ2T5ge3goIICceNhb8sB0-QcP3wNIoL2CGgXF6ZGUqDVWmfDjP&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=6776756095467176965&share_link_id=20EBD123-8F0D-460D-BFB0-20FCDD351316&share_app_id=1233"
                target={"_blank"}
                whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(0,245,255,0.25)" }}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/10"
              >
                <TikTokIcon className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


