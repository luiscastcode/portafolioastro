 
import { useState, useEffect } from "react";
 

const links = [
  {
    nombrelink: "Servicios",
    ruta: "/#servicios",

  },
  {
    nombrelink: "Experiencia",
    ruta: "/experiencia",

  },
  {
    nombrelink: "Proyectos",
    ruta: "/proyectos",

  },
  {
    nombrelink: "Contacto",
    ruta: "/contacto",

  },

]

const Nav = () => {
  

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-3" : "bg-transparent border-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/">
          <h1 className="text-4xl font-semibold">
            LuisCast<span className="text-accent-default">Code.</span>
          </h1>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {links.map((link, index) => {
            return <a
              href={link.ruta}
              key={index}
              className="text-accent-default border-b-2 border-accent-default capitalize hover:text-accent-hover transition-all"
            >
              {link.nombrelink}
            </a>
          })}
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};


export default Nav