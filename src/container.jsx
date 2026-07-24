import { useState } from "react";
import Stats from "./stats";
import Textarea from "./Textarea";

const Container = () => {
	const [text, setText] = useState("");

	const numberOfCharacters = text.length;
	const numberOfWords =
		text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
	const instagramCharactersLeft = 2200 - numberOfCharacters;
	const facebookCharactersLeft = 2200 - numberOfCharacters;

	return (
		<main className="container">
			<Textarea text={text} setText={setText} />
			<Stats
				numberOfWords={numberOfWords}
				numberOfCharacters={numberOfCharacters}
				instagramCharactersLeft={instagramCharactersLeft}
				facebookCharactersLeft={facebookCharactersLeft}
			/>
		</main>
	);
};

export default Container;
