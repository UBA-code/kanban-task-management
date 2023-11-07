import { useEffect, useState } from 'react';
import deleteBtn from '../assets/icon-cross.svg'
import '../styles/CreateBoard.css'
import { v4 as uuidv4 } from 'uuid';
import { addBoard } from '../App';
import BoardOptions from './BoardOptions';
import Warning from './Warning';

export default function CreateBoard({ data, setData, showStatus }) {
	let [columns, setColumns] = useState([]);
	let [name, setName] = useState('');
	let [showWarning, setWarning] = useState(0);
	let [opacity, setOpacity] = useState("0");
	let finalObj = {
		name: "",
		column: [{
			columnName: "",
		}],
	};

	function updateColumns(index = -1, value = '') {
		if (columns[index] !== undefined) {
			setColumns(columns.map((e, i) => {
				if (i === index)
					e.columnName = value;
				return (e);
			}));
		}
		else {
			let key = uuidv4();

			setColumns([...columns, { key: key, columnName: '', },]);
		}
	}

	useEffect(_ => {
		updateColumns();
		setOpacity("1");
	}, []);

	return (
		<>
			<div className={`dark-bg fixed top-0 w-full h-full bg-black opacity-${opacity === "1" ? "50" : "0"} z-[45] smoth-transition`} onClick={() =>{
				setOpacity("0");
				setTimeout(() => {
					showStatus(0);
				}, 300);
			}}></div>
			<div className={`create-board-container fixed w-[90%] md:w-[550px] h-[500px] bg-white dark:bg-dark_Gray top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg p-4 z-50 smoth-transition opacity-${opacity}`}>
				<h1 className="text-lg font-semibold dark:text-almost_White smoth-transition">Add new board</h1>
				<BoardOptions name={name} setName={setName} columns={columns} setColumns={setColumns} updateColumns={updateColumns} />
				<button className={`create-new-board-btn create-board-btn bg-purple_Dark text-almost_White ${!name.length ? "cursor-not-allowed" : ""}`} onClick={_ => {
					let empty = 0;
					finalObj.name = name;
					finalObj.column = columns.map(e => {
						if (!e.columnName.length)
							empty = 1;
						return { name: e.columnName };
					});
					finalObj['key'] = uuidv4();
					console.log();
					if (empty)
						setWarning(1);
					else {
						addBoard(data, setData, finalObj);
						setOpacity("0");
						setTimeout(() => {
							showStatus(0);
						}, 300);
					}
				}}>
					Create New Board
				</button>
				{showWarning ? <Warning msg={"Empty input value"} hideWarning={setWarning} /> : ""}
			</div>
		</>
	);
}


// {name, setName, columns, setColumns}