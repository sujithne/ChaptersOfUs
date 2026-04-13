import React from 'react';
import { motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';
import { Heart } from 'lucide-react';

const FinalPage = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center relative overflow-hidden py-24 px-6 text-center">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-romantic-rose/20 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        className="z-10 max-w-2xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-romantic-rose mb-8"
        >
          <Heart size={48} fill="currentColor" />
        </motion.div>

        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">
          To You <span className="text-romantic-rose">❤</span>
        </h2>

        <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 text-gray-300 font-serif italic text-balance">
          "Every picture tells a story, but our story is my favorite. 
          Here's to the memories we've made and to the countless chapters yet to be written. 
          Happy Birthday. I love you."
        </p>

        <button 
          onClick={() => scroll.scrollToTop({ duration: 1500, smooth: "easeInOutQuart" })}
          className="px-8 py-4 bg-romantic-rose hover:bg-rose-500 text-zinc-900 font-semibold rounded-full transition-colors flex items-center gap-2 uppercase tracking-wider text-sm"
        >
          Replay Our Story
        </button>
      </motion.div>
      
    </div>
  );
};

export default FinalPage;
