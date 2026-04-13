import React from 'react';
import { motion } from 'framer-motion';

const MasterMoment = () => {
  return (
    <div className="relative min-h-[120vh] bg-black text-white flex flex-col items-center justify-center overflow-hidden py-32 px-4 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-20">
      
      {/* Subtle glowing animated background for emotional peak */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-romantic-rose/10 blur-[120px] rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-500/10 blur-[80px] rounded-full"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="z-10 flex flex-col items-center max-w-4xl w-full">
        
        <motion.p
          className="text-romantic-warm font-serif italic text-xl md:text-3xl text-center mb-16 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
        >
          But out of all the places we've been, and all the memories we've made... my favorite place in the world is right here, with you.
        </motion.p>

        {/* Master Image Container */}
        <motion.div 
          className="relative w-full max-w-3xl aspect-[4/5] md:aspect-auto md:h-[70vh] bg-zinc-900 border border-white/10 p-2 shadow-2xl shadow-yellow-900/20"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="w-full h-full overflow-hidden relative">
            <motion.img 
              src="/images/user/Master.JPG" 
              alt="Us" 
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 10, ease: "easeOut" }}
            />
            {/* Inner vignette for cinematic feel */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />
          </div>
        </motion.div>

        <motion.p
          className="mt-12 text-sm tracking-[0.3em] uppercase text-gray-400 font-sans"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
        >
          Our Moment
        </motion.p>

      </div>
    </div>
  );
};

export default MasterMoment;
