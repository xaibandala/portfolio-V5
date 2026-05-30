import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

// Technology icons mapping
const techIcons = {
  'React': 'reactjs.svg',
  'Node.js': 'nodejs.svg',
  'Vue': 'vite.svg',
  'Express': 'nodejs.svg',
  'HTML': 'html.svg',
  'CSS': 'css.svg',
  'JavaScript': 'javascript.svg',
  'Tailwind': 'tailwind.svg',
  'Bootstrap': 'bootstrap.svg',
  'Material UI': 'MUI.svg',
  'Firebase': 'firebase.svg',
  'Vercel': 'vercel.svg'
};

const CardProject = ({ 
  id,
  title,
  description,
  image,
  technologies = [],
  github,
  demo 
}) => {
  const handleLiveDemo = (e) => {
    if (!demo) {
      e.preventDefault();
      alert("Live demo is not available for this project");
    }
  };
  
  const handleDetails = (e) => {
    if (!id) {
      e.preventDefault();
      alert("Project details are not available");
    }
  };
  

  return (
    <div className="group relative w-full">
            
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    
        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg aspect-video">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {title}
            </h3>
            
            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2 h-12">
              {description}
            </p>
            
            {/* Technology Stack */}
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-3">
                {technologies.slice(0, 4).map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 group relative"
                    title={tech}
                  >
                    {techIcons[tech] ? (
                      <img 
                        src={`/${techIcons[tech]}`} 
                        alt={tech} 
                        className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
                      />
                    ) : (
                      <span className="text-sm font-medium text-white">{tech.charAt(0)}</span>
                    )}
                    <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {tech}
                    </div>
                  </div>
                ))}
                {technologies.length > 4 && (
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200" title={`${technologies.length - 4} more technologies`}>
                    <span className="text-sm font-medium text-white">+{technologies.length - 4}</span>
                  </div>
                )}
              </div>
            )}
            
            <div className="pt-2 flex items-center justify-between">
              {demo ? (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm">Demo Not Available</span>
              )}
              
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                <span className="text-sm font-medium">GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;