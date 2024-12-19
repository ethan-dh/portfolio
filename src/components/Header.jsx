import React from "react";

const Header = () => {
  return (
    <header className="mt-24">
      {/*
    - parcours scolaire & pro
    - CV & lettre motiv
    - certif cambridge

  */}

      <h1 className="text-7xl font-bold uppercase">Ethan </h1>
      <h1 className="text-6xl font-bold text-neutral-600">
        DELAINE--HENNECART
      </h1>
      <p className="mt-4 text-neutral-500 group">
        Étudiant en BTS SIO 1ere année au{" "}
        <a
          className="text-neutral-400 hover:underline"
          href="https://institutionsaintaspais.fr/campus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Campus Saint Aspais
        </a>
      </p>
    </header>
  );
};

export default Header;
