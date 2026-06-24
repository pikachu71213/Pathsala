import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroMandala from "@/assets/hero-mandala.jpg";
import diya from "@/assets/diya.jpg";
import satsang from "@/assets/satsang.jpg";
import bhandara from "@/assets/bhandara.jpg";
import qrCode from "@/assets/qr.png";
import OmSymbol from "@/components/OmSymbol";
import logoUrl from "@/assets/logo_lihxdy.png";

const LOGO_URL = logoUrl;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "गुरुजी की पाठशाला — सनातन धर्म व हरियाणवी संस्कृति की सेवा" },
      {
        name: "description",
        content:
          "पंडित विकास पाहसौरिया सांस्कृतिक एवं आध्यात्मिक पाठशाला — सत्संग, अन्नक्षेत्र, फिजियोथेरेपी एवं सामाजिक सेवा।",
      },
      { property: "og:title", content: "गुरुजी की पाठशाला" },
      {
        property: "og:description",
        content: "सनातन धर्म की ज्योति जलाएं, हरियाणवी संस्कृति को बचाएं।",
      },
      { property: "og:image", content: heroMandala },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroMandala },
    ],
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center mb-10">
      <div className="gold-divider text-xs uppercase tracking-[0.4em] mb-4">
        <span>❋ {kicker} ❋</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-maroon font-display text-gradient-gold px-2">
        {title}
      </h2>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const navLinks: [string, string][] = [
    ["सत्संग", "#satsang"],
    ["अन्नक्षेत्र", "#anna"],
    ["सेवा", "#seva"],
    ["शाखाएं", "#shakha"],
    ["उपलब्धियां", "#achievements"],
    ["संपर्क", "#contact"],
  ];
  return (
    <div className="min-h-screen text-ink">
      {/* NAV — sticky + responsive */}
      <header className="sticky top-0 z-50 border-b border-gold/40 bg-parchment/85 backdrop-blur-md shadow-sm shadow-maroon/10">
        <div className="container mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:px-6 sm:py-5">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img
              src={LOGO_URL}
              alt="गुरुजी की पाठशाला लोगो"
              className="h-14 w-14 shrink-0 rounded-full object-contain sm:h-[72px] sm:w-[72px]"
            />
            <div className="min-w-0 leading-tight">
              <div className="truncate font-display text-lg text-maroon sm:text-[28px]">
                गुरुजी की पाठशाला
              </div>
              <div className="truncate text-[10px] uppercase tracking-[0.25em] text-gold-deep sm:text-[13px] sm:tracking-[0.3em]">
                Est. 2022 · Trust No. 5891
              </div>
            </div>
          </a>
          <nav className="hidden lg:flex gap-8 text-base font-semibold text-ink/85">
            {navLinks.map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="border-b border-transparent transition-colors hover:border-gold-deep hover:text-maroon py-1"
              >
                {l}
              </a>
            ))}
          </nav>
          <button
            className="lg:hidden shrink-0 rounded border border-gold-deep/60 px-4 py-2.5 text-maroon"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-[4px]">
              <span
                className={`block h-[2px] w-6 bg-maroon transition-transform ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`block h-[2px] w-6 bg-maroon transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2px] w-6 bg-maroon transition-transform ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-gold/40 bg-parchment"
            >
              <div className="container mx-auto flex flex-col px-4 py-2">
                {navLinks.map(([l, h]) => (
                  <a
                    key={h}
                    href={h}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-gold/30 py-3 font-display text-maroon"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <div id="top" />

      {/* HERO */}
      <section className="relative">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroMandala})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-parchment/40 via-parchment/70 to-parchment"
          aria-hidden
        />

        <div className="relative container mx-auto px-4 sm:px-6 pt-12 pb-16 sm:pt-16 sm:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div {...fadeUp} className="text-center lg:text-left">
            <p className="gold-divider text-xs uppercase tracking-[0.5em] mb-6 max-w-md mx-auto lg:mx-0">
              <span>॥ श्री गुरुदेव नमः ॥</span>
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.1] text-maroon mb-6">
              सनातन की ज्योति,
              <br />
              <span className="text-gradient-gold">हरियाणवी संस्कृति</span>
              <br />
              की पुकार।
            </h1>
            <p className="text-base sm:text-lg text-ink/80 max-w-xl mb-8 italic mx-auto lg:mx-0">
              पंडित विकास पाहसौरिया सांस्कृतिक एवं आध्यात्मिक पाठशाला — एक
              संकल्प, जहाँ सत्संग की वाणी, अन्नक्षेत्र की थाली और सेवा का दीपक
              एक साथ प्रज्वलित हैं।
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="px-7 py-3 bg-maroon text-parchment font-display tracking-wider hover:bg-maroon-deep transition-colors shadow-lg shadow-maroon/30"
              >
                सत्संग बुक करें
              </a>
              <a
                href="#seva"
                className="px-7 py-3 border-2 border-gold-deep text-maroon font-display tracking-wider hover:bg-gold/30 transition-colors"
              >
                सहयोग दें
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[280px] xs:h-[340px] sm:h-[400px] lg:h-[480px] ornate-frame p-3 flex items-center justify-center bg-gradient-to-br from-parchment via-parchment-deep/40 to-parchment mx-auto w-full max-w-[480px] lg:max-w-none"
          >
            <motion.img
              src={LOGO_URL}
              alt="गुरुजी की पाठशाला — श्री श्री 1008 सत प्रकाश पुरी जी महाराज"
              className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(120,40,10,0.35)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-parchment px-4 py-1 border border-gold-deep text-xs tracking-[0.3em] uppercase text-maroon whitespace-nowrap">
              ॥ श्री गुरुदेव ॥
            </div>
          </motion.div>
        </div>

        {/* marquee shloka */}
        <div className="border-y-2 border-double border-gold-deep bg-maroon text-parchment overflow-hidden">
          <motion.div
            className="flex gap-16 py-3 whitespace-nowrap font-display tracking-wider text-sm"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-16">
                <span>॥ असतो मा सद्गमय ॥</span>
                <span>❋</span>
                <span>॥ तमसो मा ज्योतिर्गमय ॥</span>
                <span>❋</span>
                <span>॥ मृत्योर्मा अमृतं गमय ॥</span>
                <span>❋</span>
                <span>॥ ॐ शान्तिः शान्तिः शान्तिः ॥</span>
                <span>❋</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT / STATS */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <motion.div
          {...fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
        >
          {[
            ["५८९१", "ट्रस्ट क्रमांक"],
            ["०२", "पाठशाला शाखाएं"],
            ["२०२२", "स्थापना वर्ष"],
            ["२४×७", "सेवा संकल्प"],
          ].map(([n, l]) => (
            <div key={l} className="vintage-card p-4 sm:p-8">
              <div className="font-display text-3xl sm:text-5xl text-gradient-gold mb-2">
                {n}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-ink/70">
                {l}
              </div>
            </div>
          ))}
        </motion.div>

        {/* संस्था की जानकारी — Information Table from PDF */}
        <motion.div {...fadeUp} className="mt-12 sm:mt-16 max-w-3xl mx-auto">
          <SectionTitle kicker="📋 परिचय" title="संस्था की जानकारी" />
          <div className="ornate-frame bg-card">
            {/* Mobile/Tablet Stacked List */}
            <div className="md:hidden divide-y divide-gold/30">
              {[
                ["ट्रस्ट रजिस्ट्रेशन नंबर", "5891"],
                ["पंजीकरण तिथि", "11 सितंबर 2023"],
                ["प्रबंधक", "कमल"],
                ["वर्तमान शाखाएं", "02"],
                ["शाखा 01", "उमरावत (भिवानी) — स्थापना 13 जुलाई 2022"],
                ["शाखा 02", "श्यामनगर (कोसली) — स्थापना 15 अक्टूबर 2023"],
                ["अन्नक्षेत्र शुरू", "6 जनवरी 2023"],
                ["फिजियोथेरेपी शुरू", "1 जनवरी 2026"],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className={`p-4 flex flex-col gap-1 ${i % 2 ? "bg-parchment-deep/20" : ""}`}
                >
                  <span className="font-display text-maroon text-xs tracking-wider">
                    {k}
                  </span>
                  <span className="text-ink/85 text-sm font-serif">{v}</span>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base">
                <tbody>
                  {[
                    ["ट्रस्ट रजिस्ट्रेशन नंबर", "5891"],
                    ["पंजीकरण तिथि", "11 सितंबर 2023"],
                    ["प्रबंधक", "कमल"],
                    ["वर्तमान शाखाएं", "02"],
                    ["शाखा 01", "उमरावत (भिवानी) — स्थापना 13 जुलाई 2022"],
                    ["शाखा 02", "श्यामनगर (कोसली) — स्थापना 15 अक्टूबर 2023"],
                    ["अन्नक्षेत्र शुरू", "6 जनवरी 2023"],
                    ["फिजियोथेरेपी शुरू", "1 जनवरी 2026"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 ? "bg-parchment-deep/40" : ""}>
                      <th className="py-3 px-4 sm:px-6 font-display text-maroon align-top whitespace-nowrap border-b border-gold/30">
                        {k}
                      </th>
                      <td className="py-3 px-4 sm:px-6 text-ink/85 border-b border-gold/30">
                        {v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SATSANG */}
      <section
        id="satsang"
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20"
      >
        <motion.div {...fadeUp}>
          <SectionTitle kicker="आध्यात्म" title="सत्संग सेवा" />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="ornate-frame p-2 overflow-hidden w-full max-w-[560px] mx-auto lg:max-w-none">
              <img
                src={satsang}
                alt="सत्संग"
                className="w-full h-[240px] xs:h-[300px] sm:h-[380px] md:h-[400px] object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
            <div className="space-y-5 max-w-xl mx-auto lg:max-w-none text-center lg:text-left">
              <p className="text-base sm:text-lg italic text-ink/80">
                हर पूर्णिमासी की चाँदनी में, दीपों की पंक्तियों के बीच, गुरुजी
                की वाणी मन के अंधेरों को चीरती है।
              </p>
              <ul className="space-y-3 text-left">
                {[
                  "हर पूर्णिमासी को विशेष सत्संग",
                  "गहन आध्यात्मिक चर्चा एवं विचार विमर्श",
                  "लोक-संस्कृति आधारित सांस्कृतिक कार्यक्रम",
                  "गांव-गांव सत्संग का प्रचार-प्रसार",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 border-b border-gold-deep/30 pb-3"
                  >
                    <span className="text-gold-deep mt-1">❋</span>
                    <span className="text-sm sm:text-base">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ANNAKSHETRA */}
      <section
        id="anna"
        className="relative py-12 sm:py-16 md:py-20 bg-maroon text-parchment"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${diya})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-maroon-deep via-maroon to-maroon-deep/90"
          aria-hidden
        />
        <div className="relative container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="gold-divider text-xs uppercase tracking-[0.4em] mb-4 text-gold">
              <span>❋ सेवा परम धर्म ❋</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-gradient-gold">
              अन्नक्षेत्र · दैनिक भंडारा
            </h2>
            <p className="mt-4 text-sm sm:text-base text-parchment/80 italic">
              शुरू · ६ जनवरी २०२३ — अन्न ही ब्रह्म है।
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <motion.div
              {...fadeUp}
              className="ornate-frame p-2 w-full max-w-[560px] mx-auto lg:max-w-none"
            >
              <img
                src={bhandara}
                alt="भंडारा"
                className="w-full h-[240px] xs:h-[300px] sm:h-[380px] md:h-[420px] object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
            </motion.div>
            <motion.div
              {...fadeUp}
              className="space-y-6 max-w-xl mx-auto lg:max-w-none text-center lg:text-left"
            >
              <p className="text-lg sm:text-xl leading-relaxed italic text-parchment/90">
                "अन्नदान महादान है" — हर दिन, बिना भेदभाव, हर पथिक के लिए गरम
                भोजन की थाली। यही हमारी पाठशाला की सबसे मीठी प्रार्थना है।
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["३६५", "दिन भंडारा"],
                  ["०", "भेदभाव"],
                  ["२", "शाखाओं में"],
                  ["∞", "सेवा भाव"],
                ].map(([n, l]) => (
                  <div
                    key={l}
                    className="border border-gold/40 p-5 text-center bg-maroon-deep/60"
                  >
                    <div className="font-display text-4xl text-gold">{n}</div>
                    <div className="text-xs uppercase tracking-[0.25em] text-parchment/70 mt-1">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEVA GRID */}
      <section
        id="seva"
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20"
      >
        <motion.div {...fadeUp}>
          <SectionTitle kicker="समाज सेवा" title="हमारे संकल्प" />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            [
              "👰",
              "गरीब कन्याओं का कन्यादान",
              "समाज की बेटियों को सम्मानपूर्वक विदाई।",
            ],
            ["🌳", "पर्यावरण जागरूकता", "प्लास्टिक मुक्त समाज की ओर एक कदम।"],
            ["🪶", "पक्षियों हेतु घोंसले", "नन्हे पंखों को अपना आशियाना।"],
            [
              "🌾",
              "ऑर्गेनिक खेती",
              "किसानों को राजीव दीक्षित जी की परंपरा से जोड़ना।",
            ],
            [
              "🏥",
              "फिजियोथेरेपी सेवा",
              "हर रविवार · निःशुल्क · १ जनवरी २०२६ से।",
            ],
            ["🏆", "प्रतिभा सम्मान", "समाज के नवांकुरों को मंच और मान।"],
          ].map(([ic, t, d]) => (
            <motion.div
              key={t}
              {...fadeUp}
              className="vintage-card p-5 sm:p-7 group"
            >
              <div className="text-4xl mb-4 flicker inline-block">{ic}</div>
              <h3 className="font-display text-lg sm:text-xl text-maroon mb-2">
                {t}
              </h3>
              <p className="text-ink/75 text-xs sm:text-sm leading-relaxed">
                {d}
              </p>
              <div className="gold-divider mt-5 text-xs">
                <span>❋</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SHAKHA — Branches table */}
      <section
        id="shakha"
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20"
      >
        <motion.div {...fadeUp}>
          <SectionTitle kicker="शाखाएं" title="हमारी पाठशालाएं" />
        </motion.div>
        <motion.div
          {...fadeUp}
          className="max-w-4xl mx-auto ornate-frame bg-card"
        >
          {/* Mobile Stacked List */}
          <div className="md:hidden divide-y divide-gold/30">
            {[
              ["शाखा 01", "उमरावत (भिवानी)", "13 जुलाई 2022"],
              ["शाखा 02", "श्यामनगर (कोसली)", "15 अक्टूबर 2023"],
            ].map(([shakha, location, date], i) => (
              <div
                key={shakha}
                className={`p-4 flex flex-col gap-2 ${i % 2 ? "bg-parchment-deep/20" : ""}`}
              >
                <div className="font-display text-maroon text-base">
                  {shakha}
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                  <div>
                    <span className="text-ink/55 block">स्थान</span>
                    <span className="text-ink font-serif">{location}</span>
                  </div>
                  <div>
                    <span className="text-ink/55 block">स्थापना दिवस</span>
                    <span className="text-ink font-serif">{date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-maroon text-parchment font-display">
                <tr>
                  <th className="py-3 px-4 sm:px-6 whitespace-nowrap">शाखा</th>
                  <th className="py-3 px-4 sm:px-6">स्थान</th>
                  <th className="py-3 px-4 sm:px-6 whitespace-nowrap">
                    स्थापना दिवस
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["शाखा 01", "उमरावत (भिवानी)", "13 जुलाई 2022"],
                  ["शाखा 02", "श्यामनगर (कोसली)", "15 अक्टूबर 2023"],
                ].map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 ? "bg-parchment-deep/40" : ""}
                  >
                    {row.map((c, j) => (
                      <td
                        key={j}
                        className={`py-4 px-4 sm:px-6 border-b border-gold/30 ${j === 0 ? "font-display text-maroon" : ""}`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* ACHIEVEMENTS — Timeline + Camps Table */}
      <section
        id="achievements"
        className="bg-gradient-to-b from-parchment to-parchment-deep py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp}>
            <SectionTitle kicker="🏆 उपलब्धियां" title="यात्रा के पड़ाव" />
          </motion.div>
          <motion.ol
            {...fadeUp}
            className="relative max-w-3xl mx-auto border-l-2 border-double border-gold-deep pl-6 sm:pl-8 space-y-6 sm:space-y-8"
          >
            {[
              ["2022 · जुलाई", "उमरावत में मूल पाठशाला की स्थापना।"],
              [
                "2023 · जनवरी",
                "दैनिक अन्नक्षेत्र भंडारे का शुभारंभ (6 जनवरी)।",
              ],
              ["2023 · सितंबर", "ट्रस्ट पंजीकरण — क्रमांक 5891 (11 सितंबर)।"],
              ["2023 · अक्टूबर", "कोसली शाखा की स्थापना (15 अक्टूबर)।"],
              [
                "2024–25",
                "राजीव दीक्षित जी की टीम द्वारा 5 ऑर्गेनिक खेती कैंप एवं उमरावत में रक्तदान कैंप।",
              ],
              [
                "2026 · जनवरी",
                "निःशुल्क फिजियोथेरेपी सेवा का आरंभ — हर रविवार (1 जनवरी)।",
              ],
            ].map(([y, t]) => (
              <li key={y} className="relative">
                <span className="absolute -left-[34px] sm:-left-[42px] top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gold border-2 border-maroon" />
                <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-deep">
                  {y}
                </div>
                <div className="mt-1 text-sm sm:text-base md:text-lg">{t}</div>
              </li>
            ))}
          </motion.ol>

          {/* Camps Table */}
          <motion.div {...fadeUp} className="mt-14 max-w-3xl mx-auto">
            <h3 className="text-center font-display text-2xl sm:text-3xl text-maroon mb-5 px-2">
              ऑर्गेनिक खेती कैंप विवरण
            </h3>
            <p className="text-center text-xs sm:text-sm italic text-ink/70 mb-6 px-4">
              चार दिवसीय ऑर्गेनिक खेती से संबंधित पांच कैंप राजीव दीक्षित जी की
              टीम द्वारा आयोजित।
            </p>
            <div className="ornate-frame bg-card">
              {/* Mobile Stacked List */}
              <div className="md:hidden divide-y divide-gold/30">
                {[
                  ["a.", "भिवानी पाठशाला", "3 कैंप"],
                  ["b.", "कोसली पाठशाला", "2 कैंप"],
                  ["—", "उमरावत (रक्तदान)", "1 कैंप"],
                ].map(([sr, location, count], i) => (
                  <div
                    key={i}
                    className={`p-4 flex flex-col gap-1 ${i % 2 ? "bg-parchment-deep/20" : ""}`}
                  >
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-ink/55">स्थान ({sr})</span>
                      <span className="text-gold-deep font-sans">{count}</span>
                    </div>
                    <div className="text-ink font-serif text-sm">
                      {location}
                    </div>
                  </div>
                ))}
                <div className="p-4 flex justify-between font-display text-maroon text-base bg-maroon/5">
                  <span>कुल</span>
                  <span>6 कैंप</span>
                </div>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead className="bg-maroon text-parchment font-display">
                    <tr>
                      <th className="py-3 px-4 sm:px-6">क्र.</th>
                      <th className="py-3 px-4 sm:px-6">स्थान</th>
                      <th className="py-3 px-4 sm:px-6 whitespace-nowrap">
                        कैंप की संख्या
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["a.", "भिवानी पाठशाला", "3 कैंप"],
                      ["b.", "कोसली पाठशाला", "2 कैंप"],
                      ["—", "उमरावत (रक्तदान)", "1 कैंप"],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 ? "bg-parchment-deep/40" : ""}
                      >
                        {row.map((c, j) => (
                          <td
                            key={j}
                            className="py-3 px-4 sm:px-6 border-b border-gold/30"
                          >
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr className="bg-maroon/10 font-display text-maroon">
                      <td className="py-3 px-4 sm:px-6" colSpan={2}>
                        कुल
                      </td>
                      <td className="py-3 px-4 sm:px-6">6 कैंप</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GOALS */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <motion.div {...fadeUp}>
          <SectionTitle kicker="लक्ष्य" title="हमारे संकल्पों की दिशा" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "सनातन व हरियाणवी संस्कृति को पोषित करना।",
            "गरीब बच्चों की पढ़ाई में सहयोग।",
            "समाज को प्लास्टिक मुक्त करने हेतु जागरूकता।",
            "युवाओं को पाश्चात्य प्रभाव से बचाकर सनातन से जोड़ना।",
          ].map((g, i) => (
            <motion.div
              key={g}
              {...fadeUp}
              className="flex gap-4 items-start ornate-frame p-4 sm:p-6 bg-card"
            >
              <div className="font-display text-2xl sm:text-3xl text-gradient-gold leading-none">
                ०{i + 1}
              </div>
              <p className="italic text-sm sm:text-base">{g}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative py-12 sm:py-16 md:py-20 bg-maroon text-parchment"
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(${heroMandala})`,
            backgroundSize: "cover",
          }}
          aria-hidden
        />
        <div className="relative container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="gold-divider text-xs uppercase tracking-[0.4em] mb-4 text-gold">
              <span>❋ संपर्क ❋</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-gradient-gold">
              सेवा में सहयोगी बनें
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              {...fadeUp}
              className="border-2 border-double border-gold p-5 sm:p-8 bg-maroon-deep/50"
            >
              <h3 className="font-display text-xl sm:text-2xl text-gold mb-4">
                संपर्क सूत्र
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-parchment/90">
                <p>
                  <span className="text-gold-deep">प्रबंधक · कमल:</span>
                  <br />
                  📞 8295838891
                </p>
                <p>
                  <span className="text-gold-deep">सत्संग बुकिंग:</span>
                  <br />
                  📞 9812488687 · 9991033590
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    className="px-4 py-2 border border-gold/50 text-xs sm:text-sm hover:bg-gold/20 transition"
                    href="https://www.facebook.com/profile.php?id=100064289695066&rdid=Hoa2Q59fdW3Tm17u&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DTHMop6hE%2F#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    className="px-4 py-2 border border-gold/50 text-xs sm:text-sm hover:bg-gold/20 transition"
                    href="https://www.youtube.com/@GURUJIKIPATHSALA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="border-2 border-double border-gold p-5 sm:p-8 bg-maroon-deep/50"
            >
              <h3 className="font-display text-xl sm:text-2xl text-gold mb-4">
                दान विवरण
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start justify-between">
                <div className="space-y-2 text-xs sm:text-sm text-parchment/90 font-serif flex-1">
                  <p>
                    <span className="text-gold-deep tracking-wider">
                      Account Holder:
                    </span>
                    <br />
                    Pandit Vikas Pahsoriya Sanskritik Avm A.
                  </p>
                  <p>
                    <span className="text-gold-deep tracking-wider">
                      A/c No:
                    </span>{" "}
                    120025338883
                  </p>
                  <p>
                    <span className="text-gold-deep tracking-wider">IFSC:</span>{" "}
                    CNRB0005692
                  </p>
                  <p>
                    <span className="text-gold-deep tracking-wider">Bank:</span>{" "}
                    Canara Bank
                  </p>
                  <p className="text-[10px] sm:text-xs italic mt-4 text-parchment/70">
                    "दान का एक कण भी कल्पवृक्ष बन सकता है।"
                  </p>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className="p-2 bg-white rounded-lg border border-gold/40 w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center shadow-lg">
                    <img
                      src={qrCode}
                      alt="Donation QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs text-gold font-sans tracking-wide">
                    QR कोड स्कैन करें
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-double border-gold-deep bg-parchment-deep py-8 text-center text-sm text-ink/70">
        <div className="container mx-auto px-6">
          <OmSymbol className="w-8 h-8 mx-auto text-maroon mb-2" />
          <p className="font-display tracking-wider text-maroon">
            गुरुजी की पाठशाला
          </p>
          <p className="text-xs mt-2">
            © 2026 Guru Ji Ki Pathshala · सर्वाधिकार सुरक्षित
          </p>
        </div>
      </footer>

      {/* Devotional Donation Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm animate-fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md bg-parchment border-2 border-double border-gold p-6 sm:p-8 shadow-2xl ornate-frame"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-maroon hover:text-gold-deep transition-colors text-xl font-bold cursor-pointer p-1"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="text-center space-y-4 mt-2">
                <div className="gold-divider text-xs uppercase tracking-[0.3em] mb-2">
                  <span>❋ दान सहयोग ❋</span>
                </div>
                <h3 className="font-display text-2xl text-maroon text-gradient-gold">
                  गुरुजी की पाठशाला
                </h3>
                <p className="text-sm text-ink/80 italic">
                  "दान का एक कण भी कल्पवृक्ष बन सकता है।"
                </p>

                {/* QR Code Container */}
                <div className="mx-auto p-3 bg-white rounded-lg border border-gold/40 w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center shadow-lg my-4">
                  <img
                    src={qrCode}
                    alt="Donation QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-1 text-xs sm:text-sm text-ink/90 font-serif">
                  <p>
                    <span className="text-maroon font-semibold">
                      Account Holder:
                    </span>
                    <br />
                    Pandit Vikas Pahsoriya Sanskritik Avm A.
                  </p>
                  <p>
                    <span className="text-maroon font-semibold">A/c No:</span>{" "}
                    120025338883
                  </p>
                  <p>
                    <span className="text-maroon font-semibold">IFSC:</span>{" "}
                    CNRB0005692
                  </p>
                  <p>
                    <span className="text-maroon font-semibold">Bank:</span>{" "}
                    Canara Bank
                  </p>
                </div>

                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-6 px-6 py-2 bg-maroon text-parchment font-display tracking-wider hover:bg-maroon-deep transition-colors shadow-lg cursor-pointer text-sm"
                >
                  सहयोग पूर्ण / बंद करें
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
