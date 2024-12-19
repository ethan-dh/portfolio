import {
  ArrowDown,
  ArrowDownToLine,
  FileText,
  FileUser,
  Minus,
} from "lucide-react";
import React from "react";

import cv from "../assets/CV_Ehan_DELAINEHENNECART.pdf";
import lettre from "../assets/Lettre_de_motivation.pdf";

const Documents = () => {
  return (
    <section id="documents">
      <div>
        <h1 className="text-5xl font-bold uppercase">Mes</h1>
        <h1 className="text-5xl font-bold text-neutral-600">DOCUMENTS</h1>
      </div>

      <div className="mt-12 flex gap-4">
        {/* CV Download Section */}
        <a
          href={cv} // Replace with the actual path to your CV file
          download="CV_Ehan_DELAINEHENNECART.pdf"
          className="w-full rounded-xl duration-200 hover:bg-neutral-800 group bg-neutral-900 p-8 flex justify-between items-center cursor-pointer"
        >
          <div>
            <FileUser className="group-hover:text-amber-600" size={18} />
            <h3 className="text-2xl group-hover:text-amber-600">CV</h3>
          </div>
          <div>
            <ArrowDown className="text-amber-600 group-hover:translate-y-3 duration-200" />
            <Minus className="text-amber-600" />
          </div>
        </a>

        {/* Lettre de motivation Download Section */}
        <a
          href={lettre} // Replace with the actual path to your letter
          download="Lettre_de_motivation_Ethan_DELAINEHENNECART.pdf"
          className="w-full rounded-xl duration-200 hover:bg-neutral-800 group bg-neutral-900 p-8 flex justify-between items-center cursor-pointer"
        >
          <div>
            <FileText className="group-hover:text-amber-600" size={18} />
            <h3 className="text-2xl group-hover:text-amber-600">
              Lettre de motivation
            </h3>
          </div>
          <div>
            <ArrowDown className="text-amber-600 group-hover:translate-y-3 duration-200" />
            <Minus className="text-amber-600" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Documents;
