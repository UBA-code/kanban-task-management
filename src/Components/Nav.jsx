import mobileLogo from '../assets/logo-mobile.svg'
import createIcon from '../assets/icon-add-task-mobile.svg'
import BoardMenuIcon from '../assets/icon-vertical-ellipsis.svg'
import launchBtn from '../assets/icon-chevron-down.svg'

import '../styles/Nav.css'

export function switchSidebar() {
	let sideBar = document.querySelector(".sidebar-container");
	if (sideBar && typeof sideBar !== 'undefined')
	{
		sideBar.classList.toggle('translate-x-[0%]');
		sideBar.classList.toggle('left-[5%]');
		document.querySelector(".board-container") ? document.querySelector(".board-container").classList.toggle('md:translate-x-[24%]') : "";
		document.querySelector(".side-bar-background").classList.toggle('scale-0');
		document.querySelector(".side-bar-background").classList.toggle('scale-1');
	}
}

export default function Nav() {
	return (
		<nav className='fixed w-full flex items-center shadow bg-almost_White dark:bg-almost_Dark z-50 transition duration-300'>
			<div className="logo-box flex justify-center items-center md:border-r-[.8px] md:border-solid md:border-medium_Gray p-6 md:p-8 md:mr-3">
				<img className='' src={mobileLogo} alt="mobile logo" />
				<h1 className='text-3xl dark:text-almost_White font-bold hidden md:block md:ml-2 transition duration-300'>Kanban</h1>
			</div>
			<div className="w-full right-box flex justify-between items-center pr-6 md:pr-8">
				<div className="launch-box mr-auto flex justify-center items-center cursor-pointer" onClick={switchSidebar}>
					<h1 className='text-xl sm:text-2xl font-semibold dark:text-almost_White transition duration-300'>Platfrom Lanch</h1>
					<img className='ml-2 w-3 md:hidden' src={launchBtn} alt="down icon" />
				</div>
				<div className="add-icon py-4 px-6 rounded-full bg-purple_Dark mr-5 cursor-pointer flex justify-center items-center">
					<img className='w-2 md:mr-2' src={createIcon} alt="create icon" />
					<p className='text-white hidden md:block'>Add new Task</p>
				</div>
				<div className="board-menu cursor-pointer">
					<img src={BoardMenuIcon} alt="dots" />
				</div>
			</div>
		</nav>
	)
}