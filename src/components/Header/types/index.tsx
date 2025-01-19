import { Dispatch, SetStateAction } from 'react';

export type PropsHeader = {
	totalCount: number;
	inputValue: string;
	setInputValue: Dispatch<SetStateAction<string>>;
	setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
};
