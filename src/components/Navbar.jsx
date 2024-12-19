import { BadgeCheck, List } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="z-10 mx-auto flex justify-center text-white fixed bg-black p-6 bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 w-full">
      <ul className="flex flex-row">
        <li className="">
          <a
            className="p-4 hover:text-amber-600 hover:bg-neutral-800 rounded-lg"
            href="#"
          >
            Accueil
          </a>
        </li>
        <li className="">
          <a
            className="p-4 hover:text-amber-600 hover:bg-neutral-800 rounded-lg"
            href="#sommaire"
          >
            Sommaire
          </a>
        </li>
        <li className="">
          <a
            className="p-4 hover:text-amber-600 hover:bg-neutral-800 rounded-lg"
            href="#competences"
          >
            Compétences
          </a>
        </li>
        <li className="">
          <a
            className="p-4 hover:text-amber-600 hover:bg-neutral-800 rounded-lg"
            href="#experience"
          >
            Expériences
          </a>
        </li>
        <li className="">
          <a
            className="p-4 hover:text-amber-600 hover:bg-neutral-800 rounded-lg"
            href="#documents"
          >
            Documents
          </a>
        </li>
        <li className="">
          <a
            className="p-4 hover:text-amber-600 hover:bg-neutral-800 rounded-lg"
            href="#certifications"
          >
            Certifications
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
