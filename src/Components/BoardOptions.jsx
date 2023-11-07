import { v4 as uuidv4 } from 'uuid';
import deleteBtn from '../assets/icon-cross.svg'

export default function BoardOptions({ name, setName, columns, setColumns, updateColumns }) {

	return (
		<div className="board-editing-box">
			<div className="board-name-box flex flex-col">
				<label className="text-_gray text-sm font-semibold py-3 dark:text-almost_White smoth-transition" htmlFor="boardName">Name</label>
				<input className="border-[1px] border-solid rounded-md py-3 px-5 font-bold text-sm dark:bg-dark_Gray dark:text-almost_White smoth-transition"
					type="text" id="boardName" placeholder="e.g. Web Desing" value={name} onChange={e => setName(e.target.value)} />
			</div>
			<label className="text-_gray text-sm font-semibold block py-3 dark:text-almost_White smoth-transition">Columns</label>
			<div className="columns-box h-[170px] overflow-auto">
				{columns.map((e, i) =>
				(
					<div className="input-box flex justify-between items-center my-3" key={e.key}>
						<input className='column-input' type="text" placeholder="Column name" value={e.column} onChange={e => updateColumns(i, e.target.value)} />
						<img className='w-4 h-4 mx-2 cursor-pointer' src={deleteBtn} onClick={_ => setColumns(columns.filter(elem => elem.key !== e.key))} />
					</div>
				)
				)}
			</div>
			<button className="add-new-column-btn create-board-btn bg-purple_superLight text-purple_Dark dark:bg-almost_White smoth-transition" onClick={_ => updateColumns()}>
				+Add New Column
			</button>
		</div>
	)
}
