import language from "../../language/language";
import { motion } from "framer-motion";
import ikigai from "../../assets/IKIGAI.jpg";
import AboutImg from "../../assets/About.png";
import { FaBowlFood, FaChevronDown } from "react-icons/fa6";
const About = ({ lang }: { lang: string }) => {
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
          #2
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl  text-neutral-200 font-main whitespace-nowrap "
        >
          {lang === "CZ" ? language.CZ.about.title : language.EN.about.title}
        </motion.h2>

        <div className="w-full h-[2px] bg-neutral-600 "></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row items-center">
          <img
            className=" my-[-2em] w-[20em]  lg:w-[30em] filter grayscale "
            src={AboutImg}
            alt=""
          />

          <div className="grid gap-3">
            <p className="text-neutral-200 text-xl">
              {lang === "CZ" ? language.CZ.about.text : language.EN.about.text}
            </p>
            <p className="text-neutral-200 text-xl">
              {lang === "CZ"
                ? language.CZ.about.textTwo
                : language.EN.about.textTwo}
            </p>
            <p className="text-neutral-200 text-xl">
              {lang === "CZ"
                ? language.CZ.about.textThree
                : language.EN.about.textThree}
            </p>
          </div>
        </div>

        <div className="z-[10000] grid gap-4 p-4 z-[0]   lg:p-8 lg:pb-16">
          <details className="font-body text-xl text-neutral-200 border-b-2 border-neutral-50/30 rounded-sm p-4 [&_svg]:open:-rotate-0 mb-16">
            <summary className="font-body text-red-500 font-bold cursor-pointer  list-none flex justify-between items-center ">
              {lang === "CZ"
                ? language.CZ.about.moreTitle
                : language.EN.about.moreTitle}
              <FaChevronDown className="transform  rotate-180 hover:rotate-0" />
            </summary>
            <div className="lg:p-4">
              {Object.entries(
                lang === "CZ" ? language.CZ.about.more : language.EN.about.more
              ).map(([key, value], i) => (
                <div key={key}>
                  <p className="font-body font-medium text-neutral-400 ">
                    {value[0]}
                  </p>
                  <p className="text-neutral-500">{value[1]}</p>
                  <p className="text-neutral-500 ">{value[2]}</p>
                  <p className="text-neutral-500 ">{value[3]}</p>
                  <p className="text-neutral-500 pb-3">{value[4]}</p>
                </div>
              ))}
            </div>
          </details>
          <h2
            className="font-body font-bold text-4xl text-[#ff0000] font-main  pt-4"
            id="why"
          >
            {lang === "CZ"
              ? language.CZ.about.accordionTwoTitle
              : language.EN.about.accordionTwoTitle}
          </h2>

          <details className="font-body text-xl text-neutral-200 border-b-2 border-neutral-50/30 rounded-sm p-4 [&_svg]:open:-rotate-0">
            <summary className="font-body font-bold cursor-pointer  list-none flex justify-between items-center">
              {lang === "CZ"
                ? language.CZ.about.subAcordionOne
                : language.EN.about.subAcordionOne}
              <FaChevronDown className="transform  rotate-180 hover:rotate-0" />
            </summary>
            <div className="lg:p-4">
              {Object.entries(
                lang === "CZ"
                  ? language.CZ.about.subAccordionOne
                  : language.EN.about.subAccordionOne
              ).map(([key, value], i) => (
                <div key={key}>
                  <p className="font-body font-medium text-neutral-400 ">
                    {value[0]}
                  </p>
                  <p className="text-neutral-500 pb-3">{value[1]}</p>
                </div>
              ))}
            </div>
          </details>

          <details className="font-body text-xl text-neutral-200 border-b-2 border-neutral-50/30 rounded-sm p-4 [&_svg]:open:-rotate-0">
            <summary className="font-body font-bold cursor-pointer  list-none flex justify-between items-center">
              {lang === "CZ"
                ? language.CZ.about.subAcordionTwo
                : language.EN.about.subAcordionTwo}
              <FaChevronDown className="transform  rotate-180 hover:rotate-0" />
            </summary>
            <div className="lg:p-4">
              {Object.entries(
                lang === "CZ"
                  ? language.CZ.about.subAccordionTwo
                  : language.EN.about.subAccordionTwo
              ).map(([key, value], i) => (
                <div key={key}>
                  <p className="font-body font-medium text-neutral-400">
                    {value[0]}
                  </p>
                  <p className="text-neutral-500 pb-3">{value[1]}</p>
                </div>
              ))}
            </div>
          </details>
          <details className="font-body text-xl text-neutral-200 border-b-2 border-neutral-50/30 rounded-sm p-4 [&_svg]:open:-rotate-0">
            <summary className="font-body font-bold cursor-pointer  list-none flex justify-between items-center">
              {lang === "CZ"
                ? language.CZ.about.subAcordionThree
                : language.EN.about.subAcordionThree}
              <FaChevronDown className="transform  rotate-180 hover:rotate-0" />
            </summary>
            <div className="lg:p-4">
              {Object.entries(
                lang === "CZ"
                  ? language.CZ.about.subAccordionThree
                  : language.EN.about.subAccordionThree
              ).map(([key, value], i) => (
                <div key={key}>
                  <p className="font-body font-medium text-neutral-400">
                    {value[0]}
                  </p>
                  <p className="text-neutral-500 pb-3">{value[1]}</p>
                </div>
              ))}
            </div>
          </details>

          <h2 className="font-body font-bold text-4xl text-[#ff0000] font-main pt-8 ">
            {lang === "CZ"
              ? language.CZ.about.accordionOneTitle
              : language.EN.about.accordionOneTitle}
          </h2>
          <a
            href="#home"
            className="font-body font-bold  text-xl border-b-2 border-neutral-50/30 rounded-sm  p-4"
          >
            {" "}
            {lang === "CZ" ? "Proto !" : "Thats why !"}
          </a>
          <details className="font-body text-xl text-neutral-200 border-b-2 border-neutral-50/30 rounded-sm p-4 [&_svg]:open:-rotate-0">
            <summary className="font-body font-bold cursor-pointer  list-none flex justify-between items-center">
              IKIGAI
              <FaChevronDown className="transform  rotate-180 hover:rotate-0" />
            </summary>
            <img src={ikigai} className=" my-8" alt="" />
          </details>
          <details className="font-body text-xl text-neutral-200 border-b-2 border-neutral-50/30 rounded-sm p-4 [&_svg]:open:-rotate-0">
            <summary className="font-body font-bold cursor-pointer  list-none flex justify-between items-center">
              {lang === "CZ"
                ? language.CZ.about.subAcordionFour
                : language.EN.about.subAcordionFour}
              <FaChevronDown className="transform  rotate-180 hover:rotate-0" />
            </summary>
            <div className="lg:p-4">
              {Object.entries(
                lang === "CZ"
                  ? language.CZ.about.subAccordionFour
                  : language.EN.about.subAccordionFour
              ).map(([key, value], i) => (
                <p
                  key={key}
                  className="font-body font-medium text-neutral-400 p-1"
                >
                  {value}
                </p>
              ))}
            </div>
          </details>
          <details className="font-body text-xl text-neutral-200 border-b-2 border-neutral-50/30 rounded-sm p-4 [&_svg]:open:-rotate-0">
            <summary className="font-body font-bold cursor-pointer  list-none flex justify-between items-center">
              {lang === "CZ"
                ? language.CZ.about.subAcordionFive
                : language.EN.about.subAcordionFive}
              <FaChevronDown className="transform  rotate-180 hover:rotate-0" />
            </summary>
            <div className="lg:p-4">
              {Object.entries(
                lang === "CZ"
                  ? language.CZ.about.subAccordionFive
                  : language.EN.about.subAccordionFive
              ).map(([key, value], i) => (
                <div key={key}>
                  <p className="font-body font-medium text-neutral-400">
                    {value[0]}
                  </p>
                  <p className=" text-neutral-500 pb-3">{value[1]}</p>
                </div>
              ))}
            </div>
          </details>

          <details className="font-body text-xl text-neutral-200 border-b-2 border-neutral-50/30 rounded-sm p-4 [&_svg]:open:-rotate-0">
            <summary className="font-body font-bold cursor-pointer  list-none flex justify-between items-center">
              {lang === "CZ"
                ? language.CZ.about.subAcordionSix
                : language.EN.about.subAcordionSix}
              <FaChevronDown className="transform  rotate-180 hover:rotate-0" />
            </summary>
            <div className="lg:p-4">
              {Object.entries(
                lang === "CZ"
                  ? language.CZ.about.subAccordionSix
                  : language.EN.about.subAccordionSix
              ).map(([key, value], i) => (
                <p
                  key={key}
                  className="font-body font-medium text-neutral-400 p-1"
                >
                  {value}
                </p>
              ))}
            </div>
          </details>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
