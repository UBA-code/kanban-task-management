export default function EditBoard({ data, setData }) {
	return (
		<div className="absolute top-[110%] right-0 w-40 md:w-full bg-almost_White dark:bg-almost_Dark py-5 px-5 rounded-lg shadow-[0px_0px_15px_-5px_#888888] dark:shadow-[0px_0px_15px_-5px_#000] smoth-transition">
			<button className="text-_gray hover:opacity-[.8] smoth-transition font-semibold mb-2">Edit Board</button>
			<button className="text-_red hover:opacity-[.6] smoth-transition font-semibold">Delete Board</button>
		</div>
	)
} 