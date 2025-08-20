import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Interested in exploring how I can{" "}
          <span className="text-purple">contribute</span> to your team?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I’d love to discuss how my skills in Full Stack Development and AI can add
          value to your organization.
        </p>
        <a href="mailto:swarnaaishwarya17@gmail.com">
          <MagicButton
            title="Let’s Connect"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          © {new Date().getFullYear()} Sai Aishwarya. All Rights Reserved.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
  {socialMedia.map((info) => (
    <a
      key={info.id}
      href={info.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
    >
      <img src={info.img} alt="icons" width={20} height={20} />
    </a>
  ))}
</div>

      </div>
    </footer>
  );
};

export default Footer;
