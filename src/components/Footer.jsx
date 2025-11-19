// src/components/Footer.jsx
import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Linkedin } from 'lucide-react';

const Footer = ({ personalInfo }) => {
  
  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 relative">
      
      {/* "Back to Top" Button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToTop}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              RS<span className="text-indigo-500">.</span>
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Crafting scalable digital experiences with clean code and modern architecture. Open for freelance projects and full-time opportunities.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            
            <div className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors">
              <Mail size={18} className="text-indigo-500" />
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            
            <div className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors">
              <Phone size={18} className="text-indigo-500" />
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </div>
            
            <div className="flex items-center gap-3 text-slate-400">
              <MapPin size={18} className="text-indigo-500" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Column 3: Social Links (Developer Profiles) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Developer Profiles</h3>
            <div className="flex flex-wrap gap-4">
              
              {/* GitHub */}
              <a 
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 hover:border-white hover:bg-slate-800 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" className="w-5 h-5 opacity-70 group-hover:opacity-100" />
              </a>

              {/* LinkedIn */}
             <a 
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 hover:border-[#0A66C2] hover:bg-slate-800 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                {/* Using Lucide Icon instead of image for reliability */}
                <Linkedin size={20} className="text-slate-400 group-hover:text-[#0A66C2] transition-colors" />
              </a>

              {/* LeetCode */}
              <a 
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 hover:border-[#FFA116] hover:bg-slate-800 transition-all duration-300 group"
                aria-label="LeetCode"
              >
                <img src="https://cdn.simpleicons.org/leetcode/FFA116" alt="LeetCode" className="w-5 h-5 opacity-70 group-hover:opacity-100" />
              </a>

              {/* HackerRank */}
              <a 
                href={personalInfo.socials.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 hover:border-[#2EC866] hover:bg-slate-800 transition-all duration-300 group"
                aria-label="HackerRank"
              >
                <img src="https://cdn.simpleicons.org/hackerrank/2EC866" alt="HackerRank" className="w-5 h-5 opacity-70 group-hover:opacity-100" />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2025 {personalInfo.name}. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;