import { useEffect, useRef, useState } from 'react';
import deleteBtn from '../assets/icon-cross.svg'
import '../styles/CreateBoard.css'
import { v4 as uuidv4 } from 'uuid';


export default function CreateBoard() {
	let [arrOfElements, setArrOfElements] = useState([]);
	let arrRef = useRef();
	arrRef.current = arrOfElements;
	let [finalObj, setFinalObj] = useState({
		name: "",
		columns: [{
			columnName: "",
		}],
	});

	function updateObj(name, columns = 0, newColumn = 0) {
		let newObj = {
			name: name !== 0 ? name : finalObj.name,
			columns: columns ? columns : finalObj.columns,
		}
		if (newColumn)
			newObj.columns.push({ columnName: newColumn, });
		setFinalObj(newObj);
	}

	function newColumn() {
		let key = uuidv4();
		let newColumnElement = (
			<div className="input-box flex justify-between items-center my-3" key={key}>
				<input className='column-input' type="text" placeholder="Column name" />
				<img className='w-4 h-4 mx-2 cursor-pointer' src={deleteBtn} onClick={_ => {
					setArrOfElements(arrRef.current.filter(e => e.key !== key));
				}} />
			</div>
		);
		setArrOfElements([...arrRef.current, newColumnElement]);
	}

	useEffect(_ => {
		newColumn();
	}, []);

	return (
		<div className="create-board-container w-[90%] md:w-[550px] h-[500px] fixed bg-white dark:bg-dark_Gray top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg p-4 z-[36] transition duration-300">
			<h1 className="text-lg font-semibold dark:text-almost_White">Add new board</h1>
			<div className="board-name-box flex flex-col">
				<label className="text-_gray text-sm font-semibold py-3 dark:text-almost_White transition duration-300" htmlFor="boardName">Name</label>
				<input className="border-[1px] border-solid rounded-md py-3 px-5 font-bold text-sm dark:bg-dark_Gray dark:text-almost_White transition duration-300"
					type="text" id="boardName" placeholder="e.g. Web Desing" value={finalObj.name} onChange={e => updateObj(e.target.value)} />
			</div>
			<label className="text-_gray text-sm font-semibold block py-3 dark:text-almost_White transition duration-300">Columns</label>
			<div className="columns-box h-[170px] overflow-auto">
				{arrRef.current}
				{}
			</div>
			<button className="add-new-column-btn create-board-btn bg-purple_superLight text-purple_Dark dark:bg-almost_White transition duration-300" onClick={newColumn}>
				+Add New Column
			</button>
			<button className="create-new-board-btn create-board-btn bg-purple_Dark text-almost_White" onClick={_=> {
				arrOfElements.map(e=>{
					console.log(e.props.children[0].props);
					// return {
					// 	node: e,
					// 	name: e.target
					// }
				})
			}}>
				Create New Board
			</button>
		</div>
	);
}
