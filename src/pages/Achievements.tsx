import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Star, TrendingUp, BarChart3, Medal, Calendar } from 'lucide-react';

const resultsData = {
  "2025": {
    overall: 89.9,
    bachelor: 206,
    bachelorRate: 71.8,
    distinctions: 451,
    wrote: 287,
    subjects: [
      { subject: "Accounting", rate: 90.6 },
      { subject: "Agricultural Sciences", rate: 97.9 },
      { subject: "Business Studies", rate: 98.1 },
      { subject: "Economics", rate: 96.2 },
      { subject: "English FAL", rate: 100 },
      { subject: "Geography", rate: 99.3 },
      { subject: "IsiXhosa HL", rate: 100 },
      { subject: "History", rate: 97.9 },
      { subject: "Life Orientation", rate: 100 },
      { subject: "Life Sciences", rate: 97 },
      { subject: "Mathematics", rate: 71.1 },
      { subject: "Physical Sciences", rate: 82.1 },
    ]
  },
  "2024": {
    overall: 85.4,
    bachelor: 195,
    bachelorRate: 68.2,
    distinctions: 398,
    wrote: 286,
    subjects: [
      { subject: "Accounting", rate: 88.5 },
      { subject: "Agricultural Sciences", rate: 95.0 },
      { subject: "Business Studies", rate: 94.2 },
      { subject: "Economics", rate: 92.1 },
      { subject: "English FAL", rate: 98.4 },
      { subject: "Geography", rate: 96.0 },
      { subject: "IsiXhosa HL", rate: 99.1 },
      { subject: "History", rate: 95.5 },
      { subject: "Life Orientation", rate: 100 },
      { subject: "Life Sciences", rate: 94.2 },
      { subject: "Mathematics", rate: 68.5 },
      { subject: "Physical Sciences", rate: 79.0 },
    ]
  },
  "2023": {
    overall: 82.1,
    bachelor: 178,
    bachelorRate: 64.5,
    distinctions: 345,
    wrote: 276,
    subjects: [
      { subject: "Accounting", rate: 85.0 },
      { subject: "Agricultural Sciences", rate: 92.5 },
      { subject: "Business Studies", rate: 91.0 },
      { subject: "Economics", rate: 89.5 },
      { subject: "English FAL", rate: 97.0 },
      { subject: "Geography", rate: 93.5 },
      { subject: "IsiXhosa HL", rate: 98.5 },
      { subject: "History", rate: 94.0 },
      { subject: "Life Orientation", rate: 100 },
      { subject: "Life Sciences", rate: 91.5 },
      { subject: "Mathematics", rate: 65.0 },
      { subject: "Physical Sciences", rate: 75.5 },
    ]
  }
} as const;

