/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';
import Task from './Task';
import { useState } from 'react';

export default function Column({columnObj}) {
	let [data, setData] = useState(columnObj);

	return (
		<div className="column-box m-5 w-[18rem] md:w-[24rem]">
			<div className="name-box flex items-center tracking-widest font-semibold">
				<span className={`w-5 h-5 bg-[${data.color}] rounded-full`}></span>
				<h1 className="column-name mx-1 text-sm text-_gray dark:text-almost_White transition duration-300">{data.name}</h1>
				<span className='text-sm text-_gray'>({data.tasks.length})</span>
			</div>
			{data.tasks.map(e => <Task obj={e} key={uuidv4()}/>)} {/* Task component  */}
		</div>
	)
}
