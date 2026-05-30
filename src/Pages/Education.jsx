import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Sparkles } from 'lucide-react';

const Education = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS when component mounts/updates
  }, []);
  
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Information Technology',
      institution: 'AMA Computer College of Davao',
      period: '2022 - 2025',
      description: 'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering, Artificial Intelligence'
    },
    {
      id: 2,
      degree: 'Science, Technology, Engineering, and Mathematics',
      institution: 'Calinan National High School',
      period: '2016 - 2022',
      description: 'Graduated with honors. Participated in science fairs and coding competitions.'
    }
  ];

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center lg:mb-8 mb-2 px-[5%]">
          <div className="inline-block relative group">
            <h2 
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
              data-aos="zoom-in-up"
              data-aos-duration="600"
            >
              Education
            </h2>
          </div>
          <p 
            className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            My academic journey and qualifications
            <Sparkles className="w-5 h-5 text-purple-400" />
          </p>
        </div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={edu.id}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 p-6"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-gray-300">{edu.institution}</p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

