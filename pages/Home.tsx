
import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_DATA, WHATSAPP_LINK, ADDRESS_DISPLAY, PHONE_DISPLAY } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative bg-black overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden z-0">
        <div className="absolute inset-0 z-0 scale-105">
          <img 
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=2000" 
            alt="Sfondo preparazione sushi" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto mb-20">
          <h4 className="text-white/70 text-[10px] font-bold tracking-[0.4em] uppercase mb-6 animate-in fade-in duration-1000">
            FUSION RESTAURANT & SUSHI EXPERIENCE
          </h4>
          <h1 className="text-7xl md:text-[11rem] font-sans font-black uppercase tracking-tighter text-white mb-10 leading-none animate-in slide-in-from-bottom-8 duration-1000">
            ITANAMI
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/30 text-white px-10 py-4 text-[11px] font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 uppercase"
            >
              Prenota un Tavolo
            </a>
            <Link 
              to="/menu"
              className="inline-block bg-[#e61e2a] text-white px-10 py-4 text-[11px] font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 uppercase"
            >
              Sfoglia il Menu
            </Link>
          </div>
        </div>

        {/* Info Box */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 w-[90%] max-w-2xl bg-white text-black py-12 px-8 shadow-2xl flex flex-col items-center justify-center text-center">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-gray-500">APERTO TUTTI I GIORNI • SERVIZIO FINO A TARDI</p>
          <p className="text-xs font-bold tracking-[0.2em] uppercase">{ADDRESS_DISPLAY.toUpperCase()}</p>
          <p className="text-xs font-bold tracking-[0.2em] uppercase mt-1">{PHONE_DISPLAY}</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative z-20 bg-black -mt-20 pt-48 pb-32">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
          <img src="https://images.freeimages.com/vimages/torii-gate-silhouette-vector-icon-1627993.jpg" className="h-96 invert" alt="Torii Gate" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500 mb-6 italic">L'ECCELLENZA DEL GUSTO</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Il meglio della cucina fusion a Foggia. <br /> Ordina ora o vieni a trovarci in sede.
          </h2>
        </div>
      </section>

      {/* Category Grid */}
      <section className="relative z-20 bg-black pb-32 px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1400px] mx-auto">
          {[
            { name: 'Sushi', img: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=600' },
            { name: 'Pokè', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600' },
            { name: 'Uramaki', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600' },
            { name: 'Tacos', img: 'https://images.unsplash.com/photo-1599974597259-471395e82f18?auto=format&fit=crop&q=80&w=600' }
          ].map((cat) => (
            <div key={cat.name} className="group relative aspect-[4/5] overflow-hidden cursor-pointer">
              <img 
                src={cat.img} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-start justify-center pt-12">
                <h3 className="text-2xl font-serif text-white tracking-widest">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-32 bg-zinc-950 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500 mb-6">IL NOSTRO MENU</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Le Specialità Itanami</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {MENU_DATA.filter(i => i.popular).concat(MENU_DATA.slice(0, 4)).slice(0, 8).map((item) => (
              <div key={item.id} className="flex flex-col group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center flex-grow">
                    <h3 className="text-lg font-serif text-white group-hover:text-[#e61e2a] transition-colors">{item.name}</h3>
                    <div className="dot-leader"></div>
                  </div>
                  <span className="text-lg font-bold text-white">€{item.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-start">
                  <p className="text-sm text-gray-500 max-w-[80%]">{item.description}</p>
                  {item.popular && (
                    <span className="bg-[#e61e2a] text-white text-[8px] font-bold px-2 py-0.5 tracking-tighter uppercase">Consigliato</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/menu" className="text-xs font-bold tracking-[0.3em] uppercase border-b border-gray-700 pb-1 hover:border-white transition-all">Sfoglia il Menu Completo</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-20 py-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000" alt="Ristorante" className="w-full h-full object-cover brightness-[0.2]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-8">VIENI A TROVARCI</p>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 italic">L'Atmosfera del Sol Levante</h2>
          <p className="max-w-xl mx-auto text-gray-400 text-sm leading-relaxed mb-12 italic">
            Esperienza fusion tra tradizione e innovazione. Ogni piatto è un viaggio sensoriale curato nei minimi dettagli dai nostri chef.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold tracking-[0.3em] uppercase border-b-2 border-white pb-2 hover:text-[#e61e2a] hover:border-[#e61e2a] transition-all"
          >
            Prenota Ora
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
