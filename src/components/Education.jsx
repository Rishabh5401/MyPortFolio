// src/components/Education.jsx
import React from 'react';
import { GraduationCap, Star } from 'lucide-react';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-20 bg-slate-900 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">
          Academic <span className="text-indigo-500">Journey</span>
        </h2>
        
        <div className="space-y-12">
          {education.map((edu, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col md:flex-row bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              {/* Image Section (Left) */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img 
                  src={edu.image} 
                  alt={edu.school} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Section (Right) */}
              <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-r from-slate-950 to-slate-900">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <GraduationCap size={24} />
                  </div>
                  <span className="text-indigo-400 font-mono text-sm font-medium px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/10">
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {edu.degree}
                </h3>
                
                <h4 className="text-lg text-slate-400 font-medium mb-6 border-b border-slate-800 pb-4">
                  {edu.school}
                </h4>

                <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 w-fit px-4 py-2 rounded-lg">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;