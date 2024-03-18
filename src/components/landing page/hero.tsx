import Nav from "./nav";
import HeroImg from "../../assets/HeroSecod.png";

import { HiChevronDown } from "react-icons/hi";
import { useEffect, useState } from "react";
import { motion, transform, useScroll } from "framer-motion";
import language from "../../language/language";

const Hero = ({ onChangeLang }: { onChangeLang: Function }) => {
  const [langState, setLangState] = useState("");
  const { scrollYProgress } = useScroll();
  const handleChange = (lang: string) => {
    setLangState(lang);
  };
  const handleClick = () => {
    onChangeLang(langState);
  };

  const ScrollLower = () => {
    window.scrollTo({
      top: window.window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleClick();
  }, [langState]);
  return (
    <div className="">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Nav onChangeLang={handleChange} />
      </motion.div>
      <div
        className="flex justify-center min-h-screen bg-neutral-900 "
        id="home"
      >
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-[55%]  uppercase font-main font-bold text-[3.4em] sm:text-[3.8em] xl:text-[8em] 3xl:top-[75%] z-[10]	drop-shadow-xl z-[20]"
          >
            Ondřej <span className="text-[#ff0000]"> Holoubek</span>
          </motion.h1>
          <motion.h3
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-[65%] pt-2 xl:top-[75%] 3xl:top-[85%] text-center text-neutral-200   uppercase font-body  text-[1em] xl:text-[1.5em] z-[10] md:mx-[10em] xl:mx-[28em]	drop-shadow-xl z-[20]"
          >
            <span className="font-body font-bold text-[#ff0000] xl:text-[1.1em]">
              "
              {langState === ""
                ? language.CZ.hero.motto
                : langState === "CZ"
                ? language.CZ.hero.motto
                : language.EN.hero.motto}
              "
              <br />
            </span>
            {langState === ""
              ? language.CZ.hero.text
              : langState === "CZ"
              ? language.CZ.hero.text
              : language.EN.hero.text}
          </motion.h3>

          <motion.img
            loading="lazy"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-[5em] h-auto xl:w-1/3 xl:mt-[-5.3em] 3xl:mt-[10em] 3xl:w-1/2  filter grayscale z-[10]"
            src={HeroImg}
            alt=""
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ff0000] size-[15em] md:size-[21em] lg:size-[25em] rounded-[50%]  "
          ></motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="pt-20 md:mt-[-20em] lg:pb-10 lg:mt-[-10em] z-[100]"
          >
            <HiChevronDown
              className="cursor-pointer"
              size={34}
              onClick={() => {
                ScrollLower();
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
