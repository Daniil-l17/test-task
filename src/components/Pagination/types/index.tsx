import { Dispatch, SetStateAction } from 'react';

export type PropsPogination = {
	setPage: Dispatch<SetStateAction<number>>;
	setPageSize: Dispatch<SetStateAction<number>>;
	page: number;
	pageSize: number;
};
