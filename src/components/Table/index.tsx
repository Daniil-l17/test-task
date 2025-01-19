import { Pencil } from 'lucide-react';
import { FC } from 'react';
import { PropsTable } from './types';
import { Loader } from '../Loader';

export const Table: FC<PropsTable> = ({ data, setIsEdit, setMenuContent, setIsOpenMenu, isError, isLoading }) => {
	return (
		<div className='mt-[30px] w-full flex-1 relative'>
			<table className=' w-full table-fixed'>
				<thead className='bg-[#F6F4F4]'>
					<tr className=''>
						<th className='text-left pl-6 py-[14px] text-[13px] font-semibold'>Название</th>
						<th className='text-left pl-6 py-[14px] text-[13px] font-semibold'>Единица измерения</th>
						<th className='text-left pl-6 py-[14px] text-[13px] font-semibold'>Артикул/код</th>
						<th className='text-left pl-6 py-[14px] text-[13px] font-semibold'></th>
					</tr>
				</thead>
				{isLoading ? (
					<div className=' left-[50%] top-[50%] absolute m-auto'>
						<Loader />
					</div>
				) : isError ? (
					<p>error</p>
				) : !data.length ? (
					<p>Ничего не найдено</p>
				) : (
					<tbody>
						{data.map(item => (
							<tr key={item.id} className='border-b h-[70px] border-[#F2EEEE] relative'>
								<td className='pl-6 py-[20px] truncate w-[60px]'>{item.name}</td>
								<td className='pl-6 py-[20px]'>{item.measurement_units}</td>
								<td className='pl-6 py-[20px]'>{item.code}</td>
								<span
									onClick={() => {
										setMenuContent({ code: item.code, id: item.id, name: item.name, description: item.description, measurement_units: item.measurement_units }), setIsOpenMenu(true), setIsEdit(true);
									}}
									className='border p-[6px] cursor-pointer border-[#F2EEEE] rounded-[6px] absolute right-[24px] top-[30%]'
								>
									<Pencil color='#352424' size={20} />
								</span>
							</tr>
						))}
					</tbody>
				)}
			</table>
		</div>
	);
};
