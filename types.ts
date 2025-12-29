
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  popular?: boolean;
}

export enum MenuCategory {
  ANTIPASTI = 'Antipasti',
  POKE = 'Poke',
  URAMAKI = 'Uramaki',
  NIGIRI = 'Nigiri & Hosomaki',
  PIATTI_CALDI = 'Piatti Caldi',
  BEVANDE = 'Bevande'
}

export interface OrderItem extends MenuItem {
  quantity: number;
}
