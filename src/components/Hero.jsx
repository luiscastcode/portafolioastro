
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-8 md:pt-28 pb-20 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      <div className="grid-pattern absolute inset-0 z-0"></div>
      <div className="hero-glow"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/5 border border-white/10 rounded-full text-amber-400 backdrop-blur-sm animate-fade-in">
          Disponible para nuevos proyectos ✨
        </div>
        
        <h1 className="text-4xl md:text-8xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
          Desarrollo y Diseño Web <br className="hidden md:block" />
          Para Emprendimientos
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
          Desarrollo soluciones webs para emprendimientos que desean llevar su empresa a otro nivel con tecnología de vanguardia y diseño de clase mundial.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#proyectos" className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
            Ver Proyectos
          </a>
          <a href="#servicios" className="px-8 py-4 bg-amber-300 border border-white/10 text-gray-900 font-semibold rounded-lg hover:bg-white/10 transition-all">
            Nuestros Servicios
          </a>
        </div>
      </div>

      <div className="mt-20 container mx-auto px-6 flex justify-center">
        <div className="relative group">
           <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
           <div className="relative bg-black rounded-xl border border-white/10 overflow-hidden">
             <div className="flex items-center gap-2 bg-white/5 px-4 py-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
             </div>
             <div className="p-4 md:p-8">
                <code className="text-blue-400 font-mono text-sm md:text-base">
                  <span className="text-purple-400">const</span> developer = <span className="text-yellow-400">{`{`}</span><br/>
                  &nbsp;&nbsp;name: <span className="text-green-400">'Luis Cast'</span>,<br/>
                  &nbsp;&nbsp;role: <span className="text-green-400">'Full Stack Architect'</span>,<br/>
                  &nbsp;&nbsp;tech: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'Gemini AI'</span>]<br/>
                  <span className="text-yellow-400">{`}`}</span>;
                </code>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;