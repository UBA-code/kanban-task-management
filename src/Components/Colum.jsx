/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';
import Task from './Task';
import { useState } from 'react';

export default function Column({ columnObj }) {

	return (
		<div className="column-box m-5 w-[18rem] md:w-[24rem]">
			<div className="name-box flex items-center tracking-widest font-semibold">
				<span className={`w-5 h-5 bg-[#000] rounded-full`}></span>
				<h1 className="column-name mx-1 text-sm text-_gray dark:text-almost_White smoth-transition">{columnObj.name.length > 15 ? `${columnObj.name.substr(0, 15)}...` : columnObj.name}</h1>
				<span className='text-sm text-_gray'>({columnObj.tasks && columnObj.tasks.length})</span>
			</div>
			{/* {columnObj.tasks && columnObj.tasks.map(e => <Task obj={e} key={uuidv4()}/>)} Task component  */}
		</div>
	)
}
