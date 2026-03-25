import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-school-red text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Ulwazi High School</h3>
            <p className="text-red-100 mb-6 italic">
              "Knowledge is power"
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100075654618001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Ulwazi High School on Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Contact Us</h4>
            <ul className="space-y-4 text-red-100">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1" size={18} />
                <span>Mdantsane NU2, East London, South Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>043 760 0356</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>ulwazihigh@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Quick Links</h4>
            <ul className="space-y-3 text-red-100">
              <li><a href="/about" className="hover:text-white transition-colors">About Our School</a></li>
              <li><a href="/documents" className="hover:text-white transition-colors">Student Portal</a></li>
              <li><a href="/achievements" className="hover:text-white transition-colors">Hall of Fame</a></li>
              <li><a href="/admissions" className="hover:text-white transition-colors">Apply Online</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">School Hours</h4>
            <ul className="space-y-3 text-red-100">
              <li className="flex justify-between"><span>Mon - Thu:</span> <span>07:30 - 15:30</span></li>
              <li className="flex justify-between"><span>Friday:</span> <span>07:30 - 13:30</span></li>
              <li className="flex justify-between"><span>Sat - Sun:</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-red-100 text-sm">
          <p>© {new Date().getFullYear()} Ulwazi High School. All Rights Reserved.</p>
          <Link to="/admin/login" className="text-red-100/30 hover:text-red-100/60 text-xs mt-4 inline-block transition-colors">Staff Portal</Link>
        </div>
      </div>
    </footer>
  );
};
