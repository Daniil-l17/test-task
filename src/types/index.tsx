export interface ResultItems {
	result: Result[];
	total: number;
}

export interface Result {
	id: string;
	name: string;
	description: string;
	measurement_units: string;
	deposit: any;
	code: string;
	min_quantity: any;
	price: any;
	rent_price: any;
	accounting_price: any;
	type: any;
	custom_values: any[];
}
