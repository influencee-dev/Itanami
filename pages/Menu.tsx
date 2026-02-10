
import React, { useState, useMemo } from 'react';
import { MenuCategory } from '../types';
import { MENU_DATA, WHATSAPP_NUMBER, ALLERGENS_LEGENDA } from '../constants';
import { ShoppingCart, Plus, Minus, X, Info, Search } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'TUTTI'>('TUTTI');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showAllergenInfo, setShowAllergenInfo] = useState(false);

  const categories = ['TUTTI', ...Object.values(MenuCategory)];

  const filteredMenu = useMemo(() => {
    return MENU_DATA.filter(item => {
      const matchesCategory = activeCategory === 'TUTTI' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const addToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      const currentQty = newCart[id];
      if (currentQty && currentQty > 1) newCart[id] = currentQty - 1;
      else delete newCart[id];
      return newCart;
    });
  };

  const cartTotal = useMemo(() => {
    // Fix: Explicitly cast qty to number to prevent arithmetic type errors
    return Object.entries(cart).reduce((total: number, entry) => {
      const [id, qty] = entry;
      const item = MENU_DATA.find(i => i.id === id);
      const price = item?.price || 0;
      return total + (price * (qty as number));
    }, 0);
  }, [cart]);

  const cartItemCount = useMemo(() => {
    // Fix: Explicitly cast qty to number to prevent arithmetic type errors
    return Object.values(cart).reduce((acc: number, qty) => acc + (qty as number), 0);
  }, [cart]);

  const sendOrder = () => {
    let message = "Ciao Itanami! Vorrei ordinare:\n\n";
    Object.entries(cart).forEach((entry) => {
      const [id, qty] = entry;
      const item = MENU_DATA.find(i => i.id === id);
      // Fix: Explicitly cast qty to number to prevent arithmetic type errors
      if (item) message += `• ${qty}x ${item.name} (€${(item.price * (qty as number)).toFixed(2).replace('.', ',')})\n`;
    });
    message += `\nTotale: €${cartTotal.toFixed(2).replace('.', ',')}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-40 pb-24 bg-black min-h-screen relative">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h4 className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-500 mb-6 italic">ESPERIENZA GASTRONOMICA</h4>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 italic tracking-tighter text-white">Il Menu</h1>
          
          {/* Nuovo Layout Categorie: Griglia Responsiva */}
          <div className="mb-16">
            <p className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase mb-8">Seleziona una categoria</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-4 py-4 text-[9px] font-black tracking-[0.2em] uppercase transition-all border duration-300 ${
                    activeCategory === cat 
                      ? 'bg-[#e61e2a] border-[#e61e2a] text-white shadow-[0_0_20px_rgba(230,30,42,0.3)]' 
                      : 'bg-zinc-900/50 border-white/5 text-gray-500 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 max-w-4xl mx-auto">
             <div className="relative flex-grow w-full">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                <input 
                  type="text"
                  placeholder="CERCA UN PIATTO O UN CODICE (ES: U14)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-white/10 text-white pl-16 pr-6 py-5 text-[10px] font-bold tracking-[0.2em] focus:outline-none focus:border-[#e61e2a] transition-all uppercase placeholder:text-gray-700"
                />
             </div>
             
             <button 
                onClick={() => setShowAllergenInfo(!showAllergenInfo)}
                className={`flex items-center space-x-3 text-[10px] font-black tracking-[0.2em] uppercase px-8 py-5 border transition-all ${showAllergenInfo ? 'bg-amber-500 text-black border-amber-500' : 'text-amber-500 border-amber-500/20 hover:bg-amber-500/5'}`}
              >
                <Info size={16} />
                <span>{showAllergenInfo ? 'CHIUDI LEGENDA' : 'ALLERGICO?'}</span>
             </button>
          </div>
        </header>

        {/* Legend Section */}
        {showAllergenInfo && (
          <div className="mb-24 animate-in fade-in slide-in-from-top-6 duration-700 bg-zinc-950 p-12 border-y border-white/5">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-white mb-4 italic">ALLERGICO?</h2>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold">Applica i filtri allergeni. Se hai dubbi chiedi al nostro staff!</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 max-w-5xl mx-auto">
                {ALLERGENS_LEGENDA.map(a => (
                  <div key={a.id} className="flex items-center space-x-5 group">
                    <div className="w-14 h-14 rounded-full border border-amber-500/20 flex items-center justify-center text-3xl group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all duration-500">
                      {a.icon}
                    </div>
                    <span className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase group-hover:text-white transition-colors">{a.name}</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Menu Items */}
        <div className="space-y-32">
          {Object.values(MenuCategory).map(cat => {
            const itemsInCategory = filteredMenu.filter(item => item.category === cat);
            if (itemsInCategory.length === 0) return null;

            return (
              <div key={cat} className="animate-in fade-in duration-1000">
                <div className="flex items-center space-x-10 mb-16">
                  <h2 className="text-3xl md:text-5xl font-serif text-white/20 italic whitespace-nowrap">{cat}</h2>
                  <div className="h-px bg-white/10 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                  {itemsInCategory.map((item) => (
                    <div key={item.id} className="group border-b border-white/5 pb-10 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-6 mb-6">
                        <div className="flex-grow">
                          <div className="flex items-center mb-3">
                            <h3 className="text-xl font-serif text-white group-hover:text-[#e61e2a] transition-colors tracking-tight">{item.name}</h3>
                          </div>
                          <p className="text-xs text-gray-500 font-medium italic mb-6 leading-relaxed max-w-md">{item.description}</p>
                          
                          {/* Allergen Icons */}
                          <div className="flex flex-wrap gap-2">
                            {item.allergens?.map(aid => {
                              const allergen = ALLERGENS_LEGENDA.find(a => a.id === aid);
                              return allergen ? (
                                <div key={aid} className="group/all relative">
                                  <div className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center text-lg bg-zinc-900 group-hover:border-amber-500 transition-all grayscale group-hover:grayscale-0">
                                    {allergen.icon}
                                  </div>
                                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[8px] font-black px-3 py-1.5 opacity-0 group-hover/all:opacity-100 transition-all whitespace-nowrap z-20 uppercase tracking-widest pointer-events-none">
                                    {allergen.name}
                                  </div>
                                </div>
                              ) : null;
                            })}
                          </div>
                        </div>

                        <div className="flex flex-col items-end space-y-6">
                          <span className="text-2xl font-black text-white italic">€{item.price.toFixed(2).replace('.', ',')}</span>
                          <div className="flex items-center">
                            {cart[item.id] > 0 ? (
                              <div className="flex items-center bg-zinc-900 border border-white/10 px-4 py-2 rounded-sm">
                                <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-white p-1"><Minus size={14} /></button>
                                <span className="text-sm font-black text-[#e61e2a] w-8 text-center">{cart[item.id]}</span>
                                <button onClick={() => addToCart(item.id)} className="text-gray-500 hover:text-white p-1"><Plus size={14} /></button>
                              </div>
                            ) : (
                              <button 
                                onClick={() => addToCart(item.id)}
                                className="bg-white text-black px-8 py-3 text-[10px] font-black tracking-[0.3em] uppercase hover:bg-[#e61e2a] hover:text-white transition-all active:scale-95"
                              >
                                AGGIUNGI
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Checkout Button */}
      {cartItemCount > 0 && (
        <button 
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-10 right-6 md:right-10 z-[60] bg-[#e61e2a] text-white px-12 py-6 rounded-full shadow-[0_25px_60px_rgba(230,30,42,0.4)] font-black tracking-[0.3em] text-[12px] flex items-center transition-all hover:scale-105 active:scale-95 uppercase border border-white/20"
        >
          <ShoppingCart size={20} className="mr-5" />
          ORDINE ({cartItemCount})
        </button>
      )}

      {/* Modern Side-Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex items-stretch justify-end">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsCartOpen(false)} />
          <div className="relative bg-zinc-950 w-full max-w-lg h-full p-12 shadow-2xl flex flex-col border-l border-white/5 animate-in slide-in-from-right duration-500">
            <button onClick={() => setIsCartOpen(false)} className="absolute top-10 right-10 text-gray-500 hover:text-white transition-colors"><X size={32} /></button>
            <h2 className="text-6xl font-serif mb-16 italic text-white tracking-tighter">Il Tuo Ordine</h2>
            
            <div className="flex-grow overflow-y-auto space-y-10 pr-4 no-scrollbar">
              {Object.entries(cart).map((entry) => {
                const [id, qty] = entry;
                const item = MENU_DATA.find(i => i.id === id);
                return item ? (
                  <div key={id} className="flex justify-between items-center border-b border-white/5 pb-10 group">
                    <div className="flex-grow pr-10">
                      <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-3 group-hover:text-[#e61e2a] transition-colors">{item.name}</h4>
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">€{item.price.toFixed(2).replace('.', ',')} cad.</p>
                    </div>
                    <div className="flex items-center space-x-10">
                      <div className="flex items-center border border-white/10 px-4 py-2">
                        <button onClick={() => removeFromCart(id)} className="text-gray-500 hover:text-white"><Minus size={14} /></button>
                        <span className="text-sm font-black text-white w-8 text-center">{qty}</span>
                        <button onClick={() => addToCart(id)} className="text-gray-500 hover:text-white"><Plus size={14} /></button>
                      </div>
                      {/* Fix: Explicitly cast qty to number to prevent arithmetic type errors */}
                      <span className="text-xl font-black text-white min-w-[90px] text-right">€{(item.price * (qty as number)).toFixed(2).replace('.', ',')}</span>
                    </div>
                  </div>
                ) : null;
              })}
            </div>

            <div className="pt-12 border-t border-white/10 mt-10">
              <div className="flex justify-between items-center mb-12">
                <span className="uppercase text-[12px] font-black tracking-[0.5em] text-gray-600">Subtotale</span>
                <span className="text-5xl font-black font-serif text-white tracking-tighter">€{cartTotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <button 
                onClick={sendOrder}
                className="w-full bg-white text-black py-8 font-black tracking-[0.4em] text-[12px] uppercase hover:bg-[#e61e2a] hover:text-white transition-all duration-700 shadow-xl flex items-center justify-center space-x-4"
              >
                <span>INVIA ORDINE SU WHATSAPP</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
