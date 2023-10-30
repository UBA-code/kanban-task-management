import './styles/App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'

function App() {
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
		root.className = "transition duration-300 bg-dark_Gray dark";
	else
		root.className = "transition duration-300 bg-light_Blue";

	return (
		<div className="app-container mx-auto relative transition">
			<Nav />
			<Home />
		</div>
	)
}

export default App



// TODO : chose color of column when creating column