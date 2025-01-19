import { Plus, Search } from 'lucide-react';
import { FC } from 'react';
import { PropsHeader } from './types';

export const Header: FC<PropsHeader> = ({ totalCount, inputValue, setIsOpenMenu, setInputValue }) => {
	return (
		<header className='flex justify-between'>
			<div className='flex items-center gap-2'>
				<h1 className='font-semibold text-[32px]'>Номенклатура</h1>
				<span className='bg-[#A85757] rounded py-[3px] text-[13px] font-[475] px-[8px] text-white'>{totalCount} единиц</span>
			</div>
			<div className='flex gap-4'>
				<div className='flex border rounded-[4px] pl-[10px] border-[#DFDDDD] gap-2 items-center'>
					<span>
						<Search color='#DFDDDD' size={18} />
					</span>
					<input onChange={e => setInputValue(e.target.value)} value={inputValue} className='text-[#3e3e3e] outline-none' type='text' placeholder='Поиск по названию' />
					<button className='text-white rounded-r-[4px] h-full bg-[#514A4A] px-[14px]'>Поиск</button>
				</div>
				<button onClick={() => setIsOpenMenu(true)} className='py-[10px] rounded bg-[#A85757] flex gap-2 items-center px-[14px]'>
					<span>
						<Plus size={20} color='white' />
					</span>
					<p className='text-white text-sm font-[475]'>Новая позиция</p>
				</button>
			</div>
		</header>
	);
};
