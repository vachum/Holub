import language from "../../language/language";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Reference from "./reference";
const References = ({ lang }: { lang: string }) => {
  const containerRef = useRef(null);

  return (
    <div className="flex flex-col  gap-8 font-body">
      <motion.div
        className="flex items-center gap-4"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ delay: 1.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
          className="font-body font-bold text-xl text-[#ff0000]"
        >
          #1
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl  text-neutral-200 font-main "
        >
          {lang === "CZ"
            ? language.CZ.references.title
            : language.EN.references.title}
        </motion.h2>

        <div className="w-full h-[2px] bg-neutral-600 "></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }} // Change y to x for horizontal movement
        whileInView={{ opacity: 1, x: 0 }} // Change y to x for horizontal movement
        transition={{ delay: 2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Reference />
      </motion.div>
    </div>
  );
};

export default References;
