import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-900">
      {/* Background with an overlay */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-50"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/generic/landing-bg.jpg`} 
          alt="Landing Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 mix-blend-multiply" />
      </motion.div>

      {/* Floating particles effect (simple CSS approach) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse mix-blend-screen" />

      {/* Content */}
      <div className="z-20 text-center text-white px-6">
        <motion.h1 
          className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-wide shadow-black drop-shadow-2xl text-romantic-cream"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Chapters of Us <span className="text-romantic-rose">❤</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-sans font-light mb-12 text-gray-200 drop-shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Our Story, One Memory at a Time
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Link 
            to="chapter1" 
            smooth={true} 
            duration={800} 
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full font-medium transition-all hover:scale-105 active:scale-95"
          >
            Start the Journey
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
