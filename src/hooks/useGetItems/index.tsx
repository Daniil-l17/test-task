import { useEffect, useState } from 'react';
import { axiosBase } from '../../config';

type Props = {
	url: string;
	itemName?: string;
	page: number;
	pageSize: number;
};

export const useGetItems = <T,>(obj: Props): { data: T; isLoading: boolean; isError: boolean; refetch: () => void } => {
	const [data, setData] = useState<T>([] as T);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const refetch = () => {
		setIsLoading(true);
		setIsError(false);
		(async () => {
			try {
				const response = (
					await axiosBase.get(obj.url, {
						params: {
							page: obj.page,
							pageSize: obj.pageSize,
							sortOrder: 'DESC',
							itemName: obj.itemName
						}
					})
				).data;
				setData(response);
			} catch {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		})();
	};

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			try {
				const response = (
					await axiosBase.get(obj.url, {
						params: {
							page: obj.page,
							pageSize: obj.pageSize,
							sortOrder: 'DESC',
							itemName: obj.itemName
						}
					})
				).data;
				setData(response);
			} catch {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		})();
		return () => {
			setData([] as T);
			setIsLoading(true);
			setIsError(false);
		};
	}, [obj.pageSize, obj.page, obj.itemName]);

	return {
		data,
		isLoading,
		refetch,
		isError
	};
};
