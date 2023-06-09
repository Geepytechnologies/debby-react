import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

type Props = {};

const youtube = "https://www.youtube.com/@dcryptgirl/videos";

export const Mysocials = () => (
  <>
    <SocialIcon
      url="https://twitter.com/dcryptgirll"
      fgColor="gray"
      bgColor="transparent"
    />
    <SocialIcon
      url="https://www.linkedin.com/in/deborah-ifegwu-9717b7237"
      fgColor="gray"
      bgColor="transparent"
    />
    <SocialIcon
      url="https://instagram.com/dcryptgirl"
      fgColor="gray"
      bgColor="transparent"
    />
    <SocialIcon url={youtube} fgColor="gray" bgColor="transparent" />
  </>
);

const Header = (props: Props) => {
  const [menu, setMenu] = useState(false);
  const togglemenu = () => {
    setMenu(!menu);
  };
  const location = useLocation();
  const url = location.pathname;
  const getPortfolioHref = () => {
    if (url !== "/") {
      return "/#portfolio";
    } else {
      return "#portfolio";
    }
  };
  const getContactHref = () => {
    if (url !== "/") {
      return "/#contact";
    } else {
      return "#contact";
    }
  };
  return (
    <>
      <header className="sticky bg-[rgb(36,36,36)] top-0 flex flex-col  w-full z-20  px-3 py-4">
        <div className="flex justify-between ">
          <Logo />
          <div className="hidden md:flex">
            <Mysocials />
          </div>
          <motion.ul
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="text-gray-300 hidden  md:flex gap-12 text-[20px] items-center justify-center"
          >
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href={getPortfolioHref()}>Portfolio</a>
            </li>
            <li>
              <a href={getContactHref()}>Contact</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </motion.ul>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row md:hidden  text-[30px] font-[500]  text-gray-300 items-center"
          >
            {!menu && <BiMenuAltRight onClick={() => togglemenu()} />}
            {menu && <AiOutlineClose onClick={() => togglemenu()} />}
          </motion.div>
        </div>

        <div
          className={`  ${
            menu
              ? "max-h-[200px] overflow-hidden md:hidden flex items-center w-full h-[200px] py-4 transition-[max-height] duration-500 ease-in-out "
              : "max-h-[0px] overflow-hidden h-[200px]   transition-[max-height] duration-500 ease-in-out"
          }`}
        >
          <div className="space-y-3 w-full h-full flex flex-col items-center justify-center text-white">
            <a href="/about">
              <p>About</p>
            </a>
            <a href="#portfolio" className="">
              <p>Portfolio</p>
            </a>
            <a href="#contact">
              <p>Contact</p>
            </a>
            <a href="/blog">
              <p>Blog</p>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
