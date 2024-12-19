import Competences from "./components/Competences";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ethan from "./assets/IMG_2763.jpeg";
import trevor from "./assets/trevor.webp";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Documents from "./components/Documents";
import Certifications from "./components/Certifications";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-neutral-950 h-full selection:text-white selection:bg-amber-600">
      <Navbar />
      <div class="grid grid-cols-3 gap-4 w-4/5 mx-auto ">
        <div class="fixed right-0 col-span-1 bg-white m-24 rounded-xl w-1/4 p-4 flex flex-col gap-8">
          <img
            src={ethan}
            /* L'image est dans /public et on ne peut pas importer ce qui vient du dossier public */ className="rounded-lg"
            alt="Ethan"
          />
          <div>
            <h2 className="text-center font-bold text-xl">Ethan</h2>
          </div>

          <div className="flex flex-row justify-center gap-4 mb-4">
            <a
              href="https://instagram.com/ethan_inshape"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-2 hover:bg-neutral-200 duration-200 rounded-lg">
                <Instagram size={18} className="text-amber-600" />{" "}
                {/* Icone Instagram, classe pour changer la couleur (vu que l'icone est un svg, la couleur du texte change la couleur de l'icone) */}
              </div>
            </a>
            <a
              href="https://facebook.com/ethan_inshape"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-2 hover:bg-neutral-200 duration-200 rounded-lg">
                <Facebook size={18} className="text-amber-600" />{" "}
                {/* Icone Facebook, classe pour changer la couleur (vu que l'icone est un svg, la couleur du texte change la couleur de l'icone) */}
              </div>
            </a>
            <a href="tel:+33631070881">
              <div className="p-2 hover:bg-neutral-200 duration-200 rounded-lg">
                <Phone size={18} className="text-amber-600" />{" "}
                {/* Icone Telephone, classe pour changer la couleur (vu que l'icone est un svg, la couleur du texte change la couleur de l'icone) */}
              </div>
            </a>
            <a href="mailto:ethan.delaine@icloud.com">
              <div className="p-2 hover:bg-neutral-200 duration-200 rounded-lg">
                <Mail size={18} className="text-amber-600" />{" "}
                {/* Icone Mail, classe pour changer la couleur (vu que l'icone est un svg, la couleur du texte change la couleur de l'icone) */}
              </div>
            </a>
          </div>
        </div>

        {/*
          En haut, la partie à droite (qui restera à droite grâce à sa class "fixed")

          En bas, Les sections du site (chacuns un component différent pour que ça soit plus lisible)
          */}

        <div class="col-span-2 text-white p-4 flex flex-col gap-24 mb-48">
          <Header />
          <Nav />
          <Competences />
          <Experience />
          <Documents />
          <Certifications />
          <Footer />
        </div>
      </div>
    </div>
  );
}
