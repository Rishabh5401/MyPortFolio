import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = ({ personalInfo }) => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-slate-900 pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Text & Resume */}
        <div className="text-center md:text-left space-y-8 order-2 md:order-1">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Available for Hire
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Social Links - UPDATED WITH LEETCODE & HACKERRANK */}
          <div className="flex items-center justify-center md:justify-start gap-5">
            
            {/* GitHub */}
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>

            {/* LinkedIn */}
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors transform hover:scale-110">
              <Linkedin size={28} />
            </a>

            {/* LeetCode */}
            <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="transform hover:scale-110 transition-transform">
              <img 
                src="https://cdn.simpleicons.org/leetcode/white" 
                alt="LeetCode" 
                className="w-7 h-7 opacity-60 hover:opacity-100 hover:text-[#FFA116] transition-all"
                style={{ filter: 'grayscale(100%) brightness(1.5)', transition: 'all 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.filter = 'none'}
                onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%) brightness(1.5)'}
              />
            </a>

            {/* HackerRank */}
            <a href={personalInfo.socials.hackerrank} target="_blank" rel="noreferrer" className="transform hover:scale-110 transition-transform">
              <img 
                src="https://cdn.simpleicons.org/hackerrank/2EC866" 
                alt="HackerRank" 
                className="w-7 h-7 opacity-60 hover:opacity-100 transition-all"
                style={{ filter: 'grayscale(100%) brightness(1.5)', transition: 'all 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.filter = 'none'}
                onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%) brightness(1.5)'}
              />
            </a>

            {/* Email */}
            <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-red-500 transition-colors transform hover:scale-110">
              <Mail size={28} />
            </a>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-3.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 text-center"
            >
              View My Work
            </a>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-slate-700 text-slate-300 rounded-xl font-medium hover:bg-slate-800 hover:text-white transition-colors flex items-center justify-center gap-2 group"
            >
              <FileText size={18} className="group-hover:translate-y-1 transition-transform" /> 
              View Resume
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Profile Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;