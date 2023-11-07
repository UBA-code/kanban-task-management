import { useEffect, useState } from "react";

export default function Warning({ msg, hideWarning}) {
	let [show, setShow] = useState(1);
	let [opacity, setOpacity] = useState("0");


	function hideBox() {
		setOpacity("0");
		setTimeout(() => {
			setShow(0);
			hideWarning(0);
		}, 300);
	}

	useEffect(_=> setOpacity("1"), []);
	return (
		show ?
			<div className={`fixed z-[100] top-0 left-0  w-full h-full flex justify-center items-center rounded-lg bg-[#000000d5] smoth-transition opacity-[${opacity}]`}>
				<div className="child-box bg-slate-600 dark:bg-dark_Gray w-[70%] rounded-2xl flex justify-center items-center flex-col px-5 py-8 smoth-transition">
					<h1 className="text-yellow-400 font-bold text-xl">Warning</h1>
					<p className="text-light_Blue my-4">{msg}</p>
					<button className="text-almost_White bg-blue-500 font-bold text-lg w-full rounded-full p-2 smoth-transition hover:opacity-[.8]" onClick={hideBox}>OK</button>
				</div>
			</div>
			: ""
	);
}