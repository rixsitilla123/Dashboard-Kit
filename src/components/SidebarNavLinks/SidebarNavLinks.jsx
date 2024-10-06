import React from 'react'
import { NavLink } from 'react-router-dom'

function SidebarNavLinks({item}) {
	return (
		<NavLink className={'py-[20px] pl-[32px] relative flex items-center gap-[24px] text-[#A4A6B3]'} to={item.path}>
			{item.icon}
			<span className='tracking-[0.2px]'>{item.title}</span>
		</NavLink>
	)
}

export default SidebarNavLinks