import { useState } from "react"

export default function Input({placeholder, className})
{
	let [value, setValue] = useState();

	return (
		<input className={className} placeholder={placeholder} value={value} onChange={e=> setValue(e.target.value)} />
	)
}
