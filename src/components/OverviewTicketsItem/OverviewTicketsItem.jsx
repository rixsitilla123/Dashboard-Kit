import React from 'react'

function OverviewTicketsItem({text, span}) {
	return (
		<div className='w-[100%] px-[32px] border-b-[1px] border-[#DFE0EB] py-[20px] flex items-center justify-between'>
			<p className="text-[#252733] text-[14px] font-semibold tracking-[0.2px] leading-[20px]">{text}</p>
			<span className="text-[#9FA2B4] text-[14px] font-semibold tracking-[0.2px] leading-[20px]">{span}</span>
		</div>
	)
}

export default OverviewTicketsItem