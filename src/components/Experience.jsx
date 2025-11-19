import React from 'react';
import { ChevronRight } from 'lucide-react';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="py-20 bg-slate-900 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional <span className="text-indigo-500">Experience</span></h2>
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-800 hover:border-indigo-500 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-900 border-2 border-indigo-500 rounded-full"></div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-800">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-indigo-400 text-sm font-mono">{exp.period}</span>
                </div>
                <p className="text-slate-400 mb-4 font-medium">{exp.company} | {exp.location}</p>
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                      <ChevronRight size={16} className="mt-0.5 text-indigo-500 flex-shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;