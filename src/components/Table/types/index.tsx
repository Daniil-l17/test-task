import { Dispatch, SetStateAction } from 'react';
import { Result } from '../../../types';

export type PropsTable = {
	isLoading: boolean;
	isError: boolean;
	data: Result[];
	setIsEdit: Dispatch<SetStateAction<boolean>>;
	setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
	setMenuContent: Dispatch<SetStateAction<{ name: string; description: string; measurement_units: string; code: string; id?: string }>>;
};
