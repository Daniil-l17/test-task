import { ArrowRight, ChevronDown } from 'lucide-react';
import { FC, useState } from 'react';
import { PropsPogination } from './types';

export const Pogination: FC<PropsPogination> = ({ setPage, page, setPageSize, pageSize }) => {
	const [poginationArray, setPoginationArray] = useState([1, 2, 3, 4, 5, 6]);
	return (
		<div className='mt-[20px] flex justify-between'>
			<div className='flex gap-[12px]'>
				{poginationArray.map(items => (
					<span
						onClick={() => setPage(items)}
						key={items}
						className={`w-[40px] ${items === page ? 'border-[#A85757] border-[2px]' : 'border-[#F2EEEE'} cursor-pointer rounded-md h-[40px] flex justify-center items-center`}
					>
						{items}
					</span>
				))}
				<button
					onClick={() =>
						setPoginationArray(prev => {
							const element = prev.shift();
							const lastElement = prev[prev.length - 1] + 1;
							if (page === element) {
								setPage(element + 1);
							}
							setPage(prev => prev + 1);
							return [...prev, lastElement];
						})
					}
					className='border w-[40px] h-[40px] cursor-pointer rounded-[4px] border-[#F2EEEE] flex justify-center items-center'
				>
					<ArrowRight size={18} />
				</button>
			</div>
			<div className='flex gap-[13px] items-center'>
				<p>Показывать по:</p>
				<button
					onClick={() =>
						setPageSize(prev => {
							if (prev === 1) {
								return prev;
							} else {
								return prev - 1;
							}
						})
					}
					className='bg-[#514A4A] flex gap-[10px] items-center text-white rounded-md py-[10px] px-[16px]'
				>
					<p>{pageSize}</p>
					<ChevronDown size={20} color='white' />
				</button>
			</div>
		</div>
	);
};
