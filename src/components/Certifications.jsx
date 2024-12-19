import {
  ArrowDown,
  ArrowDownToLine,
  FileText,
  FileUser,
  Minus,
} from "lucide-react";
import React from "react";

import cambridge from "../assets/CV_Ehan_DELAINEHENNECART.pdf";

const Certifications = () => {
  return (
    <section id="certifications">
      <div>
        <h1 className="text-5xl font-bold uppercase">Mes</h1>
        <h1 className="text-5xl font-bold text-neutral-600">CERTIFICATIONS</h1>
      </div>

      <div className="mt-12 grid grid-cols-2 grid-rows-2 gap-4 ">
        <a
          href={cambridge} // Replace with the actual path to your certificate
          download="Cambridge_English_Certificate.pdf"
          className="group duration-200 hover:bg-neutral-800 rounded-xl w-full bg-neutral-900 p-8 flex justify-between items-center cursor-pointer"
        >
          <div>
            <h3 className="group-hover:text-amber-600 text-2xl">Anglais C1</h3>
            <p className="break-words text-neutral-500">
              Cambridge English Certificate (CEC)
            </p>
          </div>
          <div className="m-2">
            <ArrowDown className="text-amber-600 group-hover:translate-y-3 duration-200" />
            <Minus className="text-amber-600" />
          </div>
        </a>
        <div className="group duration-200 hover:bg-neutral-800 rounded-xl w-full bg-neutral-900 p-8 flex justify-between items-center cursor-pointer">
          <div>
            <h3 className="group-hover:text-amber-600 text-2xl">Linux</h3>
            <p className="break-words text-neutral-500">
              Linux Unhatched (Cisco)
            </p>
          </div>
          <div className="m-2">
            <ArrowDown className="text-amber-600 group-hover:translate-y-3 duration-200" />
            <Minus className="text-amber-600" />
          </div>
        </div>
        <div className="group duration-200 hover:bg-neutral-800 rounded-xl w-full bg-neutral-900 p-8 flex justify-between items-center cursor-pointer">
          <div>
            <h3 className="group-hover:text-amber-600 text-2xl">
              Cybersécurité
            </h3>
            <p className="break-words text-neutral-500">MOOC de l'ANSSI</p>
          </div>
          <div className="m-2">
            <ArrowDown className="text-amber-600 group-hover:translate-y-3 duration-200" />
            <Minus className="text-amber-600" />
          </div>
        </div>
        <div className="group duration-200 hover:bg-neutral-800 rounded-xl w-full bg-neutral-900 p-8 flex justify-between items-center cursor-pointer">
          <div>
            <h3 className="group-hover:text-amber-600 text-2xl">
              Cybersécurité
            </h3>
            <p className="break-words text-neutral-500">
              Introduction à la cybersécurité (Cisco)
            </p>
          </div>
          <div className="m-2">
            <ArrowDown className="text-amber-600 group-hover:translate-y-3 duration-200" />
            <Minus className="text-amber-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
