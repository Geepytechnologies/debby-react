import React from "react";
import { BsFillMicFill } from "react-icons/bs";

type Props = {};

const Podcast = (props: Props) => {
  return (
    <div className="bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2QxNDIzZWYyNTgxZDRjNDFkMTA3Y2Q3NTFhNDU0YzkwMTcyZGRjMCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/gYDxTQIY7sumXSCYzP/giphy.gif')] bg-cover bg-no-repeat md:bg-repeat bg-center relative mt-9 md:h-[700px] md:bg-contain h-[500px]">
      <div className="absolute h-full w-full top-0 bg-gradient-to-r to-off from-[#eddaa7] opacity-40"></div>
      <div className="text-white flex items-center absolute top-0 left-0 pt-4 gap-2">
        <BsFillMicFill className="text-white text-[30px]" />
        <p className="font-[600] text-[30px]">STORIES PODCAST</p>
      </div>
    </div>
  );
};

export default Podcast;