const bestEverStudents = [
  { name: "Sipho Ndlovu", title: "National Top Achiever", year: "2018", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400", desc: "Achieved 100% in Mathematics and Physical Sciences" },
  { name: "Jane Smith", title: "Provincial Number 1", year: "2021", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400", desc: "7 Distinctions, top student in Eastern Cape" },
  { name: "Lwazi Mokoena", title: "Top Achiever in Commerce", year: "2019", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=400", desc: "98% in Accounting and Economics" },
  { name: "Thandiwe Sisulu", title: "Overall Distinction", year: "2022", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400", desc: "8 Distinctions with 95% average" },
  { name: "Michael Chang", title: "Provincial Top 5", year: "2016", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", desc: "Exceptional performance in Sciences" },
];

const topAchieversByYear: Record<string, {name: string, achievement: string, image: string}[]> = {
  "2025": [
    { name: "Top Achiever 1", achievement: "7 Distinctions", image: "/Achievements/HALL OF FAME/2025/Achievers 5.jpg" },
    { name: "Top Achiever 2", achievement: "6 Distinctions", image: "/Achievements/HALL OF FAME/2025/achievers 3.jpg" },
    { name: "Top Achiever 3", achievement: "Top in Math", image: "/Achievements/HALL OF FAME/2025/achievers 4.jpg" },
  ],
  "2024": [
    { name: "Top Achiever 1", achievement: "Overall Best", image: "/Achievements/HALL OF FAME/2024/1.jpg" },
  ],
  "2023": [
    { name: "Top Achiever 1", achievement: "7 Distinctions", image: "/Achievements/HALL OF FAME/2023/1.jpg" },
    { name: "Top Achiever 2", achievement: "Top in Physics", image: "/Achievements/HALL OF FAME/2023/2.jpg" },
    { name: "Top Achiever 3", achievement: "Top in English", image: "/Achievements/HALL OF FAME/2023/3.jpg" },
  ],
};

for (let year = 2015; year <= 2022; year++) {
  topAchieversByYear[year.toString()] = [
    { name: `Outstanding Student 1`, achievement: "Multiple Distinctions", image: `https://i.pravatar.cc/400?img=${year % 70}` },
    { name: `Outstanding Student 2`, achievement: "Top Performer", image: `https://i.pravatar.cc/400?img=${(year % 70) + 1}` },
  ];
}

export const Achievements = () => {
  const [activeResultsYear, setActiveResultsYear] = useState<"2025"|"2024"|"2023">("2025");
  const [activeAchieversYear, setActiveAchieversYear] = useState<string>("2025");

  const yearsList = Object.keys(topAchieversByYear).sort((a,b) => parseInt(b) - parseInt(a));
  const currentResults = resultsData[activeResultsYear];

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title text-center mb-16">Academic Excellence</h1>

        {/* --- HALL OF FAME: 5 BEST EVER --- */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-school-green mb-4 flex items-center justify-center gap-4">
              <Trophy className="text-yellow-500 w-12 h-12" />
              Hall of Fame
              <Trophy className="text-yellow-500 w-12 h-12" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating our 5 best ever students recorded who have left an indelible mark on Nyanga High School history.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {bestEverStudents.map((student, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm w-full md:w-[300px] border border-gray-100"
              >
                <div className="h-64 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-school-green/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 right-0 bg-yellow-400 text-yellow-900 font-bold px-4 py-1 rounded-tl-xl z-20">
                    Class of {student.year}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{student.name}</h3>
                  <div className="text-school-green font-bold mb-3 flex items-center justify-center gap-1">
                    <Medal size={18} /> {student.title}
                  </div>
                  <p className="text-gray-600 text-sm">{student.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* --- MATRIC RESULTS BY YEAR --- */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-school-green flex items-center gap-3">
              <BarChart3 className="text-school-green" /> Matric Results Overview
            </h2>
            <div className="flex gap-2 mt-4 md:mt-0 bg-gray-100 p-1 rounded-xl">
              {(["2025", "2024", "2023"] as const).map(year => (
                <button
                  key={year}
                  onClick={() => setActiveResultsYear(year)}
                  className={`px-6 py-2 rounded-lg font-bold transition-all ${activeResultsYear === year ? 'bg-school-green text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeResultsYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-school-green rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden mb-12">
                <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                  <TrendingUp size={200} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Star className="text-yellow-400" /> {activeResultsYear} Performance Summary
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                      <p className="text-4xl md:text-5xl font-bold mb-2">{currentResults.overall}%</p>
                      <p className="text-green-100 font-medium">Overall Pass Rate</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                      <p className="text-4xl md:text-5xl font-bold mb-2">{currentResults.bachelor}</p>
                      <p className="text-green-100 font-medium">Bachelor Passes ({currentResults.bachelorRate}%)</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                      <p className="text-4xl md:text-5xl font-bold mb-2">{currentResults.distinctions}</p>
                      <p className="text-green-100 font-medium">Total Distinctions</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                      <p className="text-4xl md:text-5xl font-bold mb-2">{currentResults.wrote}</p>
                      <p className="text-green-100 font-medium">Learners Wrote</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-8">{activeResultsYear} Subject Pass Rates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentResults.subjects.map((stat, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-gray-700">{stat.subject}</span>
                        <span className="text-school-green font-bold">{stat.rate}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.rate}%` }}
                          transition={{ duration: 1, delay: i * 0.05 }}
                          className="bg-school-green h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>


        {/* --- TOP ACHIEVERS PER YEAR TABS --- */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-green flex items-center justify-center gap-3 mb-4">
              <Calendar className="text-school-green" /> Top Achievers Timeline
            </h2>
            <p className="text-gray-600">Select a year to view our outstanding achievers from 2015 to 2025.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {yearsList.map(year => (
              <button
                key={year}
                onClick={() => setActiveAchieversYear(year)}
                className={`px-5 py-2 rounded-full font-bold transition-all ${
                  activeAchieversYear === year 
                    ? 'bg-school-green text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-school-green hover:text-school-green'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeAchieversYear}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {topAchieversByYear[activeAchieversYear]?.map((person, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden text-center group">
                  <div className="aspect-square w-full relative overflow-hidden bg-gray-100">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{person.name}</h3>
                    <p className="text-sm font-semibold text-school-green mb-3">{person.achievement}</p>
                    <span className="text-xs uppercase tracking-wider font-bold text-gray-400">Class of {activeAchieversYear}</span>
                  </div>
                </div>
              ))}
              
              {(!topAchieversByYear[activeAchieversYear] || topAchieversByYear[activeAchieversYear].length === 0) && (
                <div className="col-span-full py-12 text-center text-gray-400">
                  <p>Images for {activeAchieversYear} will be added soon.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>

      </div>
    </div>
  );
};
