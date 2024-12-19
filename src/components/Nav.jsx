import { ArrowUpRight } from "lucide-react";
import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-col gap-4" id="sommaire">
      <h1 className="text-5xl font-bold uppercase">Sommaire</h1>
      <ul className="w-full flex flex-col">
        <li className="p-8 hover:bg-neutral-900 duration-200 group rounded-xl flex justify-between">
          <a href="#experience" className="w-full flex justify-between">
            <div className="flex flex-col gap-4 w-full">
              <h4 className="text-2xl font-bold group-hover:text-amber-600">
                Mon Experience
              </h4>
              <p className="text-neutral-400 w-2/3">Collège - Lycée - BTS</p>
            </div>

            <ArrowUpRight className="text-amber-500 relative group-hover:translate-x-2 group-hover:-translate-y-2  duration-200 transition-transform" />
          </a>
        </li>

        <li className="p-8 hover:bg-neutral-900 duration-200 group rounded-xl flex justify-between">
          <a href="#documents" className="w-full flex justify-between">
            <div className="flex flex-col gap-4 w-full">
              <h4 className="text-2xl font-bold group-hover:text-amber-600">
                Mes documents
              </h4>
              <p className="text-neutral-400 w-2/3">
                CV & Lettre de motivation
              </p>
            </div>

            <ArrowUpRight className="text-amber-500 relative group-hover:translate-x-2 group-hover:-translate-y-2  duration-200 transition-transform" />
          </a>
        </li>

        <li className="p-8 hover:bg-neutral-900 duration-200 group rounded-xl flex justify-between">
          <a href="#certifications" className="w-full flex justify-between">
            <div className="flex flex-col gap-4 w-full">
              <h4 className="text-2xl font-bold group-hover:text-amber-600">
                Mes certifications
              </h4>
              <p className="text-neutral-400 w-2/3">
                Certifications de compétences & de langues
              </p>
            </div>

            <ArrowUpRight className="text-amber-500 relative group-hover:translate-x-2 group-hover:-translate-y-2  duration-200 transition-transform" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
