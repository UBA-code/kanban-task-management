/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Sidebar from './Sidebar';

import Board from "./Board";

export default function Home() {
	console.log("rendred");
	let [data, setData] = useState({boards:[]});
	if (window.localStorage.length)
	{
		if (window.localStorage.getItem("theme"))
			document.querySelector("html").className = window.localStorage.getItem("theme");
		if (window.localStorage.getItem("app-obj"))
			data = JSON.parse(window.localStorage.getItem("app-data"));
	}

	return (
		<div className={`home-container inline-flex mt-24 transition duration-300 relative`}>
			<Sidebar data={data} />
			{data.boards.length ? <Board data={data.boards.map(e=> e.active)} setData={setData} />  : ""}
		</div>
	)
}
