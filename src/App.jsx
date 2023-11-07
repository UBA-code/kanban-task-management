import './styles/App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import { useState } from "react";


export function updateData(data, setData) {
	localStorage.setItem('app-data', JSON.stringify(data));
	setData(data);
}

export function addBoard(data, setData, obj) {
	if (localStorage.getItem('app-data')) {
		let appData = JSON.parse(localStorage.getItem('app-data'));

		// console.log(appData);
		appData.boards = [...appData.boards, obj];
		localStorage.setItem('app-data', JSON.stringify(appData));
	}
	else {
		obj['active'] = true;
		localStorage.setItem('app-data', JSON.stringify({ boards: [obj] }))
	}
	updateData(JSON.parse(localStorage.getItem('app-data')), setData);
}


function App() {
	let [data, setData] = useState({ boards: [] });
	if (window.localStorage.length) {
		if (window.localStorage.getItem("theme"))
			document.querySelector("html").className = window.localStorage.getItem("theme");
		if (window.localStorage.getItem("app-data"))
			data = JSON.parse(window.localStorage.getItem("app-data"));
	}

	let obj = {
		boards: [
			{
				active: true,
				boardName: "PlatformLanch",
				column: [
					{
						name: "TODO",
						color: "#EA5555",
						tasks: [
							{
								title: "Build UI for onboarding flow",
								description: "",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
							{
								title: "Build UI for Search",
								description: "Hello this is description",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
						],
					},
					{
						name: "DOING",
						color: "#EA5555",
						tasks: [
							{
								title: "Build UI for onboarding flow",
								description: "",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
							{
								title: "Build UI for Search",
								description: "Hello this is description",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
							{
								title: "Build setting UI",
								description: "need support",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
							{
								title: "QA and test all major use journeys",
								description: "done here !!",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
						],
					},
					{
						name: "DONE",
						color: "#EA5555",
						tasks: [
							{
								title: "Build UI for onboarding flow",
								description: "",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
							{
								title: "Build UI for Search",
								description: "Hello this is description",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
							{
								title: "Build setting UI",
								description: "need support",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
							{
								title: "QA and test all major use journeys",
								description: "done here !!",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
							{
								title: "Build setting UI",
								description: "need support",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
							{
								title: "QA and test all major use journeys",
								description: "done here !!",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
							{
								title: "Build setting UI",
								description: "need support",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
							{
								title: "QA and test all major use journeys",
								description: "done here !!",
								subTasks: ["Sign up page", "Sign in page", "Welcome page"],
								currentStatus: "TODO",
							},
						],
					}
				]
			}
		]
	}

	let root = document.querySelector("html");

	if (root.classList.contains('dark'))
		root.className = "smoth-transition bg-dark_Gray dark";
	else
		root.className = "smoth-transition bg-light_Blue";

	return (
		<div className="app-container mx-auto relative transition">
			<Nav data={data} setData={setData}/>
			<Home data={data} setData={setData}/>
		</div>
	)
}
export default App



// TODO : chose color of column when creating column