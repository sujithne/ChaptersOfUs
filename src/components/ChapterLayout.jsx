import React from 'react';
import { motion } from 'framer-motion';

const ChapterLayout = ({ chapter, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div id={chapter.id} className="min-h-screen relative overflow-hidden bg-romantic-cream py-24">
      
      {/* Background Image Parallax layer */}
      <div className="absolute inset-x-0 top-0 h-[60vh] md:h-screen w-full -z-10 bg-black">
        <motion.div 
          className="w-full h-full opacity-30 md:opacity-20 will-change-transform"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={chapter.genericImage} 
            alt="Atmosphere" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-romantic-cream/50 to-romantic-cream md:to-romantic-cream/90" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 h-full z-10 relative">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
          
          {/* Narrative Text Content - No Headers */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-2xl md:text-4xl font-serif text-gray-900 font-medium leading-relaxed md:leading-snug">
              {chapter.description}
            </p>
          </motion.div>

          {/* Photos Layout (Scrapbook Style) */}
          <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-[700px] flex items-center justify-center">
            {chapter.photos.map((photo, i) => {
              // Creating a scattered look with more overlap
              const positions = [
                'z-10 -ml-12 md:-ml-24 mt-0',
                'z-20 mt-32 md:mt-48 ml-8',
                'z-30 -mt-24 md:-mt-32 ml-16 md:ml-32',
                'z-40 mt-12 md:mt-24 -ml-20',
                'z-50 -mt-40 md:-mt-56 -ml-32',
                'z-10 mt-56 ml-32',
                'z-20 ml-48'
              ];
              const posClass = positions[i % positions.length];

              return (
                <motion.div
                  key={i}
                  className={`absolute ${posClass} ${photo.tilt}`}
                  initial={{ opacity: 0, y: 50, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: parseFloat(photo.tilt.replace('rotate-', '').replace('-', '-')) || 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.2, type: "spring", stiffness: 50 }}
                  whileHover={{ scale: 1.05, zIndex: 100 }}
                >
                  <div className="polaroid w-48 md:w-64 max-w-[80vw] bg-white p-3 shadow-xl flex flex-col">
                    <div className="aspect-[3/4] overflow-hidden bg-gray-200">
                      <img 
                        src={photo.src} 
                        alt={photo.caption} 
                        className="w-full h-full object-cover border border-gray-100"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14px' fill='%239ca3af'%3EMissing Photo%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    {/* Emotion-based narrative caption */}
                    <div className="text-center font-serif text-sm italic mt-4 mb-1 text-gray-800 leading-snug">
                      "{photo.caption}"
                    </div>
                    {/* Location Name displayed strictly below the picture/caption */}
                    <div className="text-center font-sans uppercase tracking-[0.2em] text-[10px] text-gray-400 mt-2 border-t border-gray-100 pt-2">
                      {photo.location}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChapterLayout;
