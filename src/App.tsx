import { useState } from "react";
import Hero from "./components/landing page/hero";
import Content from "./components/content/content";
import Footer from "./components/footer";
import { motion, useScroll } from "framer-motion";
import Cursor from "./components/cursor";
function App() {
  const [langState, setLangState] = useState("CZ");
  const handleChange = (lang: string) => {
    setLangState(lang === "CZ" ? "EN" : "CZ");
  };
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#ff0000] origin-[0%] z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.div
        className="fixed top-0 left-0 right-0 w-2 bg-[#ff0000] origin-top z-[100]"
        style={{ scaleY: scrollYProgress }}
      />
      <div className="px-6 md:px-20 lg:px-32 bg-neutral-900 text-white min-h-screen">
        <Hero onChangeLang={handleChange} />
        <div className=" md:px-[3em] lg:px-[10em]">
          <Content lang={langState} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
