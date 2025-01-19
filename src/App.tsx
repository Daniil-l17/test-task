import { Header } from './components/Header';
import { Table } from './components/Table';
import { Pogination } from './components/Pagination';
import { useGetItems } from './hooks/useGetItems';
import { ResultItems } from './types';
import { useState } from 'react';
import { ModalMenu } from './components/ModalMenu';
import { useDebounce } from './hooks/useDebounce';

function App() {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [inputValue, setInputValue] = useState<string>('');
	const debounceValue = useDebounce(inputValue, 1000);
	const { data, isLoading, isError, refetch } = useGetItems<ResultItems>({ url: '/wh/items', page, pageSize, itemName: debounceValue });
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [menuContent, setMenuContent] = useState<{ name: string; description: string; measurement_units: string; code: string; id?: string }>({
		name: '',
		description: '',
		measurement_units: '',
		code: '',
		id: ''
	});

	return (
		<div className='px-5 h-[100vh] py-6 flex flex-col'>
			<Header inputValue={inputValue} setInputValue={setInputValue} setIsOpenMenu={setIsOpenMenu} totalCount={data.total} />
			<Table setIsEdit={setIsEdit} setIsOpenMenu={setIsOpenMenu} setMenuContent={setMenuContent} isLoading={isLoading} isError={isError} data={data.result} />
			<Pogination pageSize={pageSize} page={page} setPage={setPage} setPageSize={setPageSize} />
			<ModalMenu refetch={refetch} isEdit={isEdit} setIsEdit={setIsEdit} menuContent={menuContent} setMenuContent={setMenuContent} isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
		</div>
	);
}

export default App;
