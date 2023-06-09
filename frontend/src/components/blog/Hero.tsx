import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full h-[350px] sm:h-[400px] md:h-[500px] relative">
      <img
        src="/home-reading-min.jpg"
        alt=""
        className="w-full h-full bg-cover"
      />
      <div className="absolute h-full w-full top-0 bg-gradient-to-r to-off from-[#eddaa7] opacity-70"></div>
      <div className="absolute top-0 w-full h-full flex items-center justify-center">
        <div>
          <h1 className="text-white text-[70px] font-[600]">Insights</h1>
          <h2 className="text-white text-[20px]">
            A deep dive into Technology
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
