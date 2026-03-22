import React, { useEffect, useState } from 'react';
import { Bell, Calendar, Info } from 'lucide-react';
import { getNews, type NewsItem } from '../admin/utils/storage';

const notices = [
  {
    id: 1,
    title: "Matric Tie Ceremony",
    date: "March 21, 2026",
    type: "Ceremony",
    content: "The annual Matric Tie Ceremony was a resounding success. View the announcement and photos from the event.",
    image: "/Notices/Matric tie ceremony.jpg",
    link: "/Notices/Tie ceremony announcement.pdf"
  },
  {
    id: 4,
    title: "2026 Admissions Open",
    date: "March 15, 2026",
    type: "Admission",
    content: "Applications for the 2026 academic year are now officially open. Please visit the Admissions portal.",
    image: "/Notices/Prospective updates.jpg"
  },
  {
    id: 5,
    title: "SGB Update",
    date: "March 18, 2026",
    type: "SGB",
    content: "Latest updates from the School Governing Body meeting regarding school developments.",
    image: "/Notices/SGB.jpg"
  }
];

export const NewsSection = () => {
  const [notices, setNotices] = useState<NewsItem[]>(getNews());

  useEffect(() => {
    setNotices(getNews());
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-school-green flex items-center gap-2">
            <Bell className="text-yellow-500" /> News & Notices
          </h2>
          <button className="text-school-green font-semibold hover:underline">View All</button>
        </div>

        {notices.length === 0 ? (
          <div className="text-center py-12 text-gray-400 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            No active notices at this time.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {notices.map((notice) => (
              <div key={notice.id} className="card flex flex-col h-full border-l-4 border-l-school-green overflow-hidden group">
                {notice.image && (
                  <div className="h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                    <img 
                      src={notice.image} 
                      alt={notice.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                    />
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={14} />
                  <span>{notice.date}</span>
                  <span className="ml-auto px-2 py-1 bg-gray-100 rounded text-xs font-bold uppercase tracking-wider">
                    {notice.type || 'Update'}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{notice.title}</h3>
                <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">{notice.content}</p>
                {notice.link ? (
                  <a 
                    href={notice.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-school-green font-bold flex items-center gap-2 hover:underline"
                  >
                    View Document <Info size={16} />
                  </a>
                ) : (
                  <button className="text-school-green font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <Info size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
