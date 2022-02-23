export interface Currency {
	name: string;
	code: string;
	symbol: string;
}

export interface CartItem {
	id: number;
	name: string;
	value: number;
	quantity: number;
}

export interface cartState {
	items: CartItem[];
	totalValue: number;
	totalQuantity: number;
}

export interface Product {
	id: number;
	name: string;
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
	cart: cartState;
	products: Product[];
}
