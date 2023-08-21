import { useSnapshot } from "valtio"
import state from "../store"

export const CustomButton = ({ type, title, customStyle, handleClick }) => {
	const snap = useSnapshot(state)

	const generateStyle = (type) => {
		if (type === "filled") {
			return {
				backgroundColor: snap.color,
				color: "#fff",
			}
		}
	}

	return (
		<button
			className={`px-2 py-1.2 flex-1 rounded-md ${customStyle}`}
			style={generateStyle(type)}
			onClick={handleClick}
		>
			{title}
		</button>
	)
}
