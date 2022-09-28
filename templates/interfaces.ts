export interface NavItem {
	name: string;
	url: string;
}

export interface CartItem {
	id: number;
	name: string;
	value: number;
	quantity: number;
}

export interface CartState {
	items: CartItem[];
	totalValue: number;
	totalQuantity: number;
}

export interface ColorScheme {
	mode: string;
	isDarkMode: boolean;
}

export interface Product {
	id: number;
	name: string;
	description?: string;
	url: string;
	image: string;
	price: {
		stdPrice: number;
		salePrice: number;
	};
	comingSoon: boolean;
	categories: string[];
	onSale: boolean;
}

export type Products = Product[];

export interface ReducerMap {
	cart: CartState;
	colorScheme: ColorScheme;
	products?: Product[];
}
