
import React, { useState, useEffect } from 'react'

const apiId = import.meta.env.PUBLIC_API_KEY
const Clima = () => {
  const [listaClima, setListaClima] = useState([
    {
      ciudad: '',
      icono: '',
    }

  ]);
  useEffect(() => {
    async function obtenerClima() {

      const city = 'valencia';
      const country = 'VE';
      const lang = 'es';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}&lang=${lang}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();

      setListaClima([
        {
          ciudad: data.name,
          temp: data.main.temp,
          clima: data.weather[0].description,
          icono: data.weather[0].icon,

        }]);

      console.log(data);

    }
    obtenerClima();
 
  }, []);

   
  return (
    <section className="py-12 border-y border-white/10 bg-gradient-to-r from-blue-900/10 via-black to-purple-900/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-1">Ubicación actual</p>
          <h3 className="text-3xl font-bold">Valencia, Venezuela</h3>
        </div>
        {
          listaClima.map((lista, index) => (
            <div key={index} className="flex items-center gap-6">

              <div className="text-right">
                <p className="text-sm text-gray-400 capitalize">{lista.clima}</p>
                <p className="text-3xl font-bold">{Math.round(lista.temp)}° C</p>
              </div>
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <img className="mx-auto" src={`https://openweathermap.org/img/wn/${lista.icono}@2x.png`} alt="icon"/>

              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
export default Clima;