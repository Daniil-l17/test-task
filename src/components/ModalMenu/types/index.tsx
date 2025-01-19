import { Dispatch, SetStateAction } from 'react';

export type PropsModalMenu = {
	isOpenMenu: boolean;
	setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
	menuContent: {
		name: string;
		description: string;
		measurement_units: string;
		code: string;
		id?: string;
	};
	isEdit: boolean;
	setIsEdit: Dispatch<SetStateAction<boolean>>;
	setMenuContent: Dispatch<SetStateAction<{ name: string; description: string; measurement_units: string; code: string; id?: string }>>;
};
