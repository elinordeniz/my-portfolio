import main from "../data/main.json";

const Footer = () => {
  return (
    <footer className="flex w-full h-[50px] bg-black justify-center items-center font-thin tracking-wider text-white">
      {main.footer}
    </footer>
  );
};

export default Footer;
