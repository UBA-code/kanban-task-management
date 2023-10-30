import Column from "./Colum";
import { v4 as uuidv4 } from 'uuid';
import createIcon from '../assets/icon-add-task-mobile.svg'
import '../styles/Board.css'

export default function Board({ data, setData }) {
	if (JSON.stringify(data) === "{}")
		return (
			<div className="board-container inline-flex">
			</div>
		)
	return (
		<div className="board-container inline-flex transition duration-300">
			{data.column.map(e => <Column columnObj={e} key={uuidv4()} />)}
			<div className="new-colum m-5 w-[18rem] md:w-[24rem] h-[91.5%] rounded-lg mt-16 bg-purple_superLight flex justify-center items-center cursor-pointer transition hover:opacity-[.7]">
				<img src={createIcon} alt="plus icon" />
				<span className="text-2xl font-semibold text-_gray">New Column</span>
			</div>
		</div>
	)
}