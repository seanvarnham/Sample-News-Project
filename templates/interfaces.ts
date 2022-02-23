export interface Currency {
	name: string;
	code: string;
	symbol: string;
}

export interface Product {
	id: number;
	name: string;
	url: string;
	image: string;
	price: {
		price: number;
		salePrice: number;
	};
	comingSoon: boolean;
	categories: string[];
	onSale: boolean;
}

export type Products = Product[];
