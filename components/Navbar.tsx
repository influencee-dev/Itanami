
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, ShoppingBag, Instagram } from 'lucide-react';
import { LOGO_URL, INSTAGRAM_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Section: Socials + Menu Link */}
          <div className="flex items-center space-x-8 w-1/3">
            <div className="hidden lg:flex items-center space-x-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <Instagram size={18} className="text-black hover:text-[#e61e2a] cursor-pointer transition-colors" />
              </a>
            </div>
            <Link 
              to="/menu" 
              className={`hidden lg:block text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${location.pathname === '/menu' ? 'text-[#e61e2a]' : 'text-black hover:text-[#e61e2a]'}`}
            >
              Menu
            </Link>
          </div>

          {/* Logo - Center */}
          <div className="flex-shrink-0 flex items-center justify-center w-1/3">
            <Link to="/">
              <img src={LOGO_URL} alt="Logo Itanami" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Right Section: Contacts Link + Icons */}
          <div className="flex items-center justify-end space-x-8 w-1/3">
            <Link 
              to="/contacts" 
              className={`hidden lg:block text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${location.pathname === '/contacts' ? 'text-[#e61e2a]' : 'text-black hover:text-[#e61e2a]'}`}
            >
              Contatti
            </Link>
            
            <div className="flex items-center space-x-6">
              <div className="relative group cursor-pointer">
                <ShoppingBag size={20} className="text-black group-hover:text-[#e61e2a] transition-colors" />
                <span className="absolute -top-2 -right-2 bg-[#e61e2a] text-white text-[8px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-sm">0</span>
              </div>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black lg:hidden"
              >
                {isOpen ? <X size={26} /> : <MenuIcon size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-2">
          <div className="px-6 py-8 space-y-6 text-center">
            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-bold tracking-[0.2em] uppercase transition-all ${location.pathname === '/menu' ? 'text-[#e61e2a]' : 'text-black'}`}
            >
              Menu
            </Link>
            <Link
              to="/contacts"
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-bold tracking-[0.2em] uppercase transition-all ${location.pathname === '/contacts' ? 'text-[#e61e2a]' : 'text-black'}`}
            >
              Contatti
            </Link>
            <div className="flex justify-center pt-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <Instagram size={20} className="text-black" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
