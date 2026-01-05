import React from 'react'


const Cta = ({ titulo, descrip, nomboton, url, target }) => {
  return (

    <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-blue-600 to-purple-800 p-12 md:p-20 text-center">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">{titulo}</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
          {descrip}
        </p>
        <a href={url} target={target} className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
          {nomboton}
        </a>
      </div>
    </div>

  )
}



export default Cta