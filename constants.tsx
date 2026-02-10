
import { MenuItem, MenuCategory } from './types';

export const LOGO_URL = 'https://socialee.it/wp-content/uploads/2025/12/447785095_2206317533094147_3921485851591689957_n.webp';
export const WHATSAPP_NUMBER = '393931516043';
export const PHONE_DISPLAY = '+39 393 151 6043';
export const INSTAGRAM_LINK = 'https://www.instagram.com/itanamifusionfg/';
export const ADDRESS_DISPLAY = 'Via Conte Appiano 13, Foggia (FG)';

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Ciao Itanami! Vorrei prenotare un tavolo.")}`;
export const PHONE_LINK = `tel:${WHATSAPP_NUMBER}`;

export const ALLERGENS_LEGENDA = [
  { id: 'glutine', name: 'GLUTINE', icon: '🌾' },
  { id: 'frutta_guscio', name: 'FRUTTA A GUSCIO', icon: '🌰' },
  { id: 'pesce', name: 'PESCE', icon: '🐟' },
  { id: 'soia', name: 'SOIA', icon: '🫘' },
  { id: 'sedano', name: 'SEDANO', icon: '🌿' },
  { id: 'sesamo', name: 'SESAMO', icon: '🌾' },
  { id: 'lupini', name: 'LUPINI', icon: '🌼' },
  { id: 'latte', name: 'LATTE E DERIVATI', icon: '🥛' },
  { id: 'uova', name: 'UOVA', icon: '🥚' },
  { id: 'arachidi', name: 'ARACHIDI', icon: '🥜' },
  { id: 'crostacei', name: 'CROSTACEI', icon: '🦀' },
  { id: 'senape', name: 'SENAPE', icon: '🍶' },
  { id: 'solfiti', name: 'SOLFITI', icon: '🧪' },
  { id: 'molluschi', name: 'MOLLUSCHI', icon: '🐚' },
];

