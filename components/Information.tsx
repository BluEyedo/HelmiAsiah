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
      className={`relative pt-[50px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] text-[#A25E77] overflow-hidden`}
    >
      <div className="absolute w-full h-full ">
        <img
          src="background-wide.png"
          className="object-contain w-full h-full opacity-50"
        />
      </div>

      <div
        className={`fixed bottom-1 left-0 right-0 z-[999] flex justify-center ${scrollY > 300 && "opacity-0"} duration-300`}
      >
        <div className="bg-yellow-100 p-2 m-2 rounded-lg shadow-sm shadow-yellow-600 flex items-center gap-3 opacity-70">
          <BiChevronDown className="pointing text-xl text-orange-600" />
          <p className="text-xl ">
            {lang == "ar" && "مرّر للأسفل"}
            {lang == "th" && "เลื่อนลง"}
            {lang == "en" && "scroll down"}
          </p>
        </div>
      </div>

      {/* Main Card */}
      <motion.div className="sticky top-0 max-w-screen-lg p-5  mx-auto flex justify-center px-3  pb-[160px]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl overflow-hidden"
        >
          <div className="text-center ">
            <motion.section
              initial={{  x: 50 }}
              whileInView={{  x: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 "
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <img
                  src="basmalah.png"
                  alt="basmalah"
                  className="w-[300px] pb-5"
                />
              </motion.div>

              <div
                className="flex justify-between font-th items-center
            text-sm text-[#A25E77] sm:text-xl text-left scale-100 w-f
            "
              >
                <div className="absolute  justify-center right-[50%]">และ</div>

                <div>{t.brideParent}</div>
                <div>{t.groomParent}</div>
              </div>

              <div className="text-xl mt-3">{t.invitors}</div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <p className="text-xl text-[#A25E77] sm:text-2xl mb-5">
                  {t.invite}
                </p>
                <p className="font-black text-4xl">
                  {lang == "ar" && "بين"}
                  {lang == "th" && "ระหว่าง"}
                  {lang == "en" && "between"}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                className="mt-3 flex justify-center"
              >
                <img
                  src={
                    lang == "ar" ? "asiah&helmi-ar.png" : "asiah&helmi-en.png"
                  }
                  className="w-[600px]"
                />
              </motion.div>
            </motion.section>

            {/*  bottom section */}
            <motion.section
              style={{ y: -textY }}
              className="relative z-50 bg-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full p-5 bg-[#A25E77] rounded-full text-white text-3xl font-bold "
              >
                {t.date}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid grid-cols-4 items-start text-[#A25E77] sm:text-xl mt-16 w-full"
              >
                <div className="flex flex-col gap-5 items-center">
                  <img src={"utensils.png"} className="w-[150px]" />
                  <p className="font-bold">
                    10:00 - 17:00 {lang == "th" && "น."}
                  </p>
                </div>

                <aside
                  className={`col-span-3 ${lang == "ar" ? "border-r-2 pr-5" : "border-l-2 pl-5"} border-[#B46278] `}
                >
                  <section className="flex items-start gap-3">
                    <div className="h-13 w-13 bg-[#B46278] rounded-full p-2">
                      <GoHomeFill className=" text-white text-[20px]" />
                    </div>

                    <div className="font-bold text-[#A25E77] text-lg text-start ">
                      <p className="font-th text-2xl">
                        สถาบันกีรออาตีอารีย์สมัยปูยุด
                      </p>
                      <p className="font-en">
                        Baraho, Mueang Pattani District, Pattani 94000
                      </p>
                      <p className="font-ar">
                        معهد القراءات العصرية – فوجوء براهو، مدينة فطاني، محافظة
                        فطاني 94000
                      </p>
                    </div>
                  </section>
                </aside>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: lang == "ar" ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className=" items-start text-[#A25E77] sm:text-xl  w-full "
              >
                <section className="grid grid-cols-5 w-full">
                  <aside className="col-span-2 text-start font-bold mt-5">
                    {lang === "th" ? (
                      <>
                        <p>099-2209720 (เจ้าบ่าว)</p>
                        <p>061-4796203 (เจ้าสาว)</p>
                        <p>0619219329 (คุณพ่อเจ้าสาว)</p>
                        <p>0631067094 (คุณแม่เจ้าสาว)</p>
                      </>
                    ) : lang === "ar" ? (
                      <>
                        <p>099-2209720 (العريس)</p>
                        <p>061-4796203 (العروس)</p>
                        <p>0619219329 (والد العروس)</p>
                        <p>0631067094 (والدة العروس)</p>
                      </>
                    ) : (
                      <>
                        <p>099-2209720 (Groom)</p>
                        <p>061-4796203 (Bride)</p>
                        <p>0619219329 (Bride's Father)</p>
                        <p>0631067094 (Bride's Mother)</p>
                      </>
                    )}
                  </aside>
                  <aside className="flex justify-between mt-5 col-span-3 items-end">
                    <div className="flex flex-col items-start">
                      <p className="font-black font-en text-xl mb-3">Theme:</p>
                      <div className="flex flex-row">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-[#D48AA8]"></div>
                          <div className="h-10 w-10 rounded-full bg-[#F48C8C]"></div>
                          <div className="h-10 w-10 rounded-full bg-[#FCE1DC]"></div>
                          <div className="h-10 w-10 rounded-full bg-[#FDEBD9]"></div>
                          <div className="h-10 w-10 rounded-full bg-[#FFC58F]"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                      <img src={"scan.png"} className="w-[80px] sm:w-[100px]" />
                      <button
                        className=" rounded-xl duration-200 hover:bg-slate-200 p-1 shadow-sm text-sm"
                        onClick={() => {
                          window.open(
                            "https://maps.app.goo.gl/vKCMsrikEJEEQS466",
                            "_blank",
                          );
                        }}
                      >
                        📍 Open Map
                      </button>
                    </div>
                  </aside>
                </section>
              </motion.div>

              <div className="text-[#A25E77] mt-10 text-xl font-bold">
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
