import language from "../../language/language";
import { motion } from "framer-motion";
import { IoArrowForwardSharp } from "react-icons/io5";
import pdfOne from "../../assets/3.pdf";
import pdfTwo from "../../assets/2.pdf";
import pdfThree from "../../assets/7.pdf";
import pdfFour from "../../assets/6.pdf";
import Strava from "../../assets/strava.jpg";
import Lifestyle from "../../assets/lifestyle.jpg";
import Trenink from "../../assets/trénink.jpg";
import Suplementace from "../../assets/suplementace.jpg";

const Work = ({ lang }: { lang: string }) => {
  const pdfUrl = "src/assets/1.pdf";
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
          #3
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl  text-neutral-200 font-main whitespace-nowrap "
        >
          {lang === "CZ" ? language.CZ.work.title : language.EN.work.title}
        </motion.h2>

        <div className="w-full h-[2px] bg-neutral-600 "></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }} // Change y to x for horizontal movement
        whileInView={{ opacity: 1, x: 0 }} // Change y to x for horizontal movement
        transition={{ delay: 2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img loading="lazy" src={Strava} className=" lg:w-1/3" alt="" />
            <div className="flex flex-col gap-8">
              <h2 className="text-xl font-bold font-body">E-book Strava </h2>
              <p>
                {lang === "CZ" ? language.CZ.work.one : language.EN.work.one}
              </p>
              <a
                className="bg-[#ff0000] max-w-36 text-center px-4 py-2 rounded-lg flex justify-center items-center gap-2 "
                href={pdfOne}
              >
                Onepager
                <IoArrowForwardSharp />
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img
              loading="lazy"
              src={Suplementace}
              className=" lg:w-1/3"
              alt=""
            />
            <div className="flex flex-col gap-8">
              <h2 className="text-xl font-bold font-body">
                E-book Suplementace
              </h2>

              <p>
                {lang === "CZ" ? language.CZ.work.two : language.EN.work.two}
              </p>
              <a
                className="bg-[#ff0000] max-w-36 text-center px-4 py-2 rounded-lg flex justify-center items-center gap-2"
                href={pdfTwo}
              >
                Onepager
                <IoArrowForwardSharp />
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img loading="lazy" src={Trenink} className=" lg:w-1/3" alt="" />
            <div className="flex flex-col gap-8">
              <h2 className="text-xl font-bold font-body">E-book Trénink </h2>

              <p>
                {lang === "CZ"
                  ? language.CZ.work.three
                  : language.EN.work.three}
              </p>
              <a
                className="bg-[#ff0000] max-w-36 text-center px-4 py-2 rounded-lg flex justify-center items-center gap-2"
                href={pdfThree}
              >
                Onepager
                <IoArrowForwardSharp />
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img loading="lazy" src={Lifestyle} className=" lg:w-1/3" alt="" />
            <div className="flex flex-col gap-8">
              <h2 className="text-xl font-bold font-body">E-book Lifestyle </h2>

              <p>
                {lang === "CZ" ? language.CZ.work.four : language.EN.work.four}
              </p>
              <a
                className="bg-[#ff0000] max-w-36 text-center px-4 py-2 rounded-lg flex justify-center items-center gap-2"
                href={pdfFour}
              >
                Onepager
                <IoArrowForwardSharp />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
