import language from "../../language/language";
import Service from "./service";
import { motion } from "framer-motion";

const Services = ({ lang }: { lang: string }) => {
  const services: React.ReactElement[] = [
    <Service
      key={1}
      img="/"
      title={
        lang == "CZ"
          ? language.CZ.services.par.titleOne
          : language.EN.services.par.titleOne
      }
      text={
        lang == "CZ"
          ? language.CZ.services.par.textOne
          : language.EN.services.par.textOne
      }
      price={4000}
      btnText={lang == "CZ" ? "Chci plán" : "I want a plan"}
      url="https://docs.google.com/forms/d/1yzq5S7akVnjeta3A86y-MyQ5Em_lIy4-w6qsvYDxYl8/edit"
    />,
    <Service
      key={2}
      img="/"
      title={
        lang == "CZ"
          ? language.CZ.services.par.titleTwo
          : language.EN.services.par.titleTwo
      }
      text={
        lang == "CZ"
          ? language.CZ.services.par.textTwo
          : language.EN.services.par.textTwo
      }
      price={4000}
      btnText={lang == "CZ" ? "Chci jídelníček" : "I want a diet"}
      url="https://docs.google.com/forms/d/1ye26tfV27_AAvGp9PcgOsiy8HMWEZh6pAPHnDs3FKws/viewform?edit_requested=true"
    />,
    <Service
      key={3}
      img="/"
      title={
        lang == "CZ"
          ? language.CZ.services.par.titleThree
          : language.EN.services.par.titleThree
      }
      text={
        lang == "CZ"
          ? language.CZ.services.par.textThree
          : language.EN.services.par.textThree
      }
      price={2000}
      btnText={lang == "CZ" ? "Chci konzultaci" : "I want a consultation"}
      url="https://forms.gle/Nk3UMfbDbiEKxDEt8"
    />,
  ];
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
          #4
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl text-neutral-200 font-main "
        >
          {lang == "CZ"
            ? language.CZ.services.title
            : language.EN.services.title}
        </motion.h2>
        <div className="w-full h-[2px] bg-neutral-600"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-16"
      >
        {services.map((service: React.ReactElement, index: number) => {
          return <div key={index}>{service}</div>;
        })}
      </motion.div>
      <div className="py-10">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-neutral-200 text-xl"
        >
          {lang == "CZ" ? language.CZ.services.text : language.EN.services.text}
        </motion.p>
      </div>
    </div>
  );
};

export default Services;
