/* eslint-disable no-unused-vars */
import Sidebar from './Sidebar';
import Board from "./Board";

// export function updateData(data, setData) {
// 	localStorage.setItem('app-data', JSON.stringify(data));
// 	setData(data);
// }

export default function Home({data, setData}) {
	return (
		<div className={`home-container inline-flex mt-24 smoth-transition relative`}>
			<Sidebar data={data} setData={setData} />
			{data.boards.length ? <Board data={data.boards.find((e) => e.active)} setData={setData} /> : ""}
		</div>
	)
}
