// src/components/Skills.jsx
import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-20 bg-slate-950 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Technical <span className="text-indigo-500">Stack</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all duration-300">
              
              <div className="flex items-center gap-3 mb-6 text-indigo-400 border-b border-slate-800 pb-3">
                {skillGroup.icon}
                <h3 className="font-bold text-white text-xl">{skillGroup.category}</h3>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-indigo-500/20">
                      <img 
                        src={skill.url} 
                        alt={skill.name} 
                        className="w-8 h-8 md:w-9 md:h-9 object-contain"
                      />
                    </div>
                    <span className="text-xs text-slate-400 font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;