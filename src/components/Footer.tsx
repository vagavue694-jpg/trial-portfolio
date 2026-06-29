import { motion } from 'motion/react';
import { Linkedin, Instagram } from 'lucide-react';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 py-12 md:py-16 text-stone-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-2xl font-serif text-white tracking-tight mb-2">
            Liuqing<span className="text-stone-500">_VA</span>
          </a>
          <p className="text-sm">Giving you back the luxury of time.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors p-2 rounded-full hover:bg-stone-800">
            <span className="sr-only">TikTok</span>
            <TikTokIcon size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/liuqing-va-virtualassistant-adminsupportleadgenerationsocialmediamanagementecommerceproductlister/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors p-2 rounded-full hover:bg-stone-800"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors p-2 rounded-full hover:bg-stone-800">
            <span className="sr-only">Instagram</span>
            <Instagram size={20} />
          </a>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Liuqing VA Services. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
