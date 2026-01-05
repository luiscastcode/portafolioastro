import React from 'react';

const EXPERIENCE = [
  {
    period: 'Febrero 2023 - Actual',
    role: 'Webmaster Principal',
    company: 'Federación Venezolana de Esgrima',
    description: 'Responsable de la plataforma web oficial, gestionando infraestructuras críticas y asegurando la disponibilidad y seguridad de los contenidos federativos.',
    url: 'https://fencingven.com'
  },
  {
    period: 'Desde el 2015',
    role: 'Diseñador Web Freelancer',
    description: 'Más de 9 años de experiencia liderando proyectos independientes. Evolucionando desde soluciones en Joomla y Wordpress hacia arquitecturas modernas con React y sus derivados.',
    url: 'https://luiscastcode.com'
  },
  {
    period: 'Abril 2021 - Marzo 2022',
    role: 'Diseñador Web en ViralizationMKT',
    company: 'Lima, Perú',
    description: 'Encargado de diseñar y desarrollar experiencias web de alto impacto para clientes internacionales de la agencia, optimizando la conversión y el performance.',
    url: 'https://viralizationmkt.com'
  }
];
  
 
const Experiencia = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="text-blue-500 font-bold text-2xl mb-4">Hola, Soy Luis</h2>
            <p className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Especialista en desarrollo <br />
              <span className="text-gray-500 italic">Frontend con +10 años</span> <br />
              de trayectoria.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
              Cuento con amplia experiencia en el ecosistema digital, especializado inicialmente en CMS como Wordpress, Joomla y PrestaShop.
              Hoy en día, aplico todo el poder de <span className="text-blue-400">React y Next.js</span> para construir productos digitales ligeros, escalables y orientados a resultados.
            </p>

            {/* Social Icons matching the image */}
            <div className="flex gap-4">
              <a href="mailto:cncompusistema@gmail.com" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </a>
              <a href="https://github.com/luiscastcode" target='_blank' className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href=" " target='_blank' className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
              {/* Photo placeholder matching the profile in the image */}
              <div className="w-[320px] h-[450px] md:w-[400px] md:h-[550px] bg-gradient-to-t from-blue-900/20 to-transparent rounded-[40px] border border-white/10 overflow-hidden relative group">
                <img
                  src="/img/yo.png"
                  alt="Luis Castillo"
                  className="  object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white font-bold text-xl">Luis Castillo</p>
                  <p className="text-blue-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section - Styled as a professional timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-white/5 uppercase tracking-tighter absolute left-1/2 -translate-x-1/2 -mt-10 -z-10">Trayectoria</h2>
            <h3 className="text-4xl font-bold">Experiencia Profesional</h3>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="relative space-y-12">
            {/* Timeline vertical line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-white/10 to-transparent"></div>

            {EXPERIENCE.map((item, idx) => (
              <div key={idx} className="relative pl-12 group">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-black border-2 border-blue-600 z-10 group-hover:scale-125 transition-transform duration-300">
                  <div className="absolute inset-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all">
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2 block">{item.period}</span>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h4 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{item.role}</h4>
                    {item.company && (
                      <span className="text-sm font-medium px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-300">
                        {item.company}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {item.description}
                  </p>

                  {idx === 0 && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center gap-2 text-sm font-bold text-yellow-500 hover:text-yellow-400 transition-colors">
                      Ver plataforma
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner based on "Vamos a conversar!" */}
        <div className="mt-40 max-w-5xl mx-auto">
          <div className="relative p-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-[32px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-xy opacity-50 blur-xl"></div>
            <div className="relative bg-black rounded-[28px] p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                ¡Vamos a <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400">conversar!</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Si deseas que tu emprendimiento avance al siguiente nivel escríbeme y te mostraré lo que se puede hacer con los recursos adecuados.
              </p>
              <a href="/contacto" className="inline-block px-12 py-5 bg-yellow-400 text-black font-black text-lg rounded-xl hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_40px_rgba(250,204,21,0.2)]">
                CONTACTO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;