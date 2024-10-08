import React from 'react';
import SidebarNavLinks from './SidebarNavLinks/SidebarNavLinks';
import { Logo, SidebarIcon1, SidebarIcon2, SidebarIcon3, SidebarIcon4, SidebarIcon5, SidebarIcon6, SidebarIcon7, SidebarIcon8 } from '../assets/Images/Icon';

function Sidebar() {
	const navLinkList = [
		{
			id:1, 
			icon: <SidebarIcon1/>,
			title: 'Overview', 
			path: '/'
		},
		{
			id:2, 
			icon: <SidebarIcon2/>,
			title: 'Tickets', 
			path: '/tickets'
		},
		{
			id:3, 
			icon: <SidebarIcon3/>,
			title: 'Ideas', 
			path: '/ideas'
		},
		{
			id:4, 
			icon: <SidebarIcon4/>,
			title: 'Contacts', 
			path: '/contacts'
		},
		{
			id:5, 
			icon: <SidebarIcon5/>,
			title: 'Agents', 
			path: '/agents'
		},
		{
			id:6, 
			icon: <SidebarIcon6/>,
			title: 'Articles', 
			path: '/articles'
		}
	]
	const navLinkList2 = [
		{
			id:7, 
			icon: <SidebarIcon7/>,
			title: 'Settings', 
			path: '/settings'
		},
		{
			id:8, 
			icon: <SidebarIcon8/>,
			title: 'Subscription', 
			path: '/subscription'
		}
	]
	return (
		<div className=' w-[20%] h-[100vh] overflow-y-auto bg-[#363740]'>
			<a className='flex items-center gap-[12px] pt-[37px] pl-[32px] pb-[59px]' href="/">
				<Logo />
				<span className="text-[#A4A6B3] text-[19px] font-bold tracking-[0.4px] opacity-[0.7]">Dashboard Kit</span>
			</a>
			<nav>
				{navLinkList.map(item => <SidebarNavLinks item={item} key={item.id}/>)}
				<span className='my-[16px] w-[100%] h-[1px] bg-[#DFE0EB] inline-block'></span>
				{navLinkList2.map(item => <SidebarNavLinks item={item} key={item.id}/>)}
			</nav>
		</div>
	)
}

export default Sidebar