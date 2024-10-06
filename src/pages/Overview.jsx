import React from 'react'
import OverviewCard from '../components/OverviewCard/OverviewCard';
import OverviewTicketsItem from '../components/OverviewTicketsItem/OverviewTicketsItem';
import OverviewTasksItem from '../components/OverviewTasksItem/OverviewTasksItem';
import { TasksIcon1 } from '../assets/Images/Icon';

function Overview() {
	return (
		<div>
			<div className='flex items-center gap-[30px] mb-[30px]'>
				<OverviewCard span={'Unresolved'} number={60} spanText={'text-[19]'} spanWeight={'font-bold'} spanHover={"hover:text-[#3751FF]"} pSize={'text-[40px]'} pTracking={"tracking-[1px]"} pHover={"hover:text-[#3751FF]"} divWidth={'w-[258px]'} divPaddingT={'pt-[24px]'} rounded={'rounded-[8px]'} />
				<OverviewCard span={'Overdue'} number={16} spanText={'text-[19]'} spanWeight={'font-bold'} spanHover={"hover:text-[#3751FF]"} pSize={'text-[40px]'} pTracking={"tracking-[1px]"} pHover={"hover:text-[#3751FF]"} divWidth={'w-[258px]'} divPaddingT={'pt-[24px]'} rounded={'rounded-[8px]'} />
				<OverviewCard span={'Open'} number={43} spanText={'text-[19]'} spanWeight={'font-bold'} spanHover={"hover:text-[#3751FF]"} pSize={'text-[40px]'} pTracking={"tracking-[1px]"} pHover={"hover:text-[#3751FF]"} divWidth={'w-[258px]'} divPaddingT={'pt-[24px]'} rounded={'rounded-[8px]'} />
				<OverviewCard span={'On hold'} number={64} spanText={'text-[19]'} spanWeight={'font-bold'} spanHover={"hover:text-[#3751FF]"} pSize={'text-[40px]'} pTracking={"tracking-[1px]"} pHover={"hover:text-[#3751FF]"} divWidth={'w-[258px]'} divPaddingT={'pt-[24px]'} rounded={'rounded-[8px]'} />
			</div>
			<div className="border-[1px] border-[#DFE0EB] flex items-start justify-between rounded-[8px] mb-[30px]">
				<div className="w-[100%] p-[32px] flex items-end justify-between">
					<div className="">
						<h4 className="text-[#252733] text-[19px] font-bold tracking-[0.4px] mb-[10px]">Today’s trends</h4>
						<p className="text-[12px] text-[#9FA2B4] leading-[16px] tracking-[0.1ox]">as of 25 May 2019, 09:41 PM</p>
					</div>
					<div className="flex items-center gap-[32px]">
						<div className="flex items-center gap-[8px]">
							<span className="w-[16px] h-[1px] bg-[#DFE0EB] duration-500 inline-block hover:bg-[#3751FF]"></span>
							<span className="text-[12px] text-[#9FA2B4] font-semibold tracking-[0.1px]">Today</span>
						</div>
						<div className="flex items-center gap-[8px]">
							<span className="w-[16px] h-[1px] bg-[#DFE0EB] duration-500 inline-block hover:bg-[#3751FF]"></span>
							<span className="text-[12px] text-[#9FA2B4] font-semibold tracking-[0.1px]">Yesterday</span>
						</div>
					</div>
				</div>
				<div className="w-[342px] flex flex-wrap">
					<OverviewCard span={'Resolved'} number={449} spanText={'text-[16px]'} spanWeight={'font-semibold'} leading={'leading-[22px]'} pSize={'text-[24px]'} pTracking={'font-bold'} divWidth={'w-[342px]'} divPaddingT={'pt-[32px]'} divPaddingB={'pb-[24px]'} />
					<OverviewCard span={'Received'} number={426} spanText={'text-[16px]'} spanWeight={'font-semibold'} leading={'leading-[22px]'} pSize={'text-[24px]'} pTracking={'font-bold'} divWidth={'w-[342px]'} divPaddingT={'pt-[32px]'} divPaddingB={'pb-[24px]'} />
					<OverviewCard span={'Average first response time'} number={'33m'} spanText={'text-[16px]'} spanWeight={'font-semibold'} leading={'leading-[22px]'} pSize={'text-[24px]'} pTracking={'font-bold'} divWidth={'w-[342px]'} divPaddingT={'pt-[32px]'} divPaddingB={'pb-[24px]'} />
					<OverviewCard span={'Average response time'} number={'3h 8m'} spanText={'text-[16px]'} spanWeight={'font-semibold'} leading={'leading-[22px]'} pSize={'text-[24px]'} pTracking={'font-bold'} divWidth={'w-[342px]'} divPaddingT={'pt-[32px]'} divPaddingB={'pb-[24px]'} />
					<OverviewCard span={'Resolution within SLA'} number={'94%'} spanText={'text-[16px]'} spanWeight={'font-semibold'} leading={'leading-[22px]'} pSize={'text-[24px]'} pTracking={'font-bold'} divWidth={'w-[342px]'} divPaddingT={'pt-[32px]'} divPaddingB={'pb-[24px]'} />
				</div>
			</div>
			<div className="flex items-center justify-between gap-[30px]">
				<div className="w-[546px] rounded-[8px] border-[1px] border-[#DFE0EB]">
					<div className="px-[32px] pt-[32px] mb-[16px] flex items-start justify-between">
						<div className="">
							<h4 className="text-[#252733] text-[19px] font-bold tracking-[0.4px] mb-[17px]">Unresolved tickets</h4>
							<p className='text-[#9FA2B4] text-[12px] font-400 tracking-[0.1px]'>Group: <span className="text-[#4B506D]">Support</span></p>
						</div>
						<button className='text-[#3751FF] outline-none text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>View details</button>
					</div>
					<div className="">
						<OverviewTicketsItem text={'Waiting on Feature Request'} span={4238} />
						<OverviewTicketsItem text={'Awaiting Customer Response'} span={1005} />
						<OverviewTicketsItem text={'Awaiting Developer Fix'} span={914} />
						<OverviewTicketsItem text={'Pending'} span={281} />
					</div>
				</div>
				<div className="w-[546px] rounded-[8px] border-[1px] border-[#DFE0EB]">
					<div className="px-[32px] pt-[32px] mb-[16px] flex items-start justify-between">
						<div className="">
							<h4 className="text-[#252733] text-[19px] font-bold tracking-[0.4px] mb-[17px]">Tasks</h4>
							<p className='text-[#9FA2B4] text-[12px] font-400 tracking-[0.1px]'>Today</p>
						</div>
						<button className='text-[#3751FF] outline-none text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>View all</button>
					</div>
					<div className="px-[32px] py-[17px] flex items-center justify-between border-b-[1px] border-[#DFE0EB]">
						<input className='outline-none text-[#C5C7CD] text-[14px] font-semibold leading-[20px] tracking-[0.2px]' type="text" placeholder='Create new task' required autoComplete='off'/>
						<button className="bg-[#F0F1F7] rounded-[8px] w-[24px] h-[24px] p-[7px] text-[#9FA2B4]"><TasksIcon1/></button>
					</div>
					<div className="">
						<OverviewTasksItem text={'Finish ticket update'} bg={'bg-[#FEC400]'} btnTitle={'Urgent'}/>
						<OverviewTasksItem text={'Create new ticket example'} bg={'bg-[#29CC97]'} btnTitle={'New'}/>
						<OverviewTasksItem text={'Update ticket report'} bg={'bg-[#F0F1F7]'} btnTitle={'Default'}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Overview