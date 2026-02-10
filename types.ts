
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  popular?: boolean;
  allergens?: string[];
}

export enum MenuCategory {
  POKE = 'Pokè',
  EXTRA = 'Extra',
  ASPORTO = 'Asporto',
  DOLCI = 'Dolci',
  BEVANDE = 'Bevande',
  BIRRA = 'Birra',
  VINI_ROSATI = 'Vini Rosati',
  VINI_BIANCHI = 'Vini Bianchi',
  VINI_ROSSI = 'Vini Rossi',
  BOLLICINE = 'Bollicine',
  AMARI = 'Amari',
  COCKTAILS = 'Cocktails'
}

export interface OrderItem extends MenuItem {
  quantity: number;
}
