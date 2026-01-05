import React from 'react';
 

const PROJECTS_DATA = [
  {
    id: '1',
    title: 'CriptoMine',
    description: 'Billetera para criptomonedas, trading, landing page con integración de wallet.',
    image: '/img/proyectos/cripto.jpg',
    tags: ['HTML', 'CSS', 'JS', 'Admin Lite'],
    status: 'COMPRAR',
    url: 'https://www.templatemonster.com/website-templates/criptomine-wallet-website-template-248029.html'
  },
  {
    id: '2',
    title: 'Federación de Esgrima',
    description: 'Página oficial de la federación venezolana de esgrima con gestión de contenidos.',
    image: '/img/proyectos/fencingven.jpg',
    tags: ['Wordpress', 'Elementor'],
    status: 'VISITAR',
    url: 'https://fencingven.com/'
  },
  {
    id: '3',
    title: 'Gotoca Imports',
    description: 'Ecommerce para la empresa importadora de repuestos para camiones Mack.',
    image: '/img/proyectos/gotoca.jpg',
    tags: ['Wordpress', 'WooCommerce'],
    status: 'INACTIVO'
  },
  {
    id: '4',
    title: 'Directorio IA',
    description: 'Directorio de aplicaciones webs impulsadas con inteligencia artificial.',
    image: '/img/proyectos/directorioia.webp',
    tags: ['React', 'Astro'],
    status: 'VISITAR',
    url: 'https://aplicacionesdeia.site/'
  },
  {
    id: '5',
    title: 'Viralization Mkt',
    description: 'Agencia de marketing digital y publicidad radicada en Lima, Perú.',
    image: '/img/proyectos/viralmkt.jpg',
    tags: ['Wordpress', 'Diseño Web'],
    status: 'VISITAR',
    url: 'https://viralizationmkt.com/'
  },
  {
    id: '6',
    title: 'Bodegón Diesel',
    description: 'Tienda retail para venta de repuestos para camiones diesel.',
    image: '/img/proyectos/bd.jpg',
    tags: ['Wordpress', 'Elementor'],
    status: 'INACTIVO'
  }
];
const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:translate-y-[-4px]">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold tracking-wider uppercase bg-white/5 px-2 py-1 rounded text-gray-400">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>
        
        <button 
          className={`w-full py-3 rounded-lg font-semibold text-sm transition-all ${
            project.status === 'VISITAR' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
            project.status === 'COMPRAR' ? 'bg-green-600 hover:bg-green-700 text-white' :
            'bg-white/10 text-gray-400 cursor-not-allowed'
          }`}
          disabled={project.status === 'INACTIVO'}
        >
         <a href={project.status === 'VISITAR' || project.status === 'COMPRAR' ? project.url : '#'} target="_blank" rel="noopener noreferrer">{project.status === 'INACTIVO' ? 'INACTIVO' : project.status}</a>
        </button>
      </div>
    </div>
  );
};

const Proyectos = () => {
  return (
    <section id="proyectos" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Proyectos finalizados</h1>
          <p className="text-gray-400">100% dedicado a crear proyectos que aportan soluciones reales a mis clientes.</p>
        </div>        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;