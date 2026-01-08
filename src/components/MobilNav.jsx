import { useState } from "react";

const MobileNav = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      nombrelink: 'home',
      ruta: '/'
    },
    {
      nombrelink: "Servicios",
      ruta: "/#servicios",

    },
    {
      nombrelink: "Experiencia",
      ruta: "/experiencia",

    },
    {
      nombrelink: "Portafolio",
      ruta: "/pproyectos",

    },
    {
      nombrelink: "Contacto",
      ruta: "/contacto",

    },
  ]
  return (
    <nav className="container mx-auto flex items-center justify-between">
        
          <div className='mt-4 mb-2 text-left text-2xl'>
            <a href='/'>
              <h1 className='text-4xl font-bold'>
                LuisC<span className='text-accent-default'>.</span>
              </h1>
            </a>
          </div>
       <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer  text-white md:hidden"
      >
        {nav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M10 10l4 4m0 -4l-4 4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        )}
      </div>
      {nav && (   
         
          <nav className='absolute top-20 z-100 container flex flex-col justify-center gap-2 bg-gray-700/90'>
            {links.map((link, index) => {
              return (
                <a
                  href={link.ruta}
                  key={index}
                  className="text-accent-default border-b-2 border-accent-default capitalize hover:text-accent-hover transition-all"
                >
                  {link.nombrelink}
                </a>
              )
            })}
          </nav>
        
      )}
    </nav>
  )
}

export default MobileNav