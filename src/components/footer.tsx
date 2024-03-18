import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  const iconSize: number = 30;
  const icons: React.ReactElement[] = [
    <a href="https://www.instagram.com/ondra_holoubek/?hl=cs">
      <FaInstagram key={1} size={iconSize} />
    </a>,
    <a href="https://www.youtube.com/@FA-qq4pp">
      <FaYoutube key={2} size={iconSize} />
    </a>,
  ];
  return (
    <footer className="bg-neutral-950 h-[10em] px-6 md:px-20 lg:px-32 bg-neutral-900 text-white flex flex-col justify-center items-center gap-4">
      <div className="flex gap-4">
        {icons.map((icon: React.ReactElement, index: number) => {
          return (
            <div
              key={index}
              className="text-neutral-200 hover:text-[#ff0000] transition ease-in-out duration-50 cursor-pointer"
            >
              {icon}
            </div>
          );
        })}
      </div>
      <h5 className="opacity-50 text-sm">© 2024 Ondřej Holoubek</h5>
    </footer>
  );
};

export default Footer;
