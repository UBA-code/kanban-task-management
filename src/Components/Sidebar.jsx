/* eslint-disable no-unused-vars */
import boardImg from '../assets/icon-board.svg'
import { v4 as uuidv4 } from 'uuid';
import '../styles/Sidebar.css'
import showSideIcon from '../assets/icon-show-sidebar.svg'
import { switchSidebar } from './Nav'
import { useState } from 'react';
import CreateBoard from './CreateBoard'

function switchTheme() {
	let root = document.querySelector("html");
	root.classList.toggle("dark");
	if (root.classList.contains('dark')) {
		root.className = "dark";
		document.querySelector(".switch-icon div").classList.add('active');
		window.localStorage.setItem("theme", "dark");
	}
	else {
		root.className = "light";
		document.querySelector(".switch-icon div").classList.remove('active');
		window.localStorage.setItem("theme", "light");
	}
}


export default function Sidebar({ data, setData }) {
	let [showCreateBox, setShowStatus] = useState(true);

	return (
		<div className="sidebar-main-container">
			<div className="sidebar-container fixed desktop-view top-28 w-[90%] h-[80%] bg-almost_White dark:bg-medium_Gray transition duration-300 rounded-lg py-5 active-side-bar z-40 translate-x-[-100%]">
				<h1 className='text-sm ml-8 text-_gray dark:text-almost_White font-semibold tracking-widest'>{`ALL BOARDS (${data.boards.length})`}</h1>
				<div className="boards-box mt-4 max-h-[60%] overflow-y-auto">
					{data.boards.map(e => {
						return (
							<div className="board-main-box transition hover:bg-purple_Light dark:text-almost_White cursor-pointer py-3 w-[80%] rounded-r-full" key={uuidv4()}>
								<div className="board-box flex items-center ml-8">
									<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
										<path className='board-icon transition' d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="#828FA3" />
									</svg>
									<span className='board-name-sidebar transition text-_gray font-semibold text-lg ml-4'>{e.boardName}</span>
								</div>
							</div>
						)
					})}
				</div>
				<div className="create-board mt-3">
					<div className="board-main-box transition hover:bg-purple_Light cursor-pointer py-3 w-[80%] rounded-r-full" key={uuidv4()}>
						<div className="board-box flex items-center ml-8">
							<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
								<path className='board-icon transition fill-purple_Dark' d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="#828FA3" />
							</svg>
							<span className='board-name-sidebar transition text-purple_Dark font-semibold text-lg ml-4' onClick={_=> setShowStatus(!showCreateBox)}>+Create New Board</span>
						</div>
					</div>
				</div>
				<div className="theme-switcher absolute bottom-6 left-[50%] translate-x-[-50%] w-[80%] bg-purple_superLight dark:bg-dark_Gray transition duration-300 py-4 flex items-center justify-center rounded-lg cursor-pointer" onClick={switchTheme}>
					<div className="light-icon">
						<svg width="19" height="19" xmlns="http://www.w3.org/2000/svg">
							<path d="M9.167 15.833a.833.833 0 0 1 .833.834v.833a.833.833 0 0 1-1.667 0v-.833a.833.833 0 0 1 .834-.834ZM3.75 13.75a.833.833 0 0 1 .59 1.422l-1.25 1.25a.833.833 0 0 1-1.18-1.178l1.25-1.25a.833.833 0 0 1 .59-.244Zm10.833 0c.221 0 .433.088.59.244l1.25 1.25a.833.833 0 0 1-1.179 1.178l-1.25-1.25a.833.833 0 0 1 .59-1.422ZM9.167 5a4.167 4.167 0 1 1 0 8.334 4.167 4.167 0 0 1 0-8.334Zm-7.5 3.333a.833.833 0 0 1 0 1.667H.833a.833.833 0 1 1 0-1.667h.834Zm15.833 0a.833.833 0 0 1 0 1.667h-.833a.833.833 0 0 1 0-1.667h.833Zm-1.667-6.666a.833.833 0 0 1 .59 1.422l-1.25 1.25a.833.833 0 1 1-1.179-1.178l1.25-1.25a.833.833 0 0 1 .59-.244Zm-13.333 0c.221 0 .433.088.59.244l1.25 1.25a.833.833 0 0 1-1.18 1.178L1.91 3.09a.833.833 0 0 1 .59-1.422ZM9.167 0A.833.833 0 0 1 10 .833v.834a.833.833 0 1 1-1.667 0V.833A.833.833 0 0 1 9.167 0Z" fill="#828FA3" />
						</svg>
					</div>
					<div className="switch-icon w-10 h-6 bg-purple_Dark rounded-full relative mx-5">
						<div className={`absolute h-4 w-4 top-[50%] translate-y-[-50%] translate-x-1 bg-almost_White rounded-full transition ${document.querySelector("html").classList.contains("dark") ? "active" : ""}`}></div>
					</div>
					<div className="dark-icon">
						<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.474.682c.434-.11.718.406.481.78A6.067 6.067 0 0 0 6.01 4.72c0 3.418 2.827 6.187 6.314 6.187.89.002 1.77-.182 2.584-.54.408-.18.894.165.724.57-1.16 2.775-3.944 4.73-7.194 4.73-4.292 0-7.771-3.41-7.771-7.615 0-3.541 2.466-6.518 5.807-7.37Zm8.433.07c.442-.294.969.232.674.674l-.525.787a1.943 1.943 0 0 0 0 2.157l.525.788c.295.441-.232.968-.674.673l-.787-.525a1.943 1.943 0 0 0-2.157 0l-.786.525c-.442.295-.97-.232-.675-.673l.525-.788a1.943 1.943 0 0 0 0-2.157l-.525-.787c-.295-.442.232-.968.674-.673l.787.525a1.943 1.943 0 0 0 2.157 0Z" fill="#828FA3" />
						</svg>
					</div>
				</div>
				<div className="hidden md:block toggle-side-bar absolute h-10 w-16 bottom-6 right-[-65px] bg-purple_Dark rounded-r-full cursor-pointer hover:opacity-[.8] transition duration-300" onClick={switchSidebar}>
					<img src={showSideIcon} className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-7' alt="" />
				</div>
			</div>
			<div className="fixed md:hidden top-0 side-bar-background h-screen w-screen bg-black opacity-[.5] transition duration-300 scale-0" onClick={switchSidebar}></div>
			<div className="create-new-board-Component">
				{showCreateBox && <CreateBoard data={data} showStatus={setShowStatus}/>}
				{showCreateBox && <div className="dark-bg fixed top-0 w-full h-full bg-black opacity-[.5] z-[35]"></div>}
			</div>
		</div>
	)
}