import React from "react";
import muzey from "../assets/muzey.png";

const Projets = () => {
  return (
    <div className="flex flex-col gap-4" id="projets">
      <div>
        <h1 className="text-5xl font-bold uppercase">Mes</h1>
        <h1 className="text-5xl font-bold text-neutral-600">
          PROJETS EN COURS
        </h1>
      </div>

      <div className="grid grid-rows-1 grid-cols-2">
        <div className="p-4 flex flex-row group gap-4 cursor-default hover:bg-neutral-800 duration-200 ease-in-out rounded-xl m-1 ml-0">
          <div className="h-12 w-12  rounded-lg">
            <img
              src="https://summry.fr/assets/logo-D8dqC5jz.png"
              alt=""
              className="rounded-lg"
            />
          </div>
          <a href="https://summry.fr" target="_blank" rel="noopener noreferrer">
            <h6 className="font-bold group-hover:text-amber-600">Summry.fr</h6>
            <p className="text-neutral-400">
              Un site web qui fait des comptes rendus et des résumés de
              réunions.
            </p>
          </a>
        </div>
        <div className="p-4 flex flex-row group gap-4 cursor-default hover:bg-neutral-800 duration-200 ease-in-out rounded-xl m-1">
          <div className="h-12 w-12 rounded-lg">
            <img src={muzey} alt="" className="rounded-lg" />
          </div>
          <a href="https://muzey.fr" target="_blank" rel="noopener noreferrer">
            <h6 className="font-bold group-hover:text-amber-600">Muzey.fr</h6>
            <p className="text-neutral-400">
              Un site web de partage de musique comme SoundCloud.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projets;
