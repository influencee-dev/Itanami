
import { MenuItem, MenuCategory } from './types';

export const LOGO_URL = 'https://socialee.it/wp-content/uploads/2025/12/447785095_2206317533094147_3921485851591689957_n.webp';
export const WHATSAPP_NUMBER = '393931516043'; // Numero corretto per l'API di WhatsApp (senza +)
export const PHONE_DISPLAY = '+39 393 151 6043'; // Formato per la visualizzazione nel sito
export const INSTAGRAM_LINK = 'https://www.instagram.com/itanamifusionfg/';

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Ciao Itanami! Vorrei prenotare un tavolo.")}`;
export const PHONE_LINK = `tel:${WHATSAPP_NUMBER}`;

export const MENU_DATA: MenuItem[] = [
  // ANTIPASTI
  {
    id: 'a1',
    name: 'Edamame',
    description: 'Fagioli di soia cotti al vapore con un pizzico di sale Maldon.',
    price: 5.00,
    category: MenuCategory.ANTIPASTI,
    popular: false,
    image: 'https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'a2',
    name: 'Gyoza di Gamberi',
    description: 'Ravioli giapponesi fatti a mano ripieni di gamberi e verdure (5 pezzi).',
    price: 8.50,
    category: MenuCategory.ANTIPASTI,
    popular: true,
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'a3',
    name: 'Tartare Itanami',
    description: 'Salmone fresco, avocado, crema di mango, mandorle tostate e salsa ponzu.',
    price: 14.00,
    category: MenuCategory.ANTIPASTI,
    popular: true,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'a4',
    name: 'Wakame Salad',
    description: 'Alghe verdi piccanti marinate con semi di sesamo.',
    price: 6.00,
    category: MenuCategory.ANTIPASTI,
    popular: false,
    image: 'https://images.unsplash.com/photo-1505253504418-4e9a4bb74b5b?auto=format&fit=crop&q=80&w=600'
  },

  // POKE
  {
    id: 'pk1',
    name: 'Poke Salmone Special',
    description: 'Riso, salmone, avocado, edamame, mango, cetrioli, salsa teriyaki e maionese speziata.',
    price: 13.50,
    category: MenuCategory.POKE,
    popular: true,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pk2',
    name: 'Poke Tonno & Ponzu',
    description: 'Riso bianco, tonno, wakame, ravanello, zenzero, cavolo rosso e salsa ponzu.',
    price: 15.00,
    category: MenuCategory.POKE,
    popular: false,
    image: 'https://images.unsplash.com/photo-1512058560366-cd242955b7ec?auto=format&fit=crop&q=80&w=600'
  },

  // URAMAKI
  {
    id: 'u1',
    name: 'Ebiten Special Roll',
    description: 'Tempura di gambero, maionese, avocado, coperto con salmone crudo e salsa teriyaki (8 pz).',
    price: 15.00,
    category: MenuCategory.URAMAKI,
    popular: true,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'u2',
    name: 'Black Truffle Salmon',
    description: 'Riso venere, salmone, formaggio cremoso, coperto con carpaccio di tartufo nero (8 pz).',
    price: 18.00,
    category: MenuCategory.URAMAKI,
    popular: true,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'u3',
    name: 'California Classic',
    description: 'Polpa di granchio, avocado, cetriolo e sesamo (8 pz).',
    price: 11.00,
    category: MenuCategory.URAMAKI,
    popular: false,
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'u4',
    name: 'Spicy Tuna Roll',
    description: 'Tonno fresco, erba cipollina, cetriolo e salsa sriracha piccante (8 pz).',
    price: 14.00,
    category: MenuCategory.URAMAKI,
    popular: false,
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=600'
  },

  // NIGIRI & HOSOMAKI
  {
    id: 'nh1',
    name: 'Nigiri Salmone',
    description: 'Fettine di salmone fresco su letto di riso (2 pezzi).',
    price: 5.00,
    category: MenuCategory.NIGIRI,
    popular: false,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'nh2',
    name: 'Nigiri Tonno',
    description: 'Fettine di tonno Bluefin su letto di riso (2 pezzi).',
    price: 6.50,
    category: MenuCategory.NIGIRI,
    popular: false,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'nh3',
    name: 'Hosomaki Sake',
    description: 'Rotolo piccolo con riso e salmone all\'interno (6 pezzi).',
    price: 6.00,
    category: MenuCategory.NIGIRI,
    popular: false,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=600'
  },

  // PIATTI CALDI
  {
    id: 'pc1',
    name: 'Yakisoba Pollo',
    description: 'Spaghetti di grano saraceno saltati con pollo, verdure miste e salsa soia.',
    price: 12.00,
    category: MenuCategory.PIATTI_CALDI,
    popular: true,
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pc2',
    name: 'Tempura Mix',
    description: 'Gamberoni e verdure di stagione fritti in pastella leggera giapponese.',
    price: 16.00,
    category: MenuCategory.PIATTI_CALDI,
    popular: false,
    image: 'https://images.unsplash.com/photo-1591814468924-cafb1977331f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pc3',
    name: 'Riso al Curry Giapponese',
    description: 'Riso bianco servito con densa salsa curry giapponese e verdure.',
    price: 11.50,
    category: MenuCategory.PIATTI_CALDI,
    popular: false,
    image: 'https://images.unsplash.com/photo-1591814468924-cafb1977331f?auto=format&fit=crop&q=80&w=600'
  },

  // BEVANDE
  {
    id: 'b1',
    name: 'Asahi Super Dry',
    description: 'Birra giapponese in bottiglia (33cl). Fresca e secca.',
    price: 5.00,
    category: MenuCategory.BEVANDE,
    popular: true,
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b2',
    name: 'Acqua Panna / San Pellegrino',
    description: 'Acqua naturale o frizzante in vetro (75cl).',
    price: 3.50,
    category: MenuCategory.BEVANDE,
    popular: false,
    image: 'https://images.unsplash.com/photo-1523362622666-4c59d4b048fc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b3',
    name: 'The Verde Giapponese',
    description: 'The verde caldo o freddo servito in caraffa.',
    price: 4.50,
    category: MenuCategory.BEVANDE,
    popular: false,
    image: 'https://images.unsplash.com/photo-1571934811356-5cc561b6821f?auto=format&fit=crop&q=80&w=600'
  }
];
