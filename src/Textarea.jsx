import { useState } from "react";
import Warning from "./warning";

const Textarea = ({ text, setText }) => {
	const [showWarning, setShowWarning] = useState(false);

	const handleChange = (e) => {
		let nextText = e.target.value;

		if (nextText.includes("<script>")) {
			setShowWarning(true);
			nextText = nextText.replace("<script>", "");
		} else {
			setShowWarning(false);
		}

		setText(nextText);
	};

	return (
		<div className="textarea">
			<textarea
				value={text}
				onChange={handleChange}
				placeholder="Enter your text"
				spellCheck="false"
			/>
			{showWarning ? <Warning warningText="No script tag allowed!" /> : null}
		</div>
	);
};

export default Textarea;
