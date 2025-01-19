import { Monitor, X } from 'lucide-react';
import { FC, useEffect, useMemo } from 'react';
import { PropsModalMenu } from './types';
import { axiosBase } from '../../config';

export const ModalMenu: FC<PropsModalMenu> = ({ isOpenMenu, refetch, isEdit, setIsEdit, setIsOpenMenu, menuContent, setMenuContent }) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setMenuContent(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const textName = useMemo(() => {
		return menuContent.name;
	}, [isOpenMenu]);

	const createItemsTable = async () => {
		try {
			await axiosBase.post('/wh/items', {
				...menuContent
			});
		} finally {
			refetch();
			setIsOpenMenu(false);
			setMenuContent({
				name: '',
				description: '',
				measurement_units: '',
				code: ''
			});
		}
	};

	const updateItemsTable = async () => {
		try {
			await axiosBase.patch(`/wh/items/${menuContent.id}`, {
				...menuContent
			});
		} finally {
			refetch();
			setIsOpenMenu(false);
			setMenuContent({
				name: '',
				description: '',
				measurement_units: '',
				code: ''
			});
		}
	};

	useEffect(() => {
		if (!isOpenMenu) {
			setIsEdit(false);
			setMenuContent({
				name: '',
				description: '',
				measurement_units: '',
				code: ''
			});
		}
	}, [isOpenMenu]);

	return (
		<div onClick={() => setIsOpenMenu(false)} className={`bg-[#0000009a] overflow-x-hidden transition-all duration-300 ${isOpenMenu ? 'fixed' : 'relative'} top-0 left-0 right-0 bottom-0`}>
			<div
				onClick={e => e.stopPropagation()}
				className={`w-[400px] transition-all duration-150 ease-out ${isOpenMenu ? 'right-0' : 'right-[-400px]'} flex flex-col absolute p-6 right-0 top-0 bottom-0 bg-white h-[100vh]`}
			>
				<div className='flex justify-between items-center'>
					<span className='bg-[#FAF4F4] rounded-lg w-[48px] h-[48px] flex justify-center items-center'>
						<Monitor size={24} color='#A85757' />
					</span>
					<span
						onClick={() => {
							setIsOpenMenu(false);
						}}
						className='cursor-pointer'
					>
						<X size={19} color='black' />
					</span>
				</div>
				<div className='mt-[24px] flex flex-col gap-2'>
					<h2 className='font-semibold'>{isEdit ? textName : 'Новая позиция'}</h2>
					<p className='text-sm text-[#8D8585]'>Заполните все поля для создания новой номенклатуры</p>
				</div>
				<div className='mt-[16px] flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<span className='text-sm font-medium'>Название</span>
						<input value={menuContent.name} onChange={handleInputChange} name='name' className='outline-none px-[12px] py-[10px] border border-[#DFDDDD] rounded' type='text' placeholder='Название' />
					</div>
					<div className='flex flex-col gap-2'>
						<span className='text-sm font-medium'>Единица измерения</span>
						<input
							value={menuContent.measurement_units}
							onChange={handleInputChange}
							name='measurement_units'
							className='outline-none px-[12px] py-[10px] border border-[#DFDDDD] rounded'
							type='text'
							placeholder='Единица измерения'
						/>
					</div>
					<div className='flex flex-col gap-2'>
						<span className='text-sm font-medium'>Артикул/код</span>
						<input
							value={menuContent.code}
							onChange={handleInputChange}
							name='code'
							className='outline-none px-[12px] py-[10px] border border-[#DFDDDD] rounded'
							type='text'
							placeholder='Артикул/код'
						/>
					</div>
					<div className='flex flex-col gap-2'>
						<span className='text-sm font-medium'>Описание</span>
						<textarea
							value={menuContent.description}
							onChange={handleInputChange}
							name='description'
							maxLength={100}
							className='outline-none px-[12px] min-h-[60px] h-[140px] max-h-[140px] py-[10px] border border-[#DFDDDD] rounded'
							placeholder='Описание'
						/>
					</div>
				</div>
				<div className='flex items-end justify-between flex-1'>
					<button onClick={() => setIsOpenMenu(false)} className='w-[170px] h-[40px] flex bg-[#514A4A] rounded-md justify-center items-center text-white'>
						Отмена
					</button>
					<button onClick={isEdit ? updateItemsTable : createItemsTable} className='w-[170px] h-[40px] flex bg-[#A85757] rounded-md justify-center items-center text-white'>
						Подтвердить
					</button>
				</div>
			</div>
		</div>
	);
};
