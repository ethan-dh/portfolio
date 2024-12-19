import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      {" "}
      <div>
        <h1 className="text-5xl font-bold uppercase">Mes</h1>
        <h1 className="text-5xl font-bold text-neutral-600">EXPERIENCES</h1>
      </div>
      <div className="flex flex-row mt-12 gap-12 w-full">
        <div className="border-r-4 border-white w-0 "></div>
        <ul className="w-full">
          <li className="p-8  group rounded-xl flex justify-between">
            <div className="flex flex-col gap-4 w-full">
              <h4 className="text-2xl font-bold ">BTS SIO</h4>
              <p className="text-neutral-300 w-2/3">
                Apprentissage de gestion de systèmes informatiques,
                cybersécurité{" "}
              </p>
              <p className="text-neutral-500 w-2/3">
                2024 - Présent <br /> Lycée Saint Aspais Melun 77000
              </p>
            </div>
          </li>
          <li className="p-8  group rounded-xl flex justify-between">
            <div className="flex flex-col gap-4 w-full">
              <h4 className="text-2xl font-bold ">Bac général</h4>
              <p className="text-neutral-4s00 w-2/3">
                <strong>Spécialités:</strong> NSI - Anglais AMC -
                {" (Mathématiques)"}
                <br />
                <strong>Options:</strong> Mathématiques complémentaires
              </p>
              <p className="text-neutral-500 w-2/3">
                2021 - 2024 <br /> Lycée Saint Aspais Melun 77000
              </p>
            </div>
          </li>
          <li className="p-8  group rounded-xl flex justify-between">
            <div className="flex flex-col gap-4 w-full">
              <h4 className="text-2xl font-bold ">Brevet</h4>
              <p className="text-neutral-500 w-2/3">
                2019 - 2021 <br /> Sainte Jeanne d'Arc 77000
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
