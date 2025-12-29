
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ArrowUp } from 'lucide-react';
import { LOGO_URL, WHATSAPP_LINK, PHONE_DISPLAY, INSTAGRAM_LINK } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0e14] pt-32 pb-16 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Logo in Negativo */}
        <div className="mb-12">
           <img 
            src={LOGO_URL} 
            alt="Logo Itanami" 
            className="h-20 w-auto mx-auto mb-8 invert brightness-0 hover:opacity-80 transition-opacity" 
           />
        </div>

        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500 mb-4">LUNEDÌ - SABATO : SERVIZIO FINO ALLE 24:00</p>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-2">VIA DANTE ALIGHIERI 45, FOGGIA (FG), 71121</p>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-10">{PHONE_DISPLAY}</p>
        
        <div className="mb-12">
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-bold tracking-[0.3em] uppercase border-b-2 border-white pb-2 hover:text-[#e61e2a] hover:border-[#e61e2a] transition-all"
          >
            Prenota un Tavolo
          </a>
        </div>

        {/* Social - Only Instagram */}
        <div className="flex justify-center space-x-8 mb-16">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <Instagram size={20} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
          </a>
        </div>

        <div className="border-t border-white/5 pt-12">
          <p className="text-[9px] tracking-[0.4em] text-white/30 uppercase max-w-2xl mx-auto leading-loose">
            © 2024 ITANAMI FUSION RESTAURANT. TUTTI I DIRITTI RISERVATI.
          </p>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute bottom-16 right-10 bg-[#e61e2a] p-3 text-white hover:bg-white hover:text-black transition-all"
        aria-label="Torna su"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
};

export default Footer;
