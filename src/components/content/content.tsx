import About from "./about";
import References from "./references";
import Services from "./services";
import Work from "./work";

const Content = ({ lang }: { lang: string }) => {
  return (
    <div>
      <div className="py-10">
        <div id="references" className="py-10">
          <References lang={lang} />
        </div>
        <div className="py-10" id="about">
          <About lang={lang} />
        </div>
        <div className="py-10">
          <Work lang={lang} />
        </div>
        <div id="services" className="py-10">
          <Services lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default Content;
