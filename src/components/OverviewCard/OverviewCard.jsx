import React from 'react'

function OverviewCard({span, number, spanText, spanWeight, leading, spanHover, pSize, pTracking, pHover, divWidth, divPaddingT, rounded, divPaddingB}) {
	return (
		<div className={`${divWidth} ${divPaddingT} ${divPaddingB} ${rounded} px-[32px] text-center border-[1px] border-[#DFE0EB] cursor-pointer overviewCard hover:border-[#3751FF]`}>
			<span className={`${spanText} ${spanWeight} ${leading} ${spanHover} mb-[20px] text-[#9FA2B4] tracking-[0.4px]`}>{span}</span>
			<p className={`${pSize} ${pTracking} ${pHover} text-[#252733] font-bold`}>{number}</p>
		</div>
	)
}
export default OverviewCard