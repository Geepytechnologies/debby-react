import { motion } from "framer-motion";

type Props = {};

const Logo = (props: Props) => {
  return (
    <a href="/">
      <div className="flex gap-2 items-center cursor-pointer justify-center">
        {/* <img
          src="logo1.jpeg"
          alt="dcryptgirl"
          className="w-[50px] h-[50px]  rounded-full border-2 border-white "
        /> */}
        <p className="text-light text-[30px] font-times uppercase tracking-[5px] font-[500]">
          Dcryptgirl
        </p>
      </div>
    </a>
  );
};

export default Logo;