export const MENU_DATA: MenuItem[] = [
  // POKÈ
  { id: 'poke-1', name: 'Poké Grande', description: 'Basi a scelta, 3 proteine, 5 verdure, 4 condimenti, 3 salse', price: 13.00, category: MenuCategory.POKE, allergens: ['pesce', 'soia', 'glutine', 'sesamo', 'crostacei'] },
  { id: 'poke-2', name: 'Poké Medio', description: 'Basi a scelta, 2 proteine, 4 verdure, 3 condimenti, 3 salse', price: 11.00, category: MenuCategory.POKE, allergens: ['pesce', 'soia', 'glutine', 'sesamo', 'crostacei'] },
  { id: 'poke-3', name: 'Poké Piccolo', description: 'Basi a scelta, 1 proteina, 3 verdure, 2 condimenti, 2 salse', price: 8.50, category: MenuCategory.POKE, allergens: ['pesce', 'soia', 'glutine', 'sesamo'] },

  // EXTRA
  { id: 'e-1', name: 'BBQ Ribs', description: '1 porzione', price: 12.00, category: MenuCategory.EXTRA, allergens: ['soia', 'senape'] },
  { id: 'e-2', name: 'Frittura Mista', description: 'Seppie, calamari e gamberi (280 gr)', price: 18.00, category: MenuCategory.EXTRA, allergens: ['glutine', 'molluschi', 'crostacei'] },
  { id: 'e-3', name: 'Tartare di Gamberi', description: 'Terra di melone, gamberi arancia, mentuccia e zenzero', price: 12.00, category: MenuCategory.EXTRA, allergens: ['crostacei'] },
  { id: 'e-4', name: 'Tartare di Salmone', description: 'Avocado, datterino giallo e mandorle', price: 9.00, category: MenuCategory.EXTRA, allergens: ['pesce', 'frutta_guscio'] },
  { id: 'e-5', name: 'Tartare di Tonno', description: 'Terra di cetriolo, crema pomodoro, capperi e olive', price: 12.00, category: MenuCategory.EXTRA, allergens: ['pesce'] },
  { id: 'e-6', name: 'Tartare di Spigola', description: 'Zucchine julienne, agrumi e salsa di soia', price: 10.00, category: MenuCategory.EXTRA, allergens: ['pesce', 'soia'] },

  // ASPORTO (ANTIPASTI)
  { id: 'a-1', name: 'A1_Involtini Primavera', description: '4 pezzi', price: 3.50, category: MenuCategory.ASPORTO, allergens: ['glutine', 'soia'] },
  { id: 'a-2', name: 'A2_Takoyaki', description: '4 pezzi', price: 4.00, category: MenuCategory.ASPORTO, allergens: ['glutine', 'molluschi', 'uova', 'soia'] },
  { id: 'a-3', name: 'A3_Polpettine di Alghe', description: '4 pezzi', price: 3.00, category: MenuCategory.ASPORTO, allergens: ['glutine'] },
  { id: 'a-4', name: 'A4_Gambero al Panko', description: '4 pezzi', price: 6.50, category: MenuCategory.ASPORTO, allergens: ['glutine', 'crostacei', 'uova'] },
  { id: 'a-5', name: 'A5_Gambero in Laccio di Patate', description: '4 pezzi', price: 8.00, category: MenuCategory.ASPORTO, allergens: ['crostacei'] },
  { id: 'a-6', name: 'A6_Sticks di Pollo', description: '4 pezzi', price: 4.00, category: MenuCategory.ASPORTO, allergens: ['glutine'] },
  { id: 'a-7', name: 'A7_Nuggets di Pollo', description: '5 pezzi', price: 4.50, category: MenuCategory.ASPORTO, allergens: ['glutine'] },
  { id: 'a-8', name: 'A8_Spiedini Yakitori', description: '4 pezzi', price: 7.50, category: MenuCategory.ASPORTO, allergens: ['soia', 'glutine'] },
  { id: 'a-9', name: 'A9_Spiedini di Gamberi', description: '3 pezzi', price: 9.00, category: MenuCategory.ASPORTO, allergens: ['crostacei'] },
  { id: 'a-10', name: 'A10_Spiedini di Totano', description: '4 pezzi', price: 7.00, category: MenuCategory.ASPORTO, allergens: ['molluschi'] },
  { id: 'a-11', name: 'A11_Spiedini di Seppia', description: '2 pezzi', price: 8.00, category: MenuCategory.ASPORTO, allergens: ['molluschi'] },
  { id: 'a-12', name: 'A12_Nuvole di Gamberi', description: '1 porzione', price: 1.50, category: MenuCategory.ASPORTO, allergens: ['crostacei'] },
  { id: 'a-13', name: 'A13_Kakiage di Verdure', description: '1 porzione', price: 2.50, category: MenuCategory.ASPORTO, allergens: ['glutine'] },
  { id: 'a-14', name: 'A14_Edamame', description: '1 porzione', price: 2.00, category: MenuCategory.ASPORTO, allergens: ['soia'] },
  { id: 'a-15', name: 'A15_Alga Wakame', description: '1 porzione', price: 2.50, category: MenuCategory.ASPORTO, allergens: ['sesamo'] },
  { id: 'a-16', name: 'A16_Patatine Fritte', description: '1 porzione', price: 2.50, category: MenuCategory.ASPORTO, allergens: ['glutine'] },

  // ASPORTO (BAO & TACOS)
  { id: 'b-1', name: 'B1_Bao Bun Parmigiana', description: '1 pezzo', price: 2.50, category: MenuCategory.ASPORTO, allergens: ['glutine', 'latte'] },
  { id: 'b-2', name: 'B2_Bao Bun Pulled Pork', description: 'Insalata e maionese (1 pezzo)', price: 2.50, category: MenuCategory.ASPORTO, allergens: ['glutine', 'soia', 'uova'] },
  { id: 'b-3', name: 'B3_Bao Bun Salmone', description: 'Cipolla fritta e salsa agropiccante (1 pezzo)', price: 2.50, category: MenuCategory.ASPORTO, allergens: ['glutine', 'pesce', 'latte'] },
  { id: 'r-1', name: 'R1_Ravioli di Carne', description: '4 pezzi', price: 6.00, category: MenuCategory.ASPORTO, allergens: ['glutine', 'soia'] },
  { id: 'r-2', name: 'R2_Ravioli di Parmigiana', description: '4 pezzi', price: 7.00, category: MenuCategory.ASPORTO, allergens: ['glutine', 'soia', 'latte'] },
  { id: 't-1', name: 'T1_Tacos Salmone', description: 'Phila, avocado, pistacchio e teriyaki', price: 3.00, category: MenuCategory.ASPORTO, allergens: ['glutine', 'pesce', 'latte', 'frutta_guscio', 'soia'] },
  { id: 't-2', name: 'T2_Tacos Tonno', description: 'Phila, avocado, pistacchio e teriyaki', price: 3.50, category: MenuCategory.ASPORTO, allergens: ['glutine', 'pesce', 'latte', 'frutta_guscio', 'soia'] },
  { id: 't-3', name: 'T3_Tacos Spigola', description: 'Phila, zucchine marinate, pistacchio e teriyaki', price: 3.50, category: MenuCategory.ASPORTO, allergens: ['glutine', 'pesce', 'latte', 'frutta_guscio', 'soia'] },
  { id: 't-4', name: 'T4_Tacos Gambero', description: 'Phila, avocado, pistacchio e teriyaki', price: 3.00, category: MenuCategory.ASPORTO, allergens: ['glutine', 'crostacei', 'latte', 'frutta_guscio', 'soia'] },
  { id: 't-5', name: 'T5_Tacos Granchio', description: 'Phila, avocado, pistacchio e teriyaki', price: 2.80, category: MenuCategory.ASPORTO, allergens: ['glutine', 'crostacei', 'latte', 'frutta_guscio', 'soia'] },
  { id: 't-6', name: 'T6_Tacos Polpo', description: 'Phila, avocado, pistacchio e teriyaki', price: 3.00, category: MenuCategory.ASPORTO, allergens: ['glutine', 'molluschi', 'latte', 'frutta_guscio', 'soia'] },
  { id: 't-7', name: 'T7_Tacos Pulled Pork', description: 'Phila, avocado, pistacchio e teriyaki', price: 2.80, category: MenuCategory.ASPORTO, allergens: ['glutine', 'latte', 'frutta_guscio', 'soia'] },
  { id: 't-8', name: 'T8_Tacos Chicken', description: 'Phila, avocado, pistacchio e teriyaki', price: 2.80, category: MenuCategory.ASPORTO, allergens: ['glutine', 'latte', 'frutta_guscio', 'soia'] },

  // ASPORTO (SUSHI CLASSICO)
  { id: 's-1', name: 'S1_Sashimi Salmone', description: '4 pezzi', price: 7.00, category: MenuCategory.ASPORTO, allergens: ['pesce'] },
  { id: 's-2', name: 'S2_Sashimi Misto', description: '3 salmone, 2 tonno, 2 spigola', price: 10.00, category: MenuCategory.ASPORTO, allergens: ['pesce'] },
  { id: 'c-1', name: 'C1_Carpaccio di Salmone', description: '3 pezzi', price: 4.50, category: MenuCategory.ASPORTO, allergens: ['pesce'] },
  { id: 'c-2', name: 'C2_Carpaccio di Spigola', description: '3 pezzi', price: 5.00, category: MenuCategory.ASPORTO, allergens: ['pesce'] },
  { id: 'c-3', name: 'C3_Carpaccio di Tonno', description: '3 pezzi', price: 5.00, category: MenuCategory.ASPORTO, allergens: ['pesce'] },
  { id: 'n-1', name: 'N1_Nigiri Salmone', description: '4 pezzi', price: 4.90, category: MenuCategory.ASPORTO, allergens: ['pesce'] },
  { id: 'n-2', name: 'N2_Nigiri Tonno', description: '2 pezzi', price: 2.90, category: MenuCategory.ASPORTO, allergens: ['pesce'] },
  { id: 'n-3', name: 'N3_Nigiri Spigola', description: '2 pezzi', price: 3.00, category: MenuCategory.ASPORTO, allergens: ['pesce'] },
  { id: 'n-4', name: 'N4_Nigiri Gambero', description: '2 pezzi', price: 2.50, category: MenuCategory.ASPORTO, allergens: ['crostacei'] },
  { id: 'n-5', name: 'N5_Nigiri Salmone Scottato', description: '2 pezzi', price: 2.70, category: MenuCategory.ASPORTO, allergens: ['pesce'] },
  { id: 'g-1', name: 'G1_Gunkan Salmone e Patate', description: 'Salmone, crema patate, timo e limone (2 pezzi)', price: 3.80, category: MenuCategory.ASPORTO, allergens: ['pesce', 'latte'] },
  { id: 'g-2', name: 'G2_Gunkan Salmone e Philadelphia', description: 'Salmone, Philadelphia e kataifi (2 pezzi)', price: 3.80, category: MenuCategory.ASPORTO, allergens: ['pesce', 'latte', 'glutine'] },
  { id: 'h-1', name: 'H1_Hosomaki Verdura', description: '8 pezzi', price: 2.90, category: MenuCategory.ASPORTO, allergens: [] },
  { id: 'h-2', name: 'H2_Hosomaki Salmone', description: '8 pezzi', price: 4.00, category: MenuCategory.ASPORTO, allergens: ['pesce'] },
  { id: 'h-3', name: 'H3_Hosomaki Fritto Salmone', description: '8 pezzi', price: 5.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'glutine'] },
  { id: 'h-4', name: 'H4_Hosomaki Tonno', description: '8 pezzi', price: 4.00, category: MenuCategory.ASPORTO, allergens: ['pesce'] },

  // ASPORTO (URAMAKI)
  { id: 'u-1', name: 'U1_Uramaki Chicken', description: 'Pollo fritto, insalata, maionese', price: 6.50, category: MenuCategory.ASPORTO, allergens: ['glutine', 'uova'] },
  { id: 'u-2', name: 'U2_Uramaki Pulled Pork', description: 'Pulled pork, cetriolo, rucola, cipolla fritta', price: 7.00, category: MenuCategory.ASPORTO, allergens: ['glutine', 'soia'] },
  { id: 'u-3', name: 'U3_Uramaki Red Carrot', description: 'Gambero panko, salsa rosa, insalata', price: 6.50, category: MenuCategory.ASPORTO, allergens: ['glutine', 'crostacei', 'uova'] },
  { id: 'u-4', name: 'U4_Uramaki Dragon Roll', description: 'Gambero panko, maionese, avocado, salmone', price: 7.50, category: MenuCategory.ASPORTO, allergens: ['glutine', 'crostacei', 'uova', 'pesce'] },
  { id: 'u-5', name: 'U5_Uramaki Double Ebi', description: 'Gambero panko, avocado, gambero crudo agrumi', price: 8.50, category: MenuCategory.ASPORTO, allergens: ['glutine', 'crostacei'] },
  { id: 'u-6', name: 'U6_Uramaki Sake Roll', description: 'Salmone e avocado (8 pezzi)', price: 8.00, category: MenuCategory.ASPORTO, allergens: ['pesce'] },
  { id: 'u-7', name: 'U7_Uramaki Fresh Sake', description: 'Salmone, avocado, Phila, kataifi (8 pezzi)', price: 7.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'latte', 'glutine'] },
  { id: 'u-8', name: 'U8_Uramaki California', description: 'Salmone cotto, cetriolo, cipolla croccante (8 pezzi)', price: 5.90, category: MenuCategory.ASPORTO, allergens: ['pesce', 'glutine'] },
  { id: 'u-9', name: 'U9_Uramaki Philadelphia', description: 'Salmone, Phila, salsa agrodolce piccante', price: 6.50, category: MenuCategory.ASPORTO, allergens: ['pesce', 'latte'] },
  { id: 'u-10', name: 'U10_Uramaki Salmone Green', description: 'Salmone, avocado, chips zucchine, stracciatella', price: 9.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'latte'] },
  { id: 'u-11', name: 'U11_Uramaki Tuna Roll', description: 'Tonno cotto, cetriolo, cipolla croccante', price: 5.90, category: MenuCategory.ASPORTO, allergens: ['pesce', 'glutine'] },
  { id: 'u-12', name: 'U12_Uramaki Tonno Ita', description: 'Tonno, cetriolo, olive, burrata, gazpacho', price: 9.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'latte'] },
  { id: 'u-13', name: 'U13_Uramaki Tonno Onò', description: 'Tonno, cetriolo, burrata, pistacchio, rucola', price: 9.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'latte', 'frutta_guscio'] },
  { id: 'u-14', name: 'U14_Uramaki Fovea', description: 'Riso rosso, tonno, carosello, gambero pugliese', price: 11.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'crostacei'] },
  { id: 'u-15', name: 'U15_Uramaki Granchio', description: 'Riso carote, polpa granchio, avocado', price: 6.50, category: MenuCategory.ASPORTO, allergens: ['crostacei'] },
  { id: 'u-16', name: 'U16_Uramaki Sake Lemon', description: 'Riso limone, salmone affogato, avocado, Phila', price: 9.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'latte'] },
  { id: 'u-17', name: 'U17_Uramaki Baccalà Foggiano', description: 'Baccalà panko, crema zucca, chips cipolla', price: 9.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'glutine'] },
  { id: 'u-18', name: 'U18_Uramaki Tataki', description: 'Gambero cotto, salmone scottato, teriyaki', price: 7.50, category: MenuCategory.ASPORTO, allergens: ['crostacei', 'pesce', 'soia'] },
  { id: 'u-19', name: 'U19_Uramaki Riso Patate Cozze', description: 'Crema patate, cozze, pecorino, chips pomodoro', price: 8.00, category: MenuCategory.ASPORTO, allergens: ['molluschi', 'latte'] },
  { id: 'u-20', name: 'U20_Uramaki Melograno Roll', description: 'Tonno, avocado, spigola scottata, Phila', price: 12.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'latte'] },
  { id: 'u-21', name: 'U21_Uramaki Cime di Rapa', description: 'Alici fritte, patate, cime di rapa (8 pezzi)', price: 9.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'glutine'] },
  { id: 'u-22', name: 'U22_Uramaki Mortadella Roll', description: 'Mortadella, burrata, pistacchio (8 pezzi)', price: 5.00, category: MenuCategory.ASPORTO, allergens: ['latte', 'frutta_guscio'] },
  { id: 'u-23', name: 'U23_Uramaki Merluzzo Roll', description: 'Crema merluzzo, avocado, cipolla caramellata', price: 8.00, category: MenuCategory.ASPORTO, allergens: ['pesce'] },
  { id: 'u-24', name: 'U24_Uramaki Salmone Spicy', description: 'Salmone, avocado, Sriracha, maionese (8 pezzi)', price: 8.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'uova'] },
  { id: 'u-25', name: 'U25_Uramaki Salmone Mango', description: 'Salmone, Phila, salsa mango (8 pezzi)', price: 6.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'latte'] },
  { id: 'u-26', name: 'U26_Uramaki Miky Roll', description: 'Salmone, avocado, spigola, zucchine marinate', price: 11.00, category: MenuCategory.ASPORTO, allergens: ['pesce'] },
  { id: 'u-27', name: 'U27_Uramaki Tobiko Orange', description: 'Salmone, avocado, Tobiko Orange, Phila', price: 8.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'latte'] },
  { id: 'sa-1', name: 'SA1_Sandwich Salmone', description: 'Salmone, avocado, Phila, cipolla croccante (8 pezzi)', price: 12.50, category: MenuCategory.ASPORTO, allergens: ['pesce', 'latte', 'glutine'] },
  { id: 'sa-2', name: 'SA2_Sandwich Tonno', description: 'Tonno cotto, avocado, cipolla fritta (8 pezzi)', price: 11.00, category: MenuCategory.ASPORTO, allergens: ['pesce', 'glutine'] },

  // DOLCI
  { id: 'd-1', name: 'Sorbetto', description: '1 porzione', price: 4.00, category: MenuCategory.DOLCI, allergens: [] },
  { id: 'd-2', name: 'Babà', description: '1 porzione', price: 5.00, category: MenuCategory.DOLCI, allergens: ['glutine', 'uova'] },
  { id: 'd-3', name: 'Dolci Natalizi', description: '5 pezzi', price: 5.00, category: MenuCategory.DOLCI, allergens: ['glutine', 'uova', 'latte'] },
  { id: 'd-4', name: 'Panettone con crema', description: '1 porzione', price: 5.00, category: MenuCategory.DOLCI, allergens: ['glutine', 'uova', 'latte'] },
  { id: 'd-5', name: 'Bao Bun Nutella', description: '1 pezzo', price: 2.50, category: MenuCategory.DOLCI, allergens: ['glutine', 'latte', 'frutta_guscio', 'soia'] },
  { id: 'd-6', name: 'Bao Bun Pistacchio', description: '1 pezzo', price: 2.50, category: MenuCategory.DOLCI, allergens: ['glutine', 'latte', 'frutta_guscio'] },
  { id: 'd-7', name: 'Uramaki Dolce', description: 'Riso, banana, pasta Wonton, topping (6 pezzi)', price: 5.00, category: MenuCategory.DOLCI, allergens: ['glutine', 'latte'] },
  { id: 'd-8', name: 'Brownies', description: '1 porzione', price: 4.50, category: MenuCategory.DOLCI, allergens: ['glutine', 'uova', 'latte'] },
  { id: 'd-9', name: 'Cheesecake', description: '1 porzione', price: 4.50, category: MenuCategory.DOLCI, allergens: ['glutine', 'latte'] },
  { id: 'd-10', name: 'Tiramisù', description: '1 porzione', price: 4.50, category: MenuCategory.DOLCI, allergens: ['glutine', 'uova', 'latte'] },
  { id: 'd-11', name: 'Cannolo Siciliano', description: '1 pezzo', price: 4.50, category: MenuCategory.DOLCI, allergens: ['glutine', 'latte', 'frutta_guscio'] },
  { id: 'd-12', name: 'Mochi Vari Gusti', description: '2 pezzi (Tropical, Cheesecake, Mango, Lampone, Vaniglia, Cioccolato, Pistacchio, Cocco)', price: 4.50, category: MenuCategory.DOLCI, allergens: ['soia', 'latte'] },
  { id: 'd-13', name: 'Macaron Ice Cream', description: '1 pezzo (Cioccolato o Vaniglia)', price: 4.50, category: MenuCategory.DOLCI, allergens: ['uova', 'frutta_guscio', 'latte'] },
  { id: 'd-14', name: 'Gelato Cuor di Pizzo', description: 'Gusti: Croccantino/Fondente/Bueno/Classico/Noce/Snickers', price: 5.00, category: MenuCategory.DOLCI, allergens: ['latte', 'frutta_guscio', 'arachidi'] },

  // BEVANDE
  { id: 'dr-1', name: 'Acqua Naturale 1L', description: 'Vetro', price: 2.50, category: MenuCategory.BEVANDE },
  { id: 'dr-2', name: 'Acqua Naturale 50cl', description: 'Plastica', price: 1.50, category: MenuCategory.BEVANDE },
  { id: 'dr-3', name: 'Acqua Frizzante 1L', description: 'Vetro', price: 2.50, category: MenuCategory.BEVANDE },
  { id: 'dr-4', name: 'Acqua Frizzante 50cl', description: 'Plastica', price: 1.50, category: MenuCategory.BEVANDE },
  { id: 'dr-5', name: 'Coca Cola Classica', description: '33 cl', price: 2.50, category: MenuCategory.BEVANDE },
  { id: 'dr-6', name: 'Coca Cola Zero', description: '33 cl', price: 2.50, category: MenuCategory.BEVANDE },
  { id: 'dr-7', name: 'Estathè Pesca', description: 'Lattina/Bicchiere', price: 2.50, category: MenuCategory.BEVANDE },
  { id: 'dr-8', name: 'Estathè Limone', description: 'Lattina/Bicchiere', price: 2.50, category: MenuCategory.BEVANDE },
  { id: 'dr-9', name: 'Fanta', description: '33 cl', price: 2.50, category: MenuCategory.BEVANDE },
  { id: 'dr-10', name: 'Gassosa Hataramune', description: 'Giapponese', price: 2.50, category: MenuCategory.BEVANDE },
  { id: 'dr-11', name: 'Lurisia La Nostra Gazzosa', description: 'Premium', price: 3.50, category: MenuCategory.BEVANDE },
  { id: 'dr-12', name: 'Caffè Espresso', description: 'Caffè', price: 1.00, category: MenuCategory.BEVANDE },

  // BIRRA
  { id: 'bi-1', name: 'Birra Krombacher Bionda', description: '33 cl', price: 5.00, category: MenuCategory.BIRRA, allergens: ['glutine'] },
  { id: 'bi-2', name: 'Birra Landbier Bionda', description: '33 cl', price: 5.00, category: MenuCategory.BIRRA, allergens: ['glutine'] },
  { id: 'bi-3', name: 'Birra Lowenbrau Bionda', description: '33 cl', price: 5.00, category: MenuCategory.BIRRA, allergens: ['glutine'] },
  { id: 'bi-4', name: 'Birra Rhapsody Ambrata', description: '33 cl', price: 5.00, category: MenuCategory.BIRRA, allergens: ['glutine'] },
  { id: 'bi-5', name: 'Birra La Pizzica Bionda', description: '33 cl', price: 5.00, category: MenuCategory.BIRRA, allergens: ['glutine'] },

  // VINI ROSATI
  { id: 'vr-1', name: 'Sabrina Scopece Rosato', description: '1 calice', price: 4.00, category: MenuCategory.VINI_ROSATI, allergens: ['solfiti'] },
  { id: 'vr-2', name: 'Terrecarsiche Murgia Rosa', description: '375 ml', price: 9.00, category: MenuCategory.VINI_ROSATI, allergens: ['solfiti'] },
  { id: 'vr-3', name: 'Cantine Spelonga Ninù', description: '750 ml', price: 18.00, category: MenuCategory.VINI_ROSATI, allergens: ['solfiti'] },
  { id: 'vr-4', name: 'Tramari San Marzano', description: '750 ml', price: 24.00, category: MenuCategory.VINI_ROSATI, allergens: ['solfiti'] },
  { id: 'vr-5', name: 'Terrecarsiche Agorà', description: '750 ml', price: 20.00, category: MenuCategory.VINI_ROSATI, allergens: ['solfiti'] },
  { id: 'vr-6', name: 'Tenuta Antonini Ceras', description: '750 ml', price: 22.00, category: MenuCategory.VINI_ROSATI, allergens: ['solfiti'] },
  { id: 'vr-7', name: 'Terre Siciliane Fina Hanami', description: '750 ml', price: 22.00, category: MenuCategory.VINI_ROSATI, allergens: ['solfiti'] },
  { id: 'vr-8', name: 'Colli della Murgia Sellaia', description: '750 ml', price: 23.00, category: MenuCategory.VINI_ROSATI, allergens: ['solfiti'] },
  { id: 'vr-9', name: 'Cotes de Provence Fleurs de Praire', description: '750 ml', price: 30.00, category: MenuCategory.VINI_ROSATI, allergens: ['solfiti'] },

  // VINI BIANCHI
  { id: 'vb-1', name: 'Sabrina Scopece Falanghina', description: '1 calice', price: 4.00, category: MenuCategory.VINI_BIANCHI, allergens: ['solfiti'] },
  { id: 'vb-2', name: 'Terrecarsiche Verdeca', description: '375 ml', price: 9.00, category: MenuCategory.VINI_BIANCHI, allergens: ['solfiti'] },
  { id: 'vb-3', name: 'Terrecarsiche Bianca Petrosa Chardonnay', description: '750 ml', price: 20.00, category: MenuCategory.VINI_BIANCHI, allergens: ['solfiti'] },
  { id: 'vb-4', name: 'Abbazia di Novacella Gewurztraminer', description: '750 ml', price: 28.00, category: MenuCategory.VINI_BIANCHI, allergens: ['solfiti'] },

  // VINI ROSSI
  { id: 'vro-1', name: 'Terredibarocco Lybante', description: '750 ml', price: 15.00, category: MenuCategory.VINI_ROSSI, allergens: ['solfiti'] },
  { id: 'vro-2', name: 'Caiaffa Puglia Nero di Troia', description: '750 ml', price: 18.00, category: MenuCategory.VINI_ROSSI, allergens: ['solfiti'] },
  { id: 'vro-3', name: 'Tormaresca Fichimori', description: '750 ml', price: 20.00, category: MenuCategory.VINI_ROSSI, allergens: ['solfiti'] },

  // BOLLICINE
  { id: 'bo-1', name: 'Ca\' del Bosco Cuvée Prestige', description: '750 ml', price: 40.00, category: MenuCategory.BOLLICINE, allergens: ['solfiti'] },
  { id: 'bo-2', name: 'Ferrari Maximum Spumante Brut', description: '750 ml', price: 30.00, category: MenuCategory.BOLLICINE, allergens: ['solfiti'] },
  { id: 'bo-3', name: 'Veuve Pelletier Champagne Brut', description: '750 ml', price: 36.00, category: MenuCategory.BOLLICINE, allergens: ['solfiti'] },

  // AMARI
  { id: 'am-1', name: 'Vecchio Amaro del Capo', description: '1 bicchiere', price: 3.50, category: MenuCategory.AMARI },
  { id: 'am-2', name: 'Amaro Montenegro', description: '1 bicchiere', price: 3.50, category: MenuCategory.AMARI },
  { id: 'am-3', name: 'Grappa', description: '1 bicchiere', price: 3.50, category: MenuCategory.AMARI },

  // COCKTAILS
  { id: 'ck-1', name: 'Spritz Aperol', description: 'Cocktail', price: 7.00, category: MenuCategory.COCKTAILS, allergens: ['solfiti'] },
  { id: 'ck-2', name: 'Spritz Campari', description: 'Cocktail', price: 7.00, category: MenuCategory.COCKTAILS, allergens: ['solfiti'] },
  { id: 'ck-3', name: 'Gin Tonic Bombay Sapphire', description: 'Gin Selection', price: 7.00, category: MenuCategory.COCKTAILS },
  { id: 'ck-4', name: 'Gin Tonic Tanqueray', description: 'Gin Selection', price: 7.00, category: MenuCategory.COCKTAILS },
  { id: 'ck-5', name: 'Gin Tonic Hendrick\'s', description: 'Gin Selection', price: 10.00, category: MenuCategory.COCKTAILS }
];
