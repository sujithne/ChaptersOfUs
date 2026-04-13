import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';

const OurJourney = () => {

  return (
    <div className="min-h-screen bg-romantic-cream py-24 relative overflow-hidden flex flex-col items-center">
      
      {/* Aesthetic Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#e8d5c4_0%,_transparent_70%)]" />
      </div>

      <div className="text-center z-10 mb-20">
        <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4 text-romantic-rose">Our Journey</h2>
        <p className="font-handwriting text-2xl text-gray-500">Every little moment that brought us here...</p>
      </div>

      <div className="relative w-full max-w-3xl mx-auto px-4 z-10 flex flex-col items-center">
        {/* The Central Line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-romantic-rose/50 to-transparent left-1/2 -translate-x-1/2" />

        {/* Timeline Nodes */}
        {timelineData.map((milestone, index) => {
          return (
            <div 
              key={milestone.id} 
              className="relative w-full flex justify-center py-10"
            >
              {/* Timeline Center Dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-romantic-rose rounded-full z-20 shadow-[0_0_10px_rgba(226,167,169,0.8)] border-2 border-white" />

              {/* Date and Location Container */}
              <motion.div 
                className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-full px-8 py-4 shadow-sm z-30 cursor-pointer flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-romantic-rose font-sans font-bold tracking-wider text-sm mb-1 uppercase">
                  {milestone.date}
                </div>
                <div className="text-gray-800 font-serif text-lg">
                  {milestone.location}
                </div>
              </motion.div>

              {/* Floating Doodles Gallery */}
              {milestone.doodles.map((doodle, i) => {
                const IconComponent = doodle.icon;
                return (
                  <motion.div
                    key={doodle.id}
                    className={`absolute ${doodle.position} ${doodle.rotate} hidden md:flex flex-col items-center pointer-events-none`}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.15 }}
                  >
                    <div className="text-gray-400 mb-2">
                      <IconComponent size={32} strokeWidth={1.5} />
                    </div>
                    <div className="font-handwriting text-2xl text-gray-500 whitespace-nowrap bg-white/50 px-2 rounded backdrop-blur-sm -rotate-3 border border-gray-100 shadow-sm">
                      {doodle.label}
                    </div>
                  </motion.div>
                );
              })}

            </div>
          );
        })}
      </div>

      <div className="mt-20 font-handwriting text-3xl text-gray-400 text-center px-4" style={{ transform: 'rotate(-2deg)' }}>
        ...and so many more to come!
      </div>
      
    </div>
  );
};

export default OurJourney;
