// src/components/Projects.jsx
import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = ({ projects }) => {
  // State to manage how many projects are visible
  // Initially show only 4 projects (2 rows on desktop)
  const [showAll, setShowAll] = useState(false);

  // If showAll is true, use the full length, otherwise just 4
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 bg-slate-900 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Featured <span className="text-indigo-500">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {visibleProjects.map((project, idx) => (
            <div key={idx} className="group bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col">
              
              {/* Project Image Area */}
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-all duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Tech Tags Overlay */}
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                   {project.tech.slice(0, 2).map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-900/90 backdrop-blur-sm text-indigo-400 text-xs font-bold rounded-full border border-indigo-500/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-indigo-500 text-sm font-medium tracking-wide">
                    {project.subtitle}
                  </p>
                </div>
                
                <p className="text-slate-400 mb-8 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.links.code} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 transition-colors border border-slate-700"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg ${
                      project.links.demo === "#" 
                      ? "bg-slate-800 text-slate-500 cursor-not-allowed" // Disabled style if no link
                      : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/20"
                    }`}
                    // Disable click if link is "#"
                    onClick={(e) => project.links.demo === "#" && e.preventDefault()}
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        {projects.length > 4 && (
          <div className="text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-slate-800 text-white font-medium hover:bg-indigo-600 transition-all hover:shadow-lg hover:shadow-indigo-500/25 border border-slate-700 hover:border-indigo-500"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  Show More ({projects.length - 4} more) <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;