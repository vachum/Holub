import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import language from "../../language/language";
import { motion, AnimatePresence } from "framer-motion";
const Nav = ({ onChangeLang }: { onChangeLang: Function }) => {
  const [lang, setLang] = useState("CZ");

  const handleClick = () => {
    onChangeLang(lang);
  };
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between py-6  md:py-8 lg:py-16">
      <h2 className="font-main font-bold text-[2em] text-[#ff0000]">OH</h2>
      {!open && (
        <HiMenuAlt3
          className="lg:hidden"
          size={28}
          onClick={() => setOpen(true)}
        />
      )}

      <ul className="hidden lg:flex gap-8 font-body uppercase items-center ">
        <li className="opacity-70  hover:text-[#ff0000] hover:opacity-100 ">
          <a href="#about">
            {lang === "CZ" ? language.CZ.nav.first : language.EN.nav.first}
          </a>
        </li>
        <li className="opacity-70  hover:text-[#ff0000] hover:opacity-100 ">
          <a href="#services">
            {" "}
            {lang === "CZ" ? language.CZ.nav.second : language.EN.nav.second}
          </a>
        </li>
        <li className="opacity-70  hover:text-[#ff0000] hover:opacity-100 ">
          <a href="#references">
            {" "}
            {lang === "CZ" ? language.CZ.nav.third : language.EN.nav.third}
          </a>
        </li>
        <button
          className="p-3 bg-neutral-950 rounded-xl"
          onClick={() => {
            setLang(lang === "CZ" ? "EN" : "CZ");
            handleClick();
          }}
        >
          {lang === "CZ" ? "CZ" : "EN"}
        </button>
      </ul>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" absolute bg-neutral-950 h-screen w-screen z-[100] m-[-1.5rem] p-6 "
          >
            <div className="flex flex-col ">
              <div className="flex justify-between">
                <h2 className="font-main font-bold text-[2em] text-[#ff0000]">
                  OH
                </h2>
                <HiX size={28} onClick={() => setOpen(false)} />
              </div>
              <ul className="flex h-[90dvh] flex-col justify-center uppercase font-bold text-2xl items-center font-body gap-10">
                <div className="grid gap-8">
                  <li className="opacity-70  hover:text-[#ff0000] hover:opacity-100 ">
                    <a href="#about" onClick={() => setOpen(false)}>
                      {lang === "CZ"
                        ? language.CZ.nav.first
                        : language.EN.nav.first}
                    </a>
                  </li>
                  <li className="opacity-70  hover:text-[#ff0000] hover:opacity-100 ">
                    <a href="#services" onClick={() => setOpen(false)}>
                      {" "}
                      {lang === "CZ"
                        ? language.CZ.nav.second
                        : language.EN.nav.second}
                    </a>
                  </li>
                  <li className="opacity-70  hover:text-[#ff0000] hover:opacity-100 ">
                    <a href="#references" onClick={() => setOpen(false)}>
                      {" "}
                      {lang === "CZ"
                        ? language.CZ.nav.third
                        : language.EN.nav.third}
                    </a>
                  </li>
                  <button
                    className="p-3 bg-neutral-900 rounded-xl text-lg"
                    onClick={() => {
                      setLang(lang === "CZ" ? "EN" : "CZ");
                      handleClick();
                    }}
                  >
                    {lang === "CZ" ? "CZ" : "EN"}
                  </button>
                </div>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
