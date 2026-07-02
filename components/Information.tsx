"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import { GiVanillaFlower } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { LuCalendarDays, LuClock3, LuMapPin } from "react-icons/lu";

const mapUrl = "https://maps.app.goo.gl/vKCMsrikEJEEQS466";
const text = {
  ar: {
    invite: `يسرّهم دعوتكم وتشريفكم بالحضور ومشاركتهم تناول الطعام، وذلك بمناسبة حفل الزواج (الوليمة)`,
    groom: "إياد محمد تؤيه فواسا",
    bride: "عواطف يوسف لوديغ",
    groomParent: (
      <div className="font-th">
        <p>
          นายอิดรีส บูกา <span className="font-ar">(رحمه الله)</span>{" "}
        </p>
        <p>นางวันสารีฟา บูกา</p>
      </div>
    ),
    brideParent: (
      <div className="font-th">
        <p>นายนีโซะ นีเดร์หะ</p>
        <p>นางนีแวแย นีเดร์</p>
      </div>
    ),
    day: (
      <>
        يوم <br /> السبت
      </>
    ),
    invitors: (
      <div className="font-th">
        <p>ฮัจญีมูสตาฟา ปูจุต</p>
        <p>วันสะอิด๊ะห ปูจุต</p>
      </div>
    ),
    date: "يوم السبت الموافق 15 أغسطس 2026م",
    mapTitle: "عرض الموقع",
    mapSmall: "اضغط لفتح خرائط Google",
    invitation: "بحضوركم تكتمل لنا الأفراح والمسرّات",
  },

  en: {
    invite: `Cordially invite you to honor them with your presence and join them for a meal 
    on the occasion of the Wedding Reception (Walimah)`,
    groom: "Eyad Muhammad Haji said",
    bride: "Alwatif Yusuf Luding",
    groomParent: (
      <div className="font-th">
        <p>
          นายอิดรีส บูกา <span className="font-ar">(رحمه الله)</span>{" "}
        </p>
        <p>นางวันสารีฟา บูกา</p>
      </div>
    ),
    brideParent: (
      <div className="font-th">
        <p>นายนีโซะ นีเดร์หะ</p>
        <p>นางนีแวแย นีเดร์</p>
      </div>
    ),
    invitors: (
      <div className="font-th">
        <p>ฮัจญีมูสตาฟา ปูจุต</p>
        <p>วันสะอิด๊ะห ปูจุต</p>
      </div>
    ),
    date: "Saturday, 15 August 2026",
    mapTitle: "View Venue",
    mapSmall: "Tap to open Google Maps",
    invitation: "Your presence will complete our joy and happiness.",
  },

  th: {
    invite: `มีความยินดีขอเรียนเชิญทุกท่านเพื่อเป็นเกียรติและร่วมรับประทานอาหาร เนื่องในงานพิธีมงคลสมรส (วาลีมะห์)`,
    groom: "อียาด มูฮัมหมัด หะยีสะอิ",
    bride: "อัลวาติฟ ยูโซ๊ะ ลูดิง",
    groomParent: (
      <div className="font-th">
        <p>
          นายอิดรีส บูกา <span className="font-ar">(رحمه الله)</span>{" "}
        </p>
        <p>นางวันสารีฟา บูกา</p>
      </div>
    ),
    brideParent: (
      <div className="font-th">
        <p>นายนีโซะ นีเดร์หะ</p>
        <p>นางนีแวแย นีเดร์</p>
      </div>
    ),
    invitors: (
      <div className="font-th">
        <p>ฮัจญีมูสตาฟา ปูจุต</p>
        <p>วันสะอิด๊ะห ปูจุต</p>
      </div>
    ),
    date: "วันเสาร์ที่ 15 สิงหาคม พ.ศ. 2569",
    mapTitle: "ดูสถานที่",
    mapSmall: "แตะเพื่อเปิด Google Maps",
    invitation:
      "การมาร่วมเป็นเกียรติในงานของท่าน จะเติมเต็มความสุขและความยินดีของเรา",
  },
};

type Props = { lang: "ar" | "th" | "en" };

