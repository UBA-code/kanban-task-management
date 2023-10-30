import { useState } from "react";
export default function Task({ obj }) {
	let [data, setData] = useState(obj);

	return (
		<div className="task-box bg-almost_White dark:bg-medium_Gray my-5 px-5 py-7 rounded-lg shadow-md cursor-pointer hover:opacity-[0.6] transition duration-300">
			<h1 className='text-md font-semibold dark:text-almost_White transition duration-300'>{data.title}</h1>
			<p className='text-xs font-medium text-_gray mt-1 transition duration-300'>{`0 of ${data.subTasks.length} of subtasks`}</p>
		</div>
	)
}
