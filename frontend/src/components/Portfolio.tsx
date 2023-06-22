import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div>
      <h2 className="text-gray-500 font-[500] py-6 uppercase tracking-wider text-center text-[25px]">
        Portfolio
      </h2>
      <div className="logos bg-gray-50 max-w-full flex justify-between overflow-hidden   ">
        <div className="logos-slide flex  gap-10 p-4 ">
          <Link to="https://cassava.network" target="blank" className="flex flex-col gap-2">
            <img src="/cassava.jpeg" />
            <p className="text-center">Cassava Network</p>
          </Link>
          <Link to="https://collectorcrypt.com" target="blank" className="flex flex-col gap-2">
            <img src="/collector.jpeg" />
            <p className="text-center">Collector</p>
          </Link>
          <Link to="https://despace.io" target="blank" className="flex flex-col gap-2">
            <img src="/despace.jpg" />
            <p className="text-center">Despace Protocol</p>
          </Link>
          <Link to="https://dojima.network" target="blank" className="flex flex-col gap-2">
            <img src="/dojima.jpg" />
            <p className="text-center">Dojima Network</p>
          </Link>
          <Link to="https://zoa.game" target="blank" className="flex flex-col gap-2">
            <img src="/zoa.jpeg" />
            <p className="text-center">Zone of Avoidance</p>
          </Link>
          <Link to="" className="flex flex-col gap-2">
            <img src="/metavists.jfif" />
            <p className="text-center">Metavists NFT</p>
          </Link>
          <Link to="https://instagram.com/nexachain" target="blank" className="flex flex-col gap-2">
            <img src="/nexachain.jpg" />
            <p className="text-center">Nexachain</p>
          </Link>
          <Link to="https://kwikpik.io" target="blank" className="flex flex-col gap-2">
            <img src="/kwikpik.jpeg" />
            <p className="text-center">KwikPik</p>
          </Link>
          <Link to="https://cyclers.studio" target="blank" className="flex flex-col gap-2">
            <img src="/cyclers.jpeg" />
            <p className="text-center">Cyclers Studio</p>
          </Link>
        </div>
        <div className="logos-slide flex  gap-10 p-4 ">
          <Link to="https://cassava.network" target="blank" className="flex flex-col gap-2">
            <img src="/cassava.jpeg" />
            <p className="text-center">Cassava Network</p>
          </Link>
          <Link to="https://collectorcrypt.com" target="blank" className="flex flex-col gap-2">
            <img src="/collector.jpeg" />
            <p className="text-center">Collector</p>
          </Link>
          <Link to="https://despace.io" target="blank" className="flex flex-col gap-2">
            <img src="/despace.jpg" />
            <p className="text-center">Despace Protocol</p>
          </Link>
          <Link to="https://dojima.network" target="blank" className="flex flex-col gap-2">
            <img src="/dojima.jpg" />
            <p className="text-center">Dojima Network</p>
          </Link>
          <Link to="https://zoa.game" target="blank" className="flex flex-col gap-2">
            <img src="/zoa.jpeg" />
            <p className="text-center">Zone of Avoidance</p>
          </Link>
          <Link to="" className="flex flex-col gap-2">
            <img src="/metavists.jfif" />
            <p className="text-center">Metavists NFT</p>
          </Link>
          <Link to="https://instagram.com/nexachain" target="blank" className="flex flex-col gap-2">
            <img src="/nexachain.jpg" />
            <p className="text-center">Nexachain</p>
          </Link>
          <Link to="https://kwikpik.io" target="blank" className="flex flex-col gap-2">
            <img src="/kwikpik.jpeg" />
            <p className="text-center">KwikPik</p>
          </Link>
          <Link to="https://cyclers.studio" target="blank" className="flex flex-col gap-2">
            <img src="/cyclers.jpeg" />
            <p className="text-center">Cyclers Studio</p>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
