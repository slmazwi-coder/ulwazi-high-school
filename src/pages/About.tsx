import React from 'react';
import { motion } from 'motion/react';
import { User, Quote } from 'lucide-react';

export const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">About Nyanga High School</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-school-green mb-6">Our History & Formation</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded on the principles of excellence and community service, Nyanga High School has grown from a local initiative into a regional powerhouse of academic achievement. Located in the heart of Engcobo, our school has consistently served as a beacon of hope for thousands of learners.
              </p>
              <p>
                Our journey began with a simple mission: to provide world-class education to the youth of the Eastern Cape. Over the decades, we have expanded our facilities, refined our curriculum, and built a legacy that is reflected in our motto: "Hitch Your Wagon To The Stars."
              </p>
              <p>
                Today, Nyanga High School is recognized as a leader in Grade 12 results, consistently producing top-tier candidates who go on to excel in universities across South Africa and beyond.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/About/Hero 1.jpg" 
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
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/About/Principal 1.JPG" 
                  alt="Principal" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-school-green">Mr S. Butshingi</h3>
                <p className="text-gray-500">School Principal</p>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-3xl font-bold text-school-green mb-6 italic">Principal's Message</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  "Welcome to Nyanga High School. As the Principal, it is my honor to lead an institution that is so deeply committed to the success of its learners. Our vision is not just about academic results, but about producing holistic citizens who are ready to change the world."
                </p>
                <p>
                  "We believe in the potential of every student. By providing a disciplined, nurturing, and intellectually stimulating environment, we ensure that our learners can truly hitch their wagons to the stars. Our consistent track record in the Matric results is a testament to the hard work of our dedicated staff and the resilience of our students."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section>
          <h2 className="text-3xl font-bold text-school-green mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center group">
                <div className="aspect-square rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-school-green transition-all shadow-md mx-auto max-w-[200px]">
                  <img 
                    src={`https://i.pravatar.cc/300?img=${i + 10}`} 
                    alt="Leader" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg">Staff Member {i}</h4>
                <p className="text-gray-500">Department Head</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
