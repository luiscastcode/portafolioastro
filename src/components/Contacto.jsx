import React from 'react';

const Contacto = () => {
  return (
    <section id="contacto" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-600/5 blur-[120px] -z-10"></div>
      <div className="absolute top-0 right-0 w-1/4 h-1/2 bg-blue-600/5 blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-blue-500 font-bold text-xl mb-4 tracking-wider uppercase">Contacto</h2>
                <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                  Construyamos algo <br/>
                  <span className="text-gray-500 italic">increíble juntos.</span>
                </h3>
                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                  ¿Tienes una idea en mente o un proyecto que necesita un impulso profesional? Estoy listo para ayudarte a hacerlo realidad.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Email</p>
                    <a href="mailto:cncompusistema@gmail.com" className="text-xl font-medium hover:text-blue-400 transition-colors">cncompusistema@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Ubicación</p>
                    <p className="text-xl font-medium">Valencia, Venezuela</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-green-600 group-hover:border-green-500 transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Redes</p>
                    <div className="flex gap-4 mt-1">
                      <a href="www.linkedin.com/in/castilloluisweb2023" target="_blank" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                      <span className="text-white/10">/</span>
                      <a href="https://github.com/luiscastcode" target="_blank" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                      <span className="text-white/10">/</span>
                      <a href="#" target="_blank" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[32px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <div className="relative bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[32px]">
                {/* Formspree Integration */}
                <form action="https://formspree.io/f/xleqevjz" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="full-name" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Nombre Completo</label>
                      <input 
                        type="text" 
                        name="name" 
                        id="full-name" 
                        required 
                        placeholder="Luis Pérez"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Corporativo</label>
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        required 
                        placeholder="tu@empresa.com"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Asunto</label>
                    <input 
                      type="text" 
                      name="subject" 
                      id="subject" 
                      required 
                      placeholder="Nuevo Proyecto / Consultoría"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Tu Mensaje</label>
                    <textarea 
                      name="message" 
                      id="message" 
                      rows={5} 
                      required 
                      placeholder="Cuéntame un poco sobre tu proyecto..."
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-white text-black font-black text-sm uppercase tracking-[0.2em] rounded-xl hover:bg-blue-500 hover:text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-white/5"
                  >
                    Enviar Mensaje
                  </button>

                  <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest">
                    Prometo responder en menos de 24 horas hábiles.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
