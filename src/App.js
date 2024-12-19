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
import Projets from "./components/Projets";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ type: "", value: "" });

  const handleContactClick = (type, value, e) => {
    e.preventDefault();
    setModalContent({ type, value });
    setShowModal(true);
  };

  return (
    <div className="bg-neutral-950 h-full selection:text-white selection:bg-amber-600">
      <Navbar />
      <div class="grid grid-cols-3 gap-4 w-4/5 mx-auto ">
        <div class="fixed right-0 col-span-1 bg-white m-24 rounded-xl w-1/4 p-4 flex flex-col gap-8">
          {/* <img
            src={ethan}
            alt="Ethan"
          /> */}
          <div>
            <h2 className="text-center font-bold text-xl">
              Ethan DELAINE--HENNECART
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-center font-semibold">Me contacter:</h2>

            <div className="flex flex-row justify-center gap-4 mb-4">
              {/* <a
              href="https://instagram.com/ethan_inshape"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-2 hover:bg-neutral-200 duration-200 rounded-lg">
                <Instagram size={18} className="text-amber-600" />{" "}
              </div>
            </a>
            <a
              href="https://facebook.com/ethan_inshape"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-2 hover:bg-neutral-200 duration-200 rounded-lg">
                <Facebook size={18} className="text-amber-600" />{" "}
              </div>
            </a> */}
              <a
                href="tel:+33631070881"
                onClick={(e) => handleContactClick("phone", "+33631070881", e)}
              >
                <div className="p-2 hover:bg-neutral-200 duration-200 rounded-lg">
                  <Phone size={18} className="text-amber-600" />{" "}
                </div>
              </a>
              <a
                href="mailto:ethan.delaine@icloud.com"
                onClick={(e) =>
                  handleContactClick("email", "ethan.delaine@icloud.com", e)
                }
              >
                <div className="p-2 hover:bg-neutral-200 duration-200 rounded-lg">
                  <Mail size={18} className="text-amber-600" />{" "}
                </div>
              </a>
            </div>
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
          <Projets />
          <Documents />
          <Certifications />
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">
              {modalContent.type === "phone" ? "Téléphone" : "Email"}
            </h3>
            <p className="mb-4">{modalContent.value}</p>
            <div className="flex gap-4">
              <button
                className="px-4 py-2 bg-black text-white rounded hover:bg-neutral-800"
                onClick={() => {
                  navigator.clipboard.writeText(modalContent.value);
                  setShowModal(false);
                }}
              >
                Copier
              </button>
              <button
                className="px-4 py-2 bg-black text-white rounded hover:bg-neutral-800"
                onClick={() => {
                  if (modalContent.type === "phone") {
                    window.location.href = `tel:${modalContent.value}`;
                  } else {
                    window.location.href = `mailto:${modalContent.value}`;
                  }
                  setShowModal(false);
                }}
              >
                {modalContent.type === "phone" ? "Appeler" : "Envoyer un email"}
              </button>
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setShowModal(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
