import React from "react";

const Competences = () => {
  return (
    <div className="flex flex-col gap-4" id="competences">
      <div>
        <h1 className="text-5xl font-bold uppercase">Mes</h1>
        <h1 className="text-5xl font-bold text-neutral-600">COMPETENCES</h1>
      </div>

      <div className="grid grid-rows-3 grid-cols-2">
        <div className="p-4 flex flex-row group gap-4 cursor-default hover:bg-neutral-800 duration-200 ease-in-out rounded-xl m-1 ml-0">
          <div className="h-12 w-12  rounded-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt=""
            />
          </div>
          <div>
            <h6 className="font-bold group-hover:text-amber-600">HTML5</h6>
            <p className="text-neutral-400">Langage pour les sites webs.</p>
          </div>
        </div>
        <div className="p-4 flex flex-row group gap-4 cursor-default hover:bg-neutral-800 duration-200 ease-in-out rounded-xl m-1">
          <div className="h-12 w-12 rounded-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              alt=""
            />
          </div>
          <div>
            <h6 className="font-bold group-hover:text-amber-600">CSS3</h6>
            <p className="text-neutral-400">Le style des sites.</p>
          </div>
        </div>
        <div className="p-4 flex flex-row group gap-4 cursor-default hover:bg-neutral-800 duration-200 ease-in-out rounded-xl m-1 ml-0">
          <div className="h-12 w-12 rounded-lg">
            <img
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/linux_logo_icon_168243.png"
              alt=""
            />
          </div>
          <div>
            <h6 className="font-bold group-hover:text-amber-600">Linux</h6>
            <p className="text-neutral-400">Pour les serveurs.</p>
          </div>
        </div>
        <div className="p-4 flex flex-row group gap-4 cursor-default hover:bg-neutral-800 duration-200 ease-in-out rounded-xl m-1">
          <div className="h-12 w-12  rounded-lg">
            <img
              src="https://icons.veryicon.com/png/o/application/designer-icon/sql-5.png"
              alt=""
            />
          </div>
          <div>
            <h6 className="font-bold group-hover:text-amber-600">SQL</h6>
            <p className="text-neutral-400">Pour la gestion des données.</p>
          </div>
        </div>
        <div className="p-4 flex flex-row group gap-4 cursor-default hover:bg-neutral-800 duration-200 ease-in-out rounded-xl m-1 ml-0">
          <div className="h-12 w-12  rounded-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6783/6783360.png"
              alt=""
            />
          </div>
          <div>
            <h6 className="font-bold group-hover:text-amber-600">
              Cybersécurité
            </h6>
            <p className="text-neutral-400">
              Afin de sécuriser une infrastructure.
            </p>
          </div>
        </div>
        <div className="p-4 flex flex-row group gap-4 cursor-default hover:bg-neutral-800 duration-200 ease-in-out rounded-xl m-1 ml-0">
          <div className="h-12 w-12  rounded-lg">
            <img src="https://www.svgrepo.com/show/452088/php.svg" alt="" />
          </div>
          <div>
            <h6 className="font-bold group-hover:text-amber-600">PhP</h6>
            <p className="text-neutral-400">
              Pour rendre les sites dynamiques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