export default function Information({ lang }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const t = text[lang];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const springConfig = {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  };

  const textX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 250]),
    springConfig,
  );

  const textY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 250]),
    springConfig,
  );

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-white pt-12 text-[#A25E77] shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="background-wide.png"
          alt=""
          className="h-full w-full object-cover opacity-60"
        />
      </div>

      {/* Scroll Hint */}
      <div
        className={`fixed bottom-3 left-0 right-0 z-[999] flex justify-center transition-all duration-300 ${
          scrollY > 300
            ? "opacity-0 translate-y-4 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <div className="mx-4 flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50/90 px-4 py-2 text-orange-700 shadow-lg backdrop-blur">
          <BiChevronDown className="pointing text-2xl" />
          <p className="text-sm font-semibold sm:text-base">
            {lang === "ar" && "مرّر للأسفل"}
            {lang === "th" && "เลื่อนลง"}
            {lang === "en" && "Scroll down"}
          </p>
        </div>
      </div>

      <motion.div className="relative z-10 mx-auto flex min-h-screen max-w-5xl justify-center px-4 pb-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          <div className=" p-5 text-center  sm:p-8 lg:p-10">
            {/* Top Section */}
            <motion.section
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <img
                  src="basmalah.png"
                  alt="basmalah"
                  className="mb-6 w-56 sm:w-72"
                />
              </motion.div>

              <div className="relative grid grid-cols-1 gap-3 text-center text-sm font-semibold sm:grid-cols-[1fr_auto_1fr] sm:text-lg">
                <div>{t.brideParent}</div>
                <div className="text-[#C47A91]">
                  {lang === "th" ? "และ" : "&"}
                </div>
                <div>{t.groomParent}</div>
              </div>

              <p className="mt-4 text-lg font-medium sm:text-xl">
                {t.invitors}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <p className="mx-auto mb-5 max-w-2xl text-lg leading-relaxed sm:text-2xl">
                  {t.invite}
                </p>

                <p className="text-3xl font-black sm:text-4xl">
                  {lang === "ar" && "بين"}
                  {lang === "th" && "ระหว่าง"}
                  {lang === "en" && "Between"}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-5 flex justify-center"
              >
                <img
                  src={
                    lang === "ar"
                      ? "asiah&helmi-ar.png"
                      : "asiah&helmi-en.png"
                  }
                  alt="couple names"
                  className="w-full max-w-[620px]"
                />
              </motion.div>
            </motion.section>

            {/* Bottom Section */}
            <motion.section
              style={{ y: -textY }}
              className="relative z-20 mt-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-2xl rounded-full bg-[#A25E77] px-6 py-4 text-xl font-bold text-white shadow-lg sm:text-3xl"
              >
                {t.date}
              </motion.div>

              {/* Event Info */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-12 grid gap-8 text-[#A25E77] sm:grid-cols-[220px_1fr] sm:text-xl"
              >
                <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-[#A25E77]/5 p-5 ring-1 ring-[#A25E77]/10">
                  <img src="utensils.png" alt="" className="w-24 sm:w-32" />
                  <p className="font-bold">
                    10:00 - 17:00 {lang === "th" && "น."}
                  </p>
                </div>

                <aside
                  className={` bg-white/70 p-5 text-start ring-1 ring-[#A25E77]/10 ${
                    lang === "ar" ? "border-r-4" : "border-l-4"
                  } border-[#B46278]`}
                >
                  <section className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B46278]">
                      <GoHomeFill className="text-xl text-white" />
                    </div>

                    <div className="font-bold leading-relaxed">
                      <p className="font-th text-xl sm:text-2xl">
                        สถาบันกีรออาตีอารีย์สมัยปูยุด
                      </p>
                      <p className="font-en text-base sm:text-lg">
                        Baraho, Mueang Pattani District, Pattani 94000
                      </p>
                      <p className="font-ar text-base sm:text-lg">
                        معهد القراءات العصرية – فوجوء براهو، مدينة فطاني، محافظة
                        فطاني 94000
                      </p>
                    </div>
                  </section>
                </aside>
              </motion.div>

              {/* Contact + Theme + Map */}
              <motion.div
                initial={{ opacity: 0, x: lang === "ar" ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8 grid gap-6 text-[#A25E77] lg:grid-cols-[1fr_1.4fr]"
              >
                <aside className="rounded-3xl bg-[#A25E77]/5 p-5 text-start text-sm font-bold leading-8 ring-1 ring-[#A25E77]/10 sm:text-base">
                  {lang === "th" ? (
                    <>
                      <p>099-2209720 (เจ้าบ่าว)</p>
                      <p>061-4796203 (เจ้าสาว)</p>
                      <p>061-9219329 (คุณแม่เจ้าบ่าว)</p>
                      <p>063-1067094 (คุณแม่เจ้าสาว)</p>
                    </>
                  ) : lang === "ar" ? (
                    <>
                      <p>099-2209720 (العريس)</p>
                      <p>061-4796203 (العروس)</p>
                      <p>061-9219329 (والدة العريس)</p>
                      <p>063-1067094 (والدة العروس)</p>
                    </>
                  ) : (
                    <>
                      <p>099-2209720 (Groom)</p>
                      <p>061-4796203 (Bride)</p>
                      <p>061-9219329 (Groom's Mother)</p>
                      <p>063-1067094 (Bride's Mother)</p>
                    </>
                  )}
                </aside>

                <aside className="flex flex-col gap-6 rounded-3xl bg-white/70 p-5 ring-1 ring-[#A25E77]/10 sm:flex-row sm:items-end sm:justify-between">
                  <div className="text-start">
                    <p className="mb-3 font-en text-xl font-black">Theme:</p>

                    <div className="flex flex-wrap gap-3">
                      {[
                        "#D48AA8",
                        "#F48C8C",
                        "#FCE1DC",
                        "#FDEBD9",
                        "#FFC58F",
                      ].map((color) => (
                        <div
                          key={color}
                          className="h-9 w-9 rounded-full shadow-inner ring-1 ring-black/5 sm:h-10 sm:w-10"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <img
                      src="qrcode.png"
                      alt="map qr code"
                      className="w-24 sm:w-28"
                    />

                    <button
                      type="button"
                      className="rounded-full bg-[#A25E77] px-4 py-2 text-sm font-bold text-white shadow-md transition hover:bg-[#8f4f67]"
                      onClick={() =>
                        window.open(
                          "https://maps.app.goo.gl/bDwzBkdp59JE5ReR6?g_st=ac",
                          "_blank",
                        )
                      }
                    >
                      📍 Open Map
                    </button>
                  </div>
                </aside>
              </motion.div>

              <div className="mt-10 text-base font-bold text-[#A25E77] sm:text-xl">
                {lang === "th" && `( ขออภัยหากมิได้เรียนเชิญด้วยตนเอง )`}
                {lang === "en" &&
                  `( We apologize for not being able to invite you in person. )`}
                {lang === "ar" && `( نعتذر إن لم نتمكن من دعوتكم شخصيًا. )`}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
