import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { User, Quote } from 'lucide-react';
import { getAbout, type AboutInfo } from '../admin/utils/storage';

export const About = () => {
  const [data, setData] = useState<AboutInfo>(getAbout());

  useEffect(() => {
    setData(getAbout());
  }, []);
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">About Ulwazi High School</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-school-green mb-6">Our History & Formation</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {data.historyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[400px]"
          >
            <img 
              src="/About/Principal 2.jpg" 
              alt="School Campus" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Principal's Message */}
        <section className="bg-gray-50 rounded-3xl p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-school-green/10">
            <Quote size={120} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="col-span-1">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg relative group">
                <img 
                  src="/About/principal.jpg" 
                  alt="Principal" 
                  className="w-full h-full object-cover object-top"
                />
                <a 
                  href="/About/About.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-school-green/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold gap-2"
                >
                  View Profile Info (PDF)
                </a>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-school-green">{data.principalName}</h3>
                <p className="text-gray-500">{data.principalTitle}</p>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-3xl font-bold text-school-green mb-6 italic">Principal's Message</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {data.principalMessage.map((p, i) => (
                  <p key={i}>"{p}"</p>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
