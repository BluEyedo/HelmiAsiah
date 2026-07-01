"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { LuCalendarDays, LuClock3 } from "react-icons/lu";

type Lang = "ar" | "th" | "en";

const text = {
  ar: {
    invite: `يسرّهم دعوتكم وتشريفكم بالحضور ومشاركتهم تناول الطعام، وذلك بمناسبة حفل الزواج (الوليمة)`,
    groom: "إياد محمد تؤيه فواسا",
    groomParent: "(والدته)فائزة عبدالهادي ساسور",
    bride: "عواطف يوسف لوديغ",
    brideParent: "(والدتها)شريفة علي",
    day: (
      <>
        يوم <br /> السبت
      </>
    ),
    month: "أغسطس",
    year: "2026",
    time1: (
      <>
        الساعة
        <span>10</span> صباحًا
      </>
    ),
    venue: "مطعم حسنة فلوء فاكو",
    location: "محافظة يالا 95000",
    mapTitle: "عرض الموقع",
    mapSmall: "اضغط لفتح خرائط Google",
    invitation: "بحضوركم تكتمل لنا الأفراح والمسرّات",
  },

  en: {
    invite: `We are delighted to invite you to celebrate the beginning of a new chapter in our lives. Your presence will make our happiness complete.`,
    groom: "Eyad Muhammad Haji said",
    groomParent: "Faizah Abdulhadi Sasor",
    bride: "Alwatif Yusuf Luding",
    brideParent: "Sharifah Ali",
    day: "Saturday",
    month: "AUGUST",
    year: "2026",
    time1: "10:00 AM",
    venue: "Hasnah Restaurant Phlo Phako",
    location: "368/1 Suan Khwan Mueang Rd. Sateng, Mueang Yala Yala 95000",
    mapTitle: "View Venue",
    mapSmall: "Tap to open Google Maps",
    invitation: "Your presence will complete our joy and happiness.",
  },

  th: {
    invite: `ด้วยความยินดี พวกเราขอเรียนเชิญทุกท่านมาร่วมเป็นสักขีพยานในจุดเริ่มต้นของบทใหม่ในชีวิตของเรา การมาร่วมงานของท่านจะทำให้ความสุขของเราสมบูรณ์ยิ่งขึ้น`,
    groom: "อียาด มูฮัมหมัด หะยีสะอิ",
    groomParent: "ไฟซะห์ อับดุลฮาดี ซาซูร",
    bride: "อัลวาติฟ ยูโซ๊ะ ลูดิง",
    brideParent: "ซารีพ๊ะ อาลี",
    day: "วันเสาร์",
    month: "สิงหาคม",
    year: "2569",
    time1: (
      <>
        เวลา <br /> 10:00 น.
      </>
    ),
    venue: "ร้านอาหารฮาซานะห์",
    location: "368/1 ถ.สวนขวัญเมือง ต.สะเตง อ.เมืองยะลา จ.ยะลา 95000",
    mapTitle: "ดูสถานที่",
    mapSmall: "แตะเพื่อเปิด Google Maps",
    invitation:
      "การมาร่วมเป็นเกียรติในงานของท่าน จะเติมเต็มความสุขและความยินดีของเรา",
  },
};

type Props = {
  lang: Lang;
};

const springConfig = {
  stiffness: 100,
  damping: 30,
  mass: 0.8,
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ParallaxHero({ lang }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const t = text[lang];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 250]),
    springConfig,
  );

  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const coupleImage =
    lang === "ar" ? "asiah&helmi-ar.png" : "asiah&helmi-en.png";

  return (
    <section
      ref={sectionRef}
      className="mx-auto h-screen max-w-screen-sm overflow-hidden shadow-lg shadow-rose-200 bg-white scale-100"
    >
      <div className="absolute w-full h-full">
        <img src="background.png" />
      </div>

      <motion.div
        style={{ y: textY, 
          // opacity: textOpacity 
        }}
        className="relative z-50 flex h-full px-6 text-center"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl overflow-hidden"
        >
          <div className="px-5 py-5 text-center sm:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-8"
            >
              <p className="mb-5 mt-2 font-ar text-xl font-bold leading-[1.8] text-[#A25E77] sm:text-3xl">
                "ومن آياته أن خلق لكم من أنفسكم أزواجًا لتسكنوا إليها وجعل بينكم
                مودةً ورحمة"
              </p>

              <p className="text-xl text-[#A25E77] sm:text-xl">{t.invite}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="flex items-start justify-center"
            >
              <img
                src={coupleImage}
                alt="Wedding couple names"
                className="w-[600px] max-w-full"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="my-5 flex items-center justify-center gap-10"
            >
              <div className="flex flex-col items-center justify-between gap-5">
                <LuCalendarDays size={50} className="text-[#A25E77]" />

                <span className="mt-3 text-xl font-semibold text-[#A25E77]">
                  {t.day}
                </span>
              </div>

              <div className="flex flex-col items-center gap-3 border-x border-[#A25E77] px-5">
                <div className="text-3xl font-bold text-[#A25E77] sm:text-6xl">
                  15
                </div>

                <div className="text-xl font-bold text-[#A25E77] sm:text-3xl">
                  {t.month}
                </div>

                <div className="text-xl font-semibold text-[#A25E77] sm:text-2xl">
                  {t.year}
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <LuClock3 size={50} className="text-[#A25E77]" />

                <p className="flex flex-col font-semibold text-[#A25E77] sm:text-xl">
                  {t.time1}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-between gap-3 text-[#A25E77] sm:justify-center sm:gap-16 sm:text-xl"
            >
              {t.invitation}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
