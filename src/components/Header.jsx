import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {HeaderSearchIcon, HeaderNewsIcon} from '../assets/Images/Icon';
import HeaderAvatar from '../assets/Images/HeaderAvatar.jpg';

function Header() {
	const [pathTitle, setPathTitle] = useState('Overview')
	const path = useLocation()

	function renderTitle(value) {
		switch(value) {
			case '/':
				setPathTitle('Overview')
			break;
			case '/tickets':
				setPathTitle('Tickets')
			break;
			case '/ideas':
				setPathTitle('Ideas')
			break;
			case '/contacts':
				setPathTitle('Contacts')
			break;
			case '/agents':
				setPathTitle('Agents')
			break;
			case '/articles':
				setPathTitle('Articles')
			break;
			case '/settings':
				setPathTitle('Settings')
			break;
			case '/subscription':
				setPathTitle('Subscription')
			break;
		}
	}
	useEffect(() => {
		renderTitle(path.pathname) 
	}, [path])
	return (
		<div className='flex items-center justify-between mb-[54px]'>
			<h2 className="text-[#252733] text-[24px] font-bold tracking-[0.3px]">{pathTitle}</h2>
			<div className="flex items-center gap-[32px]">
				<div className="flex items-center gap-[26px] text-[#C5C7CD]">
					<HeaderSearchIcon/>
					<HeaderNewsIcon/>
				</div>
				<span className="w-[2px] h-[32px] inline-block bg-[#DFE0EB]"></span>
				<div className="flex items-center gap-[14px]">
					<p className="text-[#252733] text-[14px] font-semibold leading-[20px] tracking-[0.2px]">Jones Ferdinand</p>
					<img className='border-[1.5px] border-[#DFE0EB] rounded-[50%] cursor-pointer' src={HeaderAvatar} alt="avatar" width={63} height={43}/>
				</div>
			</div>
		</div>	
	)
}

export default Header