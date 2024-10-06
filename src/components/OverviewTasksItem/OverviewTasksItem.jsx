import React from 'react'

function OverviewTasksItem({text, bg, btnTitle}) {
	return (
		<div className='px-[32px] border-b-[1px] border-[#DFE0EB] py-[17px] flex items-center justify-between'>
			<div className="flex items-center gap-[16px]">
				<button className="w-[20px] h-[20px] border-[2px] rounded-[50%] border-[#C5C7CD] outline-none"></button>
				<p className="text-[#252733] text-[14px] font-semibold leading-[20px] tracking-[0.2px]">{text}</p>
			</div>
			<button className={`${bg} py-[5px] px-[12px] rounded-[8px] text-[11px] text-[#fff] font-bold tracking-[0.5px] uppercase`}>{btnTitle}</button>
		</div>
	)
}

export default OverviewTasksItem