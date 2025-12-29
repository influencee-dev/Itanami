
import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Instagram } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_LINK, PHONE_DISPLAY, INSTAGRAM_LINK } from '../constants';

const Contacts: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <h4 className="text-white/50 tracking-[0.4em] uppercase text-xs mb-4 italic font-bold">METTIAMOCI IN CONTATTO</h4>
          <h1 className="text-5xl md:text-8xl font-serif italic mb-6">Prenota o Chiama</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm tracking-widest uppercase">Siamo pronti ad accoglierti o a portarti il gusto di Itanami direttamente a casa.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* WhatsApp CTA */}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-zinc-950 border border-white/10 p-12 flex flex-col items-center justify-center text-center hover:border-[#25D366]/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <MessageSquare size={120} className="text-[#25D366]" />
            </div>
            <div className="bg-[#25D366]/10 p-6 rounded-full mb-8 group-hover:scale-110 transition-transform duration-500">
               <MessageSquare className="text-[#25D366]" size={40} />
            </div>
            <h3 className="text-3xl font-serif mb-4 italic">Prenota tramite WhatsApp</h3>
            <p className="text-gray-500 text-sm mb-8 max-w-xs uppercase tracking-widest leading-loose">Il modo più veloce per riservare il tuo tavolo o ordinare a domicilio.</p>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase border-b border-white pb-1 group-hover:text-[#25D366] group-hover:border-[#25D366] transition-colors">Inizia Conversazione</span>
          </a>

          {/* Phone Call CTA */}
          <a 
            href={PHONE_LINK}
            className="group relative bg-zinc-950 border border-white/10 p-12 flex flex-col items-center justify-center text-center hover:border-[#e61e2a]/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Phone size={120} className="text-[#e61e2a]" />
            </div>
            <div className="bg-[#e61e2a]/10 p-6 rounded-full mb-8 group-hover:scale-110 transition-transform duration-500">
               <Phone className="text-[#e61e2a]" size={40} />
            </div>
            <h3 className="text-3xl font-serif mb-4 italic">Chiamaci Subito</h3>
            <p className="text-gray-500 text-sm mb-4 max-w-xs uppercase tracking-widest leading-loose">Preferisci parlare con noi? Siamo a tua completa disposizione.</p>
            <p className="text-2xl font-bold mb-8 text-white">{PHONE_DISPLAY}</p>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase border-b border-white pb-1 group-hover:text-[#e61e2a] group-hover:border-[#e61e2a] transition-colors">Avvia Chiamata</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Address */}
            <div className="bg-zinc-900/30 p-10 border border-white/5 text-center">
                <MapPin className="mx-auto mb-6 text-gray-500" size={24} />
                <h5 className="font-bold tracking-widest text-[10px] uppercase text-gray-400 mb-4">Indirizzo</h5>
                <p className="text-lg italic font-serif">Via Dante Alighieri 45<br/>71121 Foggia (FG)</p>
            </div>

            {/* Hours */}
            <div className="bg-zinc-900/30 p-10 border border-white/5 text-center">
                <Clock className="mx-auto mb-6 text-gray-500" size={24} />
                <h5 className="font-bold tracking-widest text-[10px] uppercase text-gray-400 mb-4">Orari di Apertura</h5>
                <div className="space-y-2 text-sm">
                    <p><span className="text-gray-500 uppercase text-[9px] tracking-tighter mr-2">LUN - GIO:</span> 12:00-15:00 / 19:00-23:30</p>
                    <p><span className="text-gray-500 uppercase text-[9px] tracking-tighter mr-2">VEN - SAB:</span> 12:00-15:00 / 19:00-00:00</p>
                    <p><span className="text-gray-500 uppercase text-[9px] tracking-tighter mr-2">DOMENICA:</span> 19:00-23:30</p>
                </div>
            </div>

            {/* Social */}
            <div className="bg-zinc-900/30 p-10 border border-white/5 text-center flex flex-col items-center justify-center">
                <Instagram className="mb-6 text-gray-500" size={24} />
                <h5 className="font-bold tracking-widest text-[10px] uppercase text-gray-400 mb-4">Seguici</h5>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-lg italic font-serif hover:text-[#e61e2a] transition-colors">@itanamifusionfg</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
