
import React, { useState } from 'react';
import { MenuCategory } from '../types';
import { MENU_DATA, WHATSAPP_NUMBER } from '../constants';
import { ShoppingCart, Plus, Minus, X, ChevronRight } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'TUTTI'>('TUTTI');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = ['TUTTI', ...Object.values(MenuCategory)];

  const filteredMenu = MENU_DATA.filter(item => 
    activeCategory === 'TUTTI' || item.category === activeCategory
  );

  const addToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[id] > 1) newCart[id]--;
      else delete newCart[id];
      return newCart;
    });
  };

  const cartTotal = Object.entries(cart).reduce((total: number, [id, qty]: [string, number]) => {
    const item = MENU_DATA.find(i => i.id === id);
    return total + (item ? item.price * qty : 0);
  }, 0);

  const sendOrder = () => {
    let message = "Ciao Itanami! Vorrei ordinare:\n\n";
    Object.entries(cart).forEach(([id, qty]: [string, number]) => {
      const item = MENU_DATA.find(i => i.id === id);
      if (item) message += `• ${qty}x ${item.name} (€${(item.price * qty).toFixed(2)})\n`;
    });
    message += `\nTotale: €${cartTotal.toFixed(2)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-40 pb-24 bg-black min-h-screen relative">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500 mb-6 italic">LE NOSTRE OFFERTE ESCLUSIVE</h4>
          <h1 className="text-5xl md:text-7xl font-serif mb-12 italic">Varietà di Sapori da Itanami</h1>
          
          <div className="flex overflow-x-auto pb-4 space-x-6 no-scrollbar justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`whitespace-nowrap text-[10px] font-bold tracking-[0.3em] uppercase transition-all pb-2 border-b-2 ${activeCategory === cat ? 'text-[#e61e2a] border-[#e61e2a]' : 'text-gray-500 border-transparent hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 gap-y-12">
          {filteredMenu.map((item) => (
            <div key={item.id} className="flex flex-col group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center flex-grow">
                  <h3 className="text-xl font-serif text-white group-hover:text-[#e61e2a] transition-colors">{item.name}</h3>
                  <div className="dot-leader"></div>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="text-xl font-bold text-white">€{item.price.toFixed(0)}</span>
                  <button 
                    onClick={() => addToCart(item.id)}
                    className="bg-white text-black p-1 hover:bg-[#e61e2a] hover:text-white transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 italic">{item.description}</p>
                {cart[item.id] > 0 && (
                  <span className="text-[10px] font-bold text-[#e61e2a] uppercase ml-4">Nel carrello: {cart[item.id]}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Order Button - Adjusted for clean mobile view without WhatsApp button */}
      {Object.keys(cart).length > 0 && (
        <button 
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-10 right-6 md:right-10 z-[60] bg-[#e61e2a] text-white px-8 py-4 rounded-full shadow-[0_0_30px_rgba(230,30,42,0.4)] font-bold tracking-widest text-xs flex items-center animate-bounce transition-all hover:scale-105 active:scale-95"
        >
          VEDI ORDINE ({(Object.values(cart) as number[]).reduce((a: number, b: number) => a + b, 0)})
        </button>
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsCartOpen(false)} />
          <div className="relative bg-zinc-950 w-full max-w-md p-8 border border-white/10 shadow-2xl">
            <button onClick={() => setIsCartOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white"><X size={20} /></button>
            <h2 className="text-3xl font-serif mb-8 italic text-white">Il tuo ordine</h2>
            <div className="max-h-80 overflow-y-auto mb-8 space-y-4 pr-2 custom-scrollbar">
              {Object.entries(cart).map(([id, qty]: [string, number]) => {
                const item = MENU_DATA.find(i => i.id === id);
                return item ? (
                  <div key={id} className="flex justify-between items-center border-b border-white/5 pb-4">
                    <div className="flex-grow pr-4">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-white">{item.name}</h4>
                      <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Prezzo unitario: €{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center bg-zinc-900 border border-white/10 rounded-sm">
                        <button onClick={() => removeFromCart(id)} className="p-2 hover:text-[#e61e2a] transition-colors"><Minus size={12} /></button>
                        <span className="text-sm font-bold w-6 text-center">{qty}</span>
                        <button onClick={() => addToCart(id)} className="p-2 hover:text-[#e61e2a] transition-colors"><Plus size={12} /></button>
                      </div>
                      <span className="text-sm font-bold min-w-[50px] text-right text-white">€{(item.price * qty).toFixed(2)}</span>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
            <div className="flex justify-between items-center mb-8 border-t border-white/10 pt-6">
              <span className="uppercase text-[10px] font-bold tracking-[0.2em] text-gray-500">Totale stimato</span>
              <span className="text-2xl font-bold font-serif text-white">€{cartTotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={sendOrder}
              className="w-full bg-white text-black py-4 font-black tracking-[0.2em] text-[11px] uppercase hover:bg-[#e61e2a] hover:text-white transition-all duration-300"
            >
              CONFERMA E ORDINA SU WHATSAPP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
