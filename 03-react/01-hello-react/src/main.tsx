import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

const books: string[] = [
    "Anna Karenina",
    "To Kill a Mockingbird",
    "The Great Gatsby",
    "One Hundred Years of Solitude",
    "A Passage to India",
    "Invisible Man",
    "Don Quixote",
    "Beloved",
    "Mrs. Dalloway",
    "Things Fall Apart",
    "Jane Eyre",
    "The Color Purple",
];

const getRandomBook = (): string => {

	const randomNumber = Math.floor(Math.random() * (10 * 1.2));
	console.log(randomNumber);


	
	return books[randomNumber];
};

const App = (): JSX.Element => {
	return (
		<p style={{ backgroundColor: "gray" }}>
			Title:  {getRandomBook()}
		</p>
	);
};

ReactDOM.render(<App />, appDiv);
