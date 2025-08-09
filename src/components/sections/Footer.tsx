export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-10">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <nav className="flex items-center gap-5">
          <a className="hover:text-white" href="#courses">الدورات</a>
          <a className="hover:text-white" href="#">عن الأكاديمية</a>
          <a className="hover:text-white" href="#">الأسئلة الشائعة</a>
        </nav>
        <div>© {new Date().getFullYear()} Sorai Academy. جميع الحقوق محفوظة.</div>
      </div>
    </footer>
  );
}




