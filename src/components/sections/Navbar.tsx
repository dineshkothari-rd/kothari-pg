import { useState, useEffect } from "react";
import Container from "../ui/Container";
import { siteConfig } from "../../config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = () => {
      if (mediaQuery.matches) {
        setOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <nav className="bg-blue-900 text-white py-4 sticky top-0 z-50">
        <Container className="flex justify-between items-center">
          <h1 className="text-xl font-bold">{siteConfig.name}</h1>

          <div className="space-x-6 hidden md:block">
            <a href="#rooms">Rooms</a>
            <a href="#facilities">Facilities</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            className="md:hidden text-2xl cursor-pointer "
            onClick={() => setOpen((prev) => !prev)}
          >
            ☰
          </button>
        </Container>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900 text-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-blue-700">
          <span className="font-bold">{siteConfig.name}</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col p-6 space-y-6 text-lg">
          <a href="#rooms" onClick={() => setOpen(false)}>
            Rooms
          </a>
          <a href="#facilities" onClick={() => setOpen(false)}>
            Facilities
          </a>
          <a href="#gallery" onClick={() => setOpen(false)}>
            Gallery
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
