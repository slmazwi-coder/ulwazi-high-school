import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: "/Hero/Hero%201.jpg",
    caption: "Excellence in Education Since 1990"
  },
  {
    url: "/Hero/Achievers%205.jpg",
    caption: "Celebrating Our Triumphs"
  },
  {
    url: "/Hero/Chris%20Hani%20District%20Top%20Achievers.jpg",
    caption: "District Top Achievers"
  },
  {
    url: "/Hero/Matric%20prayer.jpg",
    caption: "A Tradition of Success"
  },
  {
    url: "/Hero/Spelling%20bee%20achievers.jpg",
    caption: "Nurturing Future Leaders"
  },
  {
    url: "/Hero/Top%20achievrs%202.jpg",
    caption: "Dedicated to Excellence"
  },
  {
    url: "/Hero/achievers%203.jpg",
    caption: "Empowering Students"
  },
  {
    url: "/Hero/achievers%204.jpg",
    caption: "Building Brighter Futures"
  },
  {
    url: "/Hero/prayer%202.jpg",
    caption: "Guided by Faith and Knowledge"
  },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-school-green">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex].url}
            alt={slides[currentIndex].caption}
            className="h-full w-full object-contain object-center opacity-50"
          />
          <div className="absolute bottom-20 left-0 right-0 text-center z-20">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={`caption-${currentIndex}`}
              className="text-white/80 text-lg md:text-xl font-medium tracking-wide uppercase"
            >
              {slides[currentIndex].caption}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          NYANGA HIGH SCHOOL
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl font-light italic"
        >
          "Hitch Your Wagon To The Stars"
        </motion.p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <button className="btn-primary bg-white text-school-green hover:bg-gray-100">
            Admissions 2026
          </button>
          <button className="btn-primary border-2 border-white bg-transparent hover:bg-white/10">
            Learn More
          </button>
        </motion.div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors">
        <ChevronLeft size={32} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors">
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`h-2 w-2 rounded-full transition-colors ${i === currentIndex ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};
